import { FormationDispatcher } from '../../domain/formation/formation.dispatcher';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
import { RowSelectionMode } from '../row-selection';
import { RowSelectToggleType } from '../../domain/formation/core/row-select-toggle-type';
import { CommandDispatcher } from '@generic-ui/hermes';
export declare class FormationCommandDispatcher {
    private readonly commandDispatcher;
    private readonly formationDispatcher;
    constructor(commandDispatcher: CommandDispatcher, formationDispatcher: FormationDispatcher);
    setDefaultFormation(structureId?: StructureId): void;
    toggleSelectedRow(selectedRow: string, type: RowSelectToggleType, structureId?: StructureId): void;
    changeMode(mode: RowSelectionMode, structureId?: StructureId): void;
    setSelection(enabled: boolean, structureId?: StructureId): void;
    selectAll(structureId?: StructureId): void;
    unselectAll(structureId?: StructureId): void;
}
