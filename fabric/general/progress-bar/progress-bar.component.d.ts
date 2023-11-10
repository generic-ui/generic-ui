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
    static ɵcmp: i0.ɵɵComponentDeclaration<FabricProgressBarComponent, "gui-progress-bar", never, { "progress": { "alias": "progress"; "required": false; }; "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "width": { "alias": "width"; "required": false; }; "textTop": { "alias": "textTop"; "required": false; }; "textAlign": { "alias": "textAlign"; "required": false; }; "primary": { "alias": "primary"; "required": false; }; "secondary": { "alias": "secondary"; "required": false; }; }, {}, never, ["*"], false, never>;
}
