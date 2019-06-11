import { Observable } from 'rxjs';
import { StructureId } from 'structure/domain/structure-id';
import { FormationQueryService } from 'structure/app/formation/formation-query.service';
import { SelectedRowsList } from 'structure/domain/formation/query/selected-rows/selected-rows-list';
import { FormationRepository } from 'structure/domain/formation/query/formation-repository';
export declare class LocalFormationQueryService extends FormationQueryService {
    private structureId;
    constructor(structureId: StructureId, formationRepository: FormationRepository);
    selectSelectedRows(): Observable<SelectedRowsList>;
}
