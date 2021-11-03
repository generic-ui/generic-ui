import { DomainEvent, DomainEventBus, HermesObservable } from '@generic-ui/hermes';
import { StructureReadModelRootId } from '../../../grid/core/api/read/structure.read-model-root-id';
import { StructureId } from '../../../core/api/structure.id';
import { SummariesEventRepository } from '../api/summaries.event-repository';
import * as i0 from "@angular/core";
export declare class SummariesDomainEventRepository extends SummariesEventRepository {
    constructor(domainEventBus: DomainEventBus);
    onSummariesChanged(structureId: StructureReadModelRootId): HermesObservable<DomainEvent<StructureId>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SummariesDomainEventRepository, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SummariesDomainEventRepository>;
}
//# sourceMappingURL=summaries.domain-event-repository.d.ts.map