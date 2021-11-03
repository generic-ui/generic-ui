import { DomainEventBus, HermesObservable } from '@generic-ui/hermes';
import { CompositionReadModelRootId } from '../api/composition.read-model-root-id';
import { CompositionColumnsSetEvent } from './column/set-columns/composition.columns-set.event';
import { CompositionEventRepository } from '../api/composition.event-repository';
import * as i0 from "@angular/core";
export declare class CompositionDomainEventRepository extends CompositionEventRepository {
    constructor(domainEventBus: DomainEventBus);
    onColumnsChanged(compositionId: CompositionReadModelRootId): HermesObservable<CompositionColumnsSetEvent>;
    onContainerWidthChanged(compositionId: CompositionReadModelRootId): HermesObservable<number>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CompositionDomainEventRepository, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CompositionDomainEventRepository>;
}
//# sourceMappingURL=composition.domain-event-repository.d.ts.map