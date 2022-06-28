import { OriginItemEntity } from '../../../domain/origin/origin-item-entity';
import { StructureId } from '../../../../structure-core/api/global/structure.id';
import { StructureDomainEvent } from '../../../../structure-core/core/structure.domain-event';
export declare class StructureSourceItemEditedEvent extends StructureDomainEvent {
    private readonly beforeItem;
    private readonly afterItem;
    constructor(aggregateId: StructureId, beforeItem: OriginItemEntity, afterItem: OriginItemEntity);
    getBeforeItem(): OriginItemEntity;
    getAfterItem(): OriginItemEntity;
}
