import { FilterId } from './filter.id';
import { FieldId } from '../field/data-type/field.id';
import { OriginItemEntity } from '../../source/origin/origin-item-entity';
import { TypeField } from '../field/data-type/type.field';
export declare class StructureFilter {
    private readonly filterId;
    private field;
    private filterValue;
    constructor(id: FilterId, field: TypeField, filterValue: any);
    getFieldId(): FieldId;
    getFilterValue(): any;
    setFilterValue(filterValue: any): void;
    filter(entities: Array<OriginItemEntity>): Array<OriginItemEntity>;
}
