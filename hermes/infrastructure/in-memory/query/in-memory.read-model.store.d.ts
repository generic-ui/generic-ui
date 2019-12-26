import { AggregateId } from '../../../domain/aggregate-id';
import { Aggregate } from '../../../domain/command/aggregate';
import { ReadModel } from '../../../domain/read/read-model';
import { ReadModelStore } from '../../../domain/read/store/read-model.store';
import { InMemoryStore } from '../in-memory.store';
export declare abstract class InMemoryReadModelStore<T extends ReadModel, S extends Aggregate> extends ReadModelStore<T> {
    private readonly inMemoryStore;
    protected constructor(inMemoryStore: InMemoryStore<S>);
    abstract toReadModel(aggregate: S): T;
    getById(aggregateId: AggregateId): T;
    getAll(): Array<T>;
    private getValue;
}
