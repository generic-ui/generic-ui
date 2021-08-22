import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { StructureReadModelRootId } from '../../../grid/core/api/read/structure.read-model-root-id';
import { StructureId } from '../../../core/domain/structure.id';
export declare class SortingEventRepository extends EventRepository<StructureReadModelRootId, StructureId> {
    constructor(domainEventBus: DomainEventBus);
}
