import { EventRepository, HermesObservable } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { StructureReadModelRootId } from '../../../structure-core/src/api/read/structure.read-model-root-id';
export declare abstract class PagingEventRepository extends EventRepository<StructureReadModelRootId, StructureId> {
    abstract onPageChange(structureId: StructureReadModelRootId): HermesObservable<number>;
    abstract onPageSizeChange(structureId: StructureReadModelRootId): HermesObservable<number>;
}
