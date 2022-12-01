import { PagingPublisher } from '../../../../../core/structure/paging/src/api/paging.publisher';
import { PagingEventRepository } from '../../../../../core/structure/paging/src/api/paging.event-repository';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import { PagingGate } from '../../../../../feature/structure/paging/src/gate/paging.gate';
import { PagingDisplayModeArchive } from '../../../../../feature/structure/paging/src/mode/paging-display-mode.archive';
import { NgChanges } from '../../../../../feature/common/src/cdk/component/lib/src/ng-changes';
import { CompositionId } from '../../../../../core/composition/src/api/global/composition.id';
import * as i0 from "@angular/core";
export declare class StructurePagingGate extends PagingGate {
    private readonly pagingDisplayModeArchive;
    constructor(structureId: StructureId, compositionId: CompositionId, pagingPublisher: PagingPublisher, pagingEventRepository: PagingEventRepository, pagingDisplayModeArchive: PagingDisplayModeArchive);
    ngOnChanges(changes: NgChanges<StructurePagingGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructurePagingGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructurePagingGate, "gui-structure[paging]", never, {}, {}, never, never, false, never>;
}
