import { ChangeDetectorRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { InputEditTemplateComponent } from './input-edit-template.component';
export declare class StringEditTemplateComponent extends InputEditTemplateComponent<string> {
    constructor(changeDetectorRef: ChangeDetectorRef, fb: FormBuilder);
    focusField(inputElement: any): void;
}
