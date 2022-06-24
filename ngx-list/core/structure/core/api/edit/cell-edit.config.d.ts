export interface CellEditConfig {
    enabled?: boolean;
    rowEdit?: (value: any, item: any, index: number) => boolean;
    cellEdit?: (value: any, item: any, index: number) => boolean;
}
