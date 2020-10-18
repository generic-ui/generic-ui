import { Observable } from 'rxjs';
import { StructureReadModelRepository } from '../../../../grid/core/domain-read/structure.read-model-repository';
import { StructureId } from '../../../../core/api/structure.id';
import { Paging } from './paging';
export declare class PagingRepository {
    private readonly structureRepository;
    constructor(structureRepository: StructureReadModelRepository);
    on(structureId: StructureId): Observable<Paging>;
}
