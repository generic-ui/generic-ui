import { UniqueValueId } from './unique-value-id';
export declare class UniqueValue {
    private readonly id;
    private value;
    private displayValue;
    private enabled;
    constructor(id: UniqueValueId, value: any, displayValue: string, enabled: boolean);
    getId(): UniqueValueId;
    getValue(): any;
    getDisplayValue(): string;
    isEnabled(): boolean;
    isDisabled(): boolean;
    select(): void;
    unselect(): void;
}
