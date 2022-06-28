import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, skip, take, takeUntil } from 'rxjs/operators';
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
        this.formBuilder = formBuilder;
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
    observeDayChanges() {
        // currently disabled
        this.datePickerForm
            .controls['date']
            .valueChanges
            .pipe(distinctUntilChanged(), debounceTime(1500), map((day) => this.parse(day)), takeUntil(this.unsubscribe$))
            .subscribe((day) => {
            this.datePickerService.dateSelected(day);
        });
    }
    parse(value) {
        if ((typeof value === 'string') && (value.includes('/'))) {
            const str = value.split('/');
            const dateValues = this.getDateValues(str), dateHasAllValues = dateValues && dateValues.length === 3;
            if (dateHasAllValues) {
                return new Date(dateValues[0], dateValues[1], dateValues[2]);
            }
            else {
                return this.pickedDate;
            }
        }
        else {
            return this.pickedDate;
        }
    }
    getDateValues(dateValues) {
        if (this.datePipeOptions.includes('/')) {
            const dateFormatParts = this.datePipeOptions.toLowerCase().split('/');
            let year = 0, month = 0, day = 0;
            dateFormatParts.forEach((datePart, i) => {
                if (datePart.includes('d')) {
                    day = +dateValues[i];
                }
                if (datePart.includes('m')) {
                    month = +dateValues[i] - 1;
                }
                if (datePart.includes('y')) {
                    year = +dateValues[i];
                }
            });
            return [year, month, day];
        }
        return [];
    }
}
FabricDatePickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FabricDatePickerComponent, deps: [{ token: i1.FabricDatePickerInlineDialogService }, { token: i2.FabricDatePickerService }, { token: i3.FabricDatePickerCompositionService }, { token: i4.FormBuilder }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
FabricDatePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: FabricDatePickerComponent, selector: "gui-date-picker", inputs: { parentElement: "parentElement", theme: "theme", selectDate: "selectDate", name: "name", openDialog: "openDialog", onlyDialog: "onlyDialog", datePipeOptions: "datePipeOptions" }, outputs: { dateSelected: "dateSelected", dialogOpened: "dialogOpened" }, viewQueries: [{ propertyName: "datePickerRef", first: true, predicate: ["datePicker"], descendants: true, read: ElementRef }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div #datePicker\n\t class=\"gui-date-picker\">\n\n\t<form [formGroup]=\"datePickerForm\">\n\n\t\t<input [attr.disabled]=\"inputDisabled\"\n\t\t\t   [name]=name\n\t\t\t   [value]=\"pickedDate | date: datePipeOptions\"\n\t\t\t   class=\"gui-date-picker-input\"\n\t\t\t   formControlName='date'\n\t\t\t   gui-input\n\t\t\t   readonly>\n\t</form>\n\n\t<gui-date-picker-icon (click)=\"openDatePicker()\"\n\t\t\t\t\t\t  class=\"gui-date-picker-icon\">\n\t</gui-date-picker-icon>\n\n</div>\n", styles: [".gui-date-picker{-ms-flex-align:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;position:relative}.gui-date-picker .gui-date-picker-icon{cursor:pointer;position:absolute;right:0}.gui-date-picker input,.gui-date-picker-calendar input{background:transparent;border-radius:0;border-width:0 0 1px 0;font-family:Arial;font-size:14px;padding:4px}.gui-date-picker input:disabled,.gui-date-picker-calendar input:disabled{color:#333}.gui-date-picker .gui-date-picker-icon,.gui-date-picker-calendar .gui-date-picker-icon{cursor:pointer;position:absolute;right:0}\n", ".gui-dark .gui-input{background:transparent;color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-arrow-icon:hover:after{background:#757575}.gui-dark .gui-date-picker-calendar .gui-date-picker-cell{color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-date-picker-cell:hover:after{background:#757575}.gui-dark .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day,.gui-dark .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month,.gui-dark .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year{color:#333}.gui-dark .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day:after,.gui-dark .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month:after,.gui-dark .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year:after{background:#dfb8e6}\n", ".gui-material .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day:after,.gui-material .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month:after,.gui-material .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year:after{background:#6200ee}\n"], dependencies: [{ kind: "directive", type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i4.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i5.FabricInputComponent, selector: "input[gui-input]" }, { kind: "component", type: i6.DatePickerIconComponent, selector: "gui-date-picker-icon" }, { kind: "pipe", type: i7.DatePipe, name: "date" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FabricDatePickerComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL2RhdGUtcGlja2VyL2ZhYnJpYy1kYXRlLXBpY2tlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZm9ybS9kYXRlLXBpY2tlci9mYWJyaWMtZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVOLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUdyRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFJOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOzs7Ozs7Ozs7QUFhNUUsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGNBQWM7SUFzQzVELFlBQTZCLG1DQUF3RSxFQUNqRixpQkFBMEMsRUFDMUMsNEJBQWdFLEVBQ2hFLFdBQXdCLEVBQ3hCLGlCQUFvQztRQUN2RCxLQUFLLEVBQUUsQ0FBQztRQUxvQix3Q0FBbUMsR0FBbkMsbUNBQW1DLENBQXFDO1FBQ2pGLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBeUI7UUFDMUMsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUFvQztRQUNoRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtR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QzNCLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDckI7Z0JBRUQsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUMzQixLQUFLLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUMzQjtnQkFFRCxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzNCLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDdEI7WUFDRixDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzFCO1FBRUQsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDOztzSEE5TVcseUJBQXlCOzBHQUF6Qix5QkFBeUIsb1pBRUosVUFBVSx5RUN6QzVDLHVlQW1CQTsyRkRvQmEseUJBQXlCO2tCQVhyQyxTQUFTOytCQUNDLGlCQUFpQixtQkFPVix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJOzJRQUs1QixhQUFhO3NCQURyQixTQUFTO3VCQUFDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtnQkFJNUQsYUFBYTtzQkFEWixLQUFLO2dCQUlOLEtBQUs7c0JBREosS0FBSztnQkFJTixVQUFVO3NCQURULEtBQUs7Z0JBSU4sSUFBSTtzQkFESCxLQUFLO2dCQUlOLFVBQVU7c0JBRFQsS0FBSztnQkFJTixVQUFVO3NCQURULEtBQUs7Z0JBSU4sZUFBZTtzQkFEZCxLQUFLO2dCQUlHLFlBQVk7c0JBRHBCLE1BQU07Z0JBSUUsWUFBWTtzQkFEcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPbkNoYW5nZXMsXG5cdE9uRGVzdHJveSxcblx0T25Jbml0LFxuXHRPdXRwdXQsXG5cdFNpbXBsZUNoYW5nZXMsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCBza2lwLCB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXIvZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyU2VydmljZSB9IGZyb20gJy4vZmFicmljLWRhdGUtcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1kYXRlLXBpY2tlci1pbmxpbmUtZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljUmVhY3RpdmUgfSBmcm9tICcuLi8uLi9jb21tb24vZmFicmljLXJlYWN0aXZlJztcblxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uU2VydmljZSB9IGZyb20gJy4vZmFicmljLWRhdGUtcGlja2VyLWNvbXBvc2l0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVV0aWxzIH0gZnJvbSAnLi4vLi4vY29tbW9uL2RhdGUtdXRpbHMvZmFicmljLWRhdGUtdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZGF0ZS1waWNrZXInLFxuXHR0ZW1wbGF0ZVVybDogJy4vZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vZmFicmljLWRhdGUtcGlja2VyLnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9mYWJyaWMtZGF0ZS1waWNrZXIuZGFyay5zY3NzJyxcblx0XHQnLi90aGVtZXMvZmFicmljLWRhdGUtcGlja2VyLm1hdGVyaWFsLnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBGYWJyaWNSZWFjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBWaWV3Q2hpbGQoJ2RhdGVQaWNrZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSlcblx0cmVhZG9ubHkgZGF0ZVBpY2tlclJlZj86IEVsZW1lbnRSZWY7XG5cblx0QElucHV0KClcblx0cGFyZW50RWxlbWVudD86IEVsZW1lbnRSZWY7XG5cblx0QElucHV0KClcblx0dGhlbWU/OiBUaGVtZTtcblxuXHRASW5wdXQoKVxuXHRzZWxlY3REYXRlPzogRGF0ZTtcblxuXHRASW5wdXQoKVxuXHRuYW1lOiBzdHJpbmcgPSAnJztcblxuXHRASW5wdXQoKVxuXHRvcGVuRGlhbG9nOiBib29sZWFuID0gZmFsc2U7XG5cblx0QElucHV0KClcblx0b25seURpYWxvZzogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBJbnB1dCgpXG5cdGRhdGVQaXBlT3B0aW9uczogc3RyaW5nID0gJ2RkL01NL3l5eXknO1xuXG5cdEBPdXRwdXQoKVxuXHRyZWFkb25seSBkYXRlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHJlYWRvbmx5IGRpYWxvZ09wZW5lZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRkYXRlUGlja2VyRm9ybTogRm9ybUdyb3VwO1xuXG5cdHBpY2tlZERhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXG5cdGlucHV0RGlzYWJsZWQ6ICdkaXNhYmxlZCcgfCAnJyA9ICcnO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRhdGVQaWNrZXJTZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VyU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkYXRlUGlja2VyQ29tcG9zaXRpb25TZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb25TZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuZGF0ZVBpY2tlckZvcm0gPSBmb3JtQnVpbGRlci5ncm91cCh7XG5cdFx0XHRcdGRhdGU6IFsnJ11cblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXG5cdFx0aWYgKGNoYW5nZXNbJ3NlbGVjdERhdGUnXSkge1xuXHRcdFx0aWYgKHRoaXMuc2VsZWN0RGF0ZSkge1xuXHRcdFx0XHRpZiAoIXRoaXMucGlja2VkRGF0ZSB8fCAhRmFicmljRGF0ZVV0aWxzLmFyZURhdGVzU2FtZSh0aGlzLnNlbGVjdERhdGUsIHRoaXMucGlja2VkRGF0ZSkpIHtcblx0XHRcdFx0XHR0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmRhdGVTZWxlY3RlZCh0aGlzLnNlbGVjdERhdGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXNbJ29ubHlEaWFsb2cnXSkge1xuXHRcdFx0dGhpcy5pbnB1dERpc2FibGVkID0gdGhpcy5vbmx5RGlhbG9nID8gJ2Rpc2FibGVkJyA6ICcnO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzWydkYXRlUGlwZU9wdGlvbnMnXSkge1xuXHRcdFx0dGhpcy5kYXRlUGlja2VyQ29tcG9zaXRpb25TZXJ2aWNlLm5leHQodGhpcy5kYXRlUGlwZU9wdGlvbnMpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Vcblx0XHRcdC5vYnNlcnZlU2VsZWN0ZWREYXRlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRza2lwKDEpLFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChkYXRlOiBEYXRlKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5waWNrZWREYXRlID0gZGF0ZTtcblx0XHRcdFx0XHR0aGlzLmVtaXRTZWxlY3RlZERhdGUoZGF0ZSk7XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHRcdFx0dGhpcy5jbG9zZURhdGVQaWNrZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblxuXHRcdHRoaXMuZmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2Vcblx0XHRcdC5vbk9wZW5lZCgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0c2tpcCgxKSxcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgob3BlbmVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuZGlhbG9nT3BlbmVkLmVtaXQob3BlbmVkKTtcblx0XHRcdH0pO1xuXG5cdFx0Ly8gdGhpcy5vYnNlcnZlRGF5Q2hhbmdlcygpO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Vcblx0XHRcdC5vYnNlcnZlU2VsZWN0ZWREYXRlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0YWtlKDEpLFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHQoZGF0ZTogRGF0ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGlja2VkRGF0ZSA9IGRhdGU7XG5cdFx0XHRcdFx0dGhpcy5lbWl0U2VsZWN0ZWREYXRlKGRhdGUpO1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXG5cdFx0aWYgKHRoaXMub3BlbkRpYWxvZykge1xuXHRcdFx0dGhpcy5vcGVuRGF0ZVBpY2tlcigpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25EZXN0cm95KCk6IHZvaWQge1xuXHRcdHN1cGVyLm5nT25EZXN0cm95KCk7XG5cdFx0dGhpcy5mYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZS5jbG9zZSgpO1xuXHR9XG5cblx0b3BlbkRhdGVQaWNrZXIoKTogdm9pZCB7XG5cdFx0Y29uc3Qgc2hvdWxkVXNlRGF0ZVBpY2tlclJlZiA9ICF0aGlzLnBhcmVudEVsZW1lbnQgJiYgdGhpcy5kYXRlUGlja2VyUmVmLFxuXHRcdFx0cGFyZW50RWxlbWVudCA9IHNob3VsZFVzZURhdGVQaWNrZXJSZWYgPyB0aGlzLmRhdGVQaWNrZXJSZWYgOiB0aGlzLnBhcmVudEVsZW1lbnQ7XG5cblx0XHRpZiAocGFyZW50RWxlbWVudCkge1xuXHRcdFx0dGhpcy5mYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZVxuXHRcdFx0XHQub3Blbihcblx0XHRcdFx0XHRwYXJlbnRFbGVtZW50LFxuXHRcdFx0XHRcdEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhckNvbXBvbmVudCxcblx0XHRcdFx0XHR0aGlzLnRoZW1lXG5cdFx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0Y2xvc2VEYXRlUGlja2VyKCk6IHZvaWQge1xuXHRcdHRoaXMuZmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2UuY2xvc2UoKTtcblx0fVxuXG5cdHByaXZhdGUgZW1pdFNlbGVjdGVkRGF0ZShkYXRlOiBEYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5kYXRlU2VsZWN0ZWQuZW1pdChkYXRlKTtcblx0fVxuXG5cdHByaXZhdGUgb2JzZXJ2ZURheUNoYW5nZXMoKTogdm9pZCB7XG5cdFx0Ly8gY3VycmVudGx5IGRpc2FibGVkXG5cdFx0dGhpcy5kYXRlUGlja2VyRm9ybVxuXHRcdFx0LmNvbnRyb2xzWydkYXRlJ11cblx0XHRcdC52YWx1ZUNoYW5nZXNcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuXHRcdFx0XHRkZWJvdW5jZVRpbWUoMTUwMCksXG5cdFx0XHRcdG1hcCgoZGF5OiBzdHJpbmcpID0+IHRoaXMucGFyc2UoZGF5KSksXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdChkYXk6IERhdGUpID0+IHtcblx0XHRcdFx0XHR0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmRhdGVTZWxlY3RlZChkYXkpO1xuXHRcdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgcGFyc2UodmFsdWU6IHN0cmluZyk6IERhdGUgeyAvLyBUT0RPXG5cblx0XHRpZiAoKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpICYmICh2YWx1ZS5pbmNsdWRlcygnLycpKSkge1xuXHRcdFx0Y29uc3Qgc3RyID0gdmFsdWUuc3BsaXQoJy8nKTtcblxuXHRcdFx0Y29uc3QgZGF0ZVZhbHVlcyA9IHRoaXMuZ2V0RGF0ZVZhbHVlcyhzdHIpLFxuXHRcdFx0XHRkYXRlSGFzQWxsVmFsdWVzID0gZGF0ZVZhbHVlcyAmJiBkYXRlVmFsdWVzLmxlbmd0aCA9PT0gMztcblxuXHRcdFx0aWYgKGRhdGVIYXNBbGxWYWx1ZXMpIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBEYXRlKGRhdGVWYWx1ZXNbMF0sIGRhdGVWYWx1ZXNbMV0sIGRhdGVWYWx1ZXNbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMucGlja2VkRGF0ZTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMucGlja2VkRGF0ZTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGdldERhdGVWYWx1ZXMoZGF0ZVZhbHVlczogQXJyYXk8c3RyaW5nPik6IEFycmF5PG51bWJlcj4geyAvLyBUT0RPXG5cdFx0aWYgKHRoaXMuZGF0ZVBpcGVPcHRpb25zLmluY2x1ZGVzKCcvJykpIHtcblx0XHRcdGNvbnN0IGRhdGVGb3JtYXRQYXJ0cyA9IHRoaXMuZGF0ZVBpcGVPcHRpb25zLnRvTG93ZXJDYXNlKCkuc3BsaXQoJy8nKTtcblxuXHRcdFx0bGV0IHllYXIgPSAwLFxuXHRcdFx0XHRtb250aCA9IDAsXG5cdFx0XHRcdGRheSA9IDA7XG5cblx0XHRcdGRhdGVGb3JtYXRQYXJ0cy5mb3JFYWNoKChkYXRlUGFydDogc3RyaW5nLCBpOiBudW1iZXIpID0+IHtcblxuXHRcdFx0XHRpZiAoZGF0ZVBhcnQuaW5jbHVkZXMoJ2QnKSkge1xuXHRcdFx0XHRcdGRheSA9ICtkYXRlVmFsdWVzW2ldO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGRhdGVQYXJ0LmluY2x1ZGVzKCdtJykpIHtcblx0XHRcdFx0XHRtb250aCA9ICtkYXRlVmFsdWVzW2ldIC0gMTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChkYXRlUGFydC5pbmNsdWRlcygneScpKSB7XG5cdFx0XHRcdFx0eWVhciA9ICtkYXRlVmFsdWVzW2ldO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIFt5ZWFyLCBtb250aCwgZGF5XTtcblx0XHR9XG5cblx0XHRyZXR1cm4gW107XG5cdH1cbn1cblxuIiwiPGRpdiAjZGF0ZVBpY2tlclxuXHQgY2xhc3M9XCJndWktZGF0ZS1waWNrZXJcIj5cblxuXHQ8Zm9ybSBbZm9ybUdyb3VwXT1cImRhdGVQaWNrZXJGb3JtXCI+XG5cblx0XHQ8aW5wdXQgW2F0dHIuZGlzYWJsZWRdPVwiaW5wdXREaXNhYmxlZFwiXG5cdFx0XHQgICBbbmFtZV09bmFtZVxuXHRcdFx0ICAgW3ZhbHVlXT1cInBpY2tlZERhdGUgfCBkYXRlOiBkYXRlUGlwZU9wdGlvbnNcIlxuXHRcdFx0ICAgY2xhc3M9XCJndWktZGF0ZS1waWNrZXItaW5wdXRcIlxuXHRcdFx0ICAgZm9ybUNvbnRyb2xOYW1lPSdkYXRlJ1xuXHRcdFx0ICAgZ3VpLWlucHV0XG5cdFx0XHQgICByZWFkb25seT5cblx0PC9mb3JtPlxuXG5cdDxndWktZGF0ZS1waWNrZXItaWNvbiAoY2xpY2spPVwib3BlbkRhdGVQaWNrZXIoKVwiXG5cdFx0XHRcdFx0XHQgIGNsYXNzPVwiZ3VpLWRhdGUtcGlja2VyLWljb25cIj5cblx0PC9ndWktZGF0ZS1waWNrZXItaWNvbj5cblxuPC9kaXY+XG4iXX0=