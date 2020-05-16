import { Observable } from 'rxjs';
import { StructureReadModelRepository } from '../../read/structure.read-model-repository';
import { StructureId } from '../../../domain/structure.id';
import { Formation } from './formation';
export declare class FormationRepository {
    private structureRepository;
    constructor(structureRepository: StructureReadModelRepository);
    onFormation(structureId: StructureId): Observable<Formation>;
}
