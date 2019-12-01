import { FilterId } from './filter.id';
import { Field } from '../field/data-type/field';
import { FieldId } from '../field/data-type/field.id';
import { OriginItemEntity } from '../../../source/command/origin/origin-item-entity';
export declare class StructureFilter {
    private readonly filterId;
    private field;
    private filterValue;
    constructor(id: FilterId, field: Field, filterValue: any);
    getFieldId(): FieldId;
    getFilterValue(): any;
    setFilterValue(filterValue: any): void;
    filter(entities: Array<OriginItemEntity>): Array<OriginItemEntity>;
    private filterString;
    private filterNumber;
    private filterBoolean;
}
