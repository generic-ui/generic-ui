import { DomainEventBus, EventRepository, HermesObservable } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { StructureReadModelRootId } from '../../../grid/core/api/read/structure.read-model-root-id';
import * as i0 from "@angular/core";
export declare abstract class PagingEventRepository extends EventRepository<StructureReadModelRootId, StructureId> {
    protected constructor(domainEventBus: DomainEventBus);
    abstract onPageChange(structureId: StructureReadModelRootId): HermesObservable<number>;
    abstract onPageSizeChange(structureId: StructureReadModelRootId): HermesObservable<number>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PagingEventRepository, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PagingEventRepository>;
}
//# sourceMappingURL=paging.event-repository.d.ts.map