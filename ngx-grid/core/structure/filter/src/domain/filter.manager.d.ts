import { Filter } from './filter';
import { ItemEntity } from '../../../source/src/domain/item/item.entity';
import { FilterSettings } from './filter.settings';
import { FieldEntity } from '../../../field/src/domain/field/field.entity';
import { FilterTypeId } from './type/filter-type.id';
import { FieldId } from '../../../field/src/domain/field/field.id';
import { FilterTypeModel } from '../api/type/filter-type.model';
import { ActiveFilterModel } from '../api/active/active-filter.model';
import { FilterId } from '../api/id/filter.id';
export declare class FilterManager {
    private readonly filterSettings;
    private readonly filters;
    private activeFilters;
    private filterTypeManager;
    constructor();
    getSettings(): FilterSettings;
    getAll(): Array<Filter>;
    getAllActiveFilters(fields: Map<string, FieldEntity>): ReadonlyArray<ActiveFilterModel>;
    getFilterTypes(): Map<string, Array<FilterTypeModel>>;
    assignFilterTypes(fields: Array<FieldEntity>): void;
    add(fieldId: FieldId, filterTypeId: FilterTypeId, value: any): void;
    filter(entities: Array<ItemEntity>, fields: Map<string, FieldEntity>): Array<ItemEntity>;
    removeAll(): void;
    remove(filterId: FilterId): void;
    private getFilterType;
}
