export declare class RowSelectedReadModel {
    private readonly itemIds;
    private readonly allSelected;
    private readonly allUnselected;
    constructor(itemIds: Array<string>, allSelected: boolean, allUnselected: boolean);
    getAll(): Array<string>;
    isSelected(id: string): boolean;
    isAllSelected(): boolean;
    isAllUnselected(): boolean;
    isIndeterminate(): boolean;
}
