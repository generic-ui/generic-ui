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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jb21tdW5pY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9lZGl0L2VkaXQtY29tbXVuaWNhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7OztBQUd4RDtJQUE0RCxzREFBYztJQUExRTtRQUFBLHFFQW1DQztRQWxCbUIsb0JBQWMsR0FBRyxFQUFFLENBQUM7UUFFcEIsa0JBQVksR0FBRyxFQUFFLENBQUM7O0lBZ0J0QyxDQUFDOzs7O0lBZEEsMkNBQU07OztJQUFOO1FBQ0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELDJDQUFNOzs7SUFBTjtRQUNDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7OztJQUVPLCtDQUFVOzs7OztJQUFsQixVQUFtQixNQUFxQjtRQUN2QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekI7SUFDRixDQUFDOzt3QkEvQkEsS0FBSzsrQkFHTCxLQUFLO3lCQUdMLEtBQUs7d0JBR0wsS0FBSzt5QkFHTCxLQUFLOztJQXFCUCxpQ0FBQztDQUFBLEFBbkNELENBQTRELGNBQWMsR0FtQ3pFO1NBbkNxQiwwQkFBMEI7OztJQUUvQywyQ0FDUzs7SUFFVCxrREFDcUM7O0lBRXJDLDRDQUMyQzs7SUFFM0MsMkNBQ2U7O0lBRWYsNENBQ21COzs7OztJQUVuQixvREFBdUM7Ozs7O0lBRXZDLGtEQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDaGFuZ2VkVmFsdWVFbWl0dGVyIH0gZnJvbSAnLi9jaGFuZ2VkLXZhbHVlLmVtaXR0ZXInO1xuaW1wb3J0IHsgRWRpdEV2ZW50VHlwZSB9IGZyb20gJy4vc3RhdGUvZWRpdC5ldmVudC10eXBlJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRWRpdENvbW11bmljYXRpb25Db21wb25lbnQ8VD4gZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0dmFsdWU6IFQ7XG5cblx0QElucHV0KClcblx0dmFsdWVDaGFuZ2VzOiBDaGFuZ2VkVmFsdWVFbWl0dGVyPFQ+O1xuXG5cdEBJbnB1dCgpXG5cdHN0YXR1czogQ2hhbmdlZFZhbHVlRW1pdHRlcjxFZGl0RXZlbnRUeXBlPjtcblxuXHRASW5wdXQoKVxuXHRmb2N1czogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRwYXJlbnQ6IEVsZW1lbnRSZWY7XG5cblx0cHJvdGVjdGVkIHJlYWRvbmx5IEVOVEVSX0tFWV9DT0RFID0gMTM7XG5cblx0cHJvdGVjdGVkIHJlYWRvbmx5IEVTQ19LRVlfQ09ERSA9IDI3O1xuXG5cdHN1Ym1pdCgpOiB2b2lkIHtcblx0XHR0aGlzLmVtaXRTdGF0dXMoRWRpdEV2ZW50VHlwZS5TVUJNSVQpO1xuXHR9XG5cblx0Y2FuY2VsKCk6IHZvaWQge1xuXHRcdHRoaXMuZW1pdFN0YXR1cyhFZGl0RXZlbnRUeXBlLkNBTkNFTCk7XG5cdH1cblxuXHRwcml2YXRlIGVtaXRTdGF0dXMoc3RhdHVzOiBFZGl0RXZlbnRUeXBlKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc3RhdHVzKSB7XG5cdFx0XHR0aGlzLnN0YXR1cy5lbWl0KHN0YXR1cyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==