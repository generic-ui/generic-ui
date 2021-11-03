import { ElementRef } from '@angular/core';
import { FabricPlacement } from './fabric-placement';
import { FabricGeometry } from './fabric-geometry';
export declare abstract class FabricCords extends FabricGeometry {
    private verticalPosition;
    private horizontalPosition;
    protected constructor(window: Window, invokerElementRef: ElementRef, invokedElementRef: ElementRef, containerClassName: string, placement: FabricPlacement, offset?: number);
    getVerticalPosition(): number;
    getHorizontalPosition(): number;
    private calculateCords;
    private calculateDirection;
}
//# sourceMappingURL=fabric-cords.d.ts.map