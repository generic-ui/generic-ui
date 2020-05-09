export declare class StructureInfoPanelConfig {
    private readonly enabled?;
    private readonly infoDialog?;
    private readonly columnsManager?;
    private readonly sourceSize?;
    constructor(enabled?: boolean, infoDialog?: boolean, columnsManager?: boolean, sourceSize?: boolean);
    isEnabled(): boolean;
    isInfoDialogEnabled(): boolean;
    isColumnsManagerEnabled(): boolean;
    isSourceSizeEnabled(): boolean;
    private isNotUndefinedOrNull;
}
