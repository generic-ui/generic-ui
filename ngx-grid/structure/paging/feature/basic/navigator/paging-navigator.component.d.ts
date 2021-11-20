import { ElementRef, EventEmitter, OnChanges } from '@angular/core';
import { PagingModel } from '../../../core/api/paging.model';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
export declare class PagingNavigatorComponent extends PureComponent implements OnChanges {
    paging: PagingModel;
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
