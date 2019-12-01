import { Observable } from 'rxjs';
import { StructureFilterRepository } from '../../../domain/structure/query/filter/structure.filter.repository';
import { StructureQuickFilterRepository } from '../../../domain/structure/query/filter/structure.quick-filter.repository';
import { StructureId } from '../../../domain/structure-id';
export declare class StructureFilterReadModelRepository {
    private structureFilterRepository;
    private structureQuickFilterRepository;
    constructor(structureFilterRepository: StructureFilterRepository, structureQuickFilterRepository: StructureQuickFilterRepository);
    selectFilteringEnabled(structureId: StructureId): Observable<boolean>;
    selectQuickFiltersEnabled(structureId: StructureId): Observable<boolean>;
}
