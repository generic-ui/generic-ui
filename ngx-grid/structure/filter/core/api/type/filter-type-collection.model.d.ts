import { FilterTypeModel } from './filter-type.model';
import { FieldId } from '../../../../field/core/domain/field/field.id';
export declare class FilterTypeCollectionModel {
    private readonly map;
    constructor(map: Map<string, Array<FilterTypeModel>>);
    getFilterTypes(fieldId: FieldId): Array<FilterTypeModel>;
}
