import { Field } from '../../../../field/core/domain/field/field';
import { FilterTypeId } from './filter-type.id';
import { BaseFilterType } from './base-filter-type';
import { FilterTypeReadModel } from '../../api/type/filter-type.read-model';
export declare class FilterTypeManager {
    private readonly fieldIds;
    private readonly map;
    private readonly filterTypeMap;
    private readonly dataTypeToFilterType;
    private readonly filterTypeIdGenerator;
    constructor(fields: Array<Field>);
    getFilterType(filterTypeId: FilterTypeId): BaseFilterType<any>;
    getFieldIdsToFilterTypes(): Map<string, Array<FilterTypeReadModel>>;
    private addFields;
    private addField;
    private assignFilterTypes;
    private assignFilterTypesForDataTypeUnknown;
    private assignFilterTypesForDataTypeNumber;
    private assignFilterTypesForDataTypeString;
    private assignFilterTypesForDataTypeBoolean;
    private assignFilterTypesForDataTypeDate;
    private assignFilterTypesForDataTypeCustom;
    private generateId;
    private addFilterTypes;
}
//# sourceMappingURL=filter-type.manager.d.ts.map