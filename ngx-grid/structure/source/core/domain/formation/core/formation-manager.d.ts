import { RowSelectToggleType } from './row-select-toggle-type';
import { RowSelectionMode } from '../../../api/row-selection';
export declare class FormationManager {
    private enabled;
    private mode;
    private selectedRows;
    private allSelected;
    private allUnselected;
    constructor(selectedRows: Set<string>);
    isAllSelected(): boolean;
    isAllUnselected(): boolean;
    setSelection(enabled: boolean): void;
    setMode(mode: RowSelectionMode): void;
    getSelectedRows(): Array<string>;
    selectAll(allItemIds: Array<string>): void;
    unselectAll(): void;
    toggleRow(itemId: string, type: RowSelectToggleType, allItemIds: Array<string>): void;
    calculateAllSelected(allItemIds: Array<string>): void;
    calculateAllUnselected(): void;
    unselectRow(itemId: string): void;
}
