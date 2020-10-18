import { AggregateFactory } from '@generic-ui/hermes';
import { SchemaId } from '../api/schema.id';
import { SchemaAggregate } from './schema.aggregate';
export declare class SchemaAggregateFactory extends AggregateFactory<SchemaId, SchemaAggregate> {
    constructor();
    create(aggregateId: SchemaId): SchemaAggregate;
}
