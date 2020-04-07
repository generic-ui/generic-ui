import { AggregateRoot } from './aggregate-root';
import { AggregateId } from '../../aggregate-id';
export declare abstract class AggregateFactory<I extends AggregateId, A extends AggregateRoot<I>> {
    abstract create(aggregateId: I): A;
}
