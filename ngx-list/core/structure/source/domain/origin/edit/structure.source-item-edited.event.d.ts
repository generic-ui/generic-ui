import { OriginItemEntity } from '../origin-item-entity';
import { StructureId } from '../../../../core/api/global/structure.id';
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
export declare class StructureSourceItemEditedEvent extends StructureDomainEvent {
    private readonly beforeItem;
    private readonly afterItem;
    constructor(aggregateId: StructureId, beforeItem: OriginItemEntity, afterItem: OriginItemEntity);
    getBeforeItem(): OriginItemEntity;
    getAfterItem(): OriginItemEntity;
}
