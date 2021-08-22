import { AggregateStoreRegister, InMemoryAggregateStore } from '@generic-ui/hermes';
import { StructureAggregate } from '../../../domain/structure.aggregate';
import { InMemoryStructureStore } from '../in-memory.structure.store';
import { StructureId } from '../../../domain/structure.id';
export declare class InMemoryStructureAggregateStore extends InMemoryAggregateStore<StructureId, StructureAggregate> {
    constructor(inMemoryStructureStore: InMemoryStructureStore, aggregateStoreRegister: AggregateStoreRegister);
}
