import { Observable } from 'rxjs';
import { StructureId } from 'structure/domain/structure-id';
import { OriginQueryService } from 'structure/app/origin/origin-query.service';
import { OriginItem } from 'structure/domain/origin/query/origin-item';
import { OriginRepository } from 'structure/domain/origin/query/origin.repository';
export declare class LocalOriginQueryService extends OriginQueryService {
    private structureId;
    constructor(structureId: StructureId, originRepository: OriginRepository);
    selectAll(): Observable<Array<OriginItem>>;
    selectOne(): Observable<Array<OriginItem>>;
}
