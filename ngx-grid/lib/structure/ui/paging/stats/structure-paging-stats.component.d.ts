import { SimpleChanges, OnChanges } from '@angular/core';
import { Paging } from '../../../domain/paging/read/paging';
export declare class StructurePagingStatsComponent implements OnChanges {
    paging: Paging;
    sourceSize: number;
    firstItemIndex: number;
    lastItemIndex: number;
    ngOnChanges(changes: SimpleChanges): void;
    calculate(): void;
    isSourceNotEmpty(): boolean;
}
