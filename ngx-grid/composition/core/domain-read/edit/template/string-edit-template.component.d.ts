import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { InputEditTemplateComponent } from './input-edit-template.component';
export declare class StringEditTemplateComponent extends InputEditTemplateComponent<string> {
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, fb: FormBuilder);
    focusField(inputElement: any): void;
    protected getSelectorName(): string;
}
