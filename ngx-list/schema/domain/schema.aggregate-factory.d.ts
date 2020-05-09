import { AggregateFactory } from '@generic-ui/hermes';
import { SchemaId } from './schema.id';
import { SchemaAggregate } from './schema.aggregate';
export declare class SchemaAggregateFactory extends AggregateFactory<SchemaId, SchemaAggregate> {
    constructor();
    create(aggregateId: SchemaId): SchemaAggregate;
}
