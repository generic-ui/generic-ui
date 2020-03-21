import { ColumnFieldId } from './column-field.id';
import { ColumnFieldAccessor } from './column-field-accessor';
import { ColumnField } from './column-field';
import { DataType } from '../../../../../structure/domain/structure/command/field/data-type/data-type';
export declare class ColumnFieldFactory {
    create(columnFieldId: ColumnFieldId, accessor: ColumnFieldAccessor, dataType: DataType, searchAccessor: ColumnFieldAccessor): ColumnField;
}
