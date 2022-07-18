import { DomainEventType, EventDrivenRepository } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { RowSelectionMode } from '../../api/row-selected/row-selection';
import { SelectionModeSetEvent } from '../../core/mode/selection-mode-set.event';
export declare class FormationModeRepository extends EventDrivenRepository<StructureId, SelectionModeSetEvent, RowSelectionMode> {
    constructor();
    forEvent(): DomainEventType<SelectionModeSetEvent>;
}
