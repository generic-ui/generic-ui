import { FormationDispatcher } from '../domain/formation.dispatcher';
import { StructureId } from '../../../core/api/structure.id';
import { RowSelectToggleType } from '../domain/core/row-select-toggle-type';
import { FormationCommandInvoker } from '../api/formation.command-invoker';
import { RowSelectionMode } from '../api/row-selected/row-selection';
export declare class FormationDomainCommandInvoker extends FormationCommandInvoker {
    private readonly formationDispatcher;
    constructor(formationDispatcher: FormationDispatcher);
    toggleSelectedRow(selectedRow: string, type: RowSelectToggleType, structureId: StructureId): void;
    changeMode(mode: RowSelectionMode, structureId: StructureId): void;
    setSelection(enabled: boolean, structureId: StructureId): void;
    selectAll(structureId: StructureId): void;
    unselectAll(structureId: StructureId): void;
}
