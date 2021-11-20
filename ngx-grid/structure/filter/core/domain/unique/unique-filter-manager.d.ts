import { Optional } from '@generic-ui/hermes';
import { FieldId } from '../../../../field/core/domain/field/field.id';
import { OriginItemEntity } from '../../../../source/core/domain/origin/origin-item-entity';
import { FieldEntity } from '../../../../field/core/domain/field/field.entity';
import { UniqueValue } from './unique-value';
import { UniqueValueId } from './unique-value-id';
export declare class UniqueFilterManager {
    private readonly uniqueValueMap;
    calculate(entities: Array<OriginItemEntity>, field: FieldEntity): void;
    calculateAll(entities: Array<OriginItemEntity>, fields: Array<FieldEntity>): void;
    filterAll(entities: Array<OriginItemEntity>, fields: Array<FieldEntity>): Array<OriginItemEntity>;
    filter(entities: Array<OriginItemEntity>, field: FieldEntity): Array<OriginItemEntity>;
    selectAll(fieldId: FieldId): void;
    select(fieldId: FieldId, uniqueValueId: UniqueValueId): void;
    unselectAll(fieldId: FieldId): void;
    unselect(fieldId: FieldId, uniqueValueId: UniqueValueId): void;
    getAll(fields: Array<FieldEntity>): Map<string, Array<UniqueValue>>;
    getValues(field: FieldEntity): Optional<Array<UniqueValue>>;
}
