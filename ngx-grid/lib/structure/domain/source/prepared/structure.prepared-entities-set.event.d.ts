import { AggregateId, DomainEvent } from '@generic-ui/hermes';
import { OriginItemEntity } from '../origin/origin-item-entity';
export declare class StructurePreparedEntitiesSetEvent extends DomainEvent {
    private readonly preparedItems;
    constructor(aggregateId: AggregateId, preparedItems: Array<OriginItemEntity>);
    getPreparedItems(): Array<OriginItemEntity>;
}
