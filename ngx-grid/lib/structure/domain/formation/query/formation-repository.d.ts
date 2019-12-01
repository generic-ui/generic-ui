import { Observable } from 'rxjs';
import { StructureRepository } from '../../structure/query/structure.repository';
import { StructureId } from '../../structure-id';
import { Formation } from './formation';
export declare class FormationRepository {
    private structureRepository;
    constructor(structureRepository: StructureRepository);
    select(structureId: StructureId): Observable<Formation>;
}
