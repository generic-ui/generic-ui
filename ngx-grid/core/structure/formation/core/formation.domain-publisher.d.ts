import { FormationDispatcher } from './formation.dispatcher';
import { StructureId } from '../../structure-core/api/global/structure.id';
import { RowSelectToggleType } from '../domain/row-select-toggle-type';
import { FormationPublisher } from '../api/formation.publisher';
import { RowSelectionMode } from '../api/row-selected/row-selection';
export declare class FormationDomainPublisher extends FormationPublisher {
    private readonly formationDispatcher;
    constructor(formationDispatcher: FormationDispatcher);
    static readonly services: readonly [typeof FormationDispatcher];
    toggleSelectedRow(selectedRow: string, type: RowSelectToggleType, structureId: StructureId): void;
    changeMode(mode: RowSelectionMode, structureId: StructureId): void;
    setSelection(enabled: boolean, structureId: StructureId): void;
    selectAll(structureId: StructureId): void;
    unselectAll(structureId: StructureId): void;
}
