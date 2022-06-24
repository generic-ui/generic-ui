import { SortingConfig } from '../api/config/sorting-config';
import { StructureId } from '../../core/api/global/structure.id';
import { FieldId } from '../../field/domain/field/field.id';
import { CompositionId } from '../../../composition/api/global/composition.id';
import { SortOrder } from '../../../composition/domain/column/sort/sort-order';
export declare class SortingDispatcher {
    private readonly commandDispatcher;
    setSortingConfig(config: SortingConfig, structureId: StructureId): void;
    toggleSort(fieldId: FieldId, compositionId: CompositionId, structureId: StructureId): void;
    setSortOrder(fieldId: FieldId, sortOrder: SortOrder, compositionId: CompositionId, structureId: StructureId): void;
}
