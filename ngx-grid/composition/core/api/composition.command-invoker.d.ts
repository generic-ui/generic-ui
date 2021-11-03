import { CommandInvoker } from '@generic-ui/hermes';
import { CompositionId } from './composition.id';
import { ColumnParams } from '../domain/column/set-columns/column.params';
import { ColumnDefinitionId } from './column/column-definition-id';
import * as i0 from "@angular/core";
export declare abstract class CompositionCommandInvoker implements CommandInvoker {
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
    static ɵfac: i0.ɵɵFactoryDeclaration<CompositionCommandInvoker, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CompositionCommandInvoker>;
}
//# sourceMappingURL=composition.command-invoker.d.ts.map