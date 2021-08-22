import { PagingCommandInvoker } from '../../../../paging/core/api/paging.command-invoker';
import { StructureId } from '../../../../core/domain/structure.id';
import { PagingManagerFactory } from '../../../../paging/core/domain/paging.manager-factory';
import { PagingDispatcher } from '../../../../paging/core/domain/paging.dispatcher';
import { PagingConfig } from '../../../../paging/core/api/paging-config';
export declare class LocalPagingCommandDispatcher extends PagingCommandInvoker {
    private structureId;
    private aggregateFactory;
    constructor(structureId: StructureId, aggregateFactory: PagingManagerFactory, pagingDispatcher: PagingDispatcher);
    setDefaultPaging(): void;
    setPaging(paging: PagingConfig): void;
    changePageSize(pageSize: number): void;
    nextPage(): void;
    prevPage(): void;
}
