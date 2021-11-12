import { FilterWarehouse } from '../api/filter.warehouse';
import { FilterEnabledArchive } from '../api/read/filter-enabled.archive';
import { QuickFilterEnabledArchive } from '../api/read/quick-filter-enabled.archive';
import { FilterTypeArchive } from '../api/type/filter-type.archive';
import { UniqueValuesArchive } from '../api/unique/unique-values.archive';
import { ActiveFilterArchive } from '../api/active/active-filter.archive';
import { StructureId } from '../../../core/api/structure.id';
import { HermesObservable, HermesSingle, Optional } from '@generic-ui/hermes';
import { FilterTypeMap } from '../api/type/filter-type-map';
import { ActiveFilterReadModel } from '../api/active/active-filter.read-model';
import { UniqueValuesReadModel } from '../api/unique/unique-values.read-model';
import { FieldId } from '../../../field/core/domain/field/field.id';
import { FilterTypeReadModel } from '../api/type/filter-type.read-model';
import { FilterTypeId } from '../domain/type/filter-type.id';
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
    onFilterTypesForFieldId(fieldId: FieldId, structureId: StructureId): HermesObservable<ReadonlyArray<FilterTypeReadModel>>;
    onActiveFilters(structureId: StructureId): HermesObservable<ReadonlyArray<ActiveFilterReadModel>>;
    onUniqueValues(structureId: StructureId): HermesObservable<UniqueValuesReadModel>;
    onceFilterTypeId(fieldId: FieldId, filterTypeName: string, structureId: StructureId): HermesSingle<Optional<FilterTypeId>>;
}
