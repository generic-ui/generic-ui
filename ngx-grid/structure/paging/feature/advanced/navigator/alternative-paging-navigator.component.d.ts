import { ElementRef, EventEmitter, OnChanges } from '@angular/core';
import { Paging } from '../../../core/api/read/paging';
import { PagingCommandInvoker } from '../../../core/api/paging.command-invoker';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
export declare class AlternativePagingNavigatorComponent extends PureComponent implements OnChanges {
    private readonly pagingCommandService;
    paging: Paging;
    sourceSize: number;
    nextPageChanged: EventEmitter<any>;
    prevPageChanged: EventEmitter<any>;
    prevDisabled: boolean;
    nextDisabled: boolean;
    constructor(elRef: ElementRef, pagingCommandService: PagingCommandInvoker);
    ngOnChanges(): void;
    prevPage(): void;
    nextPage(): void;
    firstPage(): void;
    lastPage(): void;
    private calculatePrev;
    private calculateNext;
    protected getSelectorName(): string;
}
