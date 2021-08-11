import { PagingCommandInvoker } from '../../../../paging/core/api/paging.command-invoker';
import { PagingEventRepository } from '../../../../paging/core/api/paging.event-repository';
import { StructureId } from '../../../../core/api/structure.id';
import { PagingGate } from '../../../../paging/feature/gate/paging.gate';
export declare class ListViewPagingGate extends PagingGate {
    constructor(structureId: StructureId, structurePagingCommandDispatcher: PagingCommandInvoker, pagingEventRepository: PagingEventRepository);
}
