import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { EditCommunicationComponent } from '../edit-communication.component';
export declare class BooleanEditTemplateComponent extends EditCommunicationComponent<boolean> {
    private readonly changeDetectorRef;
    checkboxRef: ElementRef;
    readonly filterFieldName = "booleanEdit";
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef);
    toggle(changed: boolean): void;
    protected getSelectorName(): string;
}
