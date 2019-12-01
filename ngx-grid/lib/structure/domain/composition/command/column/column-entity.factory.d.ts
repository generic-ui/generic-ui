import { ColumnParams } from './set-columns/column.params';
import { ColumnEntity } from './column.entity';
export declare class ColumnEntityFactory {
    create(params: ColumnParams): ColumnEntity;
    create(params: Array<ColumnParams>): Array<ColumnEntity>;
    private createColumn;
    private createColumns;
    private convertWidth;
}
