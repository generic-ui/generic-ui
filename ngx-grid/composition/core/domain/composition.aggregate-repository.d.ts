import { AggregateRepository, Optional } from '@generic-ui/hermes';
import { CompositionId } from '../api/composition.id';
import { CompositionAggregate } from './composition.aggregate';
export declare abstract class CompositionAggregateRepository extends AggregateRepository<CompositionId, CompositionAggregate> {
    abstract findById(compositionId: CompositionId): Optional<CompositionAggregate>;
    abstract save(aggregate: CompositionAggregate): void;
}
//# sourceMappingURL=composition.aggregate-repository.d.ts.map