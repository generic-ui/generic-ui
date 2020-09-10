import { AggregateEvent, DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/domain/structure.id';
export declare class AllUniqueFilterSelectedAggregateEvent extends AggregateEvent<StructureId> {
    constructor(aggregateId: StructureId);
    toDomainEvent(): DomainEvent<StructureId>;
}
