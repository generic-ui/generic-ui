import { DomainEventType, EventDrivenRepository } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { FormationCustomSelection } from '../../api/custom/formation.custom-selection';
import { FormationCustomSelectionChangeEvent } from '../../core/custom/formation.custom-selection-change.event';
export declare class FormationCustomRepository extends EventDrivenRepository<StructureId, FormationCustomSelectionChangeEvent, FormationCustomSelection> {
    constructor();
    forEvent(): DomainEventType<FormationCustomSelectionChangeEvent>;
}
