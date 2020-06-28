import { Observable } from 'rxjs';
import { StructureId } from '../../../domain/structure.id';
import { FormationWarehouse } from '../../../../../structure/source/domain-api/formation/formation.warehouse';
import { RowSelectedRepository } from '../../../../../structure/source/domain-api/formation/row-selected/row-selected.repository';
import { RowSelectedReadModel } from '../../../../../structure/source/domain-api/formation/row-selected.read-model';
import { RowSelectionModeRepository } from '../../../../../structure/source/domain-api/formation/mode/row-selection-mode.repository';
import { SourceWarehouse } from '../../../../../structure/source/domain-api/source.warehouse';
export declare class LocalFormationWarehouse extends FormationWarehouse {
    private structureId;
    constructor(structureId: StructureId, rowSelectedArchive: RowSelectedRepository, rowSelectionModeRepository: RowSelectionModeRepository, sourceWarehouse: SourceWarehouse);
    onRowSelectedReadModel(): Observable<RowSelectedReadModel>;
}
