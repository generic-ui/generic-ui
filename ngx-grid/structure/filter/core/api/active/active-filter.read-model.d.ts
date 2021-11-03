import { FilterId } from '../filter.id';
export declare class ActiveFilterReadModel {
    private readonly filterId;
    private readonly fieldName;
    private readonly filterTypeName;
    private readonly value;
    constructor(filterId: FilterId, fieldName: string, filterTypeName: string, value: any);
    getText(): string;
    getFilterId(): FilterId;
}
//# sourceMappingURL=active-filter.read-model.d.ts.map