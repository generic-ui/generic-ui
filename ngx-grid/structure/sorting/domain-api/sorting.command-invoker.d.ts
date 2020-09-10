import { CommandDispatcher, CommandInvoker } from '@generic-ui/hermes';
import { StructureId } from '../../core/domain/structure.id';
import { SortingConfig } from './sorting-config';
import { FieldId } from '../../field/domain/core/field/field.id';
import { CompositionId } from '../../../composition/domain/composition.id';
import { SortOrder } from '../../../composition/domain/column/sort/sort-order';
export declare class SortingCommandInvoker implements CommandInvoker {
    private readonly commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    setSortingConfig(config: SortingConfig, structureId?: StructureId): void;
    toggleSort(fieldId: FieldId, compositionId?: CompositionId, structureId?: StructureId): void;
    setSortOrder(fieldId: FieldId, sortOrder: SortOrder, compositionId?: CompositionId, structureId?: StructureId): void;
}
