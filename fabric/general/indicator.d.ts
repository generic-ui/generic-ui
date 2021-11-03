import { ElementRef, Renderer2, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare abstract class Indicator {
    protected elementRef: ElementRef;
    protected renderer: Renderer2;
    primary: boolean;
    secondary: boolean;
    outline: boolean;
    private readonly PRIMARY_CLASS_NAME;
    private readonly SECONDARY_CLASS_NAME;
    private readonly OUTLINE_CLASS_NAME;
    protected constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    protected addClass(className: string): void;
    protected removeClass(className: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Indicator, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<Indicator, never, never, { "primary": "primary"; "secondary": "secondary"; "outline": "outline"; }, {}, never>;
}
//# sourceMappingURL=indicator.d.ts.map