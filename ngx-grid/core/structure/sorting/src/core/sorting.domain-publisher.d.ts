import { SortingConfig } from '../api/config/sorting-config';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { FieldId } from '../../../field/src/domain/field/field.id';
import { CompositionId } from '../../../../composition/src/api/global/composition.id';
import { SortOrder } from '../../../../composition/src/domain/column/sort/sort-order';
import { SortingPublisher } from '../api/sorting.publisher';
import { SortingDispatcher } from './sorting.dispatcher';
export declare class SortingDomainPublisher extends SortingPublisher {
    private readonly sortingDispatcher;
    constructor(sortingDispatcher: SortingDispatcher);
    static readonly services: (typeof SortingDispatcher)[];
    setSortingConfig(config: SortingConfig, structureId: StructureId): void;
    toggleSort(fieldId: FieldId, compositionId: CompositionId, structureId: StructureId): void;
    setSortOrder(fieldId: FieldId, sortOrder: SortOrder, compositionId: CompositionId, structureId: StructureId): void;
}
