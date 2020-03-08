import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-id';
import { SchemaRowColoring } from '../../../schema-row-coloring';
export declare class SetRowColoringCommand extends Command {
    private readonly coloring;
    constructor(structureId: StructureId, coloring: SchemaRowColoring);
    getColoring(): SchemaRowColoring;
}
