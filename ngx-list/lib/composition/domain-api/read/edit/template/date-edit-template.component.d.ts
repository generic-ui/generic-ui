import { ElementRef } from '@angular/core';
import { EditCommunicationComponent } from '../edit-communication.component';
export declare class DateEditTemplateComponent extends EditCommunicationComponent<Date> {
    datePickerRef: ElementRef;
    readonly filterFieldName = "dateEdit";
    private opened;
    constructor();
    ngAfterViewInit(): void;
    toggle(changed: Date): void;
    dialogOpened(opened: boolean): void;
}
