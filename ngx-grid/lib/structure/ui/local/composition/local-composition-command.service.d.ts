import { CompositionCommandService } from '../../../ui-api/composition/composition.command-service';
import { CompositionId } from '../../../domain/composition/composition-id';
import { CompositionDispatcher } from '../../../domain/composition/command/composition.dispatcher';
import { ColumnParams } from '../../../domain/composition/command/column/set-columns/column.params';
import { ColumnId } from '../../../domain/composition/command/column/column.id';
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
}
