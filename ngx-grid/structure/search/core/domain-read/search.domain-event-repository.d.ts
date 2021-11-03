import { DomainEventBus, HermesObservable } from '@generic-ui/hermes';
import { StructureReadModelRootId } from '../../../grid/core/api/read/structure.read-model-root-id';
import { SearchEventRepository } from '../api/search.event-repository';
export declare class SearchDomainEventRepository extends SearchEventRepository {
    constructor(domainEventBus: DomainEventBus);
    onSearchPhrase(structureId: StructureReadModelRootId): HermesObservable<string>;
}
