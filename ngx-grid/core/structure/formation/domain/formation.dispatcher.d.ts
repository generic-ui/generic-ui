import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureId } from '../../core/api/global/structure.id';
import { RowSelectToggleType } from './core/row-select-toggle-type';
import { RowSelectionMode } from '../api/row-selected/row-selection';
export declare class FormationDispatcher {
    private readonly commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    static readonly services: readonly [typeof CommandDispatcher];
    toggleSelectedRow(selectedRow: string, type: RowSelectToggleType, structureId: StructureId): void;
    changeMode(mode: RowSelectionMode, structureId: StructureId): void;
    setSelection(enabled: boolean, structureId: StructureId): void;
    selectAll(structureId: StructureId): void;
    unselectAll(structureId: StructureId): void;
}
