import { Observable } from 'rxjs';
import { StructureQueryService } from '../../../app/structure/structure-query.service';
import { StructureId } from '../../../domain/structure-id';
import { StructureRepository } from '../../../domain/structure/query/structure.repository';
import { Structure } from '../../../domain/structure/query/structure';
export declare class LocalStructureQueryService extends StructureQueryService {
    private structureId;
    constructor(structureId: StructureId, structureRepository: StructureRepository);
    select(): Observable<Structure>;
    selectVerticalScrollEnabled(): Observable<boolean>;
}
