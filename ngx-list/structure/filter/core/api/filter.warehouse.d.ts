import { Observable } from 'rxjs';
import { Warehouse } from '@generic-ui/hermes';
import { FilterEnabledRepository } from './read/filter-enabled.repository';
import { QuickFilterEnabledRepository } from './read/quick-filter-enabled.repository';
import { StructureId } from '../../../core/api/structure.id';
import { FilterTypeRepository } from './type/filter-type.repository';
import { FilterTypeMap } from './type/filter-type-map';
import { ActiveFilterReadModel } from './active/active-filter.read-model';
import { ActiveFilterRepository } from './active/active-filter.repository';
import { UniqueValuesReadModel } from './unique/unique-values.read-model';
import { UniqueValuesRepository } from './unique/unique-values.repository';
export declare class FilterWarehouse implements Warehouse {
    private readonly structureFilterRepository;
    private readonly structureQuickFilterRepository;
    private readonly filterTypeRepository;
    private readonly uniqueValuesRepository;
    private readonly activeFilterRepository;
    constructor(structureFilterRepository: FilterEnabledRepository, structureQuickFilterRepository: QuickFilterEnabledRepository, filterTypeRepository: FilterTypeRepository, uniqueValuesRepository: UniqueValuesRepository, activeFilterRepository: ActiveFilterRepository);
    onFilteringEnabled(structureId: StructureId): Observable<boolean>;
    onQuickFiltersEnabled(structureId: StructureId): Observable<boolean>;
    onFilterTypes(structureId: StructureId): Observable<FilterTypeMap>;
    onActiveFilters(structureId: StructureId): Observable<ReadonlyArray<ActiveFilterReadModel>>;
    onUniqueValues(structureId: StructureId): Observable<UniqueValuesReadModel>;
}
