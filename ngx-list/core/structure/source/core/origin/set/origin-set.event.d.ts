import { OriginItemEntity } from '../../../domain/origin/origin-item-entity';
import { StructureId } from '../../../../structure-core/api/global/structure.id';
import { StructureDomainEvent } from '../../../../structure-core/core/structure.domain-event';
export declare class OriginSetEvent extends StructureDomainEvent {
    private readonly origin;
    constructor(aggregateId: StructureId, origin: Array<OriginItemEntity>);
    getOrigin(): Array<OriginItemEntity>;
}
