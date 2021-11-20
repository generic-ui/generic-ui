import { CommandInvoker } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { RowSelectionMode } from './row-selected/row-selection';
import { RowSelectToggleType } from '../domain/core/row-select-toggle-type';
export declare abstract class FormationCommandInvoker implements CommandInvoker {
    protected constructor();
    abstract toggleSelectedRow(selectedRow: string, type: RowSelectToggleType, structureId: StructureId): void;
    abstract changeMode(mode: RowSelectionMode, structureId: StructureId): void;
    abstract setSelection(enabled: boolean, structureId: StructureId): void;
    abstract selectAll(structureId: StructureId): void;
    abstract unselectAll(structureId: StructureId): void;
}
