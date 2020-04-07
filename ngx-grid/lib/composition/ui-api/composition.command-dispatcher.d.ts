import { CompositionDispatcher } from '../domain/composition.dispatcher';
import { CompositionId } from '../domain/composition.id';
import { ColumnParams } from '../domain/column/set-columns/column.params';
import { ColumnDefinitionId } from '../read/definition/column-definition-id';
export declare class CompositionCommandDispatcher {
    private compositionDispatcher;
    constructor(compositionDispatcher: CompositionDispatcher);
    createComposition(compositionId?: CompositionId): void;
    setColumns(params: Array<ColumnParams>, compositionId?: CompositionId): void;
    setWidth(width: number, compositionId?: CompositionId): void;
    setContainerWidth(width: number, compositionId?: CompositionId): void;
    setResizeWidth(enabled: boolean, compositionId?: CompositionId): void;
    enableColumn(columnDefinitionId: ColumnDefinitionId, compositionId?: CompositionId): void;
    disableColumn(columnDefinitionId: ColumnDefinitionId, compositionId?: CompositionId): void;
    moveLeft(columnDefinitionId: ColumnDefinitionId, compositionId?: CompositionId): void;
    moveRight(columnDefinitionId: ColumnDefinitionId, compositionId?: CompositionId): void;
    private toColumnId;
}
