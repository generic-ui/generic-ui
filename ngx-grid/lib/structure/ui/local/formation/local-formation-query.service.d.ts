import { Observable } from 'rxjs';
import { StructureId } from '../../../domain/structure-id';
import { FormationQueryService } from '../../../app/formation/formation-query.service';
import { FormationRepository } from '../../../domain/formation/query/formation-repository';
import { SelectedRowsList } from '../../../domain/formation/query/selected-rows/selected-rows-list';
export declare class LocalFormationQueryService extends FormationQueryService {
    private structureId;
    constructor(structureId: StructureId, formationRepository: FormationRepository);
    selectSelectedRows(): Observable<SelectedRowsList>;
}
