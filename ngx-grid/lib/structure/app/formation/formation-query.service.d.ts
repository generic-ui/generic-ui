import { Observable } from 'rxjs';
import { FormationRepository } from '../../domain/formation/query/formation-repository';
import { StructureId } from '../../domain/structure-id';
import { SelectedRowsList } from '../../domain/formation/query/selected-rows/selected-rows-list';
export declare class FormationQueryService {
    private formationRepository;
    constructor(formationRepository: FormationRepository);
    selectSelectedRows(structureId?: StructureId): Observable<SelectedRowsList>;
}
