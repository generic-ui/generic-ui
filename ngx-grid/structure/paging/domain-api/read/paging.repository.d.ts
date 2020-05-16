import { Observable } from 'rxjs';
import { StructureReadModelRepository } from '../../../../lib/structure/domain-api/read/structure.read-model-repository';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
import { Paging } from './paging';
export declare class PagingRepository {
    private structureRepository;
    constructor(structureRepository: StructureReadModelRepository);
    on(structureId: StructureId): Observable<Paging>;
}
