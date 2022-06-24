import { AggregateRoot } from '../../../api/tactical/aggregate/aggregate-root';
import { AggregateId } from '../../../api/tactical/aggregate/aggregate-id';
import { Optional } from '../../../../common/optional';
export declare abstract class AggregateStore<I extends AggregateId, S extends AggregateRoot<I>> {
    abstract save(aggregate: S): void;
    abstract findById(aggregateId: I): Optional<S>;
}
