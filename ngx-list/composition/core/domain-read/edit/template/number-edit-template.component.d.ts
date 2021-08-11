import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { InputEditTemplateComponent } from './input-edit-template.component';
export declare class NumberEditTemplateComponent extends InputEditTemplateComponent<number> {
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, fb: FormBuilder);
    protected getSelectorName(): string;
}
