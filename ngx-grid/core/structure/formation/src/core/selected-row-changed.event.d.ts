import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { StructureDomainEvent } from '../../../structure-core/src/core/structure.domain-event';
export declare class SelectedRowChangedEvent extends StructureDomainEvent {
    private readonly selectedRows;
    private readonly allSelected;
    private readonly allUnselected;
    constructor(structureId: StructureId, selectedRows: Array<string>, allSelected: boolean, allUnselected: boolean);
    getSelectedRows(): Array<string>;
    isAllSelected(): boolean;
    isAllUnselected(): boolean;
}
