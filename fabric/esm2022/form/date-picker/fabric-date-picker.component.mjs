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
    fabricDatePickerInlineDialogService;
    datePickerService;
    datePickerCompositionService;
    changeDetectorRef;
    datePickerRef;
    parentElement;
    theme;
    selectDate;
    name = '';
    openDialog = false;
    onlyDialog = false;
    datePipeOptions = 'dd/MM/yyyy';
    dateSelected = new EventEmitter();
    dialogOpened = new EventEmitter();
    datePickerForm;
    pickedDate = new Date();
    inputDisabled = '';
    constructor(fabricDatePickerInlineDialogService, datePickerService, datePickerCompositionService, formBuilder, changeDetectorRef) {
        super();
        this.fabricDatePickerInlineDialogService = fabricDatePickerInlineDialogService;
        this.datePickerService = datePickerService;
        this.datePickerCompositionService = datePickerCompositionService;
        this.changeDetectorRef = changeDetectorRef;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricDatePickerComponent, deps: [{ token: i1.FabricDatePickerInlineDialogService }, { token: i2.FabricDatePickerService }, { token: i3.FabricDatePickerCompositionService }, { token: i4.FormBuilder }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FabricDatePickerComponent, selector: "gui-date-picker", inputs: { parentElement: "parentElement", theme: "theme", selectDate: "selectDate", name: "name", openDialog: "openDialog", onlyDialog: "onlyDialog", datePipeOptions: "datePipeOptions" }, outputs: { dateSelected: "dateSelected", dialogOpened: "dialogOpened" }, viewQueries: [{ propertyName: "datePickerRef", first: true, predicate: ["datePicker"], descendants: true, read: ElementRef }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div #datePicker\n\t class=\"gui-date-picker\">\n\n\t<form [formGroup]=\"datePickerForm\">\n\n\t\t<input [attr.disabled]=\"inputDisabled\"\n\t\t\t   [name]=name\n\t\t\t   [value]=\"pickedDate | date: datePipeOptions\"\n\t\t\t   class=\"gui-date-picker-input\"\n\t\t\t   formControlName='date'\n\t\t\t   gui-input\n\t\t\t   readonly>\n\t</form>\n\n\t<gui-date-picker-icon (click)=\"openDatePicker()\"\n\t\t\t\t\t\t  class=\"gui-date-picker-icon\">\n\t</gui-date-picker-icon>\n\n</div>\n", styles: [".gui-date-picker{-ms-flex-align:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;position:relative}.gui-date-picker .gui-date-picker-icon{cursor:pointer;position:absolute;right:0}.gui-date-picker input,.gui-date-picker-calendar input{background:transparent;border-radius:0;border-width:0 0 1px 0;font-family:Arial;font-size:14px;padding:4px}.gui-date-picker input:disabled,.gui-date-picker-calendar input:disabled{color:#333}.gui-date-picker .gui-date-picker-icon,.gui-date-picker-calendar .gui-date-picker-icon{cursor:pointer;position:absolute;right:0}\n", ".gui-dark .gui-input{background:transparent;color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-arrow-icon:hover:after{background:#757575}.gui-dark .gui-date-picker-calendar .gui-date-picker-cell{color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-date-picker-cell:hover:after{background:#757575}.gui-dark .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day,.gui-dark .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month,.gui-dark .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year{color:#333}.gui-dark .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day:after,.gui-dark .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month:after,.gui-dark .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year:after{background:#dfb8e6}\n", ".gui-material .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day:after,.gui-material .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month:after,.gui-material .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year:after{background:#6200ee}\n"], dependencies: [{ kind: "directive", type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i4.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i5.FabricInputComponent, selector: "input[gui-input]" }, { kind: "component", type: i6.DatePickerIconComponent, selector: "gui-date-picker-icon" }, { kind: "pipe", type: i7.DatePipe, name: "date" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricDatePickerComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL2RhdGUtcGlja2VyL2ZhYnJpYy1kYXRlLXBpY2tlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZm9ybS9kYXRlLXBpY2tlci9mYWJyaWMtZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVOLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFHckcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBSTlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7Ozs7O0FBYTVFLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxjQUFjO0lBc0MvQjtJQUNUO0lBQ0E7SUFFQTtJQXZDWCxhQUFhLENBQWM7SUFHcEMsYUFBYSxDQUFjO0lBRzNCLEtBQUssQ0FBUztJQUdkLFVBQVUsQ0FBUTtJQUdsQixJQUFJLEdBQVcsRUFBRSxDQUFDO0lBR2xCLFVBQVUsR0FBWSxLQUFLLENBQUM7SUFHNUIsVUFBVSxHQUFZLEtBQUssQ0FBQztJQUc1QixlQUFlLEdBQVcsWUFBWSxDQUFDO0lBRzlCLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBR2xDLFlBQVksR0FBRyxJQUFJLFlB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QkFEVCxLQUFLO2dCQUlOLElBQUk7c0JBREgsS0FBSztnQkFJTixVQUFVO3NCQURULEtBQUs7Z0JBSU4sVUFBVTtzQkFEVCxLQUFLO2dCQUlOLGVBQWU7c0JBRGQsS0FBSztnQkFJRyxZQUFZO3NCQURwQixNQUFNO2dCQUlFLFlBQVk7c0JBRHBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBZnRlclZpZXdJbml0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0RXZlbnRFbWl0dGVyLFxuXHRJbnB1dCxcblx0T25DaGFuZ2VzLFxuXHRPbkRlc3Ryb3ksXG5cdE9uSW5pdCxcblx0T3V0cHV0LFxuXHRTaW1wbGVDaGFuZ2VzLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IHNraXAsIHRha2UsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci9mYWJyaWMtZGF0ZS1waWNrZXItY2FsZW5kYXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtZGF0ZS1waWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZSB9IGZyb20gJy4vZmFicmljLWRhdGUtcGlja2VyLWlubGluZS1kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNSZWFjdGl2ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9mYWJyaWMtcmVhY3RpdmUnO1xuXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtZGF0ZS1waWNrZXItY29tcG9zaXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlVXRpbHMgfSBmcm9tICcuLi8uLi9jb21tb24vZGF0ZS11dGlscy9mYWJyaWMtZGF0ZS11dGlscyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1kYXRlLXBpY2tlcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9mYWJyaWMtZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9mYWJyaWMtZGF0ZS1waWNrZXIuY29tcG9uZW50LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9mYWJyaWMtZGF0ZS1waWNrZXIuZGFyay5zY3NzJyxcblx0XHQnLi90aGVtZXMvZmFicmljLWRhdGUtcGlja2VyLm1hdGVyaWFsLnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBGYWJyaWNSZWFjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBWaWV3Q2hpbGQoJ2RhdGVQaWNrZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSlcblx0cmVhZG9ubHkgZGF0ZVBpY2tlclJlZj86IEVsZW1lbnRSZWY7XG5cblx0QElucHV0KClcblx0cGFyZW50RWxlbWVudD86IEVsZW1lbnRSZWY7XG5cblx0QElucHV0KClcblx0dGhlbWU/OiBUaGVtZTtcblxuXHRASW5wdXQoKVxuXHRzZWxlY3REYXRlPzogRGF0ZTtcblxuXHRASW5wdXQoKVxuXHRuYW1lOiBzdHJpbmcgPSAnJztcblxuXHRASW5wdXQoKVxuXHRvcGVuRGlhbG9nOiBib29sZWFuID0gZmFsc2U7XG5cblx0QElucHV0KClcblx0b25seURpYWxvZzogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBJbnB1dCgpXG5cdGRhdGVQaXBlT3B0aW9uczogc3RyaW5nID0gJ2RkL01NL3l5eXknO1xuXG5cdEBPdXRwdXQoKVxuXHRyZWFkb25seSBkYXRlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHJlYWRvbmx5IGRpYWxvZ09wZW5lZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRkYXRlUGlja2VyRm9ybTogRm9ybUdyb3VwO1xuXG5cdHBpY2tlZERhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXG5cdGlucHV0RGlzYWJsZWQ6ICdkaXNhYmxlZCcgfCAnJyA9ICcnO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRhdGVQaWNrZXJTZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VyU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkYXRlUGlja2VyQ29tcG9zaXRpb25TZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb25TZXJ2aWNlLFxuXHRcdFx0XHRmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmRhdGVQaWNrZXJGb3JtID0gZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuXHRcdFx0XHRkYXRlOiBbJyddXG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcblxuXHRcdGlmIChjaGFuZ2VzWydzZWxlY3REYXRlJ10pIHtcblx0XHRcdGlmICh0aGlzLnNlbGVjdERhdGUpIHtcblx0XHRcdFx0aWYgKCF0aGlzLnBpY2tlZERhdGUgfHwgIUZhYnJpY0RhdGVVdGlscy5hcmVEYXRlc1NhbWUodGhpcy5zZWxlY3REYXRlLCB0aGlzLnBpY2tlZERhdGUpKSB7XG5cdFx0XHRcdFx0dGhpcy5kYXRlUGlja2VyU2VydmljZS5kYXRlU2VsZWN0ZWQodGhpcy5zZWxlY3REYXRlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzWydvbmx5RGlhbG9nJ10pIHtcblx0XHRcdHRoaXMuaW5wdXREaXNhYmxlZCA9IHRoaXMub25seURpYWxvZyA/ICdkaXNhYmxlZCcgOiAnJztcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlc1snZGF0ZVBpcGVPcHRpb25zJ10pIHtcblx0XHRcdHRoaXMuZGF0ZVBpY2tlckNvbXBvc2l0aW9uU2VydmljZS5uZXh0KHRoaXMuZGF0ZVBpcGVPcHRpb25zKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlXG5cdFx0XHQub2JzZXJ2ZVNlbGVjdGVkRGF0ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0c2tpcCgxKSxcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZGF0ZTogRGF0ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGlja2VkRGF0ZSA9IGRhdGU7XG5cdFx0XHRcdFx0dGhpcy5lbWl0U2VsZWN0ZWREYXRlKGRhdGUpO1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0XHRcdHRoaXMuY2xvc2VEYXRlUGlja2VyKCk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cblx0XHR0aGlzLmZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlXG5cdFx0XHQub25PcGVuZWQoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHNraXAoMSksXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKG9wZW5lZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmRpYWxvZ09wZW5lZC5lbWl0KG9wZW5lZCk7XG5cdFx0XHR9KTtcblxuXHRcdC8vIHRoaXMub2JzZXJ2ZURheUNoYW5nZXMoKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlXG5cdFx0XHQub2JzZXJ2ZVNlbGVjdGVkRGF0ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGFrZSgxKSxcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0KGRhdGU6IERhdGUpID0+IHtcblx0XHRcdFx0XHR0aGlzLnBpY2tlZERhdGUgPSBkYXRlO1xuXHRcdFx0XHRcdHRoaXMuZW1pdFNlbGVjdGVkRGF0ZShkYXRlKTtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblxuXHRcdGlmICh0aGlzLm9wZW5EaWFsb2cpIHtcblx0XHRcdHRoaXMub3BlbkRhdGVQaWNrZXIoKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpOiB2b2lkIHtcblx0XHRzdXBlci5uZ09uRGVzdHJveSgpO1xuXHRcdHRoaXMuZmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2UuY2xvc2UoKTtcblx0fVxuXG5cdG9wZW5EYXRlUGlja2VyKCk6IHZvaWQge1xuXHRcdGNvbnN0IHNob3VsZFVzZURhdGVQaWNrZXJSZWYgPSAhdGhpcy5wYXJlbnRFbGVtZW50ICYmIHRoaXMuZGF0ZVBpY2tlclJlZixcblx0XHRcdHBhcmVudEVsZW1lbnQgPSBzaG91bGRVc2VEYXRlUGlja2VyUmVmID8gdGhpcy5kYXRlUGlja2VyUmVmIDogdGhpcy5wYXJlbnRFbGVtZW50O1xuXG5cdFx0aWYgKHBhcmVudEVsZW1lbnQpIHtcblx0XHRcdHRoaXMuZmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2Vcblx0XHRcdFx0Lm9wZW4oXG5cdFx0XHRcdFx0cGFyZW50RWxlbWVudCxcblx0XHRcdFx0XHRGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJDb21wb25lbnQsXG5cdFx0XHRcdFx0dGhpcy50aGVtZVxuXHRcdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdGNsb3NlRGF0ZVBpY2tlcigpOiB2b2lkIHtcblx0XHR0aGlzLmZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cblxuXHRwcml2YXRlIGVtaXRTZWxlY3RlZERhdGUoZGF0ZTogRGF0ZSk6IHZvaWQge1xuXHRcdHRoaXMuZGF0ZVNlbGVjdGVkLmVtaXQoZGF0ZSk7XG5cdH1cbn1cblxuIiwiPGRpdiAjZGF0ZVBpY2tlclxuXHQgY2xhc3M9XCJndWktZGF0ZS1waWNrZXJcIj5cblxuXHQ8Zm9ybSBbZm9ybUdyb3VwXT1cImRhdGVQaWNrZXJGb3JtXCI+XG5cblx0XHQ8aW5wdXQgW2F0dHIuZGlzYWJsZWRdPVwiaW5wdXREaXNhYmxlZFwiXG5cdFx0XHQgICBbbmFtZV09bmFtZVxuXHRcdFx0ICAgW3ZhbHVlXT1cInBpY2tlZERhdGUgfCBkYXRlOiBkYXRlUGlwZU9wdGlvbnNcIlxuXHRcdFx0ICAgY2xhc3M9XCJndWktZGF0ZS1waWNrZXItaW5wdXRcIlxuXHRcdFx0ICAgZm9ybUNvbnRyb2xOYW1lPSdkYXRlJ1xuXHRcdFx0ICAgZ3VpLWlucHV0XG5cdFx0XHQgICByZWFkb25seT5cblx0PC9mb3JtPlxuXG5cdDxndWktZGF0ZS1waWNrZXItaWNvbiAoY2xpY2spPVwib3BlbkRhdGVQaWNrZXIoKVwiXG5cdFx0XHRcdFx0XHQgIGNsYXNzPVwiZ3VpLWRhdGUtcGlja2VyLWljb25cIj5cblx0PC9ndWktZGF0ZS1waWNrZXItaWNvbj5cblxuPC9kaXY+XG4iXX0=