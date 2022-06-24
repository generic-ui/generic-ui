import { FilterId } from '../id/filter.id';
export declare class ActiveFilterModel {
    private readonly filterId;
    private readonly fieldName;
    private readonly filterTypeName;
    private readonly value;
    constructor(filterId: FilterId, fieldName: string, filterTypeName: string, value: any);
    getText(): string;
    getFilterId(): FilterId;
    getFieldName(): string;
    getFilterTypeName(): string;
    getValue(): any;
}
