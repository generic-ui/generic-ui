import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PagingConfig } from '../../../../paging/domain-api/paging-config';
import { PagingCommandInvoker } from '../../../../paging/domain-api/paging.command-invoker';
import { PagingEventRepository } from '../../../../paging/domain-api/paging.event-repository';
import { StructureId } from '../../../../core/domain/structure.id';
import { Gate } from '../../../../../common/cdk/gate';
export declare class ListViewPagingGate extends Gate implements OnChanges, OnInit {
    private readonly structureId;
    private readonly structurePagingCommandDispatcher;
    private readonly pagingEventRepository;
    paging: PagingConfig;
    pageChanged: EventEmitter<number>;
    pageSizeChanged: EventEmitter<number>;
    constructor(structureId: StructureId, structurePagingCommandDispatcher: PagingCommandInvoker, pagingEventRepository: PagingEventRepository);
    ngOnChanges(simpleChanges: SimpleChanges): void;
    ngOnInit(): void;
    onPageChange(page: number): void;
}
