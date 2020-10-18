import { CommandInvoker } from '@generic-ui/hermes';
import { CompositionDispatcher } from '../domain/composition.dispatcher';
import { CompositionId } from './composition.id';
import { ColumnParams } from '../domain/column/set-columns/column.params';
import { ColumnDefinitionId } from '../domain-read/definition/column-definition-id';
import { CompositionGroupRepository } from '../domain-read/group/composition.group.repository';
export declare class CompositionCommandInvoker implements CommandInvoker {
    private readonly compositionDispatcher;
    private readonly compositionGroupRepository;
    constructor(compositionDispatcher: CompositionDispatcher, compositionGroupRepository: CompositionGroupRepository);
    createComposition(compositionId?: CompositionId): void;
    setColumns(params: Array<ColumnParams>, compositionId?: CompositionId): void;
    setGroups(configs: any, compositionId?: CompositionId): void;
    setWidth(width: number, compositionId?: CompositionId): void;
    setContainerWidth(width: number, compositionId?: CompositionId): void;
    setResizeWidth(enabled: boolean, compositionId?: CompositionId): void;
    enableColumn(columnDefinitionId: ColumnDefinitionId, compositionId?: CompositionId): void;
    disableColumn(columnDefinitionId: ColumnDefinitionId, compositionId?: CompositionId): void;
    moveLeft(columnDefinitionId: ColumnDefinitionId, compositionId?: CompositionId): void;
    moveRight(columnDefinitionId: ColumnDefinitionId, compositionId?: CompositionId): void;
    private toColumnId;
}
