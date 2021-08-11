/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, Input } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { ChangedValueEmitter } from './changed-value.emitter';
import { EditEventType } from './state/edit.event-type';
/**
 * @abstract
 * @template T
 */
export class EditCommunicationComponent extends SmartComponent {
    /**
     * @protected
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     */
    constructor(changeDetectorRef, elementRef) {
        super(changeDetectorRef, elementRef);
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
    focus: [{ type: Input }],
    parent: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jb21tdW5pY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9lZGl0L2VkaXQtY29tbXVuaWNhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBcUIsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFbEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7OztBQUd4RCxNQUFNLE9BQWdCLDBCQUE4QixTQUFRLGNBQWM7Ozs7OztJQXFCekUsWUFBc0IsaUJBQW9DLEVBQ25ELFVBQXNCO1FBQzVCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQU5uQixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUVwQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztJQUtyQyxDQUFDOzs7O0lBRUQsTUFBTTtRQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7O0lBRU8sVUFBVSxDQUFDLE1BQXFCO1FBQ3ZDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QjtJQUNGLENBQUM7OztvQkFwQ0EsS0FBSzsyQkFHTCxLQUFLO3FCQUdMLEtBQUs7b0JBR0wsS0FBSztxQkFHTCxLQUFLOzs7O0lBWk4sMkNBQ1M7O0lBRVQsa0RBQ3FDOztJQUVyQyw0Q0FDMkM7O0lBRTNDLDJDQUNlOztJQUVmLDRDQUNtQjs7Ozs7SUFFbkIsb0RBQXVDOzs7OztJQUV2QyxrREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDaGFuZ2VkVmFsdWVFbWl0dGVyIH0gZnJvbSAnLi9jaGFuZ2VkLXZhbHVlLmVtaXR0ZXInO1xuaW1wb3J0IHsgRWRpdEV2ZW50VHlwZSB9IGZyb20gJy4vc3RhdGUvZWRpdC5ldmVudC10eXBlJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRWRpdENvbW11bmljYXRpb25Db21wb25lbnQ8VD4gZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0dmFsdWU6IFQ7XG5cblx0QElucHV0KClcblx0dmFsdWVDaGFuZ2VzOiBDaGFuZ2VkVmFsdWVFbWl0dGVyPFQ+O1xuXG5cdEBJbnB1dCgpXG5cdHN0YXR1czogQ2hhbmdlZFZhbHVlRW1pdHRlcjxFZGl0RXZlbnRUeXBlPjtcblxuXHRASW5wdXQoKVxuXHRmb2N1czogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRwYXJlbnQ6IEVsZW1lbnRSZWY7XG5cblx0cHJvdGVjdGVkIHJlYWRvbmx5IEVOVEVSX0tFWV9DT0RFID0gMTM7XG5cblx0cHJvdGVjdGVkIHJlYWRvbmx5IEVTQ19LRVlfQ09ERSA9IDI3O1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdFx0XHQgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRzdWJtaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5lbWl0U3RhdHVzKEVkaXRFdmVudFR5cGUuU1VCTUlUKTtcblx0fVxuXG5cdGNhbmNlbCgpOiB2b2lkIHtcblx0XHR0aGlzLmVtaXRTdGF0dXMoRWRpdEV2ZW50VHlwZS5DQU5DRUwpO1xuXHR9XG5cblx0cHJpdmF0ZSBlbWl0U3RhdHVzKHN0YXR1czogRWRpdEV2ZW50VHlwZSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnN0YXR1cykge1xuXHRcdFx0dGhpcy5zdGF0dXMuZW1pdChzdGF0dXMpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=