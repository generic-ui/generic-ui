import { AfterViewInit, ElementRef, QueryList, Renderer2 } from '@angular/core';
export declare class FabricTabComponent implements AfterViewInit {
    private renderer;
    tabRef: ElementRef;
    tabItemRef: ElementRef;
    tabMenuList: QueryList<ElementRef>;
    menu: Array<string>;
    active: string;
    scrollActive: boolean;
    private listPosition;
    private menuListWidth;
    private readonly scrollAmount;
    private readonly ACTIVE_TAB_CLASS_NAME;
    constructor(renderer: Renderer2);
    ngAfterViewInit(): void;
    toggleTab(tab: string): void;
    scrollTabList(scrollRightClicked: boolean): void;
    private setActive;
    private removeActive;
    private addClass;
    private removeClass;
    private calculateMenuWidth;
}
