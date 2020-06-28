import { DataType } from './data-type';
import { FieldMatchers } from '../../matcher/field.matchers';
import { OriginItemEntity } from '../../../../../source/domain/origin/origin-item-entity';
export declare abstract class BaseDataField {
    private readonly accessor;
    private readonly dataType;
    private readonly accessorMethod;
    private readonly matchers;
    protected constructor(accessor: any, dataType: DataType, matchers: FieldMatchers);
    getDataType(): DataType;
    getAccessor(): string;
    getAccessorMethod(): (entity: OriginItemEntity) => any;
    getMatchers(): FieldMatchers;
    getSearchAccessorMethod(): (entity: OriginItemEntity) => any;
    getValue(entity: OriginItemEntity): any;
    getSortValue(entity: OriginItemEntity): any;
    getSearchValue(entity: OriginItemEntity): any;
}
