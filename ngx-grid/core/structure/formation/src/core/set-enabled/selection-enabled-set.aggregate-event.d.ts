import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { StructureAggregateEvent } from '../../../../structure-core/src/core/structure.aggregate-event';
export declare class SelectionEnabledSetAggregateEvent extends StructureAggregateEvent {
    private readonly enabled;
    constructor(structureId: StructureId, enabled: boolean);
    toDomainEvent(): DomainEvent<StructureId>;
}
