import { Observable } from 'rxjs';
import { FormationRepository } from '../../domain/formation/read/formation-repository';
import { StructureId } from '../../domain/structure-id';
import { SelectedRowsList } from '../../domain/formation/read/selected-rows/selected-rows-list';
export declare class FormationReadModelService {
    private formationRepository;
    constructor(formationRepository: FormationRepository);
    onSelectedRows(structureId?: StructureId): Observable<SelectedRowsList>;
}
