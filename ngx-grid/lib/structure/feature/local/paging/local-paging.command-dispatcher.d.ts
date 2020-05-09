import { PagingCommandDispatcher } from '../../../../../structure/paging/domain-api/paging.command-dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { PagingManagerFactory } from '../../../../../structure/paging/domain/paging.manager-factory';
import { PagingDispatcher } from '../../../../../structure/paging/domain/paging.dispatcher';
import { PagingConfig } from '../../../../../structure/paging/domain-api/paging-config';
export declare class LocalPagingCommandDispatcher extends PagingCommandDispatcher {
    private structureId;
    private aggregateFactory;
    constructor(structureId: StructureId, aggregateFactory: PagingManagerFactory, pagingDispatcher: PagingDispatcher);
    setDefaultPaging(): void;
    setPaging(paging: PagingConfig): void;
    changePageSize(pageSize: number): void;
    nextPage(): void;
    prevPage(): void;
}
