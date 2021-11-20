import { SortingConfig } from '../api/sorting-config';
import { StructureId } from '../../../core/api/structure.id';
import { FieldId } from '../../../field/core/domain/field/field.id';
import { CompositionId } from '../../../../composition/core/api/composition.id';
import { SortOrder } from '../../../../composition/core/domain/column/sort/sort-order';
import { SortingCommandInvoker } from '../api/sorting.command-invoker';
import { SortingDispatcher } from './sorting.dispatcher';
export declare class SortingDomainCommandInvoker extends SortingCommandInvoker {
    private readonly sortingDispatcher;
    constructor(sortingDispatcher: SortingDispatcher);
    setSortingConfig(config: SortingConfig, structureId: StructureId): void;
    toggleSort(fieldId: FieldId, compositionId: CompositionId, structureId: StructureId): void;
    setSortOrder(fieldId: FieldId, sortOrder: SortOrder, compositionId: CompositionId, structureId: StructureId): void;
}
