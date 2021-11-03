import { DomainEvent, DomainEventBus, EventRepository, HermesObservable } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { StructureReadModelRootId } from '../../../grid/core/api/read/structure.read-model-root-id';
import * as i0 from "@angular/core";
export declare abstract class SummariesEventRepository extends EventRepository<StructureReadModelRootId, StructureId> {
    protected constructor(domainEventBus: DomainEventBus);
    abstract onSummariesChanged(structureId: StructureReadModelRootId): HermesObservable<DomainEvent<StructureId>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SummariesEventRepository, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SummariesEventRepository>;
}
//# sourceMappingURL=summaries.event-repository.d.ts.map