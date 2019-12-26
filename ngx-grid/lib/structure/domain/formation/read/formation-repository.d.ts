import { Observable } from 'rxjs';
import { StructureRepository } from '../../structure/read/structure.repository';
import { StructureId } from '../../structure-id';
import { Formation } from './formation';
export declare class FormationRepository {
    private structureRepository;
    constructor(structureRepository: StructureRepository);
    onFormation(structureId: StructureId): Observable<Formation>;
}
