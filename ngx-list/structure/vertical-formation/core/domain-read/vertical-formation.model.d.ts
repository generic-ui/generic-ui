export declare class VerticalFormationModel {
    private readonly enabled;
    private readonly topMargin;
    private readonly sourceHeight;
    private readonly viewportHeight;
    private readonly rowHeight;
    constructor(enabled: boolean, topMargin: number, sourceHeight: number, viewportHeight: number, rowHeight: number);
    isEnabled(): boolean;
    getTopMargin(): number;
    getSourceHeight(): number;
    getViewPortHeight(): number;
    getRowHeight(): number;
}
