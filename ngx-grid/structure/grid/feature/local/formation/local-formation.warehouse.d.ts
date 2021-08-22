import { Observable } from 'rxjs';
import { StructureId } from '../../../../core/domain/structure.id';
import { FormationWarehouse } from '../../../../source/core/api/formation/formation.warehouse';
import { RowSelectedRepository } from '../../../../source/core/api/formation/row-selected/row-selected.repository';
import { RowSelectedReadModel } from '../../../../source/core/api/formation/row-selected.read-model';
import { RowSelectionModeRepository } from '../../../../source/core/api/formation/mode/row-selection-mode.repository';
import { SourceWarehouse } from '../../../../source/core/api/source.warehouse';
export declare class LocalFormationWarehouse extends FormationWarehouse {
    private structureId;
    constructor(structureId: StructureId, rowSelectedArchive: RowSelectedRepository, rowSelectionModeRepository: RowSelectionModeRepository, sourceWarehouse: SourceWarehouse);
    onRowSelectedReadModel(): Observable<RowSelectedReadModel>;
}
