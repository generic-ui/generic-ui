import { DomainEvent } from '@generic-ui/hermes';
import { SchemaId } from '../../../api/schema.id';
import { SchemaAggregateEvent } from '../../schema.aggregate-event';
export declare class SchemaHorizontalGridSetAggregateEvent extends SchemaAggregateEvent {
    private readonly horizontalGrid;
    constructor(schemaId: SchemaId, horizontalGrid: boolean);
    toDomainEvent(): DomainEvent<SchemaId>;
}
