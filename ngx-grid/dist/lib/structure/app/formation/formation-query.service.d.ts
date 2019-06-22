import { Observable } from 'rxjs';
import { StructureId } from 'structure/domain/structure-id';
import { FormationRepository } from 'structure/domain/formation/query/formation-repository';
import { SelectedRowsList } from 'structure/domain/formation/query/selected-rows/selected-rows-list';
export declare class FormationQueryService {
    private formationRepository;
    constructor(formationRepository: FormationRepository);
    selectSelectedRows(structureId: StructureId): Observable<SelectedRowsList>;
}
