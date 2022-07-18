import { ColumnFieldId } from './column-field.id';
import { ColumnFieldAccessor } from './column-field-accessor';
import { DataType } from '../../../../../structure/field/src/domain/field/data/data-type';
import { ItemEntity } from '../../../../../structure/source/src/domain/item/item.entity';
export declare class ColumnField {
    private readonly fieldId;
    private readonly accessor;
    private readonly searchAccessor;
    private readonly dataType;
    constructor(fieldId: ColumnFieldId, accessor: ColumnFieldAccessor, dataType: DataType, searchAccessor: ColumnFieldAccessor);
    getId(): ColumnFieldId;
    getValue(entity: ItemEntity): any;
    getAccessor(): ColumnFieldAccessor;
    getSearchAccessor(): ColumnFieldAccessor;
    getDataType(): DataType;
}
