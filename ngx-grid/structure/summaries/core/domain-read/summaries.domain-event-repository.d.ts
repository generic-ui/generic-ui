import { DomainEvent, DomainEventBus, HermesObservable } from '@generic-ui/hermes';
import { StructureReadModelRootId } from '../../../grid/core/api/read/structure.read-model-root-id';
import { StructureId } from '../../../core/api/structure.id';
import { SummariesEventRepository } from '../api/summaries.event-repository';
export declare class SummariesDomainEventRepository extends SummariesEventRepository {
    constructor(domainEventBus: DomainEventBus);
    onSummariesChanged(structureId: StructureReadModelRootId): HermesObservable<DomainEvent<StructureId>>;
}
