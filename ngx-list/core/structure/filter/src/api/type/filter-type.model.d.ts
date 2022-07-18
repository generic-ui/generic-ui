import { FilterTypeId } from '../../domain/type/filter-type.id';
export declare class FilterTypeModel {
    private readonly filterTypeId;
    private readonly name;
    constructor(id: FilterTypeId, name: string);
    getId(): FilterTypeId;
    getName(): string;
}
