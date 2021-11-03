import { AggregateStoreRegister, InMemoryAggregateStore } from '@generic-ui/hermes';
import { SchemaAggregate } from '../../domain/schema.aggregate';
import { InMemorySchemaStore } from './in-memory.schema.store';
import { SchemaId } from '../../domain/schema.id';
export declare class InMemorySchemaAggregateStore extends InMemoryAggregateStore<SchemaId, SchemaAggregate> {
    constructor(inMemorySchemaStore: InMemorySchemaStore, aggregateStoreRegister: AggregateStoreRegister);
}
