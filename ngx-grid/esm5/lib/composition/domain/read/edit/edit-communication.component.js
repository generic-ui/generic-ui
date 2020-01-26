/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Input } from '@angular/core';
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
        focus: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jb21tdW5pY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9yZWFkL2VkaXQvZWRpdC1jb21tdW5pY2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7QUFHeEQ7SUFBNEQsc0RBQWM7SUFBMUU7UUFBQSxxRUFnQ0M7UUFsQm1CLG9CQUFjLEdBQUcsRUFBRSxDQUFDO1FBRXBCLGtCQUFZLEdBQUcsRUFBRSxDQUFDOztJQWdCdEMsQ0FBQzs7OztJQWRBLDJDQUFNOzs7SUFBTjtRQUNDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCwyQ0FBTTs7O0lBQU47UUFDQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7SUFFTywrQ0FBVTs7Ozs7SUFBbEIsVUFBbUIsTUFBcUI7UUFDdkMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pCO0lBQ0YsQ0FBQzs7d0JBNUJBLEtBQUs7K0JBR0wsS0FBSzt5QkFHTCxLQUFLO3dCQUdMLEtBQUs7O0lBcUJQLGlDQUFDO0NBQUEsQUFoQ0QsQ0FBNEQsY0FBYyxHQWdDekU7U0FoQ3FCLDBCQUEwQjs7O0lBRS9DLDJDQUNTOztJQUVULGtEQUNxQzs7SUFFckMsNENBQzJDOztJQUUzQywyQ0FDZTs7Ozs7SUFFZixvREFBdUM7Ozs7O0lBRXZDLGtEQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDaGFuZ2VkVmFsdWVFbWl0dGVyIH0gZnJvbSAnLi9jaGFuZ2VkLXZhbHVlLmVtaXR0ZXInO1xuaW1wb3J0IHsgRWRpdEV2ZW50VHlwZSB9IGZyb20gJy4vc3RhdGUvZWRpdC5ldmVudC10eXBlJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRWRpdENvbW11bmljYXRpb25Db21wb25lbnQ8VD4gZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0dmFsdWU6IFQ7XG5cblx0QElucHV0KClcblx0dmFsdWVDaGFuZ2VzOiBDaGFuZ2VkVmFsdWVFbWl0dGVyPFQ+O1xuXG5cdEBJbnB1dCgpXG5cdHN0YXR1czogQ2hhbmdlZFZhbHVlRW1pdHRlcjxFZGl0RXZlbnRUeXBlPjtcblxuXHRASW5wdXQoKVxuXHRmb2N1czogYm9vbGVhbjtcblxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgRU5URVJfS0VZX0NPREUgPSAxMztcblxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgRVNDX0tFWV9DT0RFID0gMjc7XG5cblx0c3VibWl0KCk6IHZvaWQge1xuXHRcdHRoaXMuZW1pdFN0YXR1cyhFZGl0RXZlbnRUeXBlLlNVQk1JVCk7XG5cdH1cblxuXHRjYW5jZWwoKTogdm9pZCB7XG5cdFx0dGhpcy5lbWl0U3RhdHVzKEVkaXRFdmVudFR5cGUuQ0FOQ0VMKTtcblx0fVxuXG5cdHByaXZhdGUgZW1pdFN0YXR1cyhzdGF0dXM6IEVkaXRFdmVudFR5cGUpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5zdGF0dXMpIHtcblx0XHRcdHRoaXMuc3RhdHVzLmVtaXQoc3RhdHVzKTtcblx0XHR9XG5cdH1cblxufVxuIl19