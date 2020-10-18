import { Filter } from './filter';
import { OriginItemEntity } from '../../../source/core/domain/origin/origin-item-entity';
import { FilterSettings } from './filter.settings';
import { Field } from '../../../field/core/domain/field/field';
import { FilterTypeId } from './type/filter-type.id';
import { FieldId } from '../../../field/core/domain/field/field.id';
import { FilterTypeReadModel } from '../api/type/filter-type.read-model';
import { ActiveFilterReadModel } from '../api/active/active-filter.read-model';
import { FilterId } from '../api/filter.id';
export declare class FilterManager {
    private readonly filterSettings;
    private readonly filters;
    private activeFilters;
    private filterTypeManager;
    constructor();
    getSettings(): FilterSettings;
    getAll(): Array<Filter>;
    getAllActiveFilters(fields: Map<string, Field>): ReadonlyArray<ActiveFilterReadModel>;
    getFilterTypes(): Map<string, Array<FilterTypeReadModel>>;
    assignFilterTypes(fields: Array<Field>): void;
    add(fieldId: FieldId, filterTypeId: FilterTypeId, value: any): void;
    filter(entities: Array<OriginItemEntity>, fields: Map<string, Field>): Array<OriginItemEntity>;
    removeAll(): void;
    remove(filterId: FilterId): void;
    private getFilterType;
}
