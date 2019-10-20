export declare type fieldAccessor = (element?: any) => any;
export interface GuiColumn {
    type?: string | GuiDataType;
    view?: string | GuiCellView;
    header?: string;
    field?: string | fieldAccessor;
    customTemplate?: string;
    width?: string | number;
    aggregation?: GuiColumnAggregation;
}
export declare enum GuiDataType {
    UNKNOWN = 0,
    NUMBER = 1,
    STRING = 2,
    BOOLEAN = 3,
    DATE = 4,
    CUSTOM = 5
}
export declare enum GuiCellView {
    TEXT = 0,
    CHIP = 1,
    LINK = 2,
    IMAGE = 3,
    BOLD = 4,
    ITALIC = 5,
    CHECKBOX = 6,
    CUSTOM = 7
}
export declare enum GuiNumberCellView {
    TEXT = 0,
    BOLD = 1,
    ITALIC = 2,
    CHIP = 3
}
export declare enum GuiStringCellView {
    TEXT = 0,
    BOLD = 1,
    ITALIC = 2,
    CHIP = 3
}
export declare enum GuiBooleanCellView {
    TEXT = 0,
    BOLD = 1,
    ITALIC = 2,
    CHIP = 3,
    CHECKBOX = 4
}
export declare enum GuiDateCellView {
    TEXT = 0,
    BOLD = 1,
    ITALIC = 2,
    CHIP = 3
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
