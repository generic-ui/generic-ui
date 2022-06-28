import { AggregateId, DomainEvent } from '@generic-ui/hermes';
import { OriginItemEntity } from '../../domain/origin/origin-item-entity';
import { StructureId } from '../../../structure-core/api/global/structure.id';
import { StructureAggregateEvent } from '../../../structure-core/core/structure.aggregate-event';
export declare class StructureOriginChangedAggregateEvent extends StructureAggregateEvent {
    private readonly origin;
    constructor(aggregateId: AggregateId, origin: Array<OriginItemEntity>);
    toDomainEvent(): DomainEvent<StructureId>;
    getOrigin(): Array<OriginItemEntity>;
}
