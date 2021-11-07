import { FilterWarehouse } from '../api/filter.warehouse';
import { FilterEnabledArchive } from '../api/read/filter-enabled.archive';
import { QuickFilterEnabledArchive } from '../api/read/quick-filter-enabled.archive';
import { FilterTypeArchive } from '../api/type/filter-type.archive';
import { UniqueValuesArchive } from '../api/unique/unique-values.archive';
import { ActiveFilterArchive } from '../api/active/active-filter.archive';
import { StructureId } from '../../../core/api/structure.id';
import { HermesObservable } from '@generic-ui/hermes';
import { FilterTypeMap } from '../api/type/filter-type-map';
import { ActiveFilterReadModel } from '../api/active/active-filter.read-model';
import { UniqueValuesReadModel } from '../api/unique/unique-values.read-model';
export declare class DomainFilterWarehouse extends FilterWarehouse {
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
