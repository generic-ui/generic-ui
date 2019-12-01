import { Observable } from 'rxjs';
import { StructureSearchingRepository } from '../../../domain/structure/query/searching/structure.searching.repository';
import { StructureId } from '../../../domain/structure-id';
export declare class StructureSearchReadModelRepository {
    private structureSearchingRepository;
    constructor(structureSearchingRepository: StructureSearchingRepository);
    selectSearchEnabled(structureId: StructureId): Observable<boolean>;
}
