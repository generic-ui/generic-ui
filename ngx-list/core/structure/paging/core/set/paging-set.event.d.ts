import { StructureId } from '../../../structure-core/api/global/structure.id';
import { StructureDomainEvent } from '../../../structure-core/core/structure.domain-event';
export declare class PagingSetEvent extends StructureDomainEvent {
    constructor(aggregateId: StructureId);
}
