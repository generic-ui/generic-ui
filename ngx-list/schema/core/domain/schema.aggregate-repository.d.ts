import { AggregateRepository, Optional } from '@generic-ui/hermes';
import { SchemaId } from '../api/schema.id';
import { SchemaAggregate } from './schema.aggregate';
export declare abstract class SchemaAggregateRepository extends AggregateRepository<SchemaId, SchemaAggregate> {
    abstract getById(schemaId: SchemaId): Optional<SchemaAggregate>;
    abstract save(aggregate: SchemaAggregate): void;
}
