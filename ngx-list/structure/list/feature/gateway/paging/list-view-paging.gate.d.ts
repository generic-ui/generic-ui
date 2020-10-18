import { ChangeDetectorRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PagingConfig } from '../../../../paging/core/api/paging-config';
import { PagingCommandInvoker } from '../../../../paging/core/api/paging.command-invoker';
import { PagingEventRepository } from '../../../../paging/core/api/paging.event-repository';
import { StructureId } from '../../../../core/api/structure.id';
import { Gate } from '../../../../../common/cdk/gate';
export declare class ListViewPagingGate extends Gate implements OnChanges, OnInit {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly structurePagingCommandDispatcher;
    private readonly pagingEventRepository;
    paging: PagingConfig;
    pageChanged: EventEmitter<number>;
    pageSizeChanged: EventEmitter<number>;
    constructor(changeDetectorRef: ChangeDetectorRef, structureId: StructureId, structurePagingCommandDispatcher: PagingCommandInvoker, pagingEventRepository: PagingEventRepository);
    ngOnChanges(simpleChanges: SimpleChanges): void;
    ngOnInit(): void;
    onPageChange(page: number): void;
}
