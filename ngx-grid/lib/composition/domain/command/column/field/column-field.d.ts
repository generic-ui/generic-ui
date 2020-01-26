import { ColumnFieldId } from './column-field.id';
import { ColumnFieldAccessor } from './column-field-accessor';
import { DataType } from '../../../../../structure/domain/structure/command/field/data-type/data-type';
import { OriginItemEntity } from '../../../../../structure/domain/source/command/origin/origin-item-entity';
export declare class ColumnField {
    private readonly fieldId;
    private readonly accessor;
    private readonly dataType;
    constructor(fieldId: ColumnFieldId, accessor: ColumnFieldAccessor, dataType: DataType);
    getId(): ColumnFieldId;
    getValue(entity: OriginItemEntity): any;
    getAccessor(): ColumnFieldAccessor;
    getDataType(): DataType;
}
