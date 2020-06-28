import { AggregateEvent, DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../../lib/structure/domain/structure.id';
export declare class AllUniqueFilterUnselectedAggregateEvent extends AggregateEvent<StructureId> {
    constructor(aggregateId: StructureId);
    toDomainEvent(): DomainEvent<StructureId>;
}
