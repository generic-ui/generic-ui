import { ColumnEntity } from '../../domain/column/column.entity';
import { ColumnDefinition } from './column-definition';
import { ActiveColumnEntity } from '../../domain/column/active/active-column.entity';
export declare class ColumnDefinitionFactory {
    create(column: ColumnEntity): ColumnDefinition;
    create(column: ActiveColumnEntity): ColumnDefinition;
    createColumns(columns: Array<ColumnEntity>): Array<ColumnDefinition>;
    private createFromColumnEntity;
    private createFromActiveColumnEntity;
}
