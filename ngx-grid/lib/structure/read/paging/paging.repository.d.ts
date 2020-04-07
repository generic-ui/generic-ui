import { Observable } from 'rxjs';
import { StructureReadModelRepository } from '../structure/structure.read-model-repository';
import { StructureId } from '../../domain/structure.id';
import { Paging } from './paging';
export declare class PagingRepository {
    private structureRepository;
    constructor(structureRepository: StructureReadModelRepository);
    on(structureId: StructureId): Observable<Paging>;
}
