import { CompositionCommandService } from '../../../../composition/ui-api/composition.command-service';
import { CompositionId } from '../../../../composition/domain/composition-id';
import { CompositionDispatcher } from '../../../../composition/domain/command/composition.dispatcher';
import { ColumnParams } from '../../../../composition/domain/command/column/set-columns/column.params';
import { ColumnId } from '../../../../composition/domain/command/column/column.id';
export declare class LocalCompositionCommandService extends CompositionCommandService {
    private readonly compositionId;
    constructor(compositionId: CompositionId, compositionDispatcher: CompositionDispatcher);
    init(compositionId?: CompositionId): void;
    setColumns(params: Array<ColumnParams>): void;
    setWidth(width: number, compositionId?: CompositionId): void;
    setContainerWidth(width: number, compositionId?: CompositionId): void;
    setResizeWidth(enabled: boolean, compositionId?: CompositionId): void;
    enableColumn(columnId: ColumnId, compositionId?: CompositionId): void;
    disableColumn(columnId: ColumnId, compositionId?: CompositionId): void;
    moveLeft(columnId: ColumnId, compositionId?: CompositionId): void;
    moveRight(columnId: ColumnId, compositionId?: CompositionId): void;
}
