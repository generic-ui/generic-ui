import { StructureId } from '../../../../core/api/structure.id';
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
export declare class ScrollPositionSetEvent extends StructureDomainEvent {
    constructor(aggregateId: StructureId);
}
