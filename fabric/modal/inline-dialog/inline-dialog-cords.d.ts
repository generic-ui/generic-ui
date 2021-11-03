import { ElementRef } from '@angular/core';
import { FabricCords } from '../../common/modal/cords/fabric-cords';
import { FabricPlacement } from '../../common/modal/cords/fabric-placement';
export declare class InlineDialogCords extends FabricCords {
    private invokerElementRef;
    private invokedElementRef;
    private window;
    private placement?;
    private inlineDialogOffset;
    private static defaultInlineDialogOffset;
    constructor(invokerElementRef: ElementRef, invokedElementRef: ElementRef, window: Window, placement?: FabricPlacement, inlineDialogOffset?: number);
}
//# sourceMappingURL=inline-dialog-cords.d.ts.map