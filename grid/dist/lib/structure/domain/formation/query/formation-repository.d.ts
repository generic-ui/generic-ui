import { Observable } from 'rxjs';
import { StructureId } from 'structure/domain/structure-id';
import { Formation } from 'structure/domain/formation/query/formation';
import { StructureRepository } from 'structure/domain/structure/query/structure.repository';
export declare class FormationRepository {
    private structureRepository;
    constructor(structureRepository: StructureRepository);
    select(structureId: StructureId): Observable<Formation>;
}
