import { ColumnId } from '../../api/column/column.id';
export declare class ColumnHighlightManager {
    private enabled;
    private highlightedColumns;
    isHighlighted(columnId: ColumnId): boolean;
    toggle(columnId: ColumnId): void;
    remove(columnId: ColumnId): void;
}
