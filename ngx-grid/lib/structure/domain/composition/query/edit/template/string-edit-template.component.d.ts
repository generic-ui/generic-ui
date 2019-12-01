import { FormBuilder } from '@angular/forms';
import { InputEditTemplateComponent } from './input-edit-template.component';
export declare class StringEditTemplateComponent extends InputEditTemplateComponent<string> {
    constructor(fb: FormBuilder);
    focusField(inputElement: any): void;
}
