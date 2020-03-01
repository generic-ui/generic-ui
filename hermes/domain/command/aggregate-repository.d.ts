import { Aggregate } from './aggregate';
import { AggregateId } from '../aggregate-id';
export declare abstract class AggregateRepository<A extends Aggregate> {
    abstract getById(aggregateId: AggregateId): A;
    abstract save(aggregate: A): void;
}
