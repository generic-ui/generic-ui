import { EventRepository, HermesObservable } from '@generic-ui/hermes';
import { StructureReadModelRootId } from '../../../structure-core/src/api/read/structure.read-model-root-id';
export declare abstract class PagingEventRepository extends EventRepository<StructureReadModelRootId> {
    abstract onPageChange(structureId: StructureReadModelRootId): HermesObservable<number>;
    abstract onPageSizeChange(structureId: StructureReadModelRootId): HermesObservable<number>;
}
