import { Observable } from 'rxjs';
import { StructureRepository } from '../../structure/read/structure.repository';
import { StructureId } from '../../structure-id';
import { Paging } from './paging';
export declare class PagingRepository {
    private structureRepository;
    constructor(structureRepository: StructureRepository);
    on(structureId: StructureId): Observable<Paging>;
}
