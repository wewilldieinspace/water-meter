import { types } from 'mobx-state-tree';

export const MeterModel = types.model('Meter', {
  id: types.identifier,
  type: types.string,
  installationDate: types.string,
  isAutomatic: types.boolean,
  initialValues: types.string,
  address: types.string,
  description: types.string,
});
