import { AggregateId, DomainEvent } from '@generic-ui/hermes';
import { OriginItemEntity } from '../../../domain/origin/origin-item-entity';
import { StructureId } from '../../../../structure-core/api/global/structure.id';
import { StructureAggregateEvent } from '../../../../structure-core/core/structure.aggregate-event';
export declare class StructureSourceItemEditedAggregateEvent extends StructureAggregateEvent {
    private readonly beforeItem;
    private readonly afterItem;
    constructor(aggregateId: AggregateId, beforeItem: OriginItemEntity, afterItem: OriginItemEntity);
    toDomainEvent(): DomainEvent<StructureId>;
    getBeforeItem(): OriginItemEntity;
    getAfterItem(): OriginItemEntity;
}
