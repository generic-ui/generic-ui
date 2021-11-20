import { ElementRef, EventEmitter, OnChanges } from '@angular/core';
import { PagingModel } from '../../../core/api/paging.model';
import { PagingCommandInvoker } from '../../../core/api/paging.command-invoker';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import { StructureId } from '../../../../core/api/structure.id';
export declare class AlternativePagingNavigatorComponent extends PureComponent implements OnChanges {
    private readonly structureId;
    private readonly pagingCommandInvoker;
    paging: PagingModel;
    sourceSize: number;
    nextPageChanged: EventEmitter<any>;
    prevPageChanged: EventEmitter<any>;
    prevDisabled: boolean;
    nextDisabled: boolean;
    constructor(elRef: ElementRef, structureId: StructureId, pagingCommandInvoker: PagingCommandInvoker);
    ngOnChanges(): void;
    prevPage(): void;
    nextPage(): void;
    firstPage(): void;
    lastPage(): void;
    protected getSelectorName(): string;
    private calculatePrev;
    private calculateNext;
}
