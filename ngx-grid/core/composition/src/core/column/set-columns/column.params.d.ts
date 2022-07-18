import { ColumnConfig } from '../../../api/column/column.config';
import { ColumnField } from '../../../domain/column/field/column-field';
export declare class ColumnParams {
    private readonly column;
    private readonly field;
    constructor(column: ColumnConfig, field: ColumnField);
    getColumn(): ColumnConfig;
    getField(): ColumnField;
}
