import { AggregateRepository, Optional } from '@generic-ui/hermes';
import { SchemaAggregate } from '../domain/schema.aggregate';
import { SchemaId } from './schema.id';
export declare abstract class SchemaAggregateRepository extends AggregateRepository<SchemaId, SchemaAggregate> {
    abstract findById(schemaId: SchemaId): Optional<SchemaAggregate>;
    abstract save(aggregate: SchemaAggregate): void;
}
