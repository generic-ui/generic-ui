import { Observable } from 'rxjs';
import { StructureRepository } from '../../structure/query/structure.repository';
import { StructureId } from '../../structure-id';
import { Paging } from './paging';
export declare class PagingRepository {
    private structureRepository;
    constructor(structureRepository: StructureRepository);
    select(structureId: StructureId): Observable<Paging>;
}
