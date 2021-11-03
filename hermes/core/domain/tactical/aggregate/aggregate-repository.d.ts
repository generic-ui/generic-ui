import { AggregateRoot } from './aggregate-root';
import { AggregateId } from './aggregate-id';
import { Optional } from '../../../../common/optional';
export declare abstract class AggregateRepository<I extends AggregateId, A extends AggregateRoot<I>> {
    abstract findById(aggregateId: I): Optional<A>;
    abstract save(aggregate: A): void;
}
