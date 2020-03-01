import { Aggregate } from '../aggregate';
import { AggregateId } from '../../aggregate-id';
import { Optional } from '../../../common/optional';
export declare abstract class AggregateStore<S extends Aggregate> {
    abstract save(aggregate: S): void;
    abstract getById(aggregateId: AggregateId): Optional<S>;
}
