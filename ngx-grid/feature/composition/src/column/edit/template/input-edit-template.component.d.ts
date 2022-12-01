import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EditCommunicationComponent } from '../edit-communication.component';
import { NgChanges } from '../../../../../common/src/cdk/component/lib/src/ng-changes';
import * as i0 from "@angular/core";
export declare abstract class InputEditTemplateComponent<T> extends EditCommunicationComponent<T> {
    private readonly formBuilder;
    inputRef: ElementRef;
    filterForm: FormGroup;
    readonly filterFieldName = "phrase";
    protected constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, formBuilder: FormBuilder);
    ngOnChanges(changes: NgChanges<InputEditTemplateComponent<any>>): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    focusField(inputElement: HTMLElement): void;
    private observeChanges;
    private emitValueChange;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputEditTemplateComponent<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<InputEditTemplateComponent<any>, never, never, {}, {}, never, never, false, never>;
}
