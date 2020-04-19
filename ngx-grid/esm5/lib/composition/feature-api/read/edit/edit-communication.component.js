/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ElementRef, Input } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { ChangedValueEmitter } from './changed-value.emitter';
import { EditEventType } from './state/edit.event-type';
/**
 * @abstract
 * @template T
 */
var EditCommunicationComponent = /** @class */ (function (_super) {
    tslib_1.__extends(EditCommunicationComponent, _super);
    function EditCommunicationComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ENTER_KEY_CODE = 13;
        _this.ESC_KEY_CODE = 27;
        return _this;
    }
    /**
     * @return {?}
     */
    EditCommunicationComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        this.emitStatus(EditEventType.SUBMIT);
    };
    /**
     * @return {?}
     */
    EditCommunicationComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this.emitStatus(EditEventType.CANCEL);
    };
    /**
     * @private
     * @param {?} status
     * @return {?}
     */
    EditCommunicationComponent.prototype.emitStatus = /**
     * @private
     * @param {?} status
     * @return {?}
     */
    function (status) {
        if (this.status) {
            this.status.emit(status);
        }
    };
    EditCommunicationComponent.propDecorators = {
        value: [{ type: Input }],
        valueChanges: [{ type: Input }],
        status: [{ type: Input }],
        focus: [{ type: Input }],
        parent: [{ type: Input }]
    };
    return EditCommunicationComponent;
}(SmartComponent));
export { EditCommunicationComponent };
if (false) {
    /** @type {?} */
    EditCommunicationComponent.prototype.value;
    /** @type {?} */
    EditCommunicationComponent.prototype.valueChanges;
    /** @type {?} */
    EditCommunicationComponent.prototype.status;
    /** @type {?} */
    EditCommunicationComponent.prototype.focus;
    /** @type {?} */
    EditCommunicationComponent.prototype.parent;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jb21tdW5pY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2ZlYXR1cmUtYXBpL3JlYWQvZWRpdC9lZGl0LWNvbW11bmljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7QUFHeEQ7SUFBNEQsc0RBQWM7SUFBMUU7UUFBQSxxRUFtQ0M7UUFsQm1CLG9CQUFjLEdBQUcsRUFBRSxDQUFDO1FBRXBCLGtCQUFZLEdBQUcsRUFBRSxDQUFDOztJQWdCdEMsQ0FBQzs7OztJQWRBLDJDQUFNOzs7SUFBTjtRQUNDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCwyQ0FBTTs7O0lBQU47UUFDQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7SUFFTywrQ0FBVTs7Ozs7SUFBbEIsVUFBbUIsTUFBcUI7UUFDdkMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pCO0lBQ0YsQ0FBQzs7d0JBL0JBLEtBQUs7K0JBR0wsS0FBSzt5QkFHTCxLQUFLO3dCQUdMLEtBQUs7eUJBR0wsS0FBSzs7SUFxQlAsaUNBQUM7Q0FBQSxBQW5DRCxDQUE0RCxjQUFjLEdBbUN6RTtTQW5DcUIsMEJBQTBCOzs7SUFFL0MsMkNBQ1M7O0lBRVQsa0RBQ3FDOztJQUVyQyw0Q0FDMkM7O0lBRTNDLDJDQUNlOztJQUVmLDRDQUNtQjs7Ozs7SUFFbkIsb0RBQXVDOzs7OztJQUV2QyxrREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ2hhbmdlZFZhbHVlRW1pdHRlciB9IGZyb20gJy4vY2hhbmdlZC12YWx1ZS5lbWl0dGVyJztcbmltcG9ydCB7IEVkaXRFdmVudFR5cGUgfSBmcm9tICcuL3N0YXRlL2VkaXQuZXZlbnQtdHlwZSc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVkaXRDb21tdW5pY2F0aW9uQ29tcG9uZW50PFQ+IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdHZhbHVlOiBUO1xuXG5cdEBJbnB1dCgpXG5cdHZhbHVlQ2hhbmdlczogQ2hhbmdlZFZhbHVlRW1pdHRlcjxUPjtcblxuXHRASW5wdXQoKVxuXHRzdGF0dXM6IENoYW5nZWRWYWx1ZUVtaXR0ZXI8RWRpdEV2ZW50VHlwZT47XG5cblx0QElucHV0KClcblx0Zm9jdXM6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0cGFyZW50OiBFbGVtZW50UmVmO1xuXG5cdHByb3RlY3RlZCByZWFkb25seSBFTlRFUl9LRVlfQ09ERSA9IDEzO1xuXG5cdHByb3RlY3RlZCByZWFkb25seSBFU0NfS0VZX0NPREUgPSAyNztcblxuXHRzdWJtaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5lbWl0U3RhdHVzKEVkaXRFdmVudFR5cGUuU1VCTUlUKTtcblx0fVxuXG5cdGNhbmNlbCgpOiB2b2lkIHtcblx0XHR0aGlzLmVtaXRTdGF0dXMoRWRpdEV2ZW50VHlwZS5DQU5DRUwpO1xuXHR9XG5cblx0cHJpdmF0ZSBlbWl0U3RhdHVzKHN0YXR1czogRWRpdEV2ZW50VHlwZSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnN0YXR1cykge1xuXHRcdFx0dGhpcy5zdGF0dXMuZW1pdChzdGF0dXMpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=