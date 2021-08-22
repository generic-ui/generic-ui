import { OriginItemEntity } from '../origin-item-entity';
import { StructureId } from '../../../../../core/domain/structure.id';
import { StructureDomainEvent } from '../../../../../core/domain/structure.domain-event';
export declare class OriginSetEvent extends StructureDomainEvent {
    private readonly origin;
    constructor(aggregateId: StructureId, origin: Array<OriginItemEntity>);
    getOrigin(): Array<OriginItemEntity>;
}
