import { DomainEventBus, EventRepository, HermesObservable } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { StructureReadModelRootId } from '../../../grid/core/api/read/structure.read-model-root-id';
import * as i0 from "@angular/core";
export declare abstract class SearchEventRepository extends EventRepository<StructureReadModelRootId, StructureId> {
    protected constructor(domainEventBus: DomainEventBus);
    abstract onSearchPhrase(structureId: StructureReadModelRootId): HermesObservable<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchEventRepository, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SearchEventRepository>;
}
//# sourceMappingURL=search.event-repository.d.ts.map