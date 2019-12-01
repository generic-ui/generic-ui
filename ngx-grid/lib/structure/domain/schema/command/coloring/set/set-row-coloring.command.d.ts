import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-id';
import { SchemaRowColoring } from '../../../schema-row-coloring';
export declare class SetRowColoringCommand extends Command {
    readonly structureId: StructureId;
    readonly coloring: SchemaRowColoring;
    constructor(structureId: StructureId, coloring: SchemaRowColoring);
}
