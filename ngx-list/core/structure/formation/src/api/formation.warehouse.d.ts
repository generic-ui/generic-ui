import { HermesObservable, Optional, Warehouse } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { RowSelectedReadModel } from './row-selected/row-selected.read-model';
import { RowSelectionMode, RowSelectionType } from './row-selected/row-selection';
import { SelectedRow } from './row-selected/selected-row';
import { FormationCustomSelection } from './custom/formation.custom-selection';
export declare abstract class FormationWarehouse implements Warehouse {
    protected constructor();
    abstract findSelectedRows(structureId: StructureId): Optional<ReadonlyArray<SelectedRow>>;
    abstract onRowSelectedReadModel(structureId: StructureId): HermesObservable<RowSelectedReadModel>;
    abstract findSelectedItemIds(structureId: StructureId): Optional<ReadonlyArray<string>>;
    abstract onSelectedRows(structureId: StructureId): HermesObservable<ReadonlyArray<string>>;
    abstract onMode(structureId: StructureId): HermesObservable<RowSelectionMode>;
    abstract onType(structureId: StructureId): HermesObservable<RowSelectionType>;
    abstract onSelectionEnabled(structureId: StructureId): HermesObservable<boolean>;
    abstract onCustomSelections(structureId: StructureId): HermesObservable<FormationCustomSelection>;
}
