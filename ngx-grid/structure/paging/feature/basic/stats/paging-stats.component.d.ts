import { ElementRef, OnChanges } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import { Paging } from '../../../core/api/read/paging';
export declare class PagingStatsComponent extends PureComponent implements OnChanges {
    paging: Paging;
    sourceSize: number;
    firstItemIndex: number;
    lastItemIndex: number;
    constructor(elementRef: ElementRef);
    ngOnChanges(): void;
    calculate(): void;
    isSourceNotEmpty(): boolean;
    protected getSelectorName(): string;
}
