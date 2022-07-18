import { HermesObservable } from '@generic-ui/hermes';
import { StructureReadModelRootId } from '../../../structure-core/src/api/read/structure.read-model-root-id';
import { SearchEventRepository } from '../api/search.event-repository';
export declare class SearchDomainEventRepository extends SearchEventRepository {
    constructor();
    onSearchPhrase(structureId: StructureReadModelRootId): HermesObservable<string>;
}
