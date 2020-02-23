import { Observable } from 'rxjs';
import { StructureSearchingRepository } from '../../../domain/structure/read/searching/enabled/structure.searching.repository';
import { StructureId } from '../../../domain/structure-id';
export declare class StructureSearchReadModelRepository {
    private structureSearchingRepository;
    constructor(structureSearchingRepository: StructureSearchingRepository);
    onSearchEnabled(structureId: StructureId): Observable<boolean>;
}
