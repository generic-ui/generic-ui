import { Observable } from 'rxjs';
import { StructureId } from '../../../domain/structure-id';
import { FormationReadModelService } from '../../../ui-api/formation/formation-read-model.service';
import { FormationRepository } from '../../../domain/formation/read/formation-repository';
import { SelectedRowsList } from '../../../domain/formation/read/selected-rows/selected-rows-list';
export declare class LocalFormationReadModelService extends FormationReadModelService {
    private structureId;
    constructor(structureId: StructureId, formationRepository: FormationRepository);
    onSelectedRows(): Observable<SelectedRowsList>;
}
