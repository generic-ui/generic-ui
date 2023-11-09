import { GuiComponent } from './gui-component';
import { ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare abstract class PureComponent extends GuiComponent {
    private readonly subClassConstructor;
    private readonly subClassNgOnInit;
    protected constructor(elementRef: ElementRef);
    private hasConstructorOnlyElementRefInjected;
    private isElementRef;
    private throwError;
    static ɵfac: i0.ɵɵFactoryDeclaration<PureComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PureComponent, never, never, {}, {}, never, never, false, never>;
}
