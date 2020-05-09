import { EventEmitter, OnChanges } from '@angular/core';
import { Paging } from '../../domain-api/read/paging';
export declare class PagingNavigatorComponent implements OnChanges {
    paging: Paging;
    sourceSize: number;
    nextPageChanged: EventEmitter<any>;
    prevPageChanged: EventEmitter<any>;
    prevDisabled: boolean;
    nextDisabled: boolean;
    ngOnChanges(): void;
    prevPage(): void;
    nextPage(): void;
    private calculatePrev;
    private calculateNext;
}
