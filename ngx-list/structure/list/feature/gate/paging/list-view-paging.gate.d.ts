import { PagingCommandInvoker } from '../../../../paging/core/api/paging.command-invoker';
import { PagingEventRepository } from '../../../../paging/core/api/paging.event-repository';
import { StructureId } from '../../../../core/api/structure.id';
import { PagingGate } from '../../../../paging/feature/gate/paging.gate';
import { CompositionId } from '../../../../../composition/core/api/composition.id';
export declare class ListViewPagingGate extends PagingGate {
    constructor(structureId: StructureId, compositionId: CompositionId, structurePagingCommandDispatcher: PagingCommandInvoker, pagingEventRepository: PagingEventRepository);
}
