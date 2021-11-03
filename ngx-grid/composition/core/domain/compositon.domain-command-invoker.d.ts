import { CompositionDispatcher } from './composition.dispatcher';
import { CompositionGroupArchive } from '../domain-read/group/composition-group.archive';
import { CompositionId } from '../api/composition.id';
import { ColumnParams } from './column/set-columns/column.params';
import { ColumnDefinitionId } from '../api/column/column-definition-id';
import { CompositionCommandInvoker } from '../api/composition.command-invoker';
import { ColumnHighlightArchive } from './highlight/column-highlight.archive';
import * as i0 from "@angular/core";
export declare class CompositionDomainCommandInvoker extends CompositionCommandInvoker {
    private readonly compositionDispatcher;
    private readonly compositionGroupRepository;
    private readonly columnHighlightArchive;
    constructor(compositionDispatcher: CompositionDispatcher, compositionGroupRepository: CompositionGroupArchive, columnHighlightArchive: ColumnHighlightArchive);
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
    static ɵfac: i0.ɵɵFactoryDeclaration<CompositionDomainCommandInvoker, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CompositionDomainCommandInvoker>;
}
//# sourceMappingURL=compositon.domain-command-invoker.d.ts.map