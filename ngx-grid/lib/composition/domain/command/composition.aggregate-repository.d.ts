import { AggregateRepository, Optional } from '@generic-ui/hermes';
import { CompositionId } from '../composition-id';
import { CompositionAggregate } from './composition.aggregate';
export declare abstract class CompositionAggregateRepository extends AggregateRepository<CompositionAggregate> {
    abstract getById(compositionId: CompositionId): Optional<CompositionAggregate>;
    abstract save(aggregate: CompositionAggregate): void;
}
