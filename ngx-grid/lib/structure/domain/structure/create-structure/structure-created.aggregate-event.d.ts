import { AggregateEvent, DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../structure.id';
export declare class StructureCreatedAggregateEvent extends AggregateEvent<StructureId> {
    constructor(aggregateId: StructureId);
    toDomainEvent(): DomainEvent<StructureId>;
}
