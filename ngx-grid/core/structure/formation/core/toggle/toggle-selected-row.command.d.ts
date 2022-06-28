import { StructureId } from '../../../structure-core/api/global/structure.id';
import { RowSelectToggleType } from '../../domain/row-select-toggle-type';
import { StructureCommand } from '../../../structure-core/core/structure.command';
export declare class ToggleSelectedRowCommand extends StructureCommand {
    private readonly selectedRow;
    private readonly type;
    constructor(structureId: StructureId, selectedRow: string, type: RowSelectToggleType);
    getSelectedRow(): string;
    getType(): RowSelectToggleType;
}
