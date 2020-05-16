import { Observable } from 'rxjs';
import { StructureFilterRepository } from './read/structure.filter.repository';
import { StructureQuickFilterRepository } from './read/structure.quick-filter.repository';
import { StructureId } from '../../domain/structure.id';
export declare class StructureFilterWarehouse {
    private structureFilterRepository;
    private structureQuickFilterRepository;
    constructor(structureFilterRepository: StructureFilterRepository, structureQuickFilterRepository: StructureQuickFilterRepository);
    onFilteringEnabled(structureId: StructureId): Observable<boolean>;
    onQuickFiltersEnabled(structureId: StructureId): Observable<boolean>;
}
