import { Observable } from 'rxjs';
import { StructureId } from '../../domain/structure.id';
import { StructureSummariesRepository } from '../../read/structure/summaries/structure.summaries.repository';
export declare class StructureSummariesWarehouse {
    private structureSummariesRepository;
    constructor(structureSummariesRepository: StructureSummariesRepository);
    onSummariesEnabled(structureId?: StructureId): Observable<boolean>;
}
