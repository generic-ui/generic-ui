import { Observable } from 'rxjs';
import { StructureId } from '../../../domain/structure.id';
import { StructureFormationWarehouse } from '../../../domain-api/formation/structure-formation.warehouse';
import { FormationRepository } from '../../../domain-api/formation/read/formation-repository';
import { SelectedRowsList } from '../../../domain-api/formation/read/selected-rows/selected-rows-list';
export declare class LocalFormationWarehouse extends StructureFormationWarehouse {
    private structureId;
    constructor(structureId: StructureId, formationRepository: FormationRepository);
    onSelectedRows(): Observable<SelectedRowsList>;
}
