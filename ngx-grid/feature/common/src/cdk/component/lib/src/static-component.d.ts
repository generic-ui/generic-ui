import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { GuiComponent } from './gui-component';
import * as i0 from "@angular/core";
export declare abstract class StaticComponent extends GuiComponent implements OnInit {
    private readonly changeDetectorRef;
    protected constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StaticComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StaticComponent, never, never, {}, {}, never, never, false, never>;
}
