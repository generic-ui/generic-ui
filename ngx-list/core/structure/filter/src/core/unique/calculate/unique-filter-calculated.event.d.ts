import { StructureId } from '../../../../../structure-core/src/api/global/structure.id';
import { UniqueValue } from '../../../domain/unique/unique-value';
import { StructureDomainEvent } from '../../../../../structure-core/src/core/structure.domain-event';
export declare class UniqueFilterCalculatedEvent extends StructureDomainEvent {
    private readonly map;
    constructor(aggregateId: StructureId, map: Map<string, Array<UniqueValue>>);
    getUniqueValues(): Map<string, Array<UniqueValue>>;
}
