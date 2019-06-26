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
    CHIP = 1,
    LINK = 2,
    INPUT = 3,
    IMAGE = 4,
    CHECKBOX = 5,
    BOLD = 6,
    ITALIC = 7,
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
