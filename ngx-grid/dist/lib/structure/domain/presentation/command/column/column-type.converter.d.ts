import { ColumnType } from 'structure/domain/presentation/column-type';
export declare class ColumnTypeConverter {
    convert(columnType: string): ColumnType;
    convert(columnType: ColumnType): ColumnType;
    private convertString;
}
