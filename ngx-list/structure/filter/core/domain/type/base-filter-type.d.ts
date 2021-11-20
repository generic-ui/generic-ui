import { OriginItemEntity } from '../../../../source/core/domain/origin/origin-item-entity';
import { FieldEntity } from '../../../../field/core/domain/field/field.entity';
import { FilterTypeId } from './filter-type.id';
import { EntityId } from '@generic-ui/hermes';
export declare abstract class BaseFilterType<T> extends EntityId<FilterTypeId> {
    protected constructor(filterTypeId: FilterTypeId);
    abstract getName(): string;
    protected abstract filterEntity(entity: OriginItemEntity, field: FieldEntity, value: T): boolean;
    toString(): string;
    filterMany(entities: Array<OriginItemEntity>, field: FieldEntity, value: T): Array<OriginItemEntity>;
    filterOne(entity: OriginItemEntity, field: FieldEntity, value: T): boolean;
}
