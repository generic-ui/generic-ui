import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { EditCommunicationComponent } from '../edit-communication.component';
import * as i0 from "@angular/core";
export declare class BooleanEditTemplateComponent extends EditCommunicationComponent<boolean> {
    private readonly changeDetectorRef;
    checkboxRef: ElementRef;
    readonly filterFieldName = "booleanEdit";
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef);
    toggle(changed: boolean): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BooleanEditTemplateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BooleanEditTemplateComponent, "gui-boolean-edit", never, {}, {}, never, never, false, never>;
}
