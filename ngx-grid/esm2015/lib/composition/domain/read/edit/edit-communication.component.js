/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { ChangedValueEmitter } from './changed-value.emitter';
import { EditEventType } from './state/edit.event-type';
/**
 * @abstract
 * @template T
 */
export class EditCommunicationComponent extends SmartComponent {
    constructor() {
        super(...arguments);
        this.ENTER_KEY_CODE = 13;
        this.ESC_KEY_CODE = 27;
    }
    /**
     * @return {?}
     */
    submit() {
        this.emitStatus(EditEventType.SUBMIT);
    }
    /**
     * @return {?}
     */
    cancel() {
        this.emitStatus(EditEventType.CANCEL);
    }
    /**
     * @private
     * @param {?} status
     * @return {?}
     */
    emitStatus(status) {
        if (this.status) {
            this.status.emit(status);
        }
    }
}
EditCommunicationComponent.propDecorators = {
    value: [{ type: Input }],
    valueChanges: [{ type: Input }],
    status: [{ type: Input }],
    focus: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    EditCommunicationComponent.prototype.value;
    /** @type {?} */
    EditCommunicationComponent.prototype.valueChanges;
    /** @type {?} */
    EditCommunicationComponent.prototype.status;
    /** @type {?} */
    EditCommunicationComponent.prototype.focus;
    /**
     * @type {?}
     * @protected
     */
    EditCommunicationComponent.prototype.ENTER_KEY_CODE;
    /**
     * @type {?}
     * @protected
     */
    EditCommunicationComponent.prototype.ESC_KEY_CODE;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jb21tdW5pY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9yZWFkL2VkaXQvZWRpdC1jb21tdW5pY2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7OztBQUd4RCxNQUFNLE9BQWdCLDBCQUE4QixTQUFRLGNBQWM7SUFBMUU7O1FBY29CLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBRXBCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO0lBZ0J0QyxDQUFDOzs7O0lBZEEsTUFBTTtRQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7O0lBRU8sVUFBVSxDQUFDLE1BQXFCO1FBQ3ZDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QjtJQUNGLENBQUM7OztvQkE1QkEsS0FBSzsyQkFHTCxLQUFLO3FCQUdMLEtBQUs7b0JBR0wsS0FBSzs7OztJQVROLDJDQUNTOztJQUVULGtEQUNxQzs7SUFFckMsNENBQzJDOztJQUUzQywyQ0FDZTs7Ozs7SUFFZixvREFBdUM7Ozs7O0lBRXZDLGtEQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDaGFuZ2VkVmFsdWVFbWl0dGVyIH0gZnJvbSAnLi9jaGFuZ2VkLXZhbHVlLmVtaXR0ZXInO1xuaW1wb3J0IHsgRWRpdEV2ZW50VHlwZSB9IGZyb20gJy4vc3RhdGUvZWRpdC5ldmVudC10eXBlJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRWRpdENvbW11bmljYXRpb25Db21wb25lbnQ8VD4gZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0dmFsdWU6IFQ7XG5cblx0QElucHV0KClcblx0dmFsdWVDaGFuZ2VzOiBDaGFuZ2VkVmFsdWVFbWl0dGVyPFQ+O1xuXG5cdEBJbnB1dCgpXG5cdHN0YXR1czogQ2hhbmdlZFZhbHVlRW1pdHRlcjxFZGl0RXZlbnRUeXBlPjtcblxuXHRASW5wdXQoKVxuXHRmb2N1czogYm9vbGVhbjtcblxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgRU5URVJfS0VZX0NPREUgPSAxMztcblxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgRVNDX0tFWV9DT0RFID0gMjc7XG5cblx0c3VibWl0KCk6IHZvaWQge1xuXHRcdHRoaXMuZW1pdFN0YXR1cyhFZGl0RXZlbnRUeXBlLlNVQk1JVCk7XG5cdH1cblxuXHRjYW5jZWwoKTogdm9pZCB7XG5cdFx0dGhpcy5lbWl0U3RhdHVzKEVkaXRFdmVudFR5cGUuQ0FOQ0VMKTtcblx0fVxuXG5cdHByaXZhdGUgZW1pdFN0YXR1cyhzdGF0dXM6IEVkaXRFdmVudFR5cGUpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5zdGF0dXMpIHtcblx0XHRcdHRoaXMuc3RhdHVzLmVtaXQoc3RhdHVzKTtcblx0XHR9XG5cdH1cblxufVxuIl19