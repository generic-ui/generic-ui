import { ElementRef, Renderer2, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricProgressBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FabricProgressBarComponent, "gui-progress-bar", never, { "progress": "progress"; "color": "color"; "height": "height"; "width": "width"; "textTop": "textTop"; "textAlign": "textAlign"; "primary": "primary"; "secondary": "secondary"; }, {}, never, ["*"], false>;
}
