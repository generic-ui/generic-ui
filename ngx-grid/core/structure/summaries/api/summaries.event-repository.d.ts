import { DomainEvent, EventRepository, HermesObservable } from '@generic-ui/hermes';
import { StructureId } from '../../core/api/global/structure.id';
import { StructureReadModelRootId } from '../../core/api/read/structure.read-model-root-id';
export declare abstract class SummariesEventRepository extends EventRepository<StructureReadModelRootId, StructureId> {
    protected constructor();
    abstract onSummariesChanged(structureId: StructureReadModelRootId): HermesObservable<DomainEvent<StructureId>>;
}
