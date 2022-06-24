import { AggregateId, DomainEvent } from '@generic-ui/hermes';
import { OriginItemEntity } from './origin-item-entity';
import { StructureId } from '../../../core/api/global/structure.id';
import { StructureAggregateEvent } from '../../../core/domain/structure.aggregate-event';
export declare class StructureOriginChangedAggregateEvent extends StructureAggregateEvent {
    private readonly origin;
    constructor(aggregateId: AggregateId, origin: Array<OriginItemEntity>);
    toDomainEvent(): DomainEvent<StructureId>;
    getOrigin(): Array<OriginItemEntity>;
}
