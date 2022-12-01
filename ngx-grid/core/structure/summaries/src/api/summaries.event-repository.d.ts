import { DomainEvent, EventRepository, HermesObservable } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { StructureReadModelRootId } from '../../../structure-core/src/api/read/structure.read-model-root-id';
export declare abstract class SummariesEventRepository extends EventRepository<StructureReadModelRootId> {
    protected constructor();
    abstract onSummariesChanged(structureId: StructureReadModelRootId): HermesObservable<DomainEvent<StructureId>>;
}
