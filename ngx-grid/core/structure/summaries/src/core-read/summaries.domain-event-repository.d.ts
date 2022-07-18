import { DomainEvent, HermesObservable } from '@generic-ui/hermes';
import { StructureReadModelRootId } from '../../../structure-core/src/api/read/structure.read-model-root-id';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { SummariesEventRepository } from '../api/summaries.event-repository';
export declare class SummariesDomainEventRepository extends SummariesEventRepository {
    constructor();
    onSummariesChanged(structureId: StructureReadModelRootId): HermesObservable<DomainEvent<StructureId>>;
}
