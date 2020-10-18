import { StructureId } from '../../../../../core/api/structure.id';
import { UniqueValue } from '../unique-value';
import { StructureDomainEvent } from '../../../../../core/domain/structure.domain-event';
export declare class UniqueFilterCalculatedEvent extends StructureDomainEvent {
    private readonly map;
    constructor(aggregateId: StructureId, map: Map<string, Array<UniqueValue>>);
    getUniqueValues(): Map<string, Array<UniqueValue>>;
}
