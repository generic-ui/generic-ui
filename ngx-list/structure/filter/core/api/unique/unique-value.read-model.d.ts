import { UniqueValueId } from '../../domain/unique/unique-value-id';
export declare class UniqueValueReadModel {
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
//# sourceMappingURL=unique-value.read-model.d.ts.map