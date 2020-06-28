import { ElementRef, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
export declare class FilterValueComponent {
    private readonly formBuilder;
    private static readonly FORM_FILTER_VALUE;
    formRef: ElementRef;
    valueChanged: EventEmitter<any>;
    filterForm: FormGroup;
    constructor(formBuilder: FormBuilder);
    ngOnInit(): void;
}
