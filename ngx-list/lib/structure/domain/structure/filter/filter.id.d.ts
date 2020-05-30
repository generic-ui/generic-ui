import { TypeField } from '../../../../../structure/field/domain/data-type/type.field';
export declare class FilterId {
    private readonly id;
    constructor(field: TypeField, filterId: string);
    getId(): string;
}
