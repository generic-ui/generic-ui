import { StructureId } from '../../../core/api/global/structure.id';
import { StructureDomainEvent } from '../../../core/domain/structure.domain-event';
export declare class ScrollBarPositionSetEvent extends StructureDomainEvent {
    private readonly position;
    constructor(aggregateId: StructureId, position: number);
    getPosition(): number;
}
