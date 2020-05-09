import { Command } from '@generic-ui/hermes';
import { SchemaRowColoring } from './schema-row-coloring';
import { SchemaId } from '../schema.id';
export declare class SetRowColoringCommand extends Command {
    private readonly coloring;
    constructor(schemaId: SchemaId, coloring: SchemaRowColoring);
    getColoring(): SchemaRowColoring;
}
