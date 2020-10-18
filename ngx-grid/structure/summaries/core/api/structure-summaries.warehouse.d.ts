import { Observable } from 'rxjs';
import { StructureId } from '../../../core/api/structure.id';
import { StructureSummariesRepository } from './enabled/structure.summaries.repository';
export declare class StructureSummariesWarehouse {
    private structureSummariesRepository;
    constructor(structureSummariesRepository: StructureSummariesRepository);
    onSummariesEnabled(structureId?: StructureId): Observable<boolean>;
}
