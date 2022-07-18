import { AggregateId, DomainEvent } from '@generic-ui/hermes';
import { ItemEntity } from '../../domain/item/item.entity';
import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { StructureAggregateEvent } from '../../../../structure-core/src/core/structure.aggregate-event';
export declare class StructurePreparedEntitiesSetAggregateEvent extends StructureAggregateEvent {
    private readonly preparedItems;
    constructor(aggregateId: AggregateId, preparedItems: Array<ItemEntity>);
    toDomainEvent(): DomainEvent<StructureId>;
    getPreparedItems(): Array<ItemEntity>;
}
