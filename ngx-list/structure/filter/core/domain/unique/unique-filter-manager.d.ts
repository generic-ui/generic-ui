import { Optional } from '@generic-ui/hermes';
import { FieldId } from '../../../../field/core/domain/field/field.id';
import { OriginItemEntity } from '../../../../source/core/domain/origin/origin-item-entity';
import { Field } from '../../../../field/core/domain/field/field';
import { UniqueValue } from './unique-value';
import { UniqueValueId } from './unique-value-id';
export declare class UniqueFilterManager {
    private readonly uniqueValueMap;
    calculate(entities: Array<OriginItemEntity>, field: Field): void;
    calculateAll(entities: Array<OriginItemEntity>, fields: Array<Field>): void;
    filterAll(entities: Array<OriginItemEntity>, fields: Array<Field>): Array<OriginItemEntity>;
    filter(entities: Array<OriginItemEntity>, field: Field): Array<OriginItemEntity>;
    selectAll(fieldId: FieldId): void;
    select(fieldId: FieldId, uniqueValueId: UniqueValueId): void;
    unselectAll(fieldId: FieldId): void;
    unselect(fieldId: FieldId, uniqueValueId: UniqueValueId): void;
    getAll(fields: Array<Field>): Map<string, Array<UniqueValue>>;
    getValues(field: Field): Optional<Array<UniqueValue>>;
}
//# sourceMappingURL=unique-filter-manager.d.ts.map