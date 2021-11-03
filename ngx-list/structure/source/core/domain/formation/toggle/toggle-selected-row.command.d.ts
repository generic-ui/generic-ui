import { StructureId } from '../../../../../core/api/structure.id';
import { RowSelectToggleType } from '../core/row-select-toggle-type';
import { StructureCommand } from '../../../../../core/domain/structure.command';
export declare class ToggleSelectedRowCommand extends StructureCommand {
    private readonly selectedRow;
    private readonly type;
    constructor(structureId: StructureId, selectedRow: string, type: RowSelectToggleType);
    getSelectedRow(): string;
    getType(): RowSelectToggleType;
}
