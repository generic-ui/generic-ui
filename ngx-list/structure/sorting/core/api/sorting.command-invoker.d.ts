import { CommandDispatcher, CommandInvoker } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { SortingConfig } from './sorting-config';
import { FieldId } from '../../../field/core/domain/field/field.id';
import { CompositionId } from '../../../../composition/core/api/composition.id';
import { SortOrder } from '../../../../composition/core/domain/column/sort/sort-order';
export declare class SortingCommandInvoker implements CommandInvoker {
    private readonly commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    setSortingConfig(config: SortingConfig, structureId?: StructureId): void;
    toggleSort(fieldId: FieldId, compositionId?: CompositionId, structureId?: StructureId): void;
    setSortOrder(fieldId: FieldId, sortOrder: SortOrder, compositionId?: CompositionId, structureId?: StructureId): void;
}
