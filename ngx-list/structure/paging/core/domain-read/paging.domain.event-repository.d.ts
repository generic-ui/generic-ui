import { DomainEventBus, HermesObservable } from '@generic-ui/hermes';
import { StructureReadModelRootId } from '../../../grid/core/api/read/structure.read-model-root-id';
import { PagingWarehouse } from '../api/paging.warehouse';
import { PagingEventRepository } from '../api/paging.event-repository';
export declare class PagingDomainEventRepository extends PagingEventRepository {
    private readonly eventBus;
    private readonly pagingWarehouse;
    constructor(eventBus: DomainEventBus, pagingWarehouse: PagingWarehouse);
    onPageChange(structureId: StructureReadModelRootId): HermesObservable<number>;
    onPageSizeChange(structureId: StructureReadModelRootId): HermesObservable<number>;
}
