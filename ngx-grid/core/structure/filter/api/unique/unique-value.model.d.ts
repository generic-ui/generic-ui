import { UniqueValueId } from '../../domain/unique/unique-value-id';
export declare class UniqueValueModel {
    private readonly id;
    private readonly value;
    private readonly displayValue;
    private readonly enabled;
    constructor(id: UniqueValueId, value: any, enabled: boolean);
    getId(): UniqueValueId;
    getValue(): any;
    geDisplayValue(): string;
    isEnabled(): boolean;
}
