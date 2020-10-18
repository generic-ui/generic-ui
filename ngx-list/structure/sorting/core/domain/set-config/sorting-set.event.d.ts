import { StructureId } from '../../../../core/api/structure.id';
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
export declare class SortingSetEvent extends StructureDomainEvent {
    constructor(aggregateId: StructureId);
}
