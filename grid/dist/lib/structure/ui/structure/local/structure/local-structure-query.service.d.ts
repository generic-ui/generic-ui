import { Observable } from 'rxjs';
import { Structure } from 'structure/domain/structure/query/structure';
import { StructureId } from 'structure/domain/structure-id';
import { StructureRepository } from 'structure/domain/structure/query/structure.repository';
import { StructureQueryService } from 'structure/app/structure/structure-query.service';
export declare class LocalStructureQueryService extends StructureQueryService {
    private structureId;
    constructor(structureId: StructureId, structureRepository: StructureRepository);
    select(): Observable<Structure>;
}
