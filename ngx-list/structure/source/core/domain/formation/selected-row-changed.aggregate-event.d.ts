import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/api/structure.id';
import { StructureAggregateEvent } from '../../../../core/domain/structure.aggregate-event';
export declare class SelectedRowChangedAggregateEvent extends StructureAggregateEvent {
    private readonly selectedRows;
    private readonly allSelected;
    private readonly allUnselected;
    constructor(structureId: StructureId, selectedRows: Array<string>, allSelected: boolean, allUnselected: boolean);
    toDomainEvent(): DomainEvent<StructureId>;
}
//# sourceMappingURL=selected-row-changed.aggregate-event.d.ts.map