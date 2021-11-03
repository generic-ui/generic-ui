import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { EditCommunicationComponent } from '../edit-communication.component';
export declare class DateEditTemplateComponent extends EditCommunicationComponent<Date> {
    private readonly changeDetectorRef;
    datePickerRef: ElementRef;
    readonly filterFieldName = "dateEdit";
    private opened;
    private readonly localStreamCloser;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    toggle(changed: Date): void;
    dialogOpened(opened: boolean): void;
    protected getSelectorName(): string;
}
