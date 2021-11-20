import { ElementRef, OnChanges } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import { PagingModel } from '../../../core/api/paging.model';
export declare class PagingStatsComponent extends PureComponent implements OnChanges {
    paging: PagingModel;
    sourceSize: number;
    firstItemIndex: number;
    lastItemIndex: number;
    constructor(elementRef: ElementRef);
    ngOnChanges(): void;
    calculate(): void;
    isSourceNotEmpty(): boolean;
    protected getSelectorName(): string;
}
