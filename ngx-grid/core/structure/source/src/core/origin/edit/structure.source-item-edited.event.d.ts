import { ItemEntity } from '../../../domain/item/item.entity';
import { StructureId } from '../../../../../structure-core/src/api/global/structure.id';
import { StructureDomainEvent } from '../../../../../structure-core/src/core/structure.domain-event';
export declare class StructureSourceItemEditedEvent extends StructureDomainEvent {
    private readonly beforeItem;
    private readonly afterItem;
    constructor(aggregateId: StructureId, beforeItem: ItemEntity, afterItem: ItemEntity);
    getBeforeItem(): ItemEntity;
    getAfterItem(): ItemEntity;
}
