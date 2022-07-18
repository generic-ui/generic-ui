export declare class PagingModel {
    private readonly enabled;
    private readonly page;
    private readonly pageSize;
    private readonly pageSizes;
    private readonly pagerTop;
    private readonly pagerBottom;
    private readonly isNextDisabled;
    private readonly isPrevDisabled;
    private readonly start;
    private readonly end;
    private readonly sourceSize;
    constructor(enabled: boolean, page: number, pageSize: number, pageSizes: Array<number>, pagerTop: boolean, pagerBottom: boolean, isNextDisabled: boolean, isPrevDisabled: boolean, start: number, end: number, sourceSize: number);
    isEnabled(): boolean;
    getPage(): number;
    getPageSize(): number;
    getPageSizes(): Array<number>;
    isPagerTop(): boolean;
    isPagerBottom(): boolean;
    isNextPageDisabled(): boolean;
    isPrevPageDisabled(): boolean;
    getStart(): number;
    getEnd(): number;
    getSourceSize(): number;
    calculateVisiblePages(currentPage: number, numberOfVisiblePages: number, page: number): boolean;
    sample(source: Array<any>): Array<any>;
    compare(target: PagingModel): boolean;
}
