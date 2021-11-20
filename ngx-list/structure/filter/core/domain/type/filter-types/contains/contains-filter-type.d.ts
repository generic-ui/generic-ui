import { BaseFilterType } from '../../base-filter-type';
import { OriginItemEntity } from '../../../../../../source/core/domain/origin/origin-item-entity';
import { FieldEntity } from '../../../../../../field/core/domain/field/field.entity';
import { FilterTypeId } from '../../filter-type.id';
export declare class ContainsFilterType extends BaseFilterType<string> {
    constructor(filterTypeId: FilterTypeId);
    getName(): string;
    protected filterEntity(entity: OriginItemEntity, field: FieldEntity, value: string): boolean;
}
