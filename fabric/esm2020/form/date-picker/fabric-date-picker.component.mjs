import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { skip, take, takeUntil } from 'rxjs/operators';
import { FabricDatePickerCalendarComponent } from './calendar/fabric-date-picker-calendar.component';
import { FabricReactive } from '../../common/fabric-reactive';
import { FabricDateUtils } from '../../common/date-utils/fabric-date-utils';
import * as i0 from "@angular/core";
import * as i1 from "./fabric-date-picker-inline-dialog.service";
import * as i2 from "./fabric-date-picker.service";
import * as i3 from "./fabric-date-picker-composition.service";
import * as i4 from "@angular/forms";
import * as i5 from "../input/input.component";
import * as i6 from "../../common/icons/date-picker-icon/date-picker-icon.component";
import * as i7 from "@angular/common";
export class FabricDatePickerComponent extends FabricReactive {
    constructor(fabricDatePickerInlineDialogService, datePickerService, datePickerCompositionService, formBuilder, changeDetectorRef) {
        super();
        this.fabricDatePickerInlineDialogService = fabricDatePickerInlineDialogService;
        this.datePickerService = datePickerService;
        this.datePickerCompositionService = datePickerCompositionService;
        this.changeDetectorRef = changeDetectorRef;
        this.name = '';
        this.openDialog = false;
        this.onlyDialog = false;
        this.datePipeOptions = 'dd/MM/yyyy';
        this.dateSelected = new EventEmitter();
        this.dialogOpened = new EventEmitter();
        this.pickedDate = new Date();
        this.inputDisabled = '';
        this.datePickerForm = formBuilder.group({
            date: ['']
        });
    }
    ngOnChanges(changes) {
        if (changes['selectDate']) {
            if (this.selectDate) {
                if (!this.pickedDate || !FabricDateUtils.areDatesSame(this.selectDate, this.pickedDate)) {
                    this.datePickerService.dateSelected(this.selectDate);
                }
            }
        }
        if (changes['onlyDialog']) {
            this.inputDisabled = this.onlyDialog ? 'disabled' : '';
        }
        if (changes['datePipeOptions']) {
            this.datePickerCompositionService.next(this.datePipeOptions);
        }
    }
    ngOnInit() {
        this.datePickerService
            .observeSelectedDate()
            .pipe(skip(1), takeUntil(this.unsubscribe$))
            .subscribe((date) => {
            this.pickedDate = date;
            this.emitSelectedDate(date);
            this.changeDetectorRef.detectChanges();
            this.closeDatePicker();
        });
        this.fabricDatePickerInlineDialogService
            .onOpened()
            .pipe(skip(1), takeUntil(this.unsubscribe$))
            .subscribe((opened) => {
            this.dialogOpened.emit(opened);
        });
        // this.observeDayChanges();
    }
    ngAfterViewInit() {
        this.datePickerService
            .observeSelectedDate()
            .pipe(take(1), takeUntil(this.unsubscribe$))
            .subscribe((date) => {
            this.pickedDate = date;
            this.emitSelectedDate(date);
            this.changeDetectorRef.detectChanges();
        });
        if (this.openDialog) {
            this.openDatePicker();
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.fabricDatePickerInlineDialogService.close();
    }
    openDatePicker() {
        const shouldUseDatePickerRef = !this.parentElement && this.datePickerRef, parentElement = shouldUseDatePickerRef ? this.datePickerRef : this.parentElement;
        if (parentElement) {
            this.fabricDatePickerInlineDialogService
                .open(parentElement, FabricDatePickerCalendarComponent, this.theme);
        }
    }
    closeDatePicker() {
        this.fabricDatePickerInlineDialogService.close();
    }
    emitSelectedDate(date) {
        this.dateSelected.emit(date);
    }
}
FabricDatePickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FabricDatePickerComponent, deps: [{ token: i1.FabricDatePickerInlineDialogService }, { token: i2.FabricDatePickerService }, { token: i3.FabricDatePickerCompositionService }, { token: i4.FormBuilder }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
FabricDatePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: FabricDatePickerComponent, selector: "gui-date-picker", inputs: { parentElement: "parentElement", theme: "theme", selectDate: "selectDate", name: "name", openDialog: "openDialog", onlyDialog: "onlyDialog", datePipeOptions: "datePipeOptions" }, outputs: { dateSelected: "dateSelected", dialogOpened: "dialogOpened" }, viewQueries: [{ propertyName: "datePickerRef", first: true, predicate: ["datePicker"], descendants: true, read: ElementRef }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div #datePicker\n\t class=\"gui-date-picker\">\n\n\t<form [formGroup]=\"datePickerForm\">\n\n\t\t<input [attr.disabled]=\"inputDisabled\"\n\t\t\t   [name]=name\n\t\t\t   [value]=\"pickedDate | date: datePipeOptions\"\n\t\t\t   class=\"gui-date-picker-input\"\n\t\t\t   formControlName='date'\n\t\t\t   gui-input\n\t\t\t   readonly>\n\t</form>\n\n\t<gui-date-picker-icon (click)=\"openDatePicker()\"\n\t\t\t\t\t\t  class=\"gui-date-picker-icon\">\n\t</gui-date-picker-icon>\n\n</div>\n", styles: [".gui-date-picker{-ms-flex-align:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;position:relative}.gui-date-picker .gui-date-picker-icon{cursor:pointer;position:absolute;right:0}.gui-date-picker input,.gui-date-picker-calendar input{background:transparent;border-radius:0;border-width:0 0 1px 0;font-family:Arial;font-size:14px;padding:4px}.gui-date-picker input:disabled,.gui-date-picker-calendar input:disabled{color:#333}.gui-date-picker .gui-date-picker-icon,.gui-date-picker-calendar .gui-date-picker-icon{cursor:pointer;position:absolute;right:0}\n", ".gui-dark .gui-input{background:transparent;color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-arrow-icon:hover:after{background:#757575}.gui-dark .gui-date-picker-calendar .gui-date-picker-cell{color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-date-picker-cell:hover:after{background:#757575}.gui-dark .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day,.gui-dark .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month,.gui-dark .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year{color:#333}.gui-dark .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day:after,.gui-dark .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month:after,.gui-dark .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year:after{background:#dfb8e6}\n", ".gui-material .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day:after,.gui-material .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month:after,.gui-material .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year:after{background:#6200ee}\n"], dependencies: [{ kind: "directive", type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i4.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i5.FabricInputComponent, selector: "input[gui-input]" }, { kind: "component", type: i6.DatePickerIconComponent, selector: "gui-date-picker-icon" }, { kind: "pipe", type: i7.DatePipe, name: "date" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FabricDatePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-date-picker', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div #datePicker\n\t class=\"gui-date-picker\">\n\n\t<form [formGroup]=\"datePickerForm\">\n\n\t\t<input [attr.disabled]=\"inputDisabled\"\n\t\t\t   [name]=name\n\t\t\t   [value]=\"pickedDate | date: datePipeOptions\"\n\t\t\t   class=\"gui-date-picker-input\"\n\t\t\t   formControlName='date'\n\t\t\t   gui-input\n\t\t\t   readonly>\n\t</form>\n\n\t<gui-date-picker-icon (click)=\"openDatePicker()\"\n\t\t\t\t\t\t  class=\"gui-date-picker-icon\">\n\t</gui-date-picker-icon>\n\n</div>\n", styles: [".gui-date-picker{-ms-flex-align:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;position:relative}.gui-date-picker .gui-date-picker-icon{cursor:pointer;position:absolute;right:0}.gui-date-picker input,.gui-date-picker-calendar input{background:transparent;border-radius:0;border-width:0 0 1px 0;font-family:Arial;font-size:14px;padding:4px}.gui-date-picker input:disabled,.gui-date-picker-calendar input:disabled{color:#333}.gui-date-picker .gui-date-picker-icon,.gui-date-picker-calendar .gui-date-picker-icon{cursor:pointer;position:absolute;right:0}\n", ".gui-dark .gui-input{background:transparent;color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-arrow-icon:hover:after{background:#757575}.gui-dark .gui-date-picker-calendar .gui-date-picker-cell{color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-date-picker-cell:hover:after{background:#757575}.gui-dark .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day,.gui-dark .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month,.gui-dark .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year{color:#333}.gui-dark .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day:after,.gui-dark .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month:after,.gui-dark .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year:after{background:#dfb8e6}\n", ".gui-material .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day:after,.gui-material .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month:after,.gui-material .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year:after{background:#6200ee}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.FabricDatePickerInlineDialogService }, { type: i2.FabricDatePickerService }, { type: i3.FabricDatePickerCompositionService }, { type: i4.FormBuilder }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { datePickerRef: [{
                type: ViewChild,
                args: ['datePicker', { read: ElementRef, static: false }]
            }], parentElement: [{
                type: Input
            }], theme: [{
                type: Input
            }], selectDate: [{
                type: Input
            }], name: [{
                type: Input
            }], openDialog: [{
                type: Input
            }], onlyDialog: [{
                type: Input
            }], datePipeOptions: [{
                type: Input
            }], dateSelected: [{
                type: Output
            }], dialogOpened: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL2RhdGUtcGlja2VyL2ZhYnJpYy1kYXRlLXBpY2tlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZm9ybS9kYXRlLXBpY2tlci9mYWJyaWMtZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVOLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFHckcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBSTlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7Ozs7O0FBYTVFLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxjQUFjO0lBc0M1RCxZQUE2QixtQ0FBd0UsRUFDakYsaUJBQTBDLEVBQzFDLDRCQUFnRSxFQUNqRixXQUF3QixFQUNQLGlCQUFvQztRQUN2RCxLQUFLLEVBQUUsQ0FBQztRQUxvQix3Q0FBbUMsR0FBbkMsbUNBQW1DLENBQXFDO1FBQ2pGLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBeUI7UUFDMUMsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUFvQztRQUVoRSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBM0J4RCxTQUFJLEdBQVcsRUFBRSxDQUFDO1FB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QUs7Z0JBSUcsWUFBWTtzQkFEcEIsTUFBTTtnQkFJRSxZQUFZO3NCQURwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QWZ0ZXJWaWV3SW5pdCxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE9uQ2hhbmdlcyxcblx0T25EZXN0cm95LFxuXHRPbkluaXQsXG5cdE91dHB1dCxcblx0U2ltcGxlQ2hhbmdlcyxcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBza2lwLCB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXIvZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyU2VydmljZSB9IGZyb20gJy4vZmFicmljLWRhdGUtcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1kYXRlLXBpY2tlci1pbmxpbmUtZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljUmVhY3RpdmUgfSBmcm9tICcuLi8uLi9jb21tb24vZmFicmljLXJlYWN0aXZlJztcblxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uU2VydmljZSB9IGZyb20gJy4vZmFicmljLWRhdGUtcGlja2VyLWNvbXBvc2l0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVV0aWxzIH0gZnJvbSAnLi4vLi4vY29tbW9uL2RhdGUtdXRpbHMvZmFicmljLWRhdGUtdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZGF0ZS1waWNrZXInLFxuXHR0ZW1wbGF0ZVVybDogJy4vZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudC5zY3NzJyxcblx0XHQnLi90aGVtZXMvZmFicmljLWRhdGUtcGlja2VyLmRhcmsuc2NzcycsXG5cdFx0Jy4vdGhlbWVzL2ZhYnJpYy1kYXRlLXBpY2tlci5tYXRlcmlhbC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNEYXRlUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgRmFicmljUmVhY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuXHRAVmlld0NoaWxkKCdkYXRlUGlja2VyJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlIH0pXG5cdHJlYWRvbmx5IGRhdGVQaWNrZXJSZWY/OiBFbGVtZW50UmVmO1xuXG5cdEBJbnB1dCgpXG5cdHBhcmVudEVsZW1lbnQ/OiBFbGVtZW50UmVmO1xuXG5cdEBJbnB1dCgpXG5cdHRoZW1lPzogVGhlbWU7XG5cblx0QElucHV0KClcblx0c2VsZWN0RGF0ZT86IERhdGU7XG5cblx0QElucHV0KClcblx0bmFtZTogc3RyaW5nID0gJyc7XG5cblx0QElucHV0KClcblx0b3BlbkRpYWxvZzogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBJbnB1dCgpXG5cdG9ubHlEaWFsb2c6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRkYXRlUGlwZU9wdGlvbnM6IHN0cmluZyA9ICdkZC9NTS95eXl5JztcblxuXHRAT3V0cHV0KClcblx0cmVhZG9ubHkgZGF0ZVNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRyZWFkb25seSBkaWFsb2dPcGVuZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0ZGF0ZVBpY2tlckZvcm06IEZvcm1Hcm91cDtcblxuXHRwaWNrZWREYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcblxuXHRpbnB1dERpc2FibGVkOiAnZGlzYWJsZWQnIHwgJycgPSAnJztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkYXRlUGlja2VyU2VydmljZTogRmFicmljRGF0ZVBpY2tlclNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGF0ZVBpY2tlckNvbXBvc2l0aW9uU2VydmljZTogRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uU2VydmljZSxcblx0XHRcdFx0Zm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5kYXRlUGlja2VyRm9ybSA9IGZvcm1CdWlsZGVyLmdyb3VwKHtcblx0XHRcdFx0ZGF0ZTogWycnXVxuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cblx0XHRpZiAoY2hhbmdlc1snc2VsZWN0RGF0ZSddKSB7XG5cdFx0XHRpZiAodGhpcy5zZWxlY3REYXRlKSB7XG5cdFx0XHRcdGlmICghdGhpcy5waWNrZWREYXRlIHx8ICFGYWJyaWNEYXRlVXRpbHMuYXJlRGF0ZXNTYW1lKHRoaXMuc2VsZWN0RGF0ZSwgdGhpcy5waWNrZWREYXRlKSkge1xuXHRcdFx0XHRcdHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZGF0ZVNlbGVjdGVkKHRoaXMuc2VsZWN0RGF0ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlc1snb25seURpYWxvZyddKSB7XG5cdFx0XHR0aGlzLmlucHV0RGlzYWJsZWQgPSB0aGlzLm9ubHlEaWFsb2cgPyAnZGlzYWJsZWQnIDogJyc7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXNbJ2RhdGVQaXBlT3B0aW9ucyddKSB7XG5cdFx0XHR0aGlzLmRhdGVQaWNrZXJDb21wb3NpdGlvblNlcnZpY2UubmV4dCh0aGlzLmRhdGVQaXBlT3B0aW9ucyk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5kYXRlUGlja2VyU2VydmljZVxuXHRcdFx0Lm9ic2VydmVTZWxlY3RlZERhdGUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHNraXAoMSksXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGRhdGU6IERhdGUpID0+IHtcblx0XHRcdFx0XHR0aGlzLnBpY2tlZERhdGUgPSBkYXRlO1xuXHRcdFx0XHRcdHRoaXMuZW1pdFNlbGVjdGVkRGF0ZShkYXRlKTtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdFx0XHR0aGlzLmNsb3NlRGF0ZVBpY2tlcigpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXG5cdFx0dGhpcy5mYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZVxuXHRcdFx0Lm9uT3BlbmVkKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRza2lwKDEpLFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChvcGVuZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5kaWFsb2dPcGVuZWQuZW1pdChvcGVuZWQpO1xuXHRcdFx0fSk7XG5cblx0XHQvLyB0aGlzLm9ic2VydmVEYXlDaGFuZ2VzKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5kYXRlUGlja2VyU2VydmljZVxuXHRcdFx0Lm9ic2VydmVTZWxlY3RlZERhdGUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRha2UoMSksXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdChkYXRlOiBEYXRlKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5waWNrZWREYXRlID0gZGF0ZTtcblx0XHRcdFx0XHR0aGlzLmVtaXRTZWxlY3RlZERhdGUoZGF0ZSk7XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cblx0XHRpZiAodGhpcy5vcGVuRGlhbG9nKSB7XG5cdFx0XHR0aGlzLm9wZW5EYXRlUGlja2VyKCk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkRlc3Ryb3koKTogdm9pZCB7XG5cdFx0c3VwZXIubmdPbkRlc3Ryb3koKTtcblx0XHR0aGlzLmZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cblxuXHRvcGVuRGF0ZVBpY2tlcigpOiB2b2lkIHtcblx0XHRjb25zdCBzaG91bGRVc2VEYXRlUGlja2VyUmVmID0gIXRoaXMucGFyZW50RWxlbWVudCAmJiB0aGlzLmRhdGVQaWNrZXJSZWYsXG5cdFx0XHRwYXJlbnRFbGVtZW50ID0gc2hvdWxkVXNlRGF0ZVBpY2tlclJlZiA/IHRoaXMuZGF0ZVBpY2tlclJlZiA6IHRoaXMucGFyZW50RWxlbWVudDtcblxuXHRcdGlmIChwYXJlbnRFbGVtZW50KSB7XG5cdFx0XHR0aGlzLmZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlXG5cdFx0XHRcdC5vcGVuKFxuXHRcdFx0XHRcdHBhcmVudEVsZW1lbnQsXG5cdFx0XHRcdFx0RmFicmljRGF0ZVBpY2tlckNhbGVuZGFyQ29tcG9uZW50LFxuXHRcdFx0XHRcdHRoaXMudGhlbWVcblx0XHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRjbG9zZURhdGVQaWNrZXIoKTogdm9pZCB7XG5cdFx0dGhpcy5mYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZS5jbG9zZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBlbWl0U2VsZWN0ZWREYXRlKGRhdGU6IERhdGUpOiB2b2lkIHtcblx0XHR0aGlzLmRhdGVTZWxlY3RlZC5lbWl0KGRhdGUpO1xuXHR9XG59XG5cbiIsIjxkaXYgI2RhdGVQaWNrZXJcblx0IGNsYXNzPVwiZ3VpLWRhdGUtcGlja2VyXCI+XG5cblx0PGZvcm0gW2Zvcm1Hcm91cF09XCJkYXRlUGlja2VyRm9ybVwiPlxuXG5cdFx0PGlucHV0IFthdHRyLmRpc2FibGVkXT1cImlucHV0RGlzYWJsZWRcIlxuXHRcdFx0ICAgW25hbWVdPW5hbWVcblx0XHRcdCAgIFt2YWx1ZV09XCJwaWNrZWREYXRlIHwgZGF0ZTogZGF0ZVBpcGVPcHRpb25zXCJcblx0XHRcdCAgIGNsYXNzPVwiZ3VpLWRhdGUtcGlja2VyLWlucHV0XCJcblx0XHRcdCAgIGZvcm1Db250cm9sTmFtZT0nZGF0ZSdcblx0XHRcdCAgIGd1aS1pbnB1dFxuXHRcdFx0ICAgcmVhZG9ubHk+XG5cdDwvZm9ybT5cblxuXHQ8Z3VpLWRhdGUtcGlja2VyLWljb24gKGNsaWNrKT1cIm9wZW5EYXRlUGlja2VyKClcIlxuXHRcdFx0XHRcdFx0ICBjbGFzcz1cImd1aS1kYXRlLXBpY2tlci1pY29uXCI+XG5cdDwvZ3VpLWRhdGUtcGlja2VyLWljb24+XG5cbjwvZGl2PlxuIl19