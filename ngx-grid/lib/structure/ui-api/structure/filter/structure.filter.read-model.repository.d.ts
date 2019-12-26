import { Observable } from 'rxjs';
import { StructureFilterRepository } from '../../../domain/structure/read/filter/structure.filter.repository';
import { StructureQuickFilterRepository } from '../../../domain/structure/read/filter/structure.quick-filter.repository';
import { StructureId } from '../../../domain/structure-id';
export declare class StructureFilterReadModelRepository {
    private structureFilterRepository;
    private structureQuickFilterRepository;
    constructor(structureFilterRepository: StructureFilterRepository, structureQuickFilterRepository: StructureQuickFilterRepository);
    onFilteringEnabled(structureId: StructureId): Observable<boolean>;
    onQuickFiltersEnabled(structureId: StructureId): Observable<boolean>;
}
