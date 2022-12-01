import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { EditCommunicationComponent } from '../edit-communication.component';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<DateEditTemplateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateEditTemplateComponent, "gui-date-edit", never, {}, {}, never, never, false, never>;
}
