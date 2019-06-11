import { RowColoring } from 'structure/domain/schema/row-coloring';
import { StructureId } from 'structure/domain/structure-id';
import { Command } from 'generic-ui-cqrs';
export declare class SetRowColoringCommand extends Command {
    readonly structureId: StructureId;
    readonly coloring: RowColoring;
    constructor(structureId: StructureId, coloring: RowColoring);
}
