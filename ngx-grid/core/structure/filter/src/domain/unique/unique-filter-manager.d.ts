import { Optional } from '@generic-ui/hermes';
import { FieldId } from '../../../../field/src/domain/field/field.id';
import { ItemEntity } from '../../../../source/src/domain/item/item.entity';
import { FieldEntity } from '../../../../field/src/domain/field/field.entity';
import { UniqueValue } from './unique-value';
import { UniqueValueId } from './unique-value-id';
export declare class UniqueFilterManager {
    private readonly uniqueValueMap;
    calculate(entities: Array<ItemEntity>, field: FieldEntity): void;
    calculateAll(entities: Array<ItemEntity>, fields: Array<FieldEntity>): void;
    filterAll(entities: Array<ItemEntity>, fields: Array<FieldEntity>): Array<ItemEntity>;
    filter(entities: Array<ItemEntity>, field: FieldEntity): Array<ItemEntity>;
    selectAll(fieldId: FieldId): void;
    select(fieldId: FieldId, uniqueValueId: UniqueValueId): void;
    unselectAll(fieldId: FieldId): void;
    unselect(fieldId: FieldId, uniqueValueId: UniqueValueId): void;
    getAll(fields: Array<FieldEntity>): Map<string, Array<UniqueValue>>;
    getValues(field: FieldEntity): Optional<Array<UniqueValue>>;
}
