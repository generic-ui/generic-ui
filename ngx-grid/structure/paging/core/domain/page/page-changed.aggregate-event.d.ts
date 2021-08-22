import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/domain/structure.id';
import { StructureAggregateEvent } from '../../../../core/domain/structure.aggregate-event';
export declare class PageChangedAggregateEvent extends StructureAggregateEvent {
    constructor(structureId: StructureId);
    toDomainEvent(): DomainEvent<StructureId>;
}
