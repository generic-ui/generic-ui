import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, skip, take } from 'rxjs/operators';
import { FabricDatePickerCalendarComponent } from './calendar/fabric-date-picker-calendar.component';
import { FabricDatePickerService } from './fabric-date-picker.service';
import { FabricDatePickerInlineDialogService } from './fabric.date-picker-inline-dialog.service';
import { FabricReactive } from '../../common/fabric-reactive';
import { FabricDatePickerCompositionService } from './fabric-date-picker-composition.service';
import { FabricDateUtils } from '../../common/date-utils/fabric-date-utils';
export class FabricDatePickerComponent extends FabricReactive {
    constructor(fabricDatePickerInlineDialogService, datePickerService, datePickerCompositionService, formBuilder, changeDetectorRef) {
        super();
        this.fabricDatePickerInlineDialogService = fabricDatePickerInlineDialogService;
        this.datePickerService = datePickerService;
        this.datePickerCompositionService = datePickerCompositionService;
        this.formBuilder = formBuilder;
        this.changeDetectorRef = changeDetectorRef;
        this.openDialog = false;
        this.onlyDialog = false;
        this.datePipeOptions = 'dd/MM/yyyy';
        this.dateSelected = new EventEmitter();
        this.dialogOpened = new EventEmitter();
        this.datePickerForm = formBuilder.group({
            date: ['']
        });
    }
    ngOnChanges(changes) {
        if (changes.selectDate) {
            if (!FabricDateUtils.areDatesSame(this.selectDate, this.pickedDate)) {
                this.datePickerService.dateSelected(this.selectDate);
            }
        }
        if (changes.onlyDialog) {
            this.inputDisabled = this.onlyDialog ? 'disabled' : ''; // todo !== null ??
        }
        if (changes.datePipeOptions) {
            this.datePickerCompositionService.next(this.datePipeOptions);
        }
    }
    ngOnInit() {
        this.datePickerService
            .observeSelectedDate()
            .pipe(skip(1), this.takeUntil())
            .subscribe((date) => {
            this.pickedDate = date;
            this.emitSelectedDate(date);
            this.changeDetectorRef.detectChanges();
            this.closeDatePicker();
        });
        this.fabricDatePickerInlineDialogService
            .onOpened()
            .pipe(skip(1), this.takeUntil())
            .subscribe((opened) => {
            this.dialogOpened.emit(opened);
        });
        // this.observeDayChanges();
    }
    ngAfterViewInit() {
        this.datePickerService
            .observeSelectedDate()
            .pipe(take(1), this.takeUntil())
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
        if (!this.parentElement) {
            this.parentElement = this.datePickerRef;
        }
        this.fabricDatePickerInlineDialogService
            .open(this.parentElement, FabricDatePickerCalendarComponent, this.theme);
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
            .pipe(distinctUntilChanged(), debounceTime(1500), map((day) => this.parse(day)), this.takeUntil())
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
            let year, month, day;
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
FabricDatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-date-picker',
                template: "<div #datePicker\n\t class=\"gui-date-picker\">\n\n\t<form [formGroup]=\"datePickerForm\">\n\n\t\t<input [attr.disabled]=\"inputDisabled\"\n\t\t\t   [name]=name\n\t\t\t   [value]=\"pickedDate | date: datePipeOptions\"\n\t\t\t   class=\"gui-date-picker-input\"\n\t\t\t   formControlName='date'\n\t\t\t   gui-input\n\t\t\t   readonly>\n\t</form>\n\n\t<gui-date-picker-icon (click)=\"openDatePicker()\"\n\t\t\t\t\t\t  class=\"gui-date-picker-icon\">\n\t</gui-date-picker-icon>\n\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-date-picker{-ms-flex-align:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;position:relative}.gui-date-picker .gui-date-picker-icon{cursor:pointer;position:absolute;right:0}.gui-date-picker input,.gui-date-picker-calendar input{background:transparent;border-radius:0;border-width:0 0 1px 0;font-family:Arial;font-size:14px;padding:4px}.gui-date-picker input:disabled,.gui-date-picker-calendar input:disabled{color:#333}.gui-date-picker .gui-date-picker-icon,.gui-date-picker-calendar .gui-date-picker-icon{cursor:pointer;position:absolute;right:0}\n", ".gui-dark .gui-input{background:transparent;color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-arrow-icon:hover:after{background:#757575}.gui-dark .gui-date-picker-calendar .gui-date-picker-cell{color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-date-picker-cell:hover:after{background:#757575}.gui-dark .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day,.gui-dark .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month,.gui-dark .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year{color:#333}.gui-dark .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day:after,.gui-dark .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month:after,.gui-dark .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year:after{background:#dfb8e6}\n", ".gui-material .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day:after,.gui-material .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month:after,.gui-material .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year:after{background:#6200ee}\n"]
            },] }
];
FabricDatePickerComponent.ctorParameters = () => [
    { type: FabricDatePickerInlineDialogService },
    { type: FabricDatePickerService },
    { type: FabricDatePickerCompositionService },
    { type: FormBuilder },
    { type: ChangeDetectorRef }
];
FabricDatePickerComponent.propDecorators = {
    datePickerRef: [{ type: ViewChild, args: ['datePicker', { static: false },] }],
    parentElement: [{ type: Input }],
    theme: [{ type: Input }],
    selectDate: [{ type: Input }],
    name: [{ type: Input }],
    openDialog: [{ type: Input }],
    onlyDialog: [{ type: Input }],
    datePipeOptions: [{ type: Input }],
    dateSelected: [{ type: Output }],
    dialogOpened: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL2RhdGUtcGlja2VyL2ZhYnJpYy1kYXRlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNqRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHOUQsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDOUYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBYTVFLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxjQUFjO0lBc0M1RCxZQUE2QixtQ0FBd0UsRUFDakYsaUJBQTBDLEVBQzFDLDRCQUFnRSxFQUNoRSxXQUF3QixFQUN4QixpQkFBb0M7UUFDdkQsS0FBSyxFQUFFLENBQUM7UUFMb0Isd0NBQW1DLEdBQW5DLG1DQUFtQyxDQUFxQztRQUNqRixzQkFBaUIsR0FBakIsaUJBQWlCLENB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Q0FBQyxDQUFDO2lCQUN0QjtZQUNGLENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDMUI7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7OztZQXJORCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsaWZBQWtEO2dCQU1sRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3JDOzs7WUFqQlEsbUNBQW1DO1lBRG5DLHVCQUF1QjtZQUt2QixrQ0FBa0M7WUFUbEMsV0FBVztZQWJuQixpQkFBaUI7Ozs0QkFzQ2hCLFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzRCQUd6QyxLQUFLO29CQUdMLEtBQUs7eUJBR0wsS0FBSzttQkFHTCxLQUFLO3lCQUdMLEtBQUs7eUJBR0wsS0FBSzs4QkFHTCxLQUFLOzJCQUdMLE1BQU07MkJBR04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPbkNoYW5nZXMsXG5cdE9uRGVzdHJveSxcblx0T25Jbml0LFxuXHRPdXRwdXQsXG5cdFNpbXBsZUNoYW5nZXMsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCBza2lwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyL2ZhYnJpYy1kYXRlLXBpY2tlci1jYWxlbmRhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlclNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1kYXRlLXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMuZGF0ZS1waWNrZXItaW5saW5lLWRpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY1JlYWN0aXZlIH0gZnJvbSAnLi4vLi4vY29tbW9uL2ZhYnJpYy1yZWFjdGl2ZSc7XG5cbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvblNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1kYXRlLXBpY2tlci1jb21wb3NpdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVVdGlscyB9IGZyb20gJy4uLy4uL2NvbW1vbi9kYXRlLXV0aWxzL2ZhYnJpYy1kYXRlLXV0aWxzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWRhdGUtcGlja2VyJyxcblx0dGVtcGxhdGVVcmw6ICcuL2ZhYnJpYy1kYXRlLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2ZhYnJpYy1kYXRlLXBpY2tlci5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL2ZhYnJpYy1kYXRlLXBpY2tlci5kYXJrLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvZmFicmljLWRhdGUtcGlja2VyLm1hdGVyaWFsLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNEYXRlUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgRmFicmljUmVhY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuXHRAVmlld0NoaWxkKCdkYXRlUGlja2VyJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdGRhdGVQaWNrZXJSZWY6IEVsZW1lbnRSZWY7XG5cblx0QElucHV0KClcblx0cGFyZW50RWxlbWVudDogRWxlbWVudFJlZjtcblxuXHRASW5wdXQoKVxuXHR0aGVtZTogVGhlbWU7XG5cblx0QElucHV0KClcblx0c2VsZWN0RGF0ZTogRGF0ZTtcblxuXHRASW5wdXQoKVxuXHRuYW1lOiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0b3BlbkRpYWxvZzogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBJbnB1dCgpXG5cdG9ubHlEaWFsb2c6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRkYXRlUGlwZU9wdGlvbnM6IHN0cmluZyA9ICdkZC9NTS95eXl5JztcblxuXHRAT3V0cHV0KClcblx0ZGF0ZVNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRkaWFsb2dPcGVuZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0ZGF0ZVBpY2tlckZvcm06IEZvcm1Hcm91cDtcblxuXHRwaWNrZWREYXRlOiBEYXRlO1xuXG5cdGlucHV0RGlzYWJsZWQ6ICdkaXNhYmxlZCcgfCAnJztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkYXRlUGlja2VyU2VydmljZTogRmFicmljRGF0ZVBpY2tlclNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGF0ZVBpY2tlckNvbXBvc2l0aW9uU2VydmljZTogRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmRhdGVQaWNrZXJGb3JtID0gZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuXHRcdFx0XHRkYXRlOiBbJyddXG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdGlmIChjaGFuZ2VzLnNlbGVjdERhdGUpIHtcblx0XHRcdGlmICghRmFicmljRGF0ZVV0aWxzLmFyZURhdGVzU2FtZSh0aGlzLnNlbGVjdERhdGUsIHRoaXMucGlja2VkRGF0ZSkpIHtcblx0XHRcdFx0dGhpcy5kYXRlUGlja2VyU2VydmljZS5kYXRlU2VsZWN0ZWQodGhpcy5zZWxlY3REYXRlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5vbmx5RGlhbG9nKSB7XG5cdFx0XHR0aGlzLmlucHV0RGlzYWJsZWQgPSB0aGlzLm9ubHlEaWFsb2cgPyAnZGlzYWJsZWQnIDogJyc7IC8vIHRvZG8gIT09IG51bGwgPz9cblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5kYXRlUGlwZU9wdGlvbnMpIHtcblx0XHRcdHRoaXMuZGF0ZVBpY2tlckNvbXBvc2l0aW9uU2VydmljZS5uZXh0KHRoaXMuZGF0ZVBpcGVPcHRpb25zKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlXG5cdFx0XHQub2JzZXJ2ZVNlbGVjdGVkRGF0ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0c2tpcCgxKSxcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZGF0ZTogRGF0ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGlja2VkRGF0ZSA9IGRhdGU7XG5cdFx0XHRcdFx0dGhpcy5lbWl0U2VsZWN0ZWREYXRlKGRhdGUpO1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0XHRcdHRoaXMuY2xvc2VEYXRlUGlja2VyKCk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cblx0XHR0aGlzLmZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlXG5cdFx0XHQub25PcGVuZWQoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHNraXAoMSksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKG9wZW5lZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmRpYWxvZ09wZW5lZC5lbWl0KG9wZW5lZCk7XG5cdFx0XHR9KTtcblxuXHRcdC8vIHRoaXMub2JzZXJ2ZURheUNoYW5nZXMoKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlXG5cdFx0XHQub2JzZXJ2ZVNlbGVjdGVkRGF0ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGFrZSgxKSxcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0KGRhdGU6IERhdGUpID0+IHtcblx0XHRcdFx0XHR0aGlzLnBpY2tlZERhdGUgPSBkYXRlO1xuXHRcdFx0XHRcdHRoaXMuZW1pdFNlbGVjdGVkRGF0ZShkYXRlKTtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblxuXHRcdGlmICh0aGlzLm9wZW5EaWFsb2cpIHtcblx0XHRcdHRoaXMub3BlbkRhdGVQaWNrZXIoKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRzdXBlci5uZ09uRGVzdHJveSgpO1xuXHRcdHRoaXMuZmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2UuY2xvc2UoKTtcblx0fVxuXG5cdG9wZW5EYXRlUGlja2VyKCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5wYXJlbnRFbGVtZW50KSB7XG5cdFx0XHR0aGlzLnBhcmVudEVsZW1lbnQgPSB0aGlzLmRhdGVQaWNrZXJSZWY7XG5cdFx0fVxuXHRcdHRoaXMuZmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2Vcblx0XHRcdC5vcGVuKFxuXHRcdFx0XHR0aGlzLnBhcmVudEVsZW1lbnQsXG5cdFx0XHRcdEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhckNvbXBvbmVudCxcblx0XHRcdFx0dGhpcy50aGVtZVxuXHRcdFx0KTtcblx0fVxuXG5cdGNsb3NlRGF0ZVBpY2tlcigpOiB2b2lkIHtcblx0XHR0aGlzLmZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cblxuXHRwcml2YXRlIGVtaXRTZWxlY3RlZERhdGUoZGF0ZTogRGF0ZSk6IHZvaWQge1xuXHRcdHRoaXMuZGF0ZVNlbGVjdGVkLmVtaXQoZGF0ZSk7XG5cdH1cblxuXHRwcml2YXRlIG9ic2VydmVEYXlDaGFuZ2VzKCk6IHZvaWQge1xuXHRcdC8vIGN1cnJlbnRseSBkaXNhYmxlZFxuXHRcdHRoaXMuZGF0ZVBpY2tlckZvcm1cblx0XHRcdC5jb250cm9sc1snZGF0ZSddXG5cdFx0XHQudmFsdWVDaGFuZ2VzXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcblx0XHRcdFx0ZGVib3VuY2VUaW1lKDE1MDApLFxuXHRcdFx0XHRtYXAoKGRheTogc3RyaW5nKSA9PiB0aGlzLnBhcnNlKGRheSkpLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHQoZGF5OiBEYXRlKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5kYXRlUGlja2VyU2VydmljZS5kYXRlU2VsZWN0ZWQoZGF5KTtcblx0XHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHBhcnNlKHZhbHVlOiBzdHJpbmcpOiBEYXRlIHsgLy8gVE9ET1xuXG5cdFx0aWYgKCh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSAmJiAodmFsdWUuaW5jbHVkZXMoJy8nKSkpIHtcblx0XHRcdGNvbnN0IHN0ciA9IHZhbHVlLnNwbGl0KCcvJyk7XG5cblx0XHRcdGNvbnN0IGRhdGVWYWx1ZXMgPSB0aGlzLmdldERhdGVWYWx1ZXMoc3RyKSxcblx0XHRcdFx0ZGF0ZUhhc0FsbFZhbHVlcyA9IGRhdGVWYWx1ZXMgJiYgZGF0ZVZhbHVlcy5sZW5ndGggPT09IDM7XG5cblx0XHRcdGlmIChkYXRlSGFzQWxsVmFsdWVzKSB7XG5cdFx0XHRcdHJldHVybiBuZXcgRGF0ZShkYXRlVmFsdWVzWzBdLCBkYXRlVmFsdWVzWzFdLCBkYXRlVmFsdWVzWzJdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnBpY2tlZERhdGU7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLnBpY2tlZERhdGU7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBnZXREYXRlVmFsdWVzKGRhdGVWYWx1ZXM6IEFycmF5PHN0cmluZz4pOiBBcnJheTxudW1iZXI+IHsgLy8gVE9ET1xuXHRcdGlmICh0aGlzLmRhdGVQaXBlT3B0aW9ucy5pbmNsdWRlcygnLycpKSB7XG5cdFx0XHRjb25zdCBkYXRlRm9ybWF0UGFydHMgPSB0aGlzLmRhdGVQaXBlT3B0aW9ucy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcvJyk7XG5cblx0XHRcdGxldCB5ZWFyLFxuXHRcdFx0XHRtb250aCxcblx0XHRcdFx0ZGF5O1xuXG5cdFx0XHRkYXRlRm9ybWF0UGFydHMuZm9yRWFjaCgoZGF0ZVBhcnQ6IHN0cmluZywgaTogbnVtYmVyKSA9PiB7XG5cblx0XHRcdFx0aWYgKGRhdGVQYXJ0LmluY2x1ZGVzKCdkJykpIHtcblx0XHRcdFx0XHRkYXkgPSArZGF0ZVZhbHVlc1tpXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChkYXRlUGFydC5pbmNsdWRlcygnbScpKSB7XG5cdFx0XHRcdFx0bW9udGggPSArZGF0ZVZhbHVlc1tpXSAtIDE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoZGF0ZVBhcnQuaW5jbHVkZXMoJ3knKSkge1xuXHRcdFx0XHRcdHllYXIgPSArZGF0ZVZhbHVlc1tpXTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBbeWVhciwgbW9udGgsIGRheV07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFtdO1xuXHR9XG59XG5cbiJdfQ==