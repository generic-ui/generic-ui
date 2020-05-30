import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PagingConfig } from '../../../../paging/domain-api/paging-config';
import { PagingCommandDispatcher } from '../../../../paging/domain-api/paging.command-dispatcher';
import { PagingEventRepository } from '../../../../paging/domain-api/paging.event-repository';
import { StructureId } from '../../../../../lib/structure/domain/structure.id';
import { Gate } from '../../../../../common/cdk/gate';
export declare class ListViewPagingGate extends Gate implements OnChanges, OnInit {
    private readonly structureId;
    private readonly structurePagingCommandDispatcher;
    private readonly pagingEventRepository;
    paging: PagingConfig;
    pageChanged: EventEmitter<number>;
    pageSizeChanged: EventEmitter<number>;
    constructor(structureId: StructureId, structurePagingCommandDispatcher: PagingCommandDispatcher, pagingEventRepository: PagingEventRepository);
    ngOnChanges(simpleChanges: SimpleChanges): void;
    ngOnInit(): void;
    onPageChange(page: number): void;
}
