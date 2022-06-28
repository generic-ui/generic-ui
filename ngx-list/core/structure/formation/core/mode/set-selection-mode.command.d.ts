import { StructureId } from '../../../structure-core/api/global/structure.id';
import { RowSelectionMode } from '../../api/row-selected/row-selection';
import { StructureCommand } from '../../../structure-core/core/structure.command';
export declare class SetSelectionModeCommand extends StructureCommand {
    private readonly mode;
    constructor(structureId: StructureId, mode: RowSelectionMode);
    getMode(): RowSelectionMode;
}
