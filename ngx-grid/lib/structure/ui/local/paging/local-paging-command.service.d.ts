import { PagingCommandService } from '../../../app/paging/paging-command.service';
import { StructureId } from '../../../domain/structure-id';
import { PagingAggregateFactory } from '../../../domain/paging/command/paging.aggregate-factory';
import { PagingDispatcher } from '../../../domain/paging/command/paging.dispatcher';
import { PagingConfig } from '../../../domain/paging/paging-config';
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
