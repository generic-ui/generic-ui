import { AggregateId, DomainEvent } from '@generic-ui/hermes';
import { ItemEntity } from '../../domain/item/item.entity';
import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { StructureAggregateEvent } from '../../../../structure-core/src/core/structure.aggregate-event';
export declare class StructureOriginChangedAggregateEvent extends StructureAggregateEvent {
    private readonly origin;
    constructor(aggregateId: AggregateId, origin: Array<ItemEntity>);
    toDomainEvent(): DomainEvent<StructureId>;
    getOrigin(): Array<ItemEntity>;
}
