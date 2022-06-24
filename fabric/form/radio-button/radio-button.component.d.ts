import { ElementRef, EventEmitter, OnChanges, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FabricRadioButtonComponent implements OnChanges {
    private readonly elementRef;
    private readonly renderer;
    name: string;
    checked: boolean;
    disabled: boolean;
    readonly changed: EventEmitter<boolean>;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(): void;
    check(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricRadioButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FabricRadioButtonComponent, "gui-radio-button", never, { "name": "name"; "checked": "checked"; "disabled": "disabled"; }, { "changed": "changed"; }, never, ["*"]>;
}
