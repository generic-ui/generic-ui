import { AggregateEvent, DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/domain/structure.id';
export declare class UniqueFilterSelectedAggregateEvent extends AggregateEvent<StructureId> {
    constructor(aggregateId: StructureId);
    toDomainEvent(): DomainEvent<StructureId>;
}
