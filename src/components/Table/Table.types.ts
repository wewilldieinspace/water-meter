import { DetailedHTML, MeterModelType } from '@/types';

export interface TableProps extends DetailedHTML<HTMLTableElement> {
  data: MeterModelType[];
  initialIndex: number;
}
