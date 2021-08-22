import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../../core/domain/structure.id';
import { StructureAggregateEvent } from '../../../../../core/domain/structure.aggregate-event';
export declare class SelectionEnabledSetAggregateEvent extends StructureAggregateEvent {
    private readonly enabled;
    constructor(structureId: StructureId, enabled: boolean);
    toDomainEvent(): DomainEvent<StructureId>;
}
