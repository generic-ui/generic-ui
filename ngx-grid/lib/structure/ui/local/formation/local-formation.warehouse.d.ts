import { Observable } from 'rxjs';
import { StructureId } from '../../../domain/structure.id';
import { StructureFormationWarehouse } from '../../../ui-api/formation/structure-formation.warehouse';
import { FormationRepository } from '../../../read/formation/formation-repository';
import { SelectedRowsList } from '../../../read/formation/selected-rows/selected-rows-list';
export declare class LocalFormationWarehouse extends StructureFormationWarehouse {
    private structureId;
    constructor(structureId: StructureId, formationRepository: FormationRepository);
    onSelectedRows(): Observable<SelectedRowsList>;
}
