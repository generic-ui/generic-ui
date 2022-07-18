import { DataType } from './data-type';
import { FieldMatchers } from '../../matcher/field.matchers';
import { ItemEntity } from '../../../../../source/src/domain/item/item.entity';
export declare abstract class BaseDataField {
    private readonly accessor;
    private readonly dataType;
    private readonly accessorMethod;
    private readonly matchers;
    protected constructor(accessor: any, dataType: DataType, matchers: FieldMatchers);
    getDataType(): DataType;
    getAccessor(): string;
    getAccessorMethod(): (entity: ItemEntity) => any;
    getMatchers(): FieldMatchers;
    getSearchAccessorMethod(): (entity: ItemEntity) => any;
    getValue(entity: ItemEntity): any;
    getSortValue(entity: ItemEntity): any;
    getSearchValue(entity: ItemEntity): any;
}
