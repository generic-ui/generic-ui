import { Observable } from 'rxjs';
import { StructureId } from '../../../domain/structure.id';
import { FormationReadModelService } from '../../../ui-api/formation/formation-read-model.service';
import { FormationRepository } from '../../../read/formation/formation-repository';
import { SelectedRowsList } from '../../../read/formation/selected-rows/selected-rows-list';
export declare class LocalFormationReadModelWarehouse extends FormationReadModelService {
    private structureId;
    constructor(structureId: StructureId, formationRepository: FormationRepository);
    onSelectedRows(): Observable<SelectedRowsList>;
}
