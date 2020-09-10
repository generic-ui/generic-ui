import { AggregateEvent, DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../core/domain/structure.id';
export declare class SelectedRowChangedAggregateEvent extends AggregateEvent<StructureId> {
    private readonly selectedRows;
    private readonly allSelected;
    private readonly allUnselected;
    constructor(structureId: StructureId, selectedRows: Array<string>, allSelected: boolean, allUnselected: boolean);
    toDomainEvent(): DomainEvent<StructureId>;
}
