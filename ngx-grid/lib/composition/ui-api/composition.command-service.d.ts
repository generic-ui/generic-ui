import { CompositionDispatcher } from '../domain/command/composition.dispatcher';
import { CompositionId } from '../domain/composition-id';
import { ColumnParams } from '../domain/command/column/set-columns/column.params';
import { ColumnId } from '../domain/command/column/column.id';
export declare class CompositionCommandService {
    private compositionDispatcher;
    constructor(compositionDispatcher: CompositionDispatcher);
    init(compositionId?: CompositionId): void;
    setColumns(params: Array<ColumnParams>, compositionId?: CompositionId): void;
    setWidth(width: number, compositionId?: CompositionId): void;
    setContainerWidth(width: number, compositionId?: CompositionId): void;
    setResizeWidth(enabled: boolean, compositionId?: CompositionId): void;
    enableColumn(columnId: ColumnId, compositionId?: CompositionId): void;
    disableColumn(columnId: ColumnId, compositionId?: CompositionId): void;
    moveLeft(columnId: ColumnId, compositionId?: CompositionId): void;
    moveRight(columnId: ColumnId, compositionId?: CompositionId): void;
}
