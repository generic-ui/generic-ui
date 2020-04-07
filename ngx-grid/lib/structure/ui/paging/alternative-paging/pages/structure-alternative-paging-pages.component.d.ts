import { OnChanges, SimpleChanges } from '@angular/core';
import { Paging } from '../../../../read/paging/paging';
import { StructurePagingCommandDispatcher } from '../../../../ui-api/paging/structure-paging.command-dispatcher';
export declare class StructureAlternativePagingPagesComponent implements OnChanges {
    private pagingCommandService;
    paging: Paging;
    sourceSize: number;
    currentPage: number;
    pages: Array<number>;
    numberOfVisiblePages: number;
    constructor(pagingCommandService: StructurePagingCommandDispatcher);
    ngOnChanges(changes: SimpleChanges): void;
    calculate(): void;
    isSourceNotEmpty(): boolean;
    goToPage(pageNumber: number): void;
    calculateVisiblePages(page: number): boolean;
    activePage(page: number): boolean;
}
