import { StructureId } from '../structure.id';
import { StructureDomainEvent } from '../structure.domain-event';
export declare class StructureCreatedEvent extends StructureDomainEvent {
    constructor(aggregateId: StructureId);
}
