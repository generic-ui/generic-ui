import { OnChanges, EventEmitter } from '@angular/core';
import { Paging } from '../../../domain/paging/query/paging';
export declare class StructurePagingNavigatorComponent implements OnChanges {
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
