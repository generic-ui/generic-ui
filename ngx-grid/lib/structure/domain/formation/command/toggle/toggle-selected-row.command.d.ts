import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-id';
export declare class ToggleSelectedRowCommand extends Command {
    private readonly selectedRow;
    constructor(structureId: StructureId, selectedRow: string);
    getSelectedRow(): string;
}
