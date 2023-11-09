import { FormationCustomSelectionConfig } from '../custom/formation.custom-selection.config';
export declare enum RowSelectionType {
    ROW = "ROW",
    CHECKBOX = "CHECKBOX",
    RADIO = "RADIO"
}
export declare enum RowSelectionMode {
    SINGLE = "SINGLE",
    MULTIPLE = "MULTIPLE"
}
export declare class RowSelection {
    private readonly enabled;
    private readonly selectedRowIndexes;
    private readonly selectedRowIds;
    private readonly type;
    private readonly mode;
    private readonly matcher;
    private readonly customConfig?;
    private constructor();
    isModeDefined(): boolean;
    isTypeDefined(): boolean;
    isSelectedRowIndexesDefined(): boolean;
    isSelectedRowIdsDefined(): boolean;
    isEnabledDefined(): boolean;
    isMatcherDefined(): boolean;
    isEnabled(): boolean;
    isCustomSelectConfig(): boolean;
    getSelectedRowIndexes(): Array<number>;
    getSelectedRowIds(): Array<string>;
    getMode(): RowSelectionMode;
    getType(): RowSelectionType;
    getMatcher(): (item: any) => any;
    getCustomSelectConfig(): FormationCustomSelectionConfig;
    static Builder: {
        new (): {
            enabled: boolean;
            selectedRowIndexes: Array<number>;
            selectedRowIds: Array<string>;
            type: RowSelectionType;
            mode: RowSelectionMode;
            config: FormationCustomSelectionConfig;
            matcher: (item: any) => any;
            buildObject(): RowSelection;
            withEnabled(enabled: boolean): any;
            withSelectedRowIndexes(indexes: Array<number>): any;
            withSelectedRowIds(ids: Array<string>): any;
            withType(type: RowSelectionType): any;
            withMode(mode: RowSelectionMode): any;
            withMatcher(matcher: (item: any) => any): any;
            witCustomSelection(config: FormationCustomSelectionConfig): any;
            build(): RowSelection;
        };
    };
}
