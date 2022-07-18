import { CompositionDispatcher } from './composition.dispatcher';
import { CompositionGroupArchive } from '../core-read/group/composition-group.archive';
import { CompositionId } from '../api/global/composition.id';
import { ColumnParams } from './column/set-columns/column.params';
import { ColumnDefinitionId } from '../api/column/column-definition-id';
import { CompositionPublisher } from '../api/composition.publisher';
import { ColumnHighlightArchive } from '../domain/highlight/column-highlight.archive';
export declare class CompositionDomainPublisher extends CompositionPublisher {
    private readonly compositionDispatcher;
    private readonly compositionGroupRepository;
    private readonly columnHighlightArchive;
    constructor(compositionDispatcher: CompositionDispatcher, compositionGroupRepository: CompositionGroupArchive, columnHighlightArchive: ColumnHighlightArchive);
    static readonly services: readonly [typeof CompositionDispatcher, typeof CompositionGroupArchive, typeof ColumnHighlightArchive];
    create(compositionId: CompositionId): void;
    setColumns(params: Array<ColumnParams>, compositionId: CompositionId): void;
    setGroups(configs: any, compositionId: CompositionId): void;
    setWidth(width: number, compositionId: CompositionId): void;
    setContainerWidth(width: number, compositionId: CompositionId): void;
    setResizeWidth(enabled: boolean, compositionId: CompositionId): void;
    enableColumn(columnDefinitionId: ColumnDefinitionId, compositionId: CompositionId): void;
    disableColumn(columnDefinitionId: ColumnDefinitionId, compositionId: CompositionId): void;
    moveLeft(columnDefinitionId: ColumnDefinitionId, compositionId: CompositionId): void;
    moveRight(columnDefinitionId: ColumnDefinitionId, compositionId: CompositionId): void;
    highlightColumn(columnDefinitionId: ColumnDefinitionId, compositionId: CompositionId): void;
    private toColumnId;
}
