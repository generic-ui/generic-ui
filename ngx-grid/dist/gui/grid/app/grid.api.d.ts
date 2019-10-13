export declare type fieldAccessor = (element?: any) => any;
export interface GuiColumn {
    header?: string;
    field?: string | fieldAccessor;
    template?: string;
    columnType?: string | GuiColumnType;
    width?: string | number;
    aggregation?: GuiColumnAggregation;
}
export declare enum GuiColumnType {
    TEXT = 0,
    CHIP = 1,
    LINK = 2,
    IMAGE = 3,
    BOLD = 4,
    ITALIC = 5,
    NUMBER = 6,
    CHECKBOX = 7,
    CUSTOM = 8
}
export interface GuiPagingConfig {
    enabled?: boolean;
    page?: number;
    pageSize?: number;
    pageSizes?: Array<number>;
    pagerTop?: boolean;
    pagerBottom?: boolean;
}
export declare enum GuiTheme {
    FABRIC = 0,
    MATERIAL = 1,
    LIGHT = 2,
    DARK = 3
}
export declare enum GuiRowColoring {
    NONE = 0,
    EVEN = 1,
    ODD = 2
}
export interface GuiSorting {
    enabled?: boolean;
    /**
     * @experimental
     */
    multiSorting?: boolean;
}
export interface GuiFiltering {
    enabled?: boolean;
}
export interface GuiQuickFilters {
    enabled?: boolean;
}
export interface GuiSearching {
    enabled?: boolean;
}
export interface GuiAggregation {
    enabled?: boolean;
    top?: boolean;
    bottom?: boolean;
}
export interface GuiColumnAggregation {
    enabled?: boolean;
    aggregationTypes?: Array<any>;
}
