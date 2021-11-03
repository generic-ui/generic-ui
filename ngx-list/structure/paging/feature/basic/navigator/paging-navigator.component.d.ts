import { ElementRef, EventEmitter, OnChanges } from '@angular/core';
import { Paging } from '../../../core/api/read/paging';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
export declare class PagingNavigatorComponent extends PureComponent implements OnChanges {
    paging: Paging;
    sourceSize?: number;
    nextPageChanged: EventEmitter<any>;
    prevPageChanged: EventEmitter<any>;
    prevDisabled: boolean;
    nextDisabled: boolean;
    constructor(elementRef: ElementRef);
    ngOnChanges(): void;
    prevPage(): void;
    nextPage(): void;
    protected getSelectorName(): string;
    private calculatePrev;
    private calculateNext;
}
