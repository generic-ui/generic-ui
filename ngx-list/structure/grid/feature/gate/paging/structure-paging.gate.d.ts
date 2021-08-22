import { PagingCommandInvoker } from '../../../../paging/core/api/paging.command-invoker';
import { PagingEventRepository } from '../../../../paging/core/api/paging.event-repository';
import { StructureId } from '../../../../core/domain/structure.id';
import { PagingGate } from '../../../../paging/feature/gate/paging.gate';
import { PagingDisplayModeArchive } from '../../../../paging/feature/mode/paging-display-mode.archive';
import { NgChanges } from '../../../../../common/cdk/component/ng-changes';
export declare class StructurePagingGate extends PagingGate {
    private readonly pagingDisplayModeArchive;
    constructor(structureId: StructureId, structurePagingCommandDispatcher: PagingCommandInvoker, pagingEventRepository: PagingEventRepository, pagingDisplayModeArchive: PagingDisplayModeArchive);
    ngOnChanges(changes: NgChanges<StructurePagingGate>): void;
}
