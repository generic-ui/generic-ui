export interface GuiListPaging {
    enabled?: boolean;
    page?: number;
    pageSize?: number;
    pageSizes?: Array<number>;
    pagerTop?: boolean;
    pagerBottom?: boolean;
}
export declare enum GuiListMode {
    LIST = 0,
    CARD = 1
}
export interface GuiListView {
    active?: GuiListMode;
    selector?: boolean;
}
