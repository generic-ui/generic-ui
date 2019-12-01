import { CompositionId } from '../composition-id';
import { CompositionAggregate } from './composition.aggregate';
export declare abstract class CompositionAggregateRepository {
    abstract getById(compositionId: CompositionId): CompositionAggregate;
    abstract save(aggregate: CompositionAggregate): void;
}
