import { Observable } from 'rxjs';
import { StructureId } from '../../../domain/structure.id';
import { FormationWarehouse } from '../../../../source/domain-api/formation/formation.warehouse';
import { RowSelectedRepository } from '../../../../source/domain-api/formation/row-selected/row-selected.repository';
import { RowSelectedReadModel } from '../../../../source/domain-api/formation/row-selected.read-model';
import { RowSelectionModeRepository } from '../../../../source/domain-api/formation/mode/row-selection-mode.repository';
import { SourceWarehouse } from '../../../../source/domain-api/source.warehouse';
export declare class LocalFormationWarehouse extends FormationWarehouse {
    private structureId;
    constructor(structureId: StructureId, rowSelectedArchive: RowSelectedRepository, rowSelectionModeRepository: RowSelectionModeRepository, sourceWarehouse: SourceWarehouse);
    onRowSelectedReadModel(): Observable<RowSelectedReadModel>;
}
