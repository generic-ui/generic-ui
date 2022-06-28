import { HermesObservable, Optional, Warehouse } from '@generic-ui/hermes';
import { StructureId } from '../../structure-core/api/global/structure.id';
import { RowSelectedReadModel } from './row-selected/row-selected.read-model';
import { RowSelectionMode } from './row-selected/row-selection';
import { SelectedRow } from './row-selected/selected-row';
export declare abstract class FormationWarehouse implements Warehouse {
    protected constructor();
    abstract findSelectedRows(structureId: StructureId): Optional<ReadonlyArray<SelectedRow>>;
    abstract onRowSelectedReadModel(structureId: StructureId): HermesObservable<RowSelectedReadModel>;
    abstract findSelectedItemIds(structureId: StructureId): Optional<ReadonlyArray<string>>;
    abstract onSelectedRows(structureId: StructureId): HermesObservable<ReadonlyArray<string>>;
    abstract onMode(structureId: StructureId): HermesObservable<RowSelectionMode>;
}
