import { Observable } from 'rxjs';
import { Paging } from 'structure/domain/paging/query/paging';
import { StructureId } from 'structure/domain/structure-id';
import { StructureRepository } from 'structure/domain/structure/query/structure.repository';
export declare class PagingRepository {
    private structureRepository;
    constructor(structureRepository: StructureRepository);
    select(structureId: StructureId): Observable<Paging>;
}
