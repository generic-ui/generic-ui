export declare class Paging {
    private readonly enabled;
    private readonly page;
    private readonly pageSize;
    private readonly pageSizes;
    private readonly pagerTop;
    private readonly pagerBottom;
    constructor(enabled: boolean, page: number, pageSize: number, pageSizes: Array<number>, pagerTop: boolean, pagerBottom: boolean);
    isEnabled(): boolean;
    getPage(): number;
    getPageSize(): number;
    getPageSizes(): Array<number>;
    isPagerTop(): boolean;
    isPagerBottom(): boolean;
    isNextPageDisabled(sourceSize: number): boolean;
    isPrevPageDisabled(): boolean;
    calculateStart(sourceSize: number): number;
    calculateEnd(sourceSize: number): number;
    calculateVisiblePages(currentPage: number, numberOfVisiblePages: number, page: number): boolean;
    sample(source: Array<any>): Array<any>;
}
