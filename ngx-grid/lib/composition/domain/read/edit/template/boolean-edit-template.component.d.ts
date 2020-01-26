import { ElementRef } from '@angular/core';
import { EditCommunicationComponent } from '../edit-communication.component';
export declare class BooleanEditTemplateComponent extends EditCommunicationComponent<boolean> {
    checkboxRef: ElementRef;
    readonly filterFieldName = "booleanEdit";
    constructor();
    ngAfterViewInit(): void;
    toggle(changed: boolean): void;
}
