import { StructurePagingCommandDispatcher } from '../../../ui-api/paging/structure-paging.command-dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { PagingManagerFactory } from '../../../domain/paging/paging.manager-factory';
import { PagingDispatcher } from '../../../domain/paging/paging.dispatcher';
import { PagingConfig } from '../../../domain/paging/paging-config';
export declare class LocalPagingCommandDispatcher extends StructurePagingCommandDispatcher {
    private structureId;
    private aggregateFactory;
    constructor(structureId: StructureId, aggregateFactory: PagingManagerFactory, pagingDispatcher: PagingDispatcher);
    setDefaultPaging(): void;
    setPaging(paging: PagingConfig): void;
    changePageSize(pageSize: number): void;
    nextPage(): void;
    prevPage(): void;
}
