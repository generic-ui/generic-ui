import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { EditCommunicationComponent } from '../edit-communication.component';
import { StreamCloser } from '../../../../../common/cdk/reactive/stream-closer';
import { hermesFilter, hermesFromEvent } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
const _c0 = ["datepicker"];
export class DateEditTemplateComponent extends EditCommunicationComponent {
    constructor(changeDetectorRef, elementRef) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.filterFieldName = 'dateEdit';
        this.opened = false;
        this.localStreamCloser = new StreamCloser();
    }
    ngAfterViewInit() {
        const inputElement = this.datePickerRef.nativeElement.querySelector('.gui-date-picker-input');
        const keyup$ = hermesFromEvent(inputElement, 'keyup');
        keyup$
            .pipe(hermesFilter((e) => e.keyCode === this.ENTER_KEY_CODE), this.localStreamCloser.takeUntil())
            .subscribe(() => {
            this.localStreamCloser.unsubscribe();
            this.submit();
        });
        keyup$
            .pipe(hermesFilter((e) => e.keyCode === this.ESC_KEY_CODE), this.localStreamCloser.takeUntil())
            .subscribe(() => {
            this.localStreamCloser.unsubscribe();
            this.cancel();
        });
    }
    ngOnDestroy() {
        this.localStreamCloser.unsubscribe();
        super.ngOnDestroy();
    }
    toggle(changed) {
        this.valueChanges.emit(changed);
    }
    dialogOpened(opened) {
        this.opened = opened;
        if (!opened) {
            this.localStreamCloser.unsubscribe();
            this.submit();
        }
    }
    getSelectorName() {
        return 'gui-date-edit';
    }
}
DateEditTemplateComponent.ɵfac = function DateEditTemplateComponent_Factory(t) { return new (t || DateEditTemplateComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef)); };
DateEditTemplateComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DateEditTemplateComponent, selectors: [["gui-date-edit"]], viewQuery: function DateEditTemplateComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.datePickerRef = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [[3, "selectDate", "name", "openDialog", "onlyDialog", "parentElement", "dialogOpened", "dateSelected"], ["datepicker", ""]], template: function DateEditTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "gui-date-picker", 0, 1);
        i0.ɵɵlistener("dialogOpened", function DateEditTemplateComponent_Template_gui_date_picker_dialogOpened_0_listener($event) { return ctx.dialogOpened($event); })("dateSelected", function DateEditTemplateComponent_Template_gui_date_picker_dateSelected_0_listener($event) { return ctx.toggle($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("selectDate", ctx.value)("name", ctx.filterFieldName)("openDialog", true)("onlyDialog", false)("parentElement", ctx.parent);
    } }, directives: [i1.FabricDatePickerComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateEditTemplateComponent, [{
        type: Component,
        args: [{
                selector: 'gui-date-edit',
                template: `

		<gui-date-picker #datepicker
						 [selectDate]="value"
						 [name]="filterFieldName"
						 [openDialog]="true"
						 [onlyDialog]="false"
						 [parentElement]="parent"
						 (dialogOpened)="dialogOpened($event)"
						 (dateSelected)="toggle($event)">
		</gui-date-picker>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, { datePickerRef: [{
            type: ViewChild,
            args: ['datepicker', { read: ElementRef, static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9lZGl0L3RlbXBsYXRlL2RhdGUtZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoSSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUU3RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQXFCbkUsTUFBTSxPQUFPLHlCQUEwQixTQUFRLDBCQUFnQztJQVc5RSxZQUE2QixpQkFBb0MsRUFDOUQsVUFBc0I7UUFDeEIsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRlQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQU54RCxvQkFBZSxHQUFHLFVBQVUsQ0FBQztRQUU5QixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRU4sc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUt4RCxDQUFDO0lBRUQsZUFBZTtRQUNkLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBRTlGLE1BQU0sTUFBTSxHQUFHLGVBQWUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEQsTUFBTTthQUNKLElBQUksQ0FDSixZQUFZLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUMzRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQ2xDO2FBQ0EsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztRQUVKLE1BQU07YUFDSixJQUFJLENBQ0osWUFBWSxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsRUFDekQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUNsQzthQUNBLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUFhO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxZQUFZLENBQUMsTUFBZTtRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1osSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNkO0lBQ0YsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxlQUFlLENBQUM7SUFDeEIsQ0FBQzs7a0dBOURXLHlCQUF5Qjs0RUFBekIseUJBQXlCOytCQUVKLFVBQVU7Ozs7O1FBaEIxQyw2Q0FPcUM7UUFEaEMsbUlBQWdCLHdCQUFvQixJQUFDLHNIQUNyQixrQkFBYyxJQURPO1FBRTFDLGlCQUFrQjs7UUFQYixzQ0FBb0IsNkJBQUEsb0JBQUEscUJBQUEsNkJBQUE7O3VGQWFkLHlCQUF5QjtjQWxCckMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztFQVlUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs2RkFJQSxhQUFhO2tCQURaLFNBQVM7bUJBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRWRpdENvbW11bmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9lZGl0LWNvbW11bmljYXRpb24uY29tcG9uZW50JztcblxuaW1wb3J0IHsgU3RyZWFtQ2xvc2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9yZWFjdGl2ZS9zdHJlYW0tY2xvc2VyJztcbmltcG9ydCB7IGhlcm1lc0ZpbHRlciwgaGVybWVzRnJvbUV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZGF0ZS1lZGl0Jyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxndWktZGF0ZS1waWNrZXIgI2RhdGVwaWNrZXJcblx0XHRcdFx0XHRcdCBbc2VsZWN0RGF0ZV09XCJ2YWx1ZVwiXG5cdFx0XHRcdFx0XHQgW25hbWVdPVwiZmlsdGVyRmllbGROYW1lXCJcblx0XHRcdFx0XHRcdCBbb3BlbkRpYWxvZ109XCJ0cnVlXCJcblx0XHRcdFx0XHRcdCBbb25seURpYWxvZ109XCJmYWxzZVwiXG5cdFx0XHRcdFx0XHQgW3BhcmVudEVsZW1lbnRdPVwicGFyZW50XCJcblx0XHRcdFx0XHRcdCAoZGlhbG9nT3BlbmVkKT1cImRpYWxvZ09wZW5lZCgkZXZlbnQpXCJcblx0XHRcdFx0XHRcdCAoZGF0ZVNlbGVjdGVkKT1cInRvZ2dsZSgkZXZlbnQpXCI+XG5cdFx0PC9ndWktZGF0ZS1waWNrZXI+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZUVkaXRUZW1wbGF0ZUNvbXBvbmVudCBleHRlbmRzIEVkaXRDb21tdW5pY2F0aW9uQ29tcG9uZW50PERhdGU+IHtcblxuXHRAVmlld0NoaWxkKCdkYXRlcGlja2VyJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSlcblx0ZGF0ZVBpY2tlclJlZjogRWxlbWVudFJlZjtcblxuXHRyZWFkb25seSBmaWx0ZXJGaWVsZE5hbWUgPSAnZGF0ZUVkaXQnO1xuXG5cdHByaXZhdGUgb3BlbmVkID0gZmFsc2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSBsb2NhbFN0cmVhbUNsb3NlciA9IG5ldyBTdHJlYW1DbG9zZXIoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRjb25zdCBpbnB1dEVsZW1lbnQgPSB0aGlzLmRhdGVQaWNrZXJSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ3VpLWRhdGUtcGlja2VyLWlucHV0Jyk7XG5cblx0XHRjb25zdCBrZXl1cCQgPSBoZXJtZXNGcm9tRXZlbnQoaW5wdXRFbGVtZW50LCAna2V5dXAnKTtcblxuXHRcdGtleXVwJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGhlcm1lc0ZpbHRlcigoZTogYW55KSA9PiBlLmtleUNvZGUgPT09IHRoaXMuRU5URVJfS0VZX0NPREUpLFxuXHRcdFx0XHR0aGlzLmxvY2FsU3RyZWFtQ2xvc2VyLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0dGhpcy5sb2NhbFN0cmVhbUNsb3Nlci51bnN1YnNjcmliZSgpO1xuXHRcdFx0XHR0aGlzLnN1Ym1pdCgpO1xuXHRcdFx0fSk7XG5cblx0XHRrZXl1cCRcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRoZXJtZXNGaWx0ZXIoKGU6IGFueSkgPT4gZS5rZXlDb2RlID09PSB0aGlzLkVTQ19LRVlfQ09ERSksXG5cdFx0XHRcdHRoaXMubG9jYWxTdHJlYW1DbG9zZXIudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmxvY2FsU3RyZWFtQ2xvc2VyLnVuc3Vic2NyaWJlKCk7XG5cdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMubG9jYWxTdHJlYW1DbG9zZXIudW5zdWJzY3JpYmUoKTtcblx0XHRzdXBlci5uZ09uRGVzdHJveSgpO1xuXHR9XG5cblx0dG9nZ2xlKGNoYW5nZWQ6IERhdGUpOiB2b2lkIHtcblx0XHR0aGlzLnZhbHVlQ2hhbmdlcy5lbWl0KGNoYW5nZWQpO1xuXHR9XG5cblx0ZGlhbG9nT3BlbmVkKG9wZW5lZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMub3BlbmVkID0gb3BlbmVkO1xuXG5cdFx0aWYgKCFvcGVuZWQpIHtcblx0XHRcdHRoaXMubG9jYWxTdHJlYW1DbG9zZXIudW5zdWJzY3JpYmUoKTtcblx0XHRcdHRoaXMuc3VibWl0KCk7XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWRhdGUtZWRpdCc7XG5cdH1cblxufVxuIl19