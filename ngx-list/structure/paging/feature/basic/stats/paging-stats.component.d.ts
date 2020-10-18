import { OnChanges, SimpleChanges } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/pure-component';
import { Paging } from '../../../core/api/read/paging';
export declare class PagingStatsComponent extends PureComponent implements OnChanges {
    paging: Paging;
    sourceSize: number;
    firstItemIndex: number;
    lastItemIndex: number;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    calculate(): void;
    isSourceNotEmpty(): boolean;
}
