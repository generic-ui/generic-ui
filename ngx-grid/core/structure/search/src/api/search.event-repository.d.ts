import { EventRepository, HermesObservable } from '@generic-ui/hermes';
import { StructureReadModelRootId } from '../../../structure-core/src/api/read/structure.read-model-root-id';
export declare abstract class SearchEventRepository extends EventRepository<StructureReadModelRootId> {
    protected constructor();
    abstract onSearchPhrase(structureId: StructureReadModelRootId): HermesObservable<string>;
}
