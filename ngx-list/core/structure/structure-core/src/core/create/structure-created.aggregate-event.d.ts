import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../api/global/structure.id';
import { StructureAggregateEvent } from '../structure.aggregate-event';
export declare class StructureCreatedAggregateEvent extends StructureAggregateEvent {
    constructor(aggregateId: StructureId);
    toDomainEvent(): DomainEvent<StructureId>;
}
