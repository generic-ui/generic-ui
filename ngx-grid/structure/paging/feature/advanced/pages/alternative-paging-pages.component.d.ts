import { OnChanges, SimpleChanges } from '@angular/core';
import { Paging } from '../../../domain-api/read/paging';
import { PagingCommandInvoker } from '../../../domain-api/paging.command-invoker';
export declare class AlternativePagingPagesComponent implements OnChanges {
    private pagingCommandService;
    paging: Paging;
    sourceSize: number;
    currentPage: number;
    pages: Array<number>;
    numberOfVisiblePages: number;
    constructor(pagingCommandService: PagingCommandInvoker);
    ngOnChanges(changes: SimpleChanges): void;
    calculate(): void;
    isSourceNotEmpty(): boolean;
    goToPage(pageNumber: number): void;
    calculateVisiblePages(page: number): boolean;
    activePage(page: number): boolean;
}
