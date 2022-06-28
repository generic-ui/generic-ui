import { ColumnParams } from '../../core/column/set-columns/column.params';
import { ColumnEntity } from './column.entity';
import { ColumnPresentationConverter } from './presentation/column.presentation.converter';
export declare class ColumnEntityFactory {
    private readonly columnPresentationConverter;
    constructor(columnPresentationConverter: ColumnPresentationConverter);
    static readonly services: (typeof ColumnPresentationConverter)[];
    create(params: ColumnParams): ColumnEntity;
    create(params: Array<ColumnParams>): Array<ColumnEntity>;
    private createColumn;
    private createColumns;
    private convertWidth;
    private getPresentation;
}
