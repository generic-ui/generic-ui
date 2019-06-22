import { OnChanges, EventEmitter } from '@angular/core';
import { Paging } from 'structure/domain/paging/query/paging';
export declare class StructurePagingNavigatorComponent implements OnChanges {
    paging: Paging;
    sourceSize: number;
    nextPageChanged: EventEmitter<{}>;
    prevPageChanged: EventEmitter<{}>;
    prevDisabled: boolean;
    nextDisabled: boolean;
    ngOnChanges(): void;
    prevPage(): void;
    nextPage(): void;
    private calculatePrev;
    private calculateNext;
}
