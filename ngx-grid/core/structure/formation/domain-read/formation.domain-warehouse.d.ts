import { HermesObservable, Optional } from '@generic-ui/hermes';
import { StructureId } from '../../core/api/global/structure.id';
import { SourceWarehouse } from '../../source/api/source.warehouse';
import { FormationWarehouse } from '../api/formation.warehouse';
import { RowSelectedArchive } from '../api/row-selected/row-selected.archive';
import { RowSelectionModeArchive } from '../api/mode/row-selection-mode.archive';
import { SelectedRow } from '../api/row-selected/selected-row';
import { RowSelectedReadModel } from '../api/row-selected/row-selected.read-model';
import { RowSelectionMode } from '../api/row-selected/row-selection';
export declare class FormationDomainWarehouse extends FormationWarehouse {
    private readonly rowSelectedRepository;
    private readonly rowSelectionModeRepository;
    private readonly sourceWarehouse;
    constructor(rowSelectedRepository: RowSelectedArchive, rowSelectionModeRepository: RowSelectionModeArchive, sourceWarehouse: SourceWarehouse);
    static readonly services: (typeof SourceWarehouse | typeof RowSelectedArchive | typeof RowSelectionModeArchive)[];
    findSelectedRows(structureId: StructureId): Optional<ReadonlyArray<SelectedRow>>;
    onRowSelectedReadModel(structureId: StructureId): HermesObservable<RowSelectedReadModel>;
    findSelectedItemIds(structureId: StructureId): Optional<ReadonlyArray<string>>;
    onSelectedRows(structureId: StructureId): HermesObservable<ReadonlyArray<string>>;
    onMode(structureId: StructureId): HermesObservable<RowSelectionMode>;
}
