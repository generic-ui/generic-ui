import { ElementRef, Renderer2, SimpleChanges } from '@angular/core';
import { Indicator } from '../../indicator';
import * as i0 from "@angular/core";
export declare class FabricButtonComponent extends Indicator {
    link: boolean;
    text: boolean;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FabricButtonComponent, "button[gui-button], a[gui-button]", never, { "link": "link"; "text": "text"; }, {}, never, ["*"]>;
}
