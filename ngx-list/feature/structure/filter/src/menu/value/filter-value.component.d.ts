import { ChangeDetectorRef, ElementRef, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SmartComponent } from '../../../../../common/component/src/smart-component';
import { GuiEffects } from '../../../../../gui-angular/effect/gui.effects';
import * as i0 from "@angular/core";
export declare class FilterValueComponent extends SmartComponent {
    private readonly effects;
    private readonly formBuilder;
    private static readonly FORM_FILTER_VALUE;
    readonly formRef?: ElementRef;
    valueChanged: EventEmitter<any>;
    filterForm: FormGroup;
    constructor(detector: ChangeDetectorRef, elementRef: ElementRef, effects: GuiEffects, formBuilder: FormBuilder);
    ngOnInit(): void;
    protected getSelectorName(): string;
    private selectFilterFormValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterValueComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterValueComponent, "div[gui-filter-value]", never, {}, { "valueChanged": "valueChanged"; }, never, never, false, never>;
}
