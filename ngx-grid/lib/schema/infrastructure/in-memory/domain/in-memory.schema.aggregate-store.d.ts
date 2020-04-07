import { AggregateStoreRegister, InMemoryAggregateStore } from '@generic-ui/hermes';
import { SchemaId } from '../../../domain/schema.id';
import { SchemaAggregate } from '../../../domain/schema.aggregate';
import { InMemorySchemaStore } from '../in-memory.schema.store';
export declare class InMemorySchemaAggregateStore extends InMemoryAggregateStore<SchemaId, SchemaAggregate> {
    constructor(inMemorySchemaStore: InMemorySchemaStore, aggregateStoreRegister: AggregateStoreRegister);
}
