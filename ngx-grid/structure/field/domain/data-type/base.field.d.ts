import { FieldId } from './field.id';
import { DataType } from './data-type';
import { OriginItemEntity } from '../../../../lib/structure/domain/source/origin/origin-item-entity';
import { FieldMatchers } from '../matcher/field.matchers';
export declare abstract class BaseField {
    private readonly id;
    private readonly accessor;
    private readonly dataType;
    private readonly accessorMethod;
    private readonly matchers;
    protected constructor(id: FieldId, accessor: any, dataType: DataType, matchers: FieldMatchers);
    getId(): FieldId;
    getKey(): string;
    getDataType(): DataType;
    getAccessor(): string;
    getAccessorMethod(): (entity: OriginItemEntity) => any;
    getMatchers(): FieldMatchers;
    getSearchAccessorMethod(): (entity: OriginItemEntity) => any;
    getValue(entity: OriginItemEntity): any;
    getSortValue(entity: OriginItemEntity): any;
    getSearchValue(entity: OriginItemEntity): any;
}
