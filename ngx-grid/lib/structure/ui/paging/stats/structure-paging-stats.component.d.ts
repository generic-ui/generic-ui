import { OnChanges, SimpleChanges } from '@angular/core';
import { Paging } from '../../../read/paging/paging';
export declare class StructurePagingStatsComponent implements OnChanges {
    paging: Paging;
    sourceSize: number;
    firstItemIndex: number;
    lastItemIndex: number;
    ngOnChanges(changes: SimpleChanges): void;
    calculate(): void;
    isSourceNotEmpty(): boolean;
}
