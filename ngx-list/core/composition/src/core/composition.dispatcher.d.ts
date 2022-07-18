import { CompositionId } from '../api/global/composition.id';
import { ColumnParams } from './column/set-columns/column.params';
import { ChangeSortParams } from '../domain/column/sort/change-sort.params';
import { ColumnId } from '../api/column/column.id';
export declare class CompositionDispatcher {
    private readonly commandDispatcher;
    create(compositionId: CompositionId): void;
    setColumns(compositionId: CompositionId, params: Array<ColumnParams>): void;
    setGroups(compositionId: CompositionId, params: any): void;
    setWidth(compositionId: CompositionId, width: number): void;
    setContainerWidth(compositionId: CompositionId, width: number): void;
    setResizeWidth(compositionId: CompositionId, enabled: boolean): void;
    changeSort(compositionId: CompositionId, params: Array<ChangeSortParams>): void;
    setColumnEnabled(compositionId: CompositionId, columnId: ColumnId, enabled: boolean): void;
    moveLeft(compositionId: CompositionId, columnId: ColumnId): void;
    moveRight(compositionId: CompositionId, columnId: ColumnId): void;
}
