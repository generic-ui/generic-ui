import { Field } from '../field/data-type/field';
export declare class FilterId {
    private readonly id;
    constructor(field: Field, filterId: string);
    getId(): string;
}
