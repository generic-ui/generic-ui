import { SchemaRowColoring } from 'structure/domain/schema/schema-row-coloring';
import { StructureId } from 'structure/domain/structure-id';
import { Command } from 'generic-ui-cqrs';
export declare class SetRowColoringCommand extends Command {
    readonly structureId: StructureId;
    readonly coloring: SchemaRowColoring;
    constructor(structureId: StructureId, coloring: SchemaRowColoring);
}
