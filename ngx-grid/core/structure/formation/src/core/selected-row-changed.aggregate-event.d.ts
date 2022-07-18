import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { StructureAggregateEvent } from '../../../structure-core/src/core/structure.aggregate-event';
export declare class SelectedRowChangedAggregateEvent extends StructureAggregateEvent {
    private readonly selectedRows;
    private readonly allSelected;
    private readonly allUnselected;
    constructor(structureId: StructureId, selectedRows: Array<string>, allSelected: boolean, allUnselected: boolean);
    toDomainEvent(): DomainEvent<StructureId>;
}
