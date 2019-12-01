import { EventEmitter, OnChanges } from '@angular/core';
import { Paging } from '../../../../domain/paging/query/paging';
import { PagingCommandService } from '../../../../app/paging/paging-command.service';
export declare class StructureAlternativePagingNavigatorComponent implements OnChanges {
    private pagingCommandService;
    paging: Paging;
    sourceSize: number;
    nextPageChanged: EventEmitter<any>;
    prevPageChanged: EventEmitter<any>;
    prevDisabled: boolean;
    nextDisabled: boolean;
    constructor(pagingCommandService: PagingCommandService);
    ngOnChanges(): void;
    prevPage(): void;
    nextPage(): void;
    firstPage(): void;
    lastPage(): void;
    private calculatePrev;
    private calculateNext;
}
