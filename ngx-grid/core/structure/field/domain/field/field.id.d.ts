import { EntityId, Key } from '@generic-ui/hermes';
export declare class FieldId extends EntityId implements Key {
    private readonly id;
    constructor(id: string);
    getId(): string;
    equals(fieldId: FieldId): boolean;
    toString(): string;
}
