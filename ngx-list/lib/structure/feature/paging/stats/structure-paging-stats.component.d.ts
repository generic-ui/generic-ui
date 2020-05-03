import { OnChanges, SimpleChanges } from '@angular/core';
import { Paging } from '../../../feature-api/paging/read/paging';
import { PureComponent } from '../../../../../common/cdk/pure-component';
export declare class StructurePagingStatsComponent extends PureComponent implements OnChanges {
    paging: Paging;
    sourceSize: number;
    firstItemIndex: number;
    lastItemIndex: number;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    calculate(): void;
    isSourceNotEmpty(): boolean;
}
