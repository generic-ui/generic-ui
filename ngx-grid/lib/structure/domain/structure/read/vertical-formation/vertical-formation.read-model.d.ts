export declare class VerticalFormationReadModel {
    private readonly enabled;
    private readonly topMargin;
    private readonly containerHeight;
    private readonly viewportHeight;
    private readonly rowHeight;
    constructor(enabled: boolean, topMargin: number, containerHeight: number, viewportHeight: number, rowHeight: number);
    isEnabled(): boolean;
    getTopMargin(): number;
    getContainerHeight(): number;
    getViewPortHeight(): number;
    getRowHeight(): number;
}
