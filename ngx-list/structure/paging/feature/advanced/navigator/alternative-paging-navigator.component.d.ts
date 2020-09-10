import { EventEmitter, OnChanges } from '@angular/core';
import { Paging } from '../../../domain-api/read/paging';
import { PagingCommandInvoker } from '../../../domain-api/paging.command-invoker';
export declare class AlternativePagingNavigatorComponent implements OnChanges {
    private pagingCommandService;
    paging: Paging;
    sourceSize: number;
    nextPageChanged: EventEmitter<any>;
    prevPageChanged: EventEmitter<any>;
    prevDisabled: boolean;
    nextDisabled: boolean;
    constructor(pagingCommandService: PagingCommandInvoker);
    ngOnChanges(): void;
    prevPage(): void;
    nextPage(): void;
    firstPage(): void;
    lastPage(): void;
    private calculatePrev;
    private calculateNext;
}
