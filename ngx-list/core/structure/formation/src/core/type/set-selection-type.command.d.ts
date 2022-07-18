import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { RowSelectionType } from '../../api/row-selected/row-selection';
import { StructureCommand } from '../../../../structure-core/src/core/structure.command';
export declare class SetSelectionTypeCommand extends StructureCommand {
    private readonly type;
    constructor(structureId: StructureId, type: RowSelectionType);
    getType(): RowSelectionType;
}
