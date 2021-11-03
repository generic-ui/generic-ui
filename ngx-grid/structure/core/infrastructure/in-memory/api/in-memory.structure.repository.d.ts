import { OnDestroy } from '@angular/core';
import { DomainEvent, DomainEventBus, HermesObservable } from '@generic-ui/hermes';
import { StructureReadModelRepository } from '../../../../grid/core/api/read/structure.read-model-repository';
import { StructureReadModelRoot } from '../../../../grid/core/api/read/structure.read-model-root';
import { InMemoryStructureReadStore } from './in-memory-structure.read-store';
import { StructureId } from '../../../api/structure.id';
import * as i0 from "@angular/core";
export declare class InMemoryStructureRepository extends StructureReadModelRepository implements OnDestroy {
    private inMemoryStructureReadStore;
    private readonly structureIdToStructure;
    private readonly hermesStructure$;
    constructor(domainEventBus: DomainEventBus, inMemoryStructureReadStore: InMemoryStructureReadStore);
    getStructure(structureId: StructureId): StructureReadModelRoot;
    on(structureId: StructureId): HermesObservable<StructureReadModelRoot>;
    protected forEvents(): Array<typeof DomainEvent>;
    protected subs(event: DomainEvent<StructureId>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InMemoryStructureRepository, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InMemoryStructureRepository>;
}
//# sourceMappingURL=in-memory.structure.repository.d.ts.map