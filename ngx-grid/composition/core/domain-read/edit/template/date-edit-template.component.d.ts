import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { EditCommunicationComponent } from '../edit-communication.component';
export declare class DateEditTemplateComponent extends EditCommunicationComponent<Date> {
    private readonly changeDetectorRef;
    datePickerRef: ElementRef;
    readonly filterFieldName = "dateEdit";
    private opened;
    constructor(changeDetectorRef: ChangeDetectorRef);
    ngAfterViewInit(): void;
    toggle(changed: Date): void;
    dialogOpened(opened: boolean): void;
}
