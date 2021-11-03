import { HermesObservable, Warehouse } from '@generic-ui/hermes';
import { FilterEnabledArchive } from './read/filter-enabled.archive';
import { QuickFilterEnabledArchive } from './read/quick-filter-enabled.archive';
import { StructureId } from '../../../core/api/structure.id';
import { FilterTypeArchive } from './type/filter-type.archive';
import { FilterTypeMap } from './type/filter-type-map';
import { ActiveFilterReadModel } from './active/active-filter.read-model';
import { ActiveFilterArchive } from './active/active-filter.archive';
import { UniqueValuesReadModel } from './unique/unique-values.read-model';
import { UniqueValuesArchive } from './unique/unique-values.archive';
export declare class FilterWarehouse implements Warehouse {
    private readonly filterEnabledArchive;
    private readonly structureQuickFilterRepository;
    private readonly filterTypeArchive;
    private readonly uniqueValuesArchive;
    private readonly activeFilterArchive;
    constructor(filterEnabledArchive: FilterEnabledArchive, structureQuickFilterRepository: QuickFilterEnabledArchive, filterTypeArchive: FilterTypeArchive, uniqueValuesArchive: UniqueValuesArchive, activeFilterArchive: ActiveFilterArchive);
    onFilteringEnabled(structureId: StructureId): HermesObservable<boolean>;
    onQuickFiltersEnabled(structureId: StructureId): HermesObservable<boolean>;
    onFilterTypes(structureId: StructureId): HermesObservable<FilterTypeMap>;
    onActiveFilters(structureId: StructureId): HermesObservable<ReadonlyArray<ActiveFilterReadModel>>;
    onUniqueValues(structureId: StructureId): HermesObservable<UniqueValuesReadModel>;
}
