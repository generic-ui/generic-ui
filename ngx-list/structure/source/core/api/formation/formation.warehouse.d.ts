import { HermesObservable, Warehouse } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/api/structure.id';
import { RowSelectedRepository } from './row-selected/row-selected.repository';
import { RowSelectedReadModel } from './row-selected.read-model';
import { RowSelectionModeRepository } from './mode/row-selection-mode.repository';
import { RowSelectionMode } from '../row-selection';
import { SelectedRow } from './selected-row';
import { SourceWarehouse } from '../source.warehouse';
export declare class FormationWarehouse implements Warehouse {
    private readonly rowSelectedRepository;
    private readonly rowSelectionModeRepository;
    private readonly sourceWarehouse;
    constructor(rowSelectedRepository: RowSelectedRepository, rowSelectionModeRepository: RowSelectionModeRepository, sourceWarehouse: SourceWarehouse);
    getSelectedRows(structureId: StructureId): Array<SelectedRow>;
    onRowSelectedReadModel(structureId: StructureId): HermesObservable<RowSelectedReadModel>;
    getSelectedItemIds(structureId: StructureId): Array<string>;
    onSelectedRows(structureId: StructureId): HermesObservable<Array<string>>;
    onMode(structureId: StructureId): HermesObservable<RowSelectionMode>;
}
