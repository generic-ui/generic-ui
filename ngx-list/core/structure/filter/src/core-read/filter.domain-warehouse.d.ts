import { FilterWarehouse } from '../api/filter.warehouse';
import { FilterEnabledArchive } from './config/filter-enabled.archive';
import { QuickFilterEnabledArchive } from './quick-filter/quick-filter-enabled.archive';
import { UniqueValueCollectionArchive } from './unique/unique-value-collection.archive';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { HermesObservable, HermesSingle, Optional } from '@generic-ui/hermes';
import { FilterTypeCollectionModel } from '../api/type/filter-type-collection.model';
import { ActiveFilterModel } from '../api/active/active-filter.model';
import { UniqueValueCollectionModel } from '../api/unique/unique-value-collection.model';
import { FieldId } from '../../../field/src/domain/field/field.id';
import { FilterTypeModel } from '../api/type/filter-type.model';
import { FilterTypeId } from '../domain/type/filter-type.id';
export declare class FilterDomainWarehouse extends FilterWarehouse {
    private readonly filterEnabledArchive;
    private readonly structureQuickFilterRepository;
    private readonly uniqueValuesArchive;
    private readonly activeFilterArchive;
    private readonly filterTypeArchive;
    constructor(filterEnabledArchive: FilterEnabledArchive, structureQuickFilterRepository: QuickFilterEnabledArchive, uniqueValuesArchive: UniqueValueCollectionArchive);
    static readonly services: (typeof QuickFilterEnabledArchive | typeof UniqueValueCollectionArchive)[];
    onFilteringEnabled(structureId: StructureId): HermesObservable<boolean>;
    onQuickFiltersEnabled(structureId: StructureId): HermesObservable<boolean>;
    onFilterTypes(structureId: StructureId): HermesObservable<FilterTypeCollectionModel>;
    onFilterTypesForFieldId(fieldId: FieldId, structureId: StructureId): HermesObservable<ReadonlyArray<FilterTypeModel>>;
    onActiveFilters(structureId: StructureId): HermesObservable<ReadonlyArray<ActiveFilterModel>>;
    findFilters(structureId: StructureId): Optional<ReadonlyArray<ActiveFilterModel>>;
    onUniqueValues(structureId: StructureId): HermesObservable<UniqueValueCollectionModel>;
    onceFilterTypeId(fieldId: FieldId, filterTypeName: string, structureId: StructureId): HermesSingle<Optional<FilterTypeId>>;
}
