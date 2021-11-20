import { StructureId } from '../../../../core/api/structure.id';
import { RowSelectionMode } from '../../api/row-selected/row-selection';
import { StructureCommand } from '../../../../core/domain/structure.command';
export declare class SetSelectionModeCommand extends StructureCommand {
    private readonly mode;
    constructor(structureId: StructureId, mode: RowSelectionMode);
    getMode(): RowSelectionMode;
}
