import { StructureId } from 'structure/domain/structure-id';
import { Command } from 'generic-ui-cqrs';
export declare class ToggleSelectedRowCommand extends Command {
    readonly structureId: StructureId;
    readonly selectedRow: string;
    constructor(structureId: StructureId, selectedRow: string);
}
