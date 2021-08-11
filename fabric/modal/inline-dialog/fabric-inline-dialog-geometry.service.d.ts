import { ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { InlineDialogCords } from './inline-dialog-cords';
import { FabricPlacement } from '../../common/modal/cords/fabric-placement';
export declare class InlineDialogGeometryService {
    private platformId;
    private inlineDialogGeometry;
    private inlineDialogState$;
    constructor(platformId: any);
    observeInlineDialogCords(): Observable<InlineDialogCords>;
    changeGeometry(inlineDialogRef: ElementRef): void;
    getInlineDialogCords(invokerElementRef: ElementRef, placement?: FabricPlacement, offset?: number): void;
}
