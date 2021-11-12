import { HermesObservable, HermesSingle, Optional, Warehouse } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { FilterTypeMap } from './type/filter-type-map';
import { ActiveFilterReadModel } from './active/active-filter.read-model';
import { UniqueValuesReadModel } from './unique/unique-values.read-model';
import { FieldId } from '../../../field/core/domain/field/field.id';
import { FilterTypeReadModel } from './type/filter-type.read-model';
import { FilterTypeId } from '../domain/type/filter-type.id';
export declare abstract class FilterWarehouse implements Warehouse {
    protected constructor();
    abstract onFilteringEnabled(structureId: StructureId): HermesObservable<boolean>;
    abstract onQuickFiltersEnabled(structureId: StructureId): HermesObservable<boolean>;
    abstract onFilterTypes(structureId: StructureId): HermesObservable<FilterTypeMap>;
    abstract onFilterTypesForFieldId(fieldId: FieldId, structureId: StructureId): HermesObservable<ReadonlyArray<FilterTypeReadModel>>;
    abstract onActiveFilters(structureId: StructureId): HermesObservable<ReadonlyArray<ActiveFilterReadModel>>;
    abstract onUniqueValues(structureId: StructureId): HermesObservable<UniqueValuesReadModel>;
    abstract onceFilterTypeId(fieldId: FieldId, filterTypeName: string, structureId: StructureId): HermesSingle<Optional<FilterTypeId>>;
}
