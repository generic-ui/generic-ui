import { ItemEntity } from '../../../../source/src/domain/item/item.entity';
import { FieldEntity } from '../../../../field/src/domain/field/field.entity';
import { FilterTypeId } from './filter-type.id';
import { EntityId } from '@generic-ui/hermes';
export declare abstract class BaseFilterType<T> extends EntityId<FilterTypeId> {
    protected constructor(filterTypeId: FilterTypeId);
    abstract getName(): string;
    protected abstract filterEntity(entity: ItemEntity, field: FieldEntity, value: T): boolean;
    toString(): string;
    filterMany(entities: Array<ItemEntity>, field: FieldEntity, value: T): Array<ItemEntity>;
    filterOne(entity: ItemEntity, field: FieldEntity, value: T): boolean;
}
