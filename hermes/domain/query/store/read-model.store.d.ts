import { ReadModel } from '../read-model';
import { AggregateId } from '../../aggregate-id';
export declare abstract class ReadModelStore<Q extends ReadModel> {
    abstract getById(aggregateId: AggregateId): Q;
}
