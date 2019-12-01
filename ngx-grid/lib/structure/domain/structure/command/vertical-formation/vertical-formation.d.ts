import { VerticalRange } from './vertical-range';
import { Logger } from '../../../../../../common/cdk/logger/logger';
export declare class VerticalFormation {
    private enabled;
    private rowHeight;
    private hiddenItemsTop;
    private hiddenItemsBottom;
    private viewportHeight;
    private scrollPosition;
    private range;
    private sourceSize;
    private logger;
    constructor(enabled?: boolean, viewportHeight?: number, sourceSize?: number, scrollPosition?: number, rowHeight?: number, hiddenItemsTop?: number, hiddenItemsBottom?: number);
    isEnabled(): boolean;
    getRange(): VerticalRange;
    getTopMargin(): number;
    calculateRange(): any;
    setEnabled(enabled: boolean): void;
    setSourceSize(sourceSize?: number): void;
    setTopHiddenItemsCount(count: number): void;
    setBottomHiddenItemsCount(count: number): void;
    setScrollPosition(scrollPosition: number): void;
    setViewportHeight(height: number): void;
    setRowHeight(height: number): void;
    setLogger(logger: Logger): void;
    calcFullHeight(): number;
    getViewPortHeight(): number;
}
