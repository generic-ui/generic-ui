export interface GuiFilter {
    columnName: string;
    filterId: string;
    filterType: string;
    value: any;
}
export interface GuiFilterCollection {
    [key: string]: Array<GuiFilter>;
}
