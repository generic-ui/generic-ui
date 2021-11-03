import { DomainEventBus, EventRepository, HermesObservable } from '@generic-ui/hermes';
import { CompositionId } from './composition.id';
import { CompositionColumnsSetEvent } from '../domain/column/set-columns/composition.columns-set.event';
import { CompositionReadModelRootId } from './composition.read-model-root-id';
import * as i0 from "@angular/core";
export declare abstract class CompositionEventRepository extends EventRepository<CompositionReadModelRootId, CompositionId> {
    protected constructor(domainEventBus: DomainEventBus);
    abstract onColumnsChanged(compositionId?: CompositionReadModelRootId): HermesObservable<CompositionColumnsSetEvent>;
    abstract onContainerWidthChanged(compositionId?: CompositionReadModelRootId): HermesObservable<number>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CompositionEventRepository, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CompositionEventRepository>;
}
//# sourceMappingURL=composition.event-repository.d.ts.map