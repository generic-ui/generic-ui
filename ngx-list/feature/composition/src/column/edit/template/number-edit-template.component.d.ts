import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { InputEditTemplateComponent } from './input-edit-template.component';
import * as i0 from "@angular/core";
export declare class NumberEditTemplateComponent extends InputEditTemplateComponent<number> {
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, fb: FormBuilder);
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NumberEditTemplateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NumberEditTemplateComponent, "gui-number-edit", never, {}, {}, never, never, false, never>;
}
