import { SchemaId } from '../../api/schema.id';
import { SchemaRowColoring } from '../../api/schema-row-coloring';
import { SchemaDomainEvent } from '../schema.domain-event';
export declare class RowColoringSetEvent extends SchemaDomainEvent {
    private readonly rowColoring;
    constructor(schemaId: SchemaId, rowColoring: SchemaRowColoring);
    getRowColoring(): SchemaRowColoring;
}
