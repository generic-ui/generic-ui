import { CommandDispatcher } from '@generic-ui/hermes';
import { SortingConfig } from '../api/sorting-config';
import { StructureId } from '../../../core/api/structure.id';
import { FieldId } from '../../../field/core/domain/field/field.id';
import { CompositionId } from '../../../../composition/core/api/composition.id';
import { SortOrder } from '../../../../composition/core/domain/column/sort/sort-order';
export declare class SortingDispatcher {
    private readonly commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    setSortingConfig(config: SortingConfig, structureId: StructureId): void;
    toggleSort(fieldId: FieldId, compositionId: CompositionId, structureId: StructureId): void;
    setSortOrder(fieldId: FieldId, sortOrder: SortOrder, compositionId: CompositionId, structureId: StructureId): void;
}
