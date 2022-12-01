import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { InputEditTemplateComponent } from './input-edit-template.component';
import * as i0 from "@angular/core";
export declare class StringEditTemplateComponent extends InputEditTemplateComponent<string> {
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, fb: FormBuilder);
    focusField(inputElement: any): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StringEditTemplateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StringEditTemplateComponent, "gui-string-edit", never, {}, {}, never, never, false, never>;
}
