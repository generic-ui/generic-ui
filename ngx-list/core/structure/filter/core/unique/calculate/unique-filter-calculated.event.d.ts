import { StructureId } from '../../../../structure-core/api/global/structure.id';
import { UniqueValue } from '../../../domain/unique/unique-value';
import { StructureDomainEvent } from '../../../../structure-core/core/structure.domain-event';
export declare class UniqueFilterCalculatedEvent extends StructureDomainEvent {
    private readonly map;
    constructor(aggregateId: StructureId, map: Map<string, Array<UniqueValue>>);
    getUniqueValues(): Map<string, Array<UniqueValue>>;
}
