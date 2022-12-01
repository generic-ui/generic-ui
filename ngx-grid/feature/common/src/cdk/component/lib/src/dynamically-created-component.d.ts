import { ElementRef } from '@angular/core';
import { GuiComponent } from './gui-component';
import * as i0 from "@angular/core";
export declare abstract class DynamicallyCreatedComponent extends GuiComponent {
    private readonly subClassConstructor;
    protected constructor(elRef: ElementRef);
    private hasInputs;
    private throwError;
    private isEmpty;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicallyCreatedComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DynamicallyCreatedComponent, never, never, {}, {}, never, never, false, never>;
}
