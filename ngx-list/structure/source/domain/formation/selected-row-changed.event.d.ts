import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../core/domain/structure.id';
export declare class SelectedRowChangedEvent extends DomainEvent<StructureId> {
    private readonly selectedRows;
    private readonly allSelected;
    private readonly allUnselected;
    constructor(structureId: StructureId, selectedRows: Array<string>, allSelected: boolean, allUnselected: boolean);
    getSelectedRows(): Array<string>;
    isAllSelected(): boolean;
    isAllUnselected(): boolean;
}
