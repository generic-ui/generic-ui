export declare type fieldAccessor = (element?: any) => any;
export interface GuiColumn {
    header?: string;
    field?: string | fieldAccessor;
    template?: string;
    columnType?: string | GuiColumnType;
    width?: string | number;
}
export declare enum GuiColumnType {
    TEXT = 0,
    NUMBER = 1,
    CHIP = 2,
    LINK = 3,
    INPUT = 4,
    IMAGE = 5,
    CHECKBOX = 6,
    BOLD = 7,
    ITALIC = 8,
    CUSTOM = 9
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
