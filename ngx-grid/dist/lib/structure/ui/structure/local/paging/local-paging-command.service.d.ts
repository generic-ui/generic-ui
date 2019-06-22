import { PagingAggregateFactory } from 'structure/domain/paging/command/paging-aggregate.factory';
import { StructureId } from 'structure/domain/structure-id';
import { PagingConfig } from 'structure/domain/paging/paging-config';
import { PagingCommandService } from 'structure/app/paging/paging-command.service';
import { PagingDispatcher } from 'structure/domain/paging/command/paging.dispatcher';
export declare class LocalPagingCommandService extends PagingCommandService {
    private structureId;
    private aggregateFactory;
    constructor(structureId: StructureId, aggregateFactory: PagingAggregateFactory, pagingDispatcher: PagingDispatcher);
    setDefaultPaging(): void;
    setPaging(paging: PagingConfig): void;
    changePageSize(pageSize: number): void;
    nextPage(): void;
    prevPage(): void;
}
