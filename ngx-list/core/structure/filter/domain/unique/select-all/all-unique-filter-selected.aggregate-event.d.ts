import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/api/global/structure.id';
import { StructureAggregateEvent } from '../../../../core/domain/structure.aggregate-event';
export declare class AllUniqueFilterSelectedAggregateEvent extends StructureAggregateEvent {
    constructor(aggregateId: StructureId);
    toDomainEvent(): DomainEvent<StructureId>;
}
