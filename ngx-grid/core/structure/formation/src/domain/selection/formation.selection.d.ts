import { RowSelectionMode, RowSelectionType } from '../../api/row-selected/row-selection';
export declare class FormationSelection {
    private mode;
    private type;
    constructor(mode: RowSelectionMode, type: RowSelectionType);
    setMode(mode: RowSelectionMode): void;
    getMode(): RowSelectionMode;
    isSingle(): boolean;
    setType(type: RowSelectionType): void;
    getType(): RowSelectionType;
}
