import { HermesObservable, Warehouse } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { FilterTypeMap } from './type/filter-type-map';
import { ActiveFilterReadModel } from './active/active-filter.read-model';
import { UniqueValuesReadModel } from './unique/unique-values.read-model';
export declare abstract class FilterWarehouse implements Warehouse {
    protected constructor();
    abstract onFilteringEnabled(structureId: StructureId): HermesObservable<boolean>;
    abstract onQuickFiltersEnabled(structureId: StructureId): HermesObservable<boolean>;
    abstract onFilterTypes(structureId: StructureId): HermesObservable<FilterTypeMap>;
    abstract onActiveFilters(structureId: StructureId): HermesObservable<ReadonlyArray<ActiveFilterReadModel>>;
    abstract onUniqueValues(structureId: StructureId): HermesObservable<UniqueValuesReadModel>;
}
