import { ChangeDetectorRef, ElementRef, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EditCommunicationComponent } from '../edit-communication.component';
export declare abstract class InputEditTemplateComponent<T> extends EditCommunicationComponent<T> {
    private readonly changeDetectorRef;
    private readonly formBuilder;
    inputRef: ElementRef;
    filterForm: FormGroup;
    readonly filterFieldName = "phrase";
    protected constructor(changeDetectorRef: ChangeDetectorRef, formBuilder: FormBuilder);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    focusField(inputElement: HTMLElement): void;
    private observeChanges;
    private emitValueChange;
}
