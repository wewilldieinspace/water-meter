import { types, flow, onSnapshot, applySnapshot } from 'mobx-state-tree';
import { fetchMeters, fetchAddress, deleteMeter } from '@/api';
import { Meter as MeterType } from '@/types';
import { MeterModel } from '@/models';
import { TABLE_ITEMS_LIMIT } from '@/constants';

const Store = types
  .model('Store', {
    meters: types.array(MeterModel),
    addresses: types.map(types.string),
    isLoading: types.boolean,
    currentPage: types.optional(types.number, 1),
    totalPages: types.optional(types.number, 1),
  })
  .actions((self) => ({
    fetchMeters: flow(function* fetchMetersAction(
      page = 1,
      limit: number = TABLE_ITEMS_LIMIT
    ) {
      self.isLoading = true;
      try {
        const data = yield fetchMeters(page, limit);
        const metersData = data.results;
        self.meters = metersData.map((meter: MeterType) => ({
          id: meter.id,
          type: meter._type.join(', '),
          installationDate: meter.installation_date,
          isAutomatic: meter.is_automatic || false,
          initialValues: meter.initial_values.join(', '),
          address: meter.area.id,
          description: meter.description,
        }));

        for (const meter of metersData) {
          yield self.fetchAddress(meter.area.id);
        }

        self.currentPage = page;
        self.totalPages = Math.ceil(data.count / limit);
      } catch (error) {
        console.error('Failed to fetch meters', error);
      }
      self.isLoading = false;
    }),
    fetchAddress: flow(function* fetchAddressAction(id: string) {
      try {
        const address = yield fetchAddress(id);
        self.addresses.set(
          address.id,
          `${address.house.address}, ${address.str_number_full}`
        );
      } catch (error) {
        console.error(`Failed to fetch address for id ${id}`, error);
      }
    }),
    setPage(page: number) {
      self.currentPage = page;
    },
    deleteMeter: flow(function* deleteMeterAction(id: string) {
      self.isLoading = true;
      try {
        yield deleteMeter(id);
        yield self.fetchMeters(self.currentPage);
      } catch (error) {
        console.error('Failed to delete meter', error);
      }
      self.isLoading = false;
    }),
  }))
  .views((self) => ({
    get paginatedMeters() {
      return self.meters.slice();
    },
    getAddressById(id: string) {
      return self.addresses.get(id) || 'Address not found';
    },
  }));

export const store = Store.create({
  meters: [],
  addresses: {},
  isLoading: false,
  currentPage: 1,
  totalPages: 1,
});

onSnapshot(store, (snapshot) => {
  localStorage.setItem('Store', JSON.stringify(snapshot));
});

const savedStore = localStorage.getItem('Store');
if (savedStore) {
  const parsedStore = JSON.parse(savedStore);
  if (parsedStore.totalPages === null) {
    parsedStore.totalPages = 1;
  }
  applySnapshot(store, parsedStore);
}
