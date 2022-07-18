import { HermesObservable, HermesSingle, Optional, Warehouse } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { FilterTypeCollectionModel } from './type/filter-type-collection.model';
import { ActiveFilterModel } from './active/active-filter.model';
import { UniqueValueCollectionModel } from './unique/unique-value-collection.model';
import { FieldId } from '../../../field/src/domain/field/field.id';
import { FilterTypeModel } from './type/filter-type.model';
import { FilterTypeId } from '../domain/type/filter-type.id';
export declare abstract class FilterWarehouse implements Warehouse {
    protected constructor();
    abstract onFilteringEnabled(structureId: StructureId): HermesObservable<boolean>;
    abstract onQuickFiltersEnabled(structureId: StructureId): HermesObservable<boolean>;
    abstract onFilterTypes(structureId: StructureId): HermesObservable<FilterTypeCollectionModel>;
    abstract onFilterTypesForFieldId(fieldId: FieldId, structureId: StructureId): HermesObservable<ReadonlyArray<FilterTypeModel>>;
    abstract onActiveFilters(structureId: StructureId): HermesObservable<ReadonlyArray<ActiveFilterModel>>;
    abstract findFilters(structureId: StructureId): Optional<ReadonlyArray<ActiveFilterModel>>;
    abstract onUniqueValues(structureId: StructureId): HermesObservable<UniqueValueCollectionModel>;
    abstract onceFilterTypeId(fieldId: FieldId, filterTypeName: string, structureId: StructureId): HermesSingle<Optional<FilterTypeId>>;
}
