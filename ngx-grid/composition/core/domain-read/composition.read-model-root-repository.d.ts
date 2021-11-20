import { CompositionId } from '../api/composition.id';
import { CompositionReadModeRoot } from './composition.read-mode-root';
import { DomainEventBus, HermesObservable, Optional, ReadModelRootRepository } from '@generic-ui/hermes';
export declare abstract class CompositionReadModelRootRepository extends ReadModelRootRepository<CompositionId> {
    protected constructor(domainEventBus: DomainEventBus);
    abstract on(compositionId: CompositionId): HermesObservable<Readonly<CompositionReadModeRoot>>;
    abstract find(compositionId: CompositionId): Optional<CompositionReadModeRoot>;
}
