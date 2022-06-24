import { DomainEvent } from '@generic-ui/hermes';
import { StructureAggregateEvent } from '../../../core/domain/structure.aggregate-event';
import { StructureId } from '../../../core/api/global/structure.id';
export declare class ScrollBarPositionSetAggregateEvent extends StructureAggregateEvent {
    private readonly position;
    constructor(schemaId: StructureId, position: number);
    toDomainEvent(): DomainEvent<StructureId>;
}
