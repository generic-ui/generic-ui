import { CommandInvoker } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { SortingConfig } from './sorting-config';
import { FieldId } from '../../../field/core/domain/field/field.id';
import { CompositionId } from '../../../../composition/core/api/composition.id';
import { SortOrder } from '../../../../composition/core/domain/column/sort/sort-order';
export declare abstract class SortingCommandInvoker implements CommandInvoker {
    protected constructor();
    abstract setSortingConfig(config: SortingConfig, structureId: StructureId): void;
    abstract toggleSort(fieldId: FieldId, compositionId: CompositionId, structureId: StructureId): void;
    abstract setSortOrder(fieldId: FieldId, sortOrder: SortOrder, compositionId: CompositionId, structureId: StructureId): void;
}
