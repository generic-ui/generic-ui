/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
import { SmartComponent } from '../../../../../../common/cdk/smart-component';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jb21tdW5pY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vY29tcG9zaXRpb24vcXVlcnkvZWRpdC9lZGl0LWNvbW11bmljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUU5RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBR3hELE1BQU0sT0FBZ0IsMEJBQThCLFNBQVEsY0FBYztJQUExRTs7UUFjb0IsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFFcEIsaUJBQVksR0FBRyxFQUFFLENBQUM7SUFnQnRDLENBQUM7Ozs7SUFkQSxNQUFNO1FBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELE1BQU07UUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7SUFFTyxVQUFVLENBQUMsTUFBcUI7UUFDdkMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pCO0lBQ0YsQ0FBQzs7O29CQTVCQSxLQUFLOzJCQUdMLEtBQUs7cUJBR0wsS0FBSztvQkFHTCxLQUFLOzs7O0lBVE4sMkNBQ1M7O0lBRVQsa0RBQ3FDOztJQUVyQyw0Q0FDMkM7O0lBRTNDLDJDQUNlOzs7OztJQUVmLG9EQUF1Qzs7Ozs7SUFFdkMsa0RBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENoYW5nZWRWYWx1ZUVtaXR0ZXIgfSBmcm9tICcuL2NoYW5nZWQtdmFsdWUuZW1pdHRlcic7XG5pbXBvcnQgeyBFZGl0RXZlbnRUeXBlIH0gZnJvbSAnLi9zdGF0ZS9lZGl0LmV2ZW50LXR5cGUnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFZGl0Q29tbXVuaWNhdGlvbkNvbXBvbmVudDxUPiBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHR2YWx1ZTogVDtcblxuXHRASW5wdXQoKVxuXHR2YWx1ZUNoYW5nZXM6IENoYW5nZWRWYWx1ZUVtaXR0ZXI8VD47XG5cblx0QElucHV0KClcblx0c3RhdHVzOiBDaGFuZ2VkVmFsdWVFbWl0dGVyPEVkaXRFdmVudFR5cGU+O1xuXG5cdEBJbnB1dCgpXG5cdGZvY3VzOiBib29sZWFuO1xuXG5cdHByb3RlY3RlZCByZWFkb25seSBFTlRFUl9LRVlfQ09ERSA9IDEzO1xuXG5cdHByb3RlY3RlZCByZWFkb25seSBFU0NfS0VZX0NPREUgPSAyNztcblxuXHRzdWJtaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5lbWl0U3RhdHVzKEVkaXRFdmVudFR5cGUuU1VCTUlUKTtcblx0fVxuXG5cdGNhbmNlbCgpOiB2b2lkIHtcblx0XHR0aGlzLmVtaXRTdGF0dXMoRWRpdEV2ZW50VHlwZS5DQU5DRUwpO1xuXHR9XG5cblx0cHJpdmF0ZSBlbWl0U3RhdHVzKHN0YXR1czogRWRpdEV2ZW50VHlwZSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnN0YXR1cykge1xuXHRcdFx0dGhpcy5zdGF0dXMuZW1pdChzdGF0dXMpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=