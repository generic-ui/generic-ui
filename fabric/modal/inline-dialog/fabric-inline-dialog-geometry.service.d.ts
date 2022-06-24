import { ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { InlineDialogCords } from './inline-dialog-cords';
import { FabricPlacement } from '../../common/modal/cords/fabric-placement';
import * as i0 from "@angular/core";
export declare class InlineDialogGeometryService {
    private platformId;
    private inlineDialogGeometry;
    private readonly inlineDialogState$;
    constructor(platformId: any);
    observeInlineDialogCords(): Observable<InlineDialogCords>;
    changeGeometry(inlineDialogRef: ElementRef): void;
    getInlineDialogCords(invokerElementRef: ElementRef, placement?: FabricPlacement, offset?: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InlineDialogGeometryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InlineDialogGeometryService>;
}
