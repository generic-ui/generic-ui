import { ReadModel } from '../read-model';
import { AggregateId } from '../../aggregate-id';
import { Optional } from '../../../common/optional';
export declare abstract class ReadModelStore<Q extends ReadModel> {
    abstract getById(aggregateId: AggregateId): Optional<Q>;
}
