import { DomainEvent } from '@generic-ui/hermes';
import { StructureAggregateEvent } from '../../../../structure-core/src/core/structure.aggregate-event';
import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
export declare class ScrollBarPositionSetAggregateEvent extends StructureAggregateEvent {
    private readonly position;
    constructor(schemaId: StructureId, position: number);
    toDomainEvent(): DomainEvent<StructureId>;
}
