import { OriginItemEntity } from '../../../source/domain/origin/origin-item-entity';
import { Field } from '../../../field/domain/core/field/field';
import { FilterTypeId } from './filter-type.id';
export declare abstract class BaseFilterType<T> {
    private readonly filterTypeId;
    protected constructor(filterTypeId: FilterTypeId);
    abstract getName(): string;
    protected abstract filterEntity(entity: OriginItemEntity, field: Field, value: T): boolean;
    getId(): FilterTypeId;
    filterMany(entities: Array<OriginItemEntity>, field: Field, value: T): Array<OriginItemEntity>;
    filterOne(entity: OriginItemEntity, field: Field, value: T): boolean;
}
