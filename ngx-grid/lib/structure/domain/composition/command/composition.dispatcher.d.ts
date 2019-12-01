import { CommandDispatcher } from '@generic-ui/hermes';
import { CompositionId } from '../composition-id';
import { ColumnParams } from './column/set-columns/column.params';
import { ChangeSortParams } from './sort/change-sort.params';
export declare class CompositionDispatcher {
    private commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    init(compositionId: CompositionId): void;
    setColumns(compositionId: CompositionId, params: Array<ColumnParams>): void;
    setWidth(compositionId: CompositionId, width: number): void;
    setContainerWidth(compositionId: CompositionId, width: number): void;
    setResizeWidth(compositionId: CompositionId, enabled: boolean): void;
    changeSort(compositionId: CompositionId, params: Array<ChangeSortParams>): void;
}
