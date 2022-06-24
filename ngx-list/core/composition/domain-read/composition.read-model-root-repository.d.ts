import { CompositionId } from '../api/global/composition.id';
import { CompositionReadModeRoot } from './composition.read-mode-root';
import { HermesObservable, Optional, ReadModelRootRepository } from '@generic-ui/hermes';
export declare abstract class CompositionReadModelRootRepository extends ReadModelRootRepository<CompositionId> {
    protected constructor();
    abstract on(compositionId: CompositionId): HermesObservable<Readonly<CompositionReadModeRoot>>;
    abstract find(compositionId: CompositionId): Optional<CompositionReadModeRoot>;
}
