import { DomainEvent, DomainEventBus, HermesObservable } from '@generic-ui/hermes';
import { CompositionReadModelRootRepository } from '../../../domain-read/composition.read-model-root-repository';
import { CompositionReadModeRoot } from '../../../domain-read/composition.read-mode-root';
import { InMemoryCompositionReadStore } from './in-memory.composition.read-store';
import { CompositionId } from '../../../api/composition.id';
import * as i0 from "@angular/core";
export declare class InMemoryCompositionRepository extends CompositionReadModelRootRepository {
    private inMemoryCompositionReadStore;
    private readonly compositionIdToComposition;
    private readonly composition$;
    constructor(domainEventBus: DomainEventBus, inMemoryCompositionReadStore: InMemoryCompositionReadStore);
    on(compositionId: CompositionId): HermesObservable<Readonly<CompositionReadModeRoot>>;
    protected forEvents(): Array<typeof DomainEvent>;
    protected subscribe(event: DomainEvent<CompositionId>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InMemoryCompositionRepository, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InMemoryCompositionRepository>;
}
//# sourceMappingURL=in-memory.composition.repository.d.ts.map