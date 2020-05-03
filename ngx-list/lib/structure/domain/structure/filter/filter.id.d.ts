import { TypeField } from '../field/data-type/type.field';
export declare class FilterId {
    private readonly id;
    constructor(field: TypeField, filterId: string);
    getId(): string;
}
