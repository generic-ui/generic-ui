import { CommandDispatcher, CommandInvoker } from '@generic-ui/hermes';
import { FormationDispatcher } from '../../domain/formation/formation.dispatcher';
import { StructureId } from '../../../../core/api/structure.id';
import { RowSelectionMode } from '../row-selection';
import { RowSelectToggleType } from '../../domain/formation/core/row-select-toggle-type';
export declare class FormationCommandInvoker implements CommandInvoker {
    private readonly commandDispatcher;
    private readonly formationDispatcher;
    constructor(commandDispatcher: CommandDispatcher, formationDispatcher: FormationDispatcher);
    setDefaultFormation(structureId: StructureId): void;
    toggleSelectedRow(selectedRow: string, type: RowSelectToggleType, structureId: StructureId): void;
    changeMode(mode: RowSelectionMode, structureId: StructureId): void;
    setSelection(enabled: boolean, structureId: StructureId): void;
    selectAll(structureId: StructureId): void;
    unselectAll(structureId: StructureId): void;
}
