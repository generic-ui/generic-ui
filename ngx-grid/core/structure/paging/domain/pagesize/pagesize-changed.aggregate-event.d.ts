import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/global/structure.id';
import { StructureAggregateEvent } from '../../../core/domain/structure.aggregate-event';
export declare class PagesizeChangedAggregateEvent extends StructureAggregateEvent {
    constructor(structureId: StructureId);
    toDomainEvent(): DomainEvent<StructureId>;
}
