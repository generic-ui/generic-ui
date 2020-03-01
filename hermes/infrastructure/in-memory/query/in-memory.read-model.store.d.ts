import { AggregateId } from '../../../domain/aggregate-id';
import { Aggregate } from '../../../domain/command/aggregate';
import { ReadModel } from '../../../domain/read/read-model';
import { ReadModelStore } from '../../../domain/read/store/read-model.store';
import { InMemoryStore } from '../in-memory.store';
import { Optional } from '../../../common/optional';
export declare abstract class InMemoryReadModelStore<R extends ReadModel, D extends Aggregate> extends ReadModelStore<R> {
    private readonly inMemoryStore;
    protected constructor(inMemoryStore: InMemoryStore<D>);
    abstract toReadModel(aggregate: D): R;
    getById(aggregateId: AggregateId): Optional<R>;
    getAll(): ReadonlyArray<R>;
    private getValue;
}
