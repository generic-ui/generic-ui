import { Aggregate } from '../aggregate/aggregate';
import { AggregateId } from '../../aggregate-id';
export declare abstract class AggregateFactory<A extends Aggregate> {
    abstract create(aggregateId: AggregateId): A;
}
