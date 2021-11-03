import { Directive, Input } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { EditEventType } from './state/edit.event-type';
import * as i0 from "@angular/core";
export class EditCommunicationComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef) {
        super(changeDetectorRef, elementRef);
        this.ENTER_KEY_CODE = 13;
        this.ESC_KEY_CODE = 27;
    }
    submit() {
        this.emitStatus(EditEventType.SUBMIT);
    }
    cancel() {
        this.emitStatus(EditEventType.CANCEL);
    }
    emitStatus(status) {
        if (this.status) {
            this.status.emit(status);
        }
    }
}
EditCommunicationComponent.ɵfac = function EditCommunicationComponent_Factory(t) { return new (t || EditCommunicationComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef)); };
EditCommunicationComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: EditCommunicationComponent, inputs: { value: "value", valueChanges: "valueChanges", status: "status", focus: "focus", parent: "parent" }, features: [i0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EditCommunicationComponent, [{
        type: Directive
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, { value: [{
            type: Input
        }], valueChanges: [{
            type: Input
        }], status: [{
            type: Input
        }], focus: [{
            type: Input
        }], parent: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jb21tdW5pY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9lZGl0L2VkaXQtY29tbXVuaWNhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFxQixTQUFTLEVBQWMsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUdsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBR3hELE1BQU0sT0FBZ0IsMEJBQThCLFNBQVEsY0FBYztJQXFCekUsWUFBc0IsaUJBQW9DLEVBQ25ELFVBQXNCO1FBQzVCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQU5uQixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUVwQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztJQUtyQyxDQUFDO0lBRUQsTUFBTTtRQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxNQUFNO1FBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVPLFVBQVUsQ0FBQyxNQUFxQjtRQUN2QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekI7SUFDRixDQUFDOztvR0F0Q29CLDBCQUEwQjs2RUFBMUIsMEJBQTBCO3VGQUExQiwwQkFBMEI7Y0FEL0MsU0FBUzs2RkFJVCxLQUFLO2tCQURKLEtBQUs7WUFJTixZQUFZO2tCQURYLEtBQUs7WUFJTixNQUFNO2tCQURMLEtBQUs7WUFJTixLQUFLO2tCQURKLEtBQUs7WUFJTixNQUFNO2tCQURMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENoYW5nZWRWYWx1ZUVtaXR0ZXIgfSBmcm9tICcuL2NoYW5nZWQtdmFsdWUuZW1pdHRlcic7XG5pbXBvcnQgeyBFZGl0RXZlbnRUeXBlIH0gZnJvbSAnLi9zdGF0ZS9lZGl0LmV2ZW50LXR5cGUnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFZGl0Q29tbXVuaWNhdGlvbkNvbXBvbmVudDxUPiBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHR2YWx1ZTogVDtcblxuXHRASW5wdXQoKVxuXHR2YWx1ZUNoYW5nZXM6IENoYW5nZWRWYWx1ZUVtaXR0ZXI8VD47XG5cblx0QElucHV0KClcblx0c3RhdHVzOiBDaGFuZ2VkVmFsdWVFbWl0dGVyPEVkaXRFdmVudFR5cGU+O1xuXG5cdEBJbnB1dCgpXG5cdGZvY3VzOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHBhcmVudDogRWxlbWVudFJlZjtcblxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgRU5URVJfS0VZX0NPREUgPSAxMztcblxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgRVNDX0tFWV9DT0RFID0gMjc7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0XHRcdCAgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdHN1Ym1pdCgpOiB2b2lkIHtcblx0XHR0aGlzLmVtaXRTdGF0dXMoRWRpdEV2ZW50VHlwZS5TVUJNSVQpO1xuXHR9XG5cblx0Y2FuY2VsKCk6IHZvaWQge1xuXHRcdHRoaXMuZW1pdFN0YXR1cyhFZGl0RXZlbnRUeXBlLkNBTkNFTCk7XG5cdH1cblxuXHRwcml2YXRlIGVtaXRTdGF0dXMoc3RhdHVzOiBFZGl0RXZlbnRUeXBlKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc3RhdHVzKSB7XG5cdFx0XHR0aGlzLnN0YXR1cy5lbWl0KHN0YXR1cyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==