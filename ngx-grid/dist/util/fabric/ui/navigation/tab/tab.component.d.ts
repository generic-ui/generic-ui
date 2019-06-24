import { ElementRef, Renderer2 } from '@angular/core';
export declare class FabricTabComponent {
    private renderer;
    navTabRef: ElementRef;
    navTabItemRef: ElementRef;
    menu: Array<string>;
    active: string;
    private readonly ACTIVE_TAB_CLASS_NAME;
    constructor(renderer: Renderer2);
    ngAfterViewInit(): void;
    toggleTab(tab: string): void;
    private setActive;
    private removeActive;
    private addClass;
    private removeClass;
}
