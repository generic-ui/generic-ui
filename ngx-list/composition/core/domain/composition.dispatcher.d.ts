import { CommandDispatcher } from '@generic-ui/hermes';
import { CompositionId } from '../api/composition.id';
import { ColumnParams } from './column/set-columns/column.params';
import { ChangeSortParams } from './column/sort/change-sort.params';
import { ColumnId } from '../api/column/column.id';
import * as i0 from "@angular/core";
export declare class CompositionDispatcher {
    private commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    createComposition(compositionId: CompositionId): void;
    setColumns(compositionId: CompositionId, params: Array<ColumnParams>): void;
    setGroups(compositionId: CompositionId, params: any): void;
    setWidth(compositionId: CompositionId, width: number): void;
    setContainerWidth(compositionId: CompositionId, width: number): void;
    setResizeWidth(compositionId: CompositionId, enabled: boolean): void;
    changeSort(compositionId: CompositionId, params: Array<ChangeSortParams>): void;
    setColumnEnabled(compositionId: CompositionId, columnId: ColumnId, enabled: boolean): void;
    moveLeft(compositionId: CompositionId, columnId: ColumnId): void;
    moveRight(compositionId: CompositionId, columnId: ColumnId): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CompositionDispatcher, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CompositionDispatcher>;
}
//# sourceMappingURL=composition.dispatcher.d.ts.map