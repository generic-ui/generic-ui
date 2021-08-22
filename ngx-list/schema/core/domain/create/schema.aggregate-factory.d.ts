import { AggregateFactory } from '@generic-ui/hermes';
import { SchemaAggregate } from '../schema.aggregate';
import { SchemaId } from '../schema.id';
export declare class SchemaAggregateFactory extends AggregateFactory<SchemaId, SchemaAggregate> {
    constructor();
    create(aggregateId: SchemaId): SchemaAggregate;
}
