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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jb21tdW5pY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vY29tcG9zaXRpb24vcmVhZC9lZGl0L2VkaXQtY29tbXVuaWNhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRTlFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7QUFHeEQsTUFBTSxPQUFnQiwwQkFBOEIsU0FBUSxjQUFjO0lBQTFFOztRQWNvQixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUVwQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztJQWdCdEMsQ0FBQzs7OztJQWRBLE1BQU07UUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsTUFBTTtRQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7OztJQUVPLFVBQVUsQ0FBQyxNQUFxQjtRQUN2QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekI7SUFDRixDQUFDOzs7b0JBNUJBLEtBQUs7MkJBR0wsS0FBSztxQkFHTCxLQUFLO29CQUdMLEtBQUs7Ozs7SUFUTiwyQ0FDUzs7SUFFVCxrREFDcUM7O0lBRXJDLDRDQUMyQzs7SUFFM0MsMkNBQ2U7Ozs7O0lBRWYsb0RBQXVDOzs7OztJQUV2QyxrREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ2hhbmdlZFZhbHVlRW1pdHRlciB9IGZyb20gJy4vY2hhbmdlZC12YWx1ZS5lbWl0dGVyJztcbmltcG9ydCB7IEVkaXRFdmVudFR5cGUgfSBmcm9tICcuL3N0YXRlL2VkaXQuZXZlbnQtdHlwZSc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVkaXRDb21tdW5pY2F0aW9uQ29tcG9uZW50PFQ+IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdHZhbHVlOiBUO1xuXG5cdEBJbnB1dCgpXG5cdHZhbHVlQ2hhbmdlczogQ2hhbmdlZFZhbHVlRW1pdHRlcjxUPjtcblxuXHRASW5wdXQoKVxuXHRzdGF0dXM6IENoYW5nZWRWYWx1ZUVtaXR0ZXI8RWRpdEV2ZW50VHlwZT47XG5cblx0QElucHV0KClcblx0Zm9jdXM6IGJvb2xlYW47XG5cblx0cHJvdGVjdGVkIHJlYWRvbmx5IEVOVEVSX0tFWV9DT0RFID0gMTM7XG5cblx0cHJvdGVjdGVkIHJlYWRvbmx5IEVTQ19LRVlfQ09ERSA9IDI3O1xuXG5cdHN1Ym1pdCgpOiB2b2lkIHtcblx0XHR0aGlzLmVtaXRTdGF0dXMoRWRpdEV2ZW50VHlwZS5TVUJNSVQpO1xuXHR9XG5cblx0Y2FuY2VsKCk6IHZvaWQge1xuXHRcdHRoaXMuZW1pdFN0YXR1cyhFZGl0RXZlbnRUeXBlLkNBTkNFTCk7XG5cdH1cblxuXHRwcml2YXRlIGVtaXRTdGF0dXMoc3RhdHVzOiBFZGl0RXZlbnRUeXBlKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc3RhdHVzKSB7XG5cdFx0XHR0aGlzLnN0YXR1cy5lbWl0KHN0YXR1cyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==