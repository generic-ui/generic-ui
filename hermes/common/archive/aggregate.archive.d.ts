import { AggregateId } from '../../core/api/tactical/aggregate/aggregate-id';
import { KeyArchive } from './key.archive';
export declare abstract class AggregateArchive<T> extends KeyArchive<AggregateId, T> {
    protected constructor(defaultValue?: T);
}
