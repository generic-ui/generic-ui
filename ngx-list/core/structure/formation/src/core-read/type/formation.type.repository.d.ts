import { DomainEventType, EventDrivenRepository } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { SelectionTypeSetEvent } from '../../core/type/selection-type-set.event';
import { RowSelectionType } from '../../api/row-selected/row-selection';
export declare class FormationTypeRepository extends EventDrivenRepository<StructureId, SelectionTypeSetEvent, RowSelectionType> {
    constructor();
    forEvent(): DomainEventType<SelectionTypeSetEvent>;
}
