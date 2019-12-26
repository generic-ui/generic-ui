import { Observable } from 'rxjs';
import { StructureReadModelService } from '../../../ui-api/structure/structure-read-model.service';
import { StructureId } from '../../../domain/structure-id';
import { StructureRepository } from '../../../domain/structure/read/structure.repository';
import { Structure } from '../../../domain/structure/read/structure';
export declare class LocalStructureReadModelService extends StructureReadModelService {
    private structureId;
    constructor(structureId: StructureId, structureRepository: StructureRepository);
    onStructure(): Observable<Structure>;
    onVerticalScrollEnabled(): Observable<boolean>;
}
