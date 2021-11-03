import { DomainEventBus, HermesObservable } from '@generic-ui/hermes';
import { StructureReadModelRootId } from '../../../grid/core/api/read/structure.read-model-root-id';
import { SearchEventRepository } from '../api/search.event-repository';
import * as i0 from "@angular/core";
export declare class SearchDomainEventRepository extends SearchEventRepository {
    constructor(domainEventBus: DomainEventBus);
    onSearchPhrase(structureId: StructureReadModelRootId): HermesObservable<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchDomainEventRepository, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SearchDomainEventRepository>;
}
//# sourceMappingURL=search.domain-event-repository.d.ts.map