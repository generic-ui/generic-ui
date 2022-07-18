import { Publisher } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { SortingConfig } from './config/sorting-config';
import { FieldId } from '../../../field/src/domain/field/field.id';
import { CompositionId } from '../../../../composition/src/api/global/composition.id';
import { SortOrder } from '../../../../composition/src/domain/column/sort/sort-order';
export declare abstract class SortingPublisher implements Publisher {
    protected constructor();
    abstract setSortingConfig(config: SortingConfig, structureId: StructureId): void;
    abstract toggleSort(fieldId: FieldId, compositionId: CompositionId, structureId: StructureId): void;
    abstract setSortOrder(fieldId: FieldId, sortOrder: SortOrder, compositionId: CompositionId, structureId: StructureId): void;
}
