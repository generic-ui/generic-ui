import { ColumnFieldId } from './column-field.id';
import { ColumnFieldAccessor } from './column-field-accessor';
import { ColumnField } from './column-field';
import { DataType } from '../../../../../structure/field/src/domain/field/data/data-type';
export declare class ColumnFieldFactory {
    create(columnFieldId: ColumnFieldId, accessor: ColumnFieldAccessor, dataType: DataType, searchAccessor: ColumnFieldAccessor): ColumnField;
}
