import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { StructureAggregateEvent } from '../../../../structure-core/src/core/structure.aggregate-event';
import { FormationCustomSelection } from '../../api/custom/formation.custom-selection';
export declare class FormationCustomSelectionChangeAggregateEvent extends StructureAggregateEvent {
    private readonly customSelection;
    constructor(structureId: StructureId, customSelection: FormationCustomSelection);
    toDomainEvent(): DomainEvent<StructureId>;
}
