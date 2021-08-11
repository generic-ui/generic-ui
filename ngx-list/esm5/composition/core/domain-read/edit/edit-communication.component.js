/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ElementRef, Input } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { ChangedValueEmitter } from './changed-value.emitter';
import { EditEventType } from './state/edit.event-type';
/**
 * @abstract
 * @template T
 */
var EditCommunicationComponent = /** @class */ (function (_super) {
    tslib_1.__extends(EditCommunicationComponent, _super);
    function EditCommunicationComponent(changeDetectorRef, elementRef) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jb21tdW5pY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9lZGl0L2VkaXQtY29tbXVuaWNhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQXFCLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRWxGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7QUFHeEQ7SUFBNEQsc0RBQWM7SUFxQnpFLG9DQUFzQixpQkFBb0MsRUFDbkQsVUFBc0I7UUFEN0IsWUFFQyxrQkFBTSxpQkFBaUIsRUFBRSxVQUFVLENBQUMsU0FDcEM7UUFQa0Isb0JBQWMsR0FBRyxFQUFFLENBQUM7UUFFcEIsa0JBQVksR0FBRyxFQUFFLENBQUM7O0lBS3JDLENBQUM7Ozs7SUFFRCwyQ0FBTTs7O0lBQU47UUFDQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsMkNBQU07OztJQUFOO1FBQ0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7O0lBRU8sK0NBQVU7Ozs7O0lBQWxCLFVBQW1CLE1BQXFCO1FBQ3ZDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QjtJQUNGLENBQUM7O3dCQXBDQSxLQUFLOytCQUdMLEtBQUs7eUJBR0wsS0FBSzt3QkFHTCxLQUFLO3lCQUdMLEtBQUs7O0lBMEJQLGlDQUFDO0NBQUEsQUF4Q0QsQ0FBNEQsY0FBYyxHQXdDekU7U0F4Q3FCLDBCQUEwQjs7O0lBRS9DLDJDQUNTOztJQUVULGtEQUNxQzs7SUFFckMsNENBQzJDOztJQUUzQywyQ0FDZTs7SUFFZiw0Q0FDbUI7Ozs7O0lBRW5CLG9EQUF1Qzs7Ozs7SUFFdkMsa0RBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ2hhbmdlZFZhbHVlRW1pdHRlciB9IGZyb20gJy4vY2hhbmdlZC12YWx1ZS5lbWl0dGVyJztcbmltcG9ydCB7IEVkaXRFdmVudFR5cGUgfSBmcm9tICcuL3N0YXRlL2VkaXQuZXZlbnQtdHlwZSc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVkaXRDb21tdW5pY2F0aW9uQ29tcG9uZW50PFQ+IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdHZhbHVlOiBUO1xuXG5cdEBJbnB1dCgpXG5cdHZhbHVlQ2hhbmdlczogQ2hhbmdlZFZhbHVlRW1pdHRlcjxUPjtcblxuXHRASW5wdXQoKVxuXHRzdGF0dXM6IENoYW5nZWRWYWx1ZUVtaXR0ZXI8RWRpdEV2ZW50VHlwZT47XG5cblx0QElucHV0KClcblx0Zm9jdXM6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0cGFyZW50OiBFbGVtZW50UmVmO1xuXG5cdHByb3RlY3RlZCByZWFkb25seSBFTlRFUl9LRVlfQ09ERSA9IDEzO1xuXG5cdHByb3RlY3RlZCByZWFkb25seSBFU0NfS0VZX0NPREUgPSAyNztcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRcdFx0ICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0c3VibWl0KCk6IHZvaWQge1xuXHRcdHRoaXMuZW1pdFN0YXR1cyhFZGl0RXZlbnRUeXBlLlNVQk1JVCk7XG5cdH1cblxuXHRjYW5jZWwoKTogdm9pZCB7XG5cdFx0dGhpcy5lbWl0U3RhdHVzKEVkaXRFdmVudFR5cGUuQ0FOQ0VMKTtcblx0fVxuXG5cdHByaXZhdGUgZW1pdFN0YXR1cyhzdGF0dXM6IEVkaXRFdmVudFR5cGUpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5zdGF0dXMpIHtcblx0XHRcdHRoaXMuc3RhdHVzLmVtaXQoc3RhdHVzKTtcblx0XHR9XG5cdH1cblxufVxuIl19