export declare enum RowSelectionType {
    ROW = 0,
    CHECKBOX = 1
}
export declare enum RowSelectionMode {
    SINGLE = 0,
    MULTIPLE = 1
}
export declare class RowSelection {
    private readonly enabled;
    private readonly type;
    private readonly mode;
    private constructor();
    isModeDefined(): boolean;
    isTypeDefined(): boolean;
    isEnabledDefined(): boolean;
    isEnabled(): boolean;
    getMode(): RowSelectionMode;
    getType(): RowSelectionType;
    static Builder: {
        new (): {
            enabled: boolean;
            type: RowSelectionType;
            mode: RowSelectionMode;
            buildObject(): RowSelection;
            withEnabled(enabled: boolean): any;
            withType(type: RowSelectionType): any;
            withMode(mode: RowSelectionMode): any;
            build(): RowSelection;
        };
    };
}
