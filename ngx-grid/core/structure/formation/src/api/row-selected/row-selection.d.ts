export declare enum RowSelectionType {
    ROW = 0,
    CHECKBOX = 1,
    RADIO = 2
}
export declare enum RowSelectionMode {
    SINGLE = 0,
    MULTIPLE = 1
}
export declare class RowSelection {
    private readonly enabled;
    private readonly selectedRowIndexes;
    private readonly selectedRowIds;
    private readonly type;
    private readonly mode;
    private readonly matcher;
    private constructor();
    isModeDefined(): boolean;
    isTypeDefined(): boolean;
    isSelectedRowIndexesDefined(): boolean;
    isSelectedRowIdsDefined(): boolean;
    isEnabledDefined(): boolean;
    isMatcherDefined(): boolean;
    isEnabled(): boolean;
    getSelectedRowIndexes(): Array<number>;
    getSelectedRowIds(): Array<string>;
    getMode(): RowSelectionMode;
    getType(): RowSelectionType;
    getMatcher(): (item: any) => any;
    static Builder: {
        new (): {
            enabled: boolean;
            selectedRowIndexes: Array<number>;
            selectedRowIds: Array<string>;
            type: RowSelectionType;
            mode: RowSelectionMode;
            matcher: (item: any) => any;
            buildObject(): RowSelection;
            withEnabled(enabled: boolean): any;
            withSelectedRowIndexes(indexes: Array<number>): any;
            withSelectedRowIds(ids: Array<string>): any;
            withType(type: RowSelectionType): any;
            withMode(mode: RowSelectionMode): any;
            withMatcher(matcher: (item: any) => any): any;
            build(): RowSelection;
        };
    };
}
