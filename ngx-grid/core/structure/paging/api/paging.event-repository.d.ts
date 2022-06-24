import { EventRepository, HermesObservable } from '@generic-ui/hermes';
import { StructureId } from '../../core/api/global/structure.id';
import { StructureReadModelRootId } from '../../core/api/read/structure.read-model-root-id';
export declare abstract class PagingEventRepository extends EventRepository<StructureReadModelRootId, StructureId> {
    abstract onPageChange(structureId: StructureReadModelRootId): HermesObservable<number>;
    abstract onPageSizeChange(structureId: StructureReadModelRootId): HermesObservable<number>;
}
