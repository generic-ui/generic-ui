import { Observable } from 'rxjs';
import { StructureReadModelRepository } from '../../../../grid/core/api/read/structure.read-model-repository';
import { StructureId } from '../../../../core/domain/structure.id';
import { Paging } from './paging';
export declare class PagingRepository {
    private readonly structureRepository;
    constructor(structureRepository: StructureReadModelRepository);
    on(structureId: StructureId): Observable<Paging>;
}
