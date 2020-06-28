import { FilterId } from './filter.id';
import { FieldId } from '../../field/domain/core/field/field.id';
import { FilterTypeId } from './type/filter-type.id';
export declare class Filter {
    private readonly filterId;
    private readonly fieldId;
    private readonly filterTypeId;
    private readonly filterValue;
    constructor(filterId: FilterId, fieldId: FieldId, filterTypeId: FilterTypeId, filterValue: any);
    getFilterId(): FilterId;
    getFilterTypeId(): FilterTypeId;
    getFieldId(): FieldId;
    getFilterValue(): any;
}
