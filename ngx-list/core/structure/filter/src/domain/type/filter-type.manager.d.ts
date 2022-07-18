import { FieldEntity } from '../../../../field/src/domain/field/field.entity';
import { FilterTypeId } from './filter-type.id';
import { BaseFilterType } from './base-filter-type';
import { FilterTypeModel } from '../../api/type/filter-type.model';
export declare class FilterTypeManager {
    private readonly fieldIds;
    private readonly map;
    private readonly filterTypeMap;
    private readonly dataTypeToFilterType;
    private readonly filterTypeIdGenerator;
    constructor(fields: Array<FieldEntity>);
    getFilterType(filterTypeId: FilterTypeId): BaseFilterType<any>;
    getFieldIdsToFilterTypes(): Map<string, Array<FilterTypeModel>>;
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
