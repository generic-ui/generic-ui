import { GuiComponent } from './gui-component';
import { ElementRef } from '@angular/core';
export declare abstract class PureComponent extends GuiComponent {
    private readonly subClassConstructor;
    private readonly subClassNgOnInit;
    protected constructor(elementRef: ElementRef);
    private hasConstructorOnlyElementRefInjected;
    private isElementRef;
    private throwError;
}
