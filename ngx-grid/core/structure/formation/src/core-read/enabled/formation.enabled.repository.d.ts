import { DomainEventType, EventDrivenRepository } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { SelectionEnabledSetEvent } from '../../core/set-enabled/selection-enabled-set.event';
export declare class FormationEnabledRepository extends EventDrivenRepository<StructureId, SelectionEnabledSetEvent, boolean> {
    constructor();
    forEvent(): DomainEventType<SelectionEnabledSetEvent>;
}
