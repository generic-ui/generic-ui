import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { RowSelectionMode } from '../../api/row-selected/row-selection';
import { StructureCommand } from '../../../../structure-core/src/core/structure.command';
export declare class SetSelectionModeCommand extends StructureCommand {
    private readonly mode;
    constructor(structureId: StructureId, mode: RowSelectionMode);
    getMode(): RowSelectionMode;
}
