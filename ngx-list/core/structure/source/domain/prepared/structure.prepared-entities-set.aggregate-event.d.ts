import { AggregateId, DomainEvent } from '@generic-ui/hermes';
import { OriginItemEntity } from '../origin/origin-item-entity';
import { StructureId } from '../../../core/api/global/structure.id';
import { StructureAggregateEvent } from '../../../core/domain/structure.aggregate-event';
export declare class StructurePreparedEntitiesSetAggregateEvent extends StructureAggregateEvent {
    private readonly preparedItems;
    constructor(aggregateId: AggregateId, preparedItems: Array<OriginItemEntity>);
    toDomainEvent(): DomainEvent<StructureId>;
    getPreparedItems(): Array<OriginItemEntity>;
}
