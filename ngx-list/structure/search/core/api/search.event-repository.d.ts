import { DomainEventBus, EventRepository, HermesObservable } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { StructureReadModelRootId } from '../../../grid/core/api/read/structure.read-model-root-id';
export declare abstract class SearchEventRepository extends EventRepository<StructureReadModelRootId, StructureId> {
    protected constructor(domainEventBus: DomainEventBus);
    abstract onSearchPhrase(structureId: StructureReadModelRootId): HermesObservable<string>;
}
