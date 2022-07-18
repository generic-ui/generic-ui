import { InMemoryAggregateStore } from '@generic-ui/hermes';
import { SchemaAggregate } from '../domain/schema.aggregate';
import { InMemorySchemaStore } from './in-memory.schema.store';
import { SchemaId } from '../core/schema.id';
export declare class InMemorySchemaAggregateStore extends InMemoryAggregateStore<SchemaId, SchemaAggregate> {
    constructor(inMemorySchemaStore: InMemorySchemaStore);
    static readonly services: (typeof InMemorySchemaStore)[];
}
