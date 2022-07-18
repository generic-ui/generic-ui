import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { RowSelectionType } from '../../api/row-selected/row-selection';
import { StructureAggregateEvent } from '../../../../structure-core/src/core/structure.aggregate-event';
export declare class SelectionTypeSetAggregateEvent extends StructureAggregateEvent {
    private readonly selectionType;
    constructor(structureId: StructureId, selectionType: RowSelectionType);
    toDomainEvent(): DomainEvent<StructureId>;
}
