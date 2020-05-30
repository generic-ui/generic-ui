import { StructureId } from '../../../lib/structure/domain/structure.id';
import { SortingConfig } from './sorting-config';
import { FieldId } from '../../field/domain/data-type/field.id';
import { CompositionId } from '../../../lib/composition/domain/composition.id';
import { SortOrder } from '../../../lib/composition/domain/column/sort/sort-order';
import { CommandDispatcher } from '@generic-ui/hermes';
export declare class SortingCommandDispatcher {
    private readonly commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    setSortingConfig(config: SortingConfig, structureId?: StructureId): void;
    toggleSort(fieldId: FieldId, compositionId?: CompositionId, structureId?: StructureId): void;
    setSortOrder(fieldId: FieldId, sortOrder: SortOrder, compositionId?: CompositionId, structureId?: StructureId): void;
}
