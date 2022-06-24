import { AggregateRoot } from '../../../api/tactical/aggregate/aggregate-root';
import { AggregateStore } from './aggregate.store';
import { AggregateId } from '../../../api/tactical/aggregate/aggregate-id';
export declare class AggregateStoreRegister {
    private readonly stores;
    register(store: AggregateStore<AggregateId, AggregateRoot<AggregateId>>): void;
    captureAggregatesSnapshot(aggregateId: AggregateId): {
        [key: string]: AggregateRoot<AggregateId>;
    };
    private cloneAggregates;
}
