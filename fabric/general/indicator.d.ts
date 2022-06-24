import { ElementRef, Renderer2, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare abstract class Indicator {
    protected elementRef: ElementRef;
    protected renderer: Renderer2;
    private static readonly PRIMARY_CLASS_NAME;
    private static readonly SECONDARY_CLASS_NAME;
    private static readonly OUTLINE_CLASS_NAME;
    primary: boolean;
    secondary: boolean;
    outline: boolean;
    protected constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    protected addClass(className: string): void;
    protected removeClass(className: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Indicator, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<Indicator, never, never, { "primary": "primary"; "secondary": "secondary"; "outline": "outline"; }, {}, never>;
}
