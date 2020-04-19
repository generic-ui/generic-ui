import { DomainEvent } from '@generic-ui/hermes';
import { SchemaId } from '../schema.id';
import { SchemaRowColoring } from './schema-row-coloring';
export declare class RowColoringSetEvent extends DomainEvent<SchemaId> {
    private readonly rowColoring;
    constructor(schemaId: SchemaId, rowColoring: SchemaRowColoring);
    getRowColoring(): SchemaRowColoring;
}
