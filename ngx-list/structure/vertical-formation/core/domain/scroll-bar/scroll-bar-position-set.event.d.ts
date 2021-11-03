import { StructureId } from '../../../../core/api/structure.id';
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
export declare class ScrollBarPositionSetEvent extends StructureDomainEvent {
    private readonly position;
    constructor(aggregateId: StructureId, position: number);
    getPosition(): number;
}
//# sourceMappingURL=scroll-bar-position-set.event.d.ts.map