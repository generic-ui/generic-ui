import { EventRepository, HermesObservable } from '@generic-ui/hermes';
import { StructureId } from '../../structure-core/api/global/structure.id';
import { StructureReadModelRootId } from '../../structure-core/api/read/structure.read-model-root-id';
export declare abstract class SearchEventRepository extends EventRepository<StructureReadModelRootId, StructureId> {
    protected constructor();
    abstract onSearchPhrase(structureId: StructureReadModelRootId): HermesObservable<string>;
}
