import { BaseFilterType } from '../base-filter-type';
import { ItemEntity } from '../../../../../source/src/domain/item/item.entity';
import { FieldEntity } from '../../../../../field/src/domain/field/field.entity';
import { FilterTypeId } from '../filter-type.id';
export declare class ContainsFilterType extends BaseFilterType<string> {
    constructor(filterTypeId: FilterTypeId);
    getName(): string;
    protected filterEntity(entity: ItemEntity, field: FieldEntity, value: string): boolean;
}
