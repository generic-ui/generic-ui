import { AggregateRoot } from '../aggregate/aggregate-root';
import { AggregateId } from '../../aggregate-id';
import { Optional } from '../../../common/optional';
export declare abstract class AggregateStore<I extends AggregateId, S extends AggregateRoot<I>> {
    abstract save(aggregate: S): void;
    abstract getById(aggregateId: I): Optional<S>;
}
