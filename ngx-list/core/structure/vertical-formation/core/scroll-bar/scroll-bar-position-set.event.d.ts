import { StructureId } from '../../../structure-core/api/global/structure.id';
import { StructureDomainEvent } from '../../../structure-core/core/structure.domain-event';
export declare class ScrollBarPositionSetEvent extends StructureDomainEvent {
    private readonly position;
    constructor(aggregateId: StructureId, position: number);
    getPosition(): number;
}
