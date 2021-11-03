import { Key } from '@generic-ui/hermes';
export declare class FieldId implements Key {
    private readonly id;
    constructor(id: string);
    getId(): string;
    equals(fieldId: FieldId): boolean;
    toString(): string;
}
