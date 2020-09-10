import { PagingCommandInvoker } from '../../../../paging/domain-api/paging.command-invoker';
import { StructureId } from '../../../domain/structure.id';
import { PagingManagerFactory } from '../../../../paging/domain/paging.manager-factory';
import { PagingDispatcher } from '../../../../paging/domain/paging.dispatcher';
import { PagingConfig } from '../../../../paging/domain-api/paging-config';
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
