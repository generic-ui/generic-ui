import { Aggregate } from '../aggregate/aggregate';
import { AggregateStore } from './aggregate.store';
import { AggregateId } from '../../aggregate-id';
export declare class AggregateStoreRegister {
    private readonly stores;
    register(store: AggregateStore<Aggregate>): void;
    captureAggregatesSnapshot(aggregateId: AggregateId): {
        [key: string]: Aggregate;
    };
    private cloneAggregates;
}
