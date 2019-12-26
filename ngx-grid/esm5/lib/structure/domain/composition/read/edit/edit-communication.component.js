/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Input } from '@angular/core';
import { SmartComponent } from '../../../../../../common/cdk/smart-component';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jb21tdW5pY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vY29tcG9zaXRpb24vcmVhZC9lZGl0L2VkaXQtY29tbXVuaWNhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUU5RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBR3hEO0lBQTRELHNEQUFjO0lBQTFFO1FBQUEscUVBZ0NDO1FBbEJtQixvQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUVwQixrQkFBWSxHQUFHLEVBQUUsQ0FBQzs7SUFnQnRDLENBQUM7Ozs7SUFkQSwyQ0FBTTs7O0lBQU47UUFDQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsMkNBQU07OztJQUFOO1FBQ0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7O0lBRU8sK0NBQVU7Ozs7O0lBQWxCLFVBQW1CLE1BQXFCO1FBQ3ZDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QjtJQUNGLENBQUM7O3dCQTVCQSxLQUFLOytCQUdMLEtBQUs7eUJBR0wsS0FBSzt3QkFHTCxLQUFLOztJQXFCUCxpQ0FBQztDQUFBLEFBaENELENBQTRELGNBQWMsR0FnQ3pFO1NBaENxQiwwQkFBMEI7OztJQUUvQywyQ0FDUzs7SUFFVCxrREFDcUM7O0lBRXJDLDRDQUMyQzs7SUFFM0MsMkNBQ2U7Ozs7O0lBRWYsb0RBQXVDOzs7OztJQUV2QyxrREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ2hhbmdlZFZhbHVlRW1pdHRlciB9IGZyb20gJy4vY2hhbmdlZC12YWx1ZS5lbWl0dGVyJztcbmltcG9ydCB7IEVkaXRFdmVudFR5cGUgfSBmcm9tICcuL3N0YXRlL2VkaXQuZXZlbnQtdHlwZSc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVkaXRDb21tdW5pY2F0aW9uQ29tcG9uZW50PFQ+IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdHZhbHVlOiBUO1xuXG5cdEBJbnB1dCgpXG5cdHZhbHVlQ2hhbmdlczogQ2hhbmdlZFZhbHVlRW1pdHRlcjxUPjtcblxuXHRASW5wdXQoKVxuXHRzdGF0dXM6IENoYW5nZWRWYWx1ZUVtaXR0ZXI8RWRpdEV2ZW50VHlwZT47XG5cblx0QElucHV0KClcblx0Zm9jdXM6IGJvb2xlYW47XG5cblx0cHJvdGVjdGVkIHJlYWRvbmx5IEVOVEVSX0tFWV9DT0RFID0gMTM7XG5cblx0cHJvdGVjdGVkIHJlYWRvbmx5IEVTQ19LRVlfQ09ERSA9IDI3O1xuXG5cdHN1Ym1pdCgpOiB2b2lkIHtcblx0XHR0aGlzLmVtaXRTdGF0dXMoRWRpdEV2ZW50VHlwZS5TVUJNSVQpO1xuXHR9XG5cblx0Y2FuY2VsKCk6IHZvaWQge1xuXHRcdHRoaXMuZW1pdFN0YXR1cyhFZGl0RXZlbnRUeXBlLkNBTkNFTCk7XG5cdH1cblxuXHRwcml2YXRlIGVtaXRTdGF0dXMoc3RhdHVzOiBFZGl0RXZlbnRUeXBlKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc3RhdHVzKSB7XG5cdFx0XHR0aGlzLnN0YXR1cy5lbWl0KHN0YXR1cyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==