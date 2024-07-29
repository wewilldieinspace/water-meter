import { MeterType, MeterTypeKey } from '@/types';
import { colors } from './colors';

export const COLD_WATER = 'ХВС';
export const HOT_WATER = 'ГВС';

export const meterTypes: Record<MeterTypeKey, MeterType> = {
  ['ColdWaterAreaMeter, AreaMeter']: {
    value: COLD_WATER,
    color: colors.cyan_blue,
  },
  ['HotWaterAreaMeter, AreaMeter']: {
    value: HOT_WATER,
    color: colors.orange,
  },
};
