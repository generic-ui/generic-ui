import { ElementRef, Renderer2, SimpleChanges } from '@angular/core';
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
}
