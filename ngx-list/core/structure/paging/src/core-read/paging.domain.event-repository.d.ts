import { HermesObservable } from '@generic-ui/hermes';
import { StructureReadModelRootId } from '../../../structure-core/src/api/read/structure.read-model-root-id';
import { PagingWarehouse } from '../api/paging.warehouse';
import { PagingEventRepository } from '../api/paging.event-repository';
export declare class PagingDomainEventRepository extends PagingEventRepository {
    private readonly pagingWarehouse;
    private readonly eventBusToRemove;
    constructor(pagingWarehouse: PagingWarehouse);
    static readonly services: (typeof PagingWarehouse)[];
    onPageChange(structureId: StructureReadModelRootId): HermesObservable<number>;
    onPageSizeChange(structureId: StructureReadModelRootId): HermesObservable<number>;
}
