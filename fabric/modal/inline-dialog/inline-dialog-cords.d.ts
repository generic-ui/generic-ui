import { ElementRef } from '@angular/core';
import { FabricCords } from '../../common/modal/cords/fabric-cords';
import { FabricPlacement } from '../../common/modal/cords/fabric-placement';
export declare class InlineDialogCords extends FabricCords {
    private static defaultInlineDialogOffset;
    constructor(invokerElementRef: ElementRef, invokedElementRef: ElementRef, window: Window, placement?: FabricPlacement, inlineDialogOffset?: number);
}
