import { ElementRef, Renderer2, SimpleChanges } from '@angular/core';
export declare class FabricProgressBarComponent {
    private elementRef;
    private renderer;
    progress: number;
    color: string;
    height: number;
    width: number;
    textTop: string;
    textAlign: string;
    primary: boolean;
    secondary: boolean;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    private addClass;
    private removeClass;
}
