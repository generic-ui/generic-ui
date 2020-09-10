import { CompositionCommandInvoker } from '../../../../../composition/domain-api/composition.command-invoker';
import { CompositionId } from '../../../../../composition/domain/composition.id';
import { CompositionDispatcher } from '../../../../../composition/domain/composition.dispatcher';
import { ColumnParams } from '../../../../../composition/domain/column/set-columns/column.params';
import { ColumnDefinitionId } from '../../../../../composition/domain-api/read/definition/column-definition-id';
export declare class LocalCompositionCommandDispatcher extends CompositionCommandInvoker {
    private readonly compositionId;
    constructor(compositionId: CompositionId, compositionDispatcher: CompositionDispatcher);
    createComposition(compositionId?: CompositionId): void;
    setColumns(params: Array<ColumnParams>): void;
    setWidth(width: number, compositionId?: CompositionId): void;
    setContainerWidth(width: number, compositionId?: CompositionId): void;
    setResizeWidth(enabled: boolean, compositionId?: CompositionId): void;
    enableColumn(columnDefId: ColumnDefinitionId, compositionId?: CompositionId): void;
    disableColumn(columnDefId: ColumnDefinitionId, compositionId?: CompositionId): void;
    moveLeft(columnDefId: ColumnDefinitionId, compositionId?: CompositionId): void;
    moveRight(columnDefId: ColumnDefinitionId, compositionId?: CompositionId): void;
}
