import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../../lib/structure/domain/structure.id';
import { RowSelectionMode } from '../../../domain-api/row-selection';
export declare class SetSelectionModeCommand extends Command {
    private readonly mode;
    constructor(structureId: StructureId, mode: RowSelectionMode);
    getMode(): RowSelectionMode;
}
