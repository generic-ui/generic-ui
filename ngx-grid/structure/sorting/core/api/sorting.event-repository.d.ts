import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { StructureReadModelRootId } from '../../../grid/core/domain-read/structure.read-model-root-id';
import { StructureId } from '../../../core/api/structure.id';
export declare class SortingEventRepository extends EventRepository<StructureReadModelRootId, StructureId> {
    constructor(domainEventBus: DomainEventBus);
}
