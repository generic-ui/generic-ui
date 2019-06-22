import { InMemoryStructureStore } from 'structure/infrastructure/in-memory/structure/in-memory.structure.store';
import { StructureAggregate } from 'structure/domain/structure/command/structure.aggregate';
import { InMemoryAggregateStore } from 'generic-ui-cqrs';
import { AggregateStoreRegister } from 'generic-ui-cqrs';
export declare class InMemoryStructureAggregateStore extends InMemoryAggregateStore<StructureAggregate> {
    constructor(inMemoryStructureStore: InMemoryStructureStore, aggregateStoreRegister: AggregateStoreRegister);
}
