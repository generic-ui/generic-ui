import { Publisher } from '@generic-ui/hermes';
import { CompositionId } from './global/composition.id';
import { ColumnParams } from '../core/column/set-columns/column.params';
import { ColumnDefinitionId } from './column/column-definition-id';
export declare abstract class CompositionPublisher implements Publisher {
    protected constructor();
    abstract create(compositionId: CompositionId): void;
    abstract setColumns(params: Array<ColumnParams>, compositionId: CompositionId): void;
    abstract setGroups(configs: any, compositionId: CompositionId): void;
    abstract setWidth(width: number, compositionId: CompositionId): void;
    abstract setContainerWidth(width: number, compositionId: CompositionId): void;
    abstract setResizeWidth(enabled: boolean, compositionId: CompositionId): void;
    abstract enableColumn(columnDefinitionId: ColumnDefinitionId, compositionId: CompositionId): void;
    abstract disableColumn(columnDefinitionId: ColumnDefinitionId, compositionId: CompositionId): void;
    abstract moveLeft(columnDefinitionId: ColumnDefinitionId, compositionId: CompositionId): void;
    abstract moveRight(columnDefinitionId: ColumnDefinitionId, compositionId: CompositionId): void;
    abstract highlightColumn(columnDefinitionId: ColumnDefinitionId, compositionId: CompositionId): void;
}
