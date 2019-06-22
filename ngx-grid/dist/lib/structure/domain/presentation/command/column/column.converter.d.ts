import { Column } from 'structure/domain/presentation/column';
import { ColumnEntity } from 'structure/domain/presentation/command/column/column.entity';
export declare class ColumnConverter {
    convert(column: Column): ColumnEntity;
    convert(columns: Array<Column>): Array<ColumnEntity>;
    private convertColumn;
    private convertColumns;
    private convertWidth;
}
