/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ElementRef, Input } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jb21tdW5pY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL2VkaXQvZWRpdC1jb21tdW5pY2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUV4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBR3hEO0lBQTRELHNEQUFjO0lBQTFFO1FBQUEscUVBbUNDO1FBbEJtQixvQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUVwQixrQkFBWSxHQUFHLEVBQUUsQ0FBQzs7SUFnQnRDLENBQUM7Ozs7SUFkQSwyQ0FBTTs7O0lBQU47UUFDQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsMkNBQU07OztJQUFOO1FBQ0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7O0lBRU8sK0NBQVU7Ozs7O0lBQWxCLFVBQW1CLE1BQXFCO1FBQ3ZDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QjtJQUNGLENBQUM7O3dCQS9CQSxLQUFLOytCQUdMLEtBQUs7eUJBR0wsS0FBSzt3QkFHTCxLQUFLO3lCQUdMLEtBQUs7O0lBcUJQLGlDQUFDO0NBQUEsQUFuQ0QsQ0FBNEQsY0FBYyxHQW1DekU7U0FuQ3FCLDBCQUEwQjs7O0lBRS9DLDJDQUNTOztJQUVULGtEQUNxQzs7SUFFckMsNENBQzJDOztJQUUzQywyQ0FDZTs7SUFFZiw0Q0FDbUI7Ozs7O0lBRW5CLG9EQUF1Qzs7Ozs7SUFFdkMsa0RBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENoYW5nZWRWYWx1ZUVtaXR0ZXIgfSBmcm9tICcuL2NoYW5nZWQtdmFsdWUuZW1pdHRlcic7XG5pbXBvcnQgeyBFZGl0RXZlbnRUeXBlIH0gZnJvbSAnLi9zdGF0ZS9lZGl0LmV2ZW50LXR5cGUnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFZGl0Q29tbXVuaWNhdGlvbkNvbXBvbmVudDxUPiBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHR2YWx1ZTogVDtcblxuXHRASW5wdXQoKVxuXHR2YWx1ZUNoYW5nZXM6IENoYW5nZWRWYWx1ZUVtaXR0ZXI8VD47XG5cblx0QElucHV0KClcblx0c3RhdHVzOiBDaGFuZ2VkVmFsdWVFbWl0dGVyPEVkaXRFdmVudFR5cGU+O1xuXG5cdEBJbnB1dCgpXG5cdGZvY3VzOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHBhcmVudDogRWxlbWVudFJlZjtcblxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgRU5URVJfS0VZX0NPREUgPSAxMztcblxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgRVNDX0tFWV9DT0RFID0gMjc7XG5cblx0c3VibWl0KCk6IHZvaWQge1xuXHRcdHRoaXMuZW1pdFN0YXR1cyhFZGl0RXZlbnRUeXBlLlNVQk1JVCk7XG5cdH1cblxuXHRjYW5jZWwoKTogdm9pZCB7XG5cdFx0dGhpcy5lbWl0U3RhdHVzKEVkaXRFdmVudFR5cGUuQ0FOQ0VMKTtcblx0fVxuXG5cdHByaXZhdGUgZW1pdFN0YXR1cyhzdGF0dXM6IEVkaXRFdmVudFR5cGUpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5zdGF0dXMpIHtcblx0XHRcdHRoaXMuc3RhdHVzLmVtaXQoc3RhdHVzKTtcblx0XHR9XG5cdH1cblxufVxuIl19