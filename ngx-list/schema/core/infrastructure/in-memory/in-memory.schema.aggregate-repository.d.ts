import { Optional } from '@generic-ui/hermes';
import { SchemaAggregateRepository } from '../../domain/schema.aggregate-repository';
import { SchemaAggregate } from '../../domain/schema.aggregate';
import { SchemaId } from '../../domain/schema.id';
import { InMemorySchemaAggregateStore } from './in-memory.schema.aggregate-store';
export declare class InMemorySchemaAggregateRepository extends SchemaAggregateRepository {
    private inMemorySchemaAggregateStore;
    constructor(inMemorySchemaAggregateStore: InMemorySchemaAggregateStore);
    findById(schemaId: SchemaId): Optional<SchemaAggregate>;
    save(schemaAggregate: SchemaAggregate): void;
}
