import { DomainEventBus, EventRepository, HermesObservable } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { StructureReadModelRootId } from '../../../grid/core/api/read/structure.read-model-root-id';
export declare abstract class PagingEventRepository extends EventRepository<StructureReadModelRootId, StructureId> {
    protected constructor(domainEventBus: DomainEventBus);
    abstract onPageChange(structureId: StructureReadModelRootId): HermesObservable<number>;
    abstract onPageSizeChange(structureId: StructureReadModelRootId): HermesObservable<number>;
}
