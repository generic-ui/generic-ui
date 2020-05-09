import { EventEmitter, OnChanges } from '@angular/core';
import { Paging } from '../../../domain-api/read/paging';
import { PagingCommandDispatcher } from '../../../domain-api/paging.command-dispatcher';
export declare class AlternativePagingNavigatorComponent implements OnChanges {
    private pagingCommandService;
    paging: Paging;
    sourceSize: number;
    nextPageChanged: EventEmitter<any>;
    prevPageChanged: EventEmitter<any>;
    prevDisabled: boolean;
    nextDisabled: boolean;
    constructor(pagingCommandService: PagingCommandDispatcher);
    ngOnChanges(): void;
    prevPage(): void;
    nextPage(): void;
    firstPage(): void;
    lastPage(): void;
    private calculatePrev;
    private calculateNext;
}
