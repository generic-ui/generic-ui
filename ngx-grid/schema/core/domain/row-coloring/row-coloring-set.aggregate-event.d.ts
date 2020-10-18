import { DomainEvent } from '@generic-ui/hermes';
import { SchemaId } from '../../api/schema.id';
import { SchemaRowColoring } from '../../api/schema-row-coloring';
import { SchemaAggregateEvent } from '../schema.aggregate-event';
export declare class RowColoringSetAggregateEvent extends SchemaAggregateEvent {
    private readonly rowColoring;
    constructor(schemaId: SchemaId, rowColoring: SchemaRowColoring);
    toDomainEvent(): DomainEvent<SchemaId>;
}
