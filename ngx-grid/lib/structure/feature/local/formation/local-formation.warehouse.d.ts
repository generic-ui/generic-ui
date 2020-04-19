import { Observable } from 'rxjs';
import { StructureId } from '../../../domain/structure.id';
import { StructureFormationWarehouse } from '../../../feature-api/formation/structure-formation.warehouse';
import { FormationRepository } from '../../../feature-api/formation/read/formation-repository';
import { SelectedRowsList } from '../../../feature-api/formation/read/selected-rows/selected-rows-list';
export declare class LocalFormationWarehouse extends StructureFormationWarehouse {
    private structureId;
    constructor(structureId: StructureId, formationRepository: FormationRepository);
    onSelectedRows(): Observable<SelectedRowsList>;
}
