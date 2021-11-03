import { PagingCommandInvoker } from '../../../../paging/core/api/paging.command-invoker';
import { PagingEventRepository } from '../../../../paging/core/api/paging.event-repository';
import { StructureId } from '../../../../core/api/structure.id';
import { PagingGate } from '../../../../paging/feature/gate/paging.gate';
import { PagingDisplayModeArchive } from '../../../../paging/feature/mode/paging-display-mode.archive';
import { NgChanges } from '../../../../../common/cdk/component/ng-changes';
import { CompositionId } from '../../../../../composition/core/api/composition.id';
export declare class StructurePagingGate extends PagingGate {
    private readonly pagingDisplayModeArchive;
    constructor(structureId: StructureId, compositionId: CompositionId, structurePagingCommandDispatcher: PagingCommandInvoker, pagingEventRepository: PagingEventRepository, pagingDisplayModeArchive: PagingDisplayModeArchive);
    ngOnChanges(changes: NgChanges<StructurePagingGate>): void;
}
