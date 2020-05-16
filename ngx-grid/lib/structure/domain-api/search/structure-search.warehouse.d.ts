import { Observable } from 'rxjs';
import { StructureSearchingRepository } from './enabled/structure.searching.repository';
import { StructureId } from '../../domain/structure.id';
export declare class StructureSearchWarehouse {
    private structureSearchingRepository;
    constructor(structureSearchingRepository: StructureSearchingRepository);
    onSearchEnabled(structureId?: StructureId): Observable<boolean>;
}
