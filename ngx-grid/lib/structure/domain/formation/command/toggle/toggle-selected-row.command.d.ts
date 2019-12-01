import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-id';
export declare class ToggleSelectedRowCommand extends Command {
    readonly structureId: StructureId;
    readonly selectedRow: string;
    constructor(structureId: StructureId, selectedRow: string);
}
