import { Aggregate } from './aggregate';
import { AggregateId } from '../../aggregate-id';
import { Optional } from '../../../common/optional';
export declare abstract class AggregateRepository<A extends Aggregate> {
    abstract getById(aggregateId: AggregateId): Optional<A>;
    abstract save(aggregate: A): void;
}
