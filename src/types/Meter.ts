import { MeterModel } from '@/models';
import { Instance } from 'mobx-state-tree';

export interface Meter {
  id: string;
  _type: string[];
  area: {
    id: string;
  };
  is_automatic: boolean | null;
  communication: string;
  description: string;
  serial_number: string;
  installation_date: string;
  brand_name: string | null;
  model_name: string | null;
  initial_values: number[];
}

export interface MeterResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Meter[];
}

export type MeterTypeKey =
  | 'ColdWaterAreaMeter, AreaMeter'
  | 'HotWaterAreaMeter, AreaMeter';

export interface MeterType {
  value: string;
  color: string;
}

export type MeterModelType = Instance<typeof MeterModel>;
