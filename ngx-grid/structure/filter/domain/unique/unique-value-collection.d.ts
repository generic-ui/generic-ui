import { UniqueValue } from './unique-value';
import { UniqueValueId } from './unique-value-id';
import { Field } from '../../../field/domain/core/field/field';
export declare class UniqueValueCollection {
    private readonly values;
    private allSelected;
    private allDisabled;
    constructor(values: Array<any>, field: Field);
    getAll(): Array<UniqueValue>;
    isAllSelected(): boolean;
    isAllDisabled(): boolean;
    getNotSelected(): Array<UniqueValue>;
    selectAll(): void;
    select(uniqueValueId: UniqueValueId): void;
    unselectAll(): void;
    unselect(uniqueValueId: UniqueValueId): void;
    private calculateAllSelected;
    private calculateAllDisabled;
}
