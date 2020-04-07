import { AggregateEvent, AggregateId } from '@generic-ui/hermes';
import { OriginItemEntity } from './origin-item-entity';
import { StructureId } from '../../structure.id';
export declare class StructureOriginChangedAggregateEvent extends AggregateEvent<StructureId> {
    private readonly origin;
    constructor(aggregateId: AggregateId, origin: Array<OriginItemEntity>);
    getOrigin(): Array<OriginItemEntity>;
}
