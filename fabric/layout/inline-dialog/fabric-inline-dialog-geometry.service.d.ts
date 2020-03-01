import { ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { InlineDialogCords } from './inline-dialog-cords';
import { InlineDialogPlacement } from './placement';
export declare class InlineDialogGeometryService {
    private platformId;
    private inlineDialogGeometry;
    private inlineDialogState$;
    constructor(platformId: any);
    observeInlineDialogCords(): Observable<InlineDialogCords>;
    changeGeometry(inlineDialogRef: ElementRef): void;
    getInlineDialogCords(element: ElementRef, placement?: InlineDialogPlacement, offset?: number): void;
}
