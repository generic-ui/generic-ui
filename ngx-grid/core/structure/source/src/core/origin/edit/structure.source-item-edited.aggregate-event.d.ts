import { AggregateId, DomainEvent } from '@generic-ui/hermes';
import { ItemEntity } from '../../../domain/item/item.entity';
import { StructureId } from '../../../../../structure-core/src/api/global/structure.id';
import { StructureAggregateEvent } from '../../../../../structure-core/src/core/structure.aggregate-event';
export declare class StructureSourceItemEditedAggregateEvent extends StructureAggregateEvent {
    private readonly beforeItem;
    private readonly afterItem;
    constructor(aggregateId: AggregateId, beforeItem: ItemEntity, afterItem: ItemEntity);
    toDomainEvent(): DomainEvent<StructureId>;
    getBeforeItem(): ItemEntity;
    getAfterItem(): ItemEntity;
}
