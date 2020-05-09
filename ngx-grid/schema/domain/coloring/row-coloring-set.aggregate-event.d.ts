import { AggregateEvent, DomainEvent } from '@generic-ui/hermes';
import { SchemaId } from '../schema.id';
import { SchemaRowColoring } from './schema-row-coloring';
export declare class RowColoringSetAggregateEvent extends AggregateEvent<SchemaId> {
    private readonly rowColoring;
    constructor(schemaId: SchemaId, rowColoring: SchemaRowColoring);
    toDomainEvent(): DomainEvent<SchemaId>;
}
