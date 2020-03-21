import { ColumnSortingOrder } from './column-sorting-order';
export interface ColumnSortingConfig {
    enabled?: boolean;
    matcher?: (item: any) => any;
    order?: ColumnSortingOrder;
}
