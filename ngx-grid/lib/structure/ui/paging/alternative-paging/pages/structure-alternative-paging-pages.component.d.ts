import { OnChanges, SimpleChanges } from '@angular/core';
import { Paging } from '../../../../domain/paging/query/paging';
import { PagingCommandService } from '../../../../app/paging/paging-command.service';
export declare class StructureAlternativePagingPagesComponent implements OnChanges {
    private pagingCommandService;
    paging: Paging;
    sourceSize: number;
    currentPage: number;
    pages: Array<number>;
    numberOfVisiblePages: number;
    constructor(pagingCommandService: PagingCommandService);
    ngOnChanges(changes: SimpleChanges): void;
    calculate(): void;
    isSourceNotEmpty(): boolean;
    goToPage(pageNumber: number): void;
    calculateVisiblePages(page: number): boolean;
    activePage(page: number): boolean;
}
