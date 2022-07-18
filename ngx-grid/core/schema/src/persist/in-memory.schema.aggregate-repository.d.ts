import { Optional } from '@generic-ui/hermes';
import { SchemaAggregateRepository } from '../core/schema.aggregate-repository';
import { SchemaAggregate } from '../domain/schema.aggregate';
import { SchemaId } from '../core/schema.id';
import { InMemorySchemaAggregateStore } from './in-memory.schema.aggregate-store';
export declare class InMemorySchemaAggregateRepository extends SchemaAggregateRepository {
    private readonly inMemorySchemaAggregateStore;
    constructor(inMemorySchemaAggregateStore: InMemorySchemaAggregateStore);
    static readonly services: (typeof InMemorySchemaAggregateStore)[];
    findById(schemaId: SchemaId): Optional<SchemaAggregate>;
    save(schemaAggregate: SchemaAggregate): void;
}
