import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/domain/structure.id';
import { RowSelectToggleType } from '../core/row-select-toggle-type';
export declare class ToggleSelectedRowCommand extends Command {
    private readonly selectedRow;
    private readonly type;
    constructor(structureId: StructureId, selectedRow: string, type: RowSelectToggleType);
    getSelectedRow(): string;
    getType(): RowSelectToggleType;
}
