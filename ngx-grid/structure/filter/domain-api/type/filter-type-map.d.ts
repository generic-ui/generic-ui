import { FilterTypeReadModel } from './filter-type.read-model';
import { FieldId } from '../../../field/domain/core/field/field.id';
export declare class FilterTypeMap {
    private readonly map;
    constructor(map: Map<string, Array<FilterTypeReadModel>>);
    getFilterTypes(fieldId: FieldId): Array<FilterTypeReadModel>;
}
