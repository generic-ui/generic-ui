import { SchemaId } from '../schema.id';
import { SchemaRowColoring } from '../../api/row-coloring/schema-row-coloring';
import { SchemaDomainEvent } from '../schema.domain-event';
export declare class RowColoringSetEvent extends SchemaDomainEvent {
    private readonly rowColoring;
    constructor(schemaId: SchemaId, rowColoring: SchemaRowColoring);
    getRowColoring(): SchemaRowColoring;
}
