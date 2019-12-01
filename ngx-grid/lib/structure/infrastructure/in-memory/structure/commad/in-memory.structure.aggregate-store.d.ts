import { InMemoryAggregateStore } from '@generic-ui/hermes';
import { AggregateStoreRegister } from '@generic-ui/hermes';
import { StructureAggregate } from '../../../../domain/structure/command/structure.aggregate';
import { InMemoryStructureStore } from '../in-memory.structure.store';
export declare class InMemoryStructureAggregateStore extends InMemoryAggregateStore<StructureAggregate> {
    constructor(inMemoryStructureStore: InMemoryStructureStore, aggregateStoreRegister: AggregateStoreRegister);
}
