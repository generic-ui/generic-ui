import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { StructureDomainEvent } from '../../../../structure-core/src/core/structure.domain-event';
export declare class ScrollBarPositionSetEvent extends StructureDomainEvent {
    private readonly position;
    constructor(aggregateId: StructureId, position: number);
    getPosition(): number;
}
