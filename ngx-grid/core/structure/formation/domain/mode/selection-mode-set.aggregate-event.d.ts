import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/global/structure.id';
import { RowSelectionMode } from '../../api/row-selected/row-selection';
import { StructureAggregateEvent } from '../../../core/domain/structure.aggregate-event';
export declare class SelectionModeSetAggregateEvent extends StructureAggregateEvent {
    private readonly mode;
    constructor(structureId: StructureId, mode: RowSelectionMode);
    toDomainEvent(): DomainEvent<StructureId>;
}
