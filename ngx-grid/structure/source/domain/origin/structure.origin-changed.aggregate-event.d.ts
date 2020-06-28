import { AggregateEvent, AggregateId, DomainEvent } from '@generic-ui/hermes';
import { OriginItemEntity } from './origin-item-entity';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
export declare class StructureOriginChangedAggregateEvent extends AggregateEvent<StructureId> {
    private readonly origin;
    constructor(aggregateId: AggregateId, origin: Array<OriginItemEntity>);
    toDomainEvent(): DomainEvent<StructureId>;
    getOrigin(): Array<OriginItemEntity>;
}
