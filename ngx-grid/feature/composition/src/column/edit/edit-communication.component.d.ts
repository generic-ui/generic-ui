import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { SmartComponent } from '../../../../common/component/src/smart-component';
import { ChangedValueEmitter } from './changed-value.emitter';
import { EditEventType } from './state/edit.event-type';
import * as i0 from "@angular/core";
export declare abstract class EditCommunicationComponent<T> extends SmartComponent {
    value: T;
    valueChanges: ChangedValueEmitter<T>;
    status: ChangedValueEmitter<EditEventType>;
    focus: boolean;
    parent: ElementRef;
    protected readonly ENTER_KEY_CODE = 13;
    protected readonly ESC_KEY_CODE = 27;
    protected constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef);
    submit(): void;
    cancel(): void;
    private emitStatus;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditCommunicationComponent<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EditCommunicationComponent<any>, never, never, { "value": { "alias": "value"; "required": false; }; "valueChanges": { "alias": "valueChanges"; "required": false; }; "status": { "alias": "status"; "required": false; }; "focus": { "alias": "focus"; "required": false; }; "parent": { "alias": "parent"; "required": false; }; }, {}, never, never, false, never>;
}
