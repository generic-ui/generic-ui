import { Observable } from 'rxjs';
import { StructureId } from 'structure/domain/structure-id';
import { OriginRepository } from 'structure/domain/origin/query/origin.repository';
import { OriginItem } from 'structure/domain/origin/query/origin-item';
export declare class OriginQueryService {
    private originRepository;
    constructor(originRepository: OriginRepository);
    selectAll(structureId?: StructureId): Observable<Array<OriginItem>>;
    selectSize(structureId?: StructureId): Observable<number>;
}
