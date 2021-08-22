import { CommandInvoker } from '@generic-ui/hermes';
import { CompositionId } from '../domain/composition.id';
import { ColumnParams } from '../domain/column/set-columns/column.params';
import { ColumnDefinitionId } from '../domain-read/definition/column-definition-id';
export declare abstract class CompositionCommandInvoker implements CommandInvoker {
    protected constructor();
    abstract create(compositionId?: CompositionId): void;
    abstract setColumns(params: Array<ColumnParams>, compositionId?: CompositionId): void;
    abstract setGroups(configs: any, compositionId?: CompositionId): void;
    abstract setWidth(width: number, compositionId?: CompositionId): void;
    abstract setContainerWidth(width: number, compositionId?: CompositionId): void;
    abstract setResizeWidth(enabled: boolean, compositionId?: CompositionId): void;
    abstract enableColumn(columnDefinitionId: ColumnDefinitionId, compositionId?: CompositionId): void;
    abstract disableColumn(columnDefinitionId: ColumnDefinitionId, compositionId?: CompositionId): void;
    abstract moveLeft(columnDefinitionId: ColumnDefinitionId, compositionId?: CompositionId): void;
    abstract moveRight(columnDefinitionId: ColumnDefinitionId, compositionId?: CompositionId): void;
}
