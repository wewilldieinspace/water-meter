import { DetailedHTML, MeterModelType } from '@/types';

export interface TableRowProps extends DetailedHTML<HTMLTableRowElement> {
  index: number;
  data: MeterModelType;
}
