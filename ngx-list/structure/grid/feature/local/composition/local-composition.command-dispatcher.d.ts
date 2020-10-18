import { CompositionCommandInvoker } from '../../../../../composition/core/api/composition.command-invoker';
import { CompositionId } from '../../../../../composition/core/api/composition.id';
import { CompositionDispatcher } from '../../../../../composition/core/domain/composition.dispatcher';
import { ColumnParams } from '../../../../../composition/core/domain/column/set-columns/column.params';
import { ColumnDefinitionId } from '../../../../../composition/core/domain-read/definition/column-definition-id';
import { CompositionGroupRepository } from '../../../../../composition/core/domain-read/group/composition.group.repository';
export declare class LocalCompositionCommandDispatcher extends CompositionCommandInvoker {
    private readonly compositionId;
    constructor(compositionId: CompositionId, compositionDispatcher: CompositionDispatcher, compositionGroupRepository: CompositionGroupRepository);
    createComposition(compositionId?: CompositionId): void;
    setColumns(params: Array<ColumnParams>): void;
    setGroups(configs: any, compositionId?: CompositionId): void;
    setWidth(width: number, compositionId?: CompositionId): void;
    setContainerWidth(width: number, compositionId?: CompositionId): void;
    setResizeWidth(enabled: boolean, compositionId?: CompositionId): void;
    enableColumn(columnDefId: ColumnDefinitionId, compositionId?: CompositionId): void;
    disableColumn(columnDefId: ColumnDefinitionId, compositionId?: CompositionId): void;
    moveLeft(columnDefId: ColumnDefinitionId, compositionId?: CompositionId): void;
    moveRight(columnDefId: ColumnDefinitionId, compositionId?: CompositionId): void;
}
