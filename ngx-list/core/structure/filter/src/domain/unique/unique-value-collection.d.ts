import { UniqueValue } from './unique-value';
import { UniqueValueId } from './unique-value-id';
import { FieldEntity } from '../../../../field/src/domain/field/field.entity';
export declare class UniqueValueCollection {
    private readonly values;
    private allSelected;
    private allDisabled;
    constructor(values: Array<any>, field: FieldEntity);
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
