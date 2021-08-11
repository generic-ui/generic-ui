import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EditCommunicationComponent } from '../edit-communication.component';
import { NgChanges } from '../../../../../common/cdk/component/ng-changes';
export declare abstract class InputEditTemplateComponent<T> extends EditCommunicationComponent<T> {
    private readonly changeDetectorRef;
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
}
