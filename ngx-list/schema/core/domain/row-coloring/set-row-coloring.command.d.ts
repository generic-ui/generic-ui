import { SchemaRowColoring } from '../../api/schema-row-coloring';
import { SchemaId } from '../../api/schema.id';
import { SchemaCommand } from '../schema.command';
export declare class SetRowColoringCommand extends SchemaCommand {
    private readonly coloring;
    constructor(schemaId: SchemaId, coloring: SchemaRowColoring);
    getColoring(): SchemaRowColoring;
}
