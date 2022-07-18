import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { StructureDomainEvent } from '../../../../structure-core/src/core/structure.domain-event';
import { FormationCustomSelection } from '../../api/custom/formation.custom-selection';
export declare class FormationCustomSelectionChangeEvent extends StructureDomainEvent {
    private readonly customSelection;
    constructor(aggregateId: StructureId, customSelection: FormationCustomSelection);
    getCustomSelection(): FormationCustomSelection;
}
