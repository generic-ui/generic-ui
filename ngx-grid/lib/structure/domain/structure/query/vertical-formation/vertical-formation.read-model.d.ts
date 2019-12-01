export declare class VerticalFormationReadModel {
    private readonly enabled;
    private readonly topMargin;
    private readonly containerHeight;
    private readonly viewportHeight;
    constructor(enabled: boolean, topMargin: number, containerHeight: number, viewportHeight: number);
    isEnabled(): boolean;
    getTopMargin(): number;
    getContainerHeight(): number;
    getViewPortHeight(): number;
}
