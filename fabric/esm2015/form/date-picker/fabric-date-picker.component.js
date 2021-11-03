import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, skip, take } from 'rxjs/operators';
import { FabricDatePickerCalendarComponent } from './calendar/fabric-date-picker-calendar.component';
import { FabricReactive } from '../../common/fabric-reactive';
import * as i0 from "@angular/core";
import * as i1 from "./fabric.date-picker-inline-dialog.service";
import * as i2 from "./fabric-date-picker.service";
import * as i3 from "./fabric-date-picker-composition.service";
import * as i4 from "@angular/forms";
import * as i5 from "../input/input.component";
import * as i6 from "../../common/icons/date-picker-icon/date-picker-icon.component";
import * as i7 from "@angular/common";
const _c0 = ["datePicker"];
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
            'date': ['']
        });
    }
    ngOnChanges(changes) {
        if (changes.selectDate) {
            this.datePickerService.dateSelected(this.selectDate);
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
            .pipe(take(1), this.takeUntil())
            .subscribe((date) => {
            this.pickedDate = date;
            this.emitSelectedDate(date);
        });
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
        this.observeDayChanges();
    }
    ngAfterViewInit() {
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
FabricDatePickerComponent.ɵfac = function FabricDatePickerComponent_Factory(t) { return new (t || FabricDatePickerComponent)(i0.ɵɵdirectiveInject(i1.FabricDatePickerInlineDialogService), i0.ɵɵdirectiveInject(i2.FabricDatePickerService), i0.ɵɵdirectiveInject(i3.FabricDatePickerCompositionService), i0.ɵɵdirectiveInject(i4.FormBuilder), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
FabricDatePickerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricDatePickerComponent, selectors: [["gui-date-picker"]], viewQuery: function FabricDatePickerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.datePickerRef = _t.first);
    } }, inputs: { parentElement: "parentElement", theme: "theme", selectDate: "selectDate", name: "name", openDialog: "openDialog", onlyDialog: "onlyDialog", datePipeOptions: "datePipeOptions" }, outputs: { dateSelected: "dateSelected", dialogOpened: "dialogOpened" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 6, vars: 7, consts: [[1, "gui-date-picker"], ["datePicker", ""], [3, "formGroup"], ["formControlName", "date", "gui-input", "", "readonly", "", 1, "gui-date-picker-input", 3, "name", "value"], [1, "gui-date-picker-icon", 3, "click"]], template: function FabricDatePickerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵelementStart(2, "form", 2);
        i0.ɵɵelement(3, "input", 3);
        i0.ɵɵpipe(4, "date");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "gui-date-picker-icon", 4);
        i0.ɵɵlistener("click", function FabricDatePickerComponent_Template_gui_date_picker_icon_click_5_listener() { return ctx.openDatePicker(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("formGroup", ctx.datePickerForm);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("name", ctx.name)("value", i0.ɵɵpipeBind2(4, 4, ctx.pickedDate, ctx.datePipeOptions));
        i0.ɵɵattribute("disabled", ctx.inputDisabled);
    } }, directives: [i4.ɵNgNoValidate, i4.NgControlStatusGroup, i4.FormGroupDirective, i4.DefaultValueAccessor, i5.FabricInputComponent, i4.NgControlStatus, i4.FormControlName, i6.DatePickerIconComponent], pipes: [i7.DatePipe], styles: [".gui-date-picker{-ms-flex-align:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;position:relative}.gui-date-picker .gui-date-picker-icon{cursor:pointer;position:absolute;right:0}.gui-date-picker input,.gui-date-picker-calendar input{background:transparent;border-radius:0;border-width:0 0 1px 0;font-family:Arial;font-size:14px;padding:4px}.gui-date-picker input:disabled,.gui-date-picker-calendar input:disabled{color:#333}.gui-date-picker .gui-date-picker-icon,.gui-date-picker-calendar .gui-date-picker-icon{cursor:pointer;position:absolute;right:0}\n", ".gui-dark .gui-input{background:transparent;color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-arrow-icon:hover:after{background:#757575}.gui-dark .gui-date-picker-calendar .gui-date-picker-cell{color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-date-picker-cell:hover:after{background:#757575}.gui-dark .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day,.gui-dark .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month,.gui-dark .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year{color:#333}.gui-dark .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day:after,.gui-dark .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month:after,.gui-dark .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year:after{background:#dfb8e6}\n", ".gui-material .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day:after,.gui-material .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month:after,.gui-material .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year:after{background:#6200ee}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDatePickerComponent, [{
        type: Component,
        args: [{
                selector: 'gui-date-picker',
                templateUrl: './fabric-date-picker.component.html',
                styleUrls: [
                    './fabric-date-picker.ngx.scss',
                    './themes/fabric-date-picker.dark.ngx.scss',
                    './themes/fabric-date-picker.material.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i1.FabricDatePickerInlineDialogService }, { type: i2.FabricDatePickerService }, { type: i3.FabricDatePickerCompositionService }, { type: i4.FormBuilder }, { type: i0.ChangeDetectorRef }]; }, { datePickerRef: [{
            type: ViewChild,
            args: ['datePicker', { static: false }]
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL2RhdGUtcGlja2VyL2ZhYnJpYy1kYXRlLXBpY2tlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZm9ybS9kYXRlLXBpY2tlci9mYWJyaWMtZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNOLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBRU4sU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFHckcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7Ozs7O0FBZ0I5RCxNQUFNLE9BQU8seUJBQTBCLFNBQVEsY0FBYztJQXNDNUQsWUFBNkIsbUNBQXdFLEVBQ2pGLGlCQUEwQyxFQUMxQyw0QkFBZ0UsRUFDaEUsV0FBd0IsRUFDeEIsaUJBQW9DO1FBQ3ZELEtBQUssRUFBRSxDQUFDO1FBTG9CLHdDQUFtQyxHQUFuQyxtQ0FBbUMsQ0FBcUM7UUFDakYsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF5QjtRQUMxQyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQW9DO1FBQ2hFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUF4QnhELGVBQVUsR0FBWSxLQUFLLENBQUM7UUFH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LGlCQUF1QjtRQUV4QixpQkFBTTs7UUFmQyxlQUE0QjtRQUE1Qiw4Q0FBNEI7UUFHN0IsZUFBVztRQUFYLCtCQUFXLG9FQUFBO1FBRFIsNkNBQStCOzt1RkQrQjNCLHlCQUF5QjtjQVhyQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsU0FBUyxFQUFFO29CQUNWLCtCQUErQjtvQkFDL0IsMkNBQTJDO29CQUMzQywrQ0FBK0M7aUJBQy9DO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzt1T0FJQSxhQUFhO2tCQURaLFNBQVM7bUJBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUkxQyxhQUFhO2tCQURaLEtBQUs7WUFJTixLQUFLO2tCQURKLEtBQUs7WUFJTixVQUFVO2tCQURULEtBQUs7WUFJTixJQUFJO2tCQURILEtBQUs7WUFJTixVQUFVO2tCQURULEtBQUs7WUFJTixVQUFVO2tCQURULEtBQUs7WUFJTixlQUFlO2tCQURkLEtBQUs7WUFJTixZQUFZO2tCQURYLE1BQU07WUFJUCxZQUFZO2tCQURYLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0RXZlbnRFbWl0dGVyLFxuXHRJbnB1dCxcblx0T25EZXN0cm95LFxuXHRPbkluaXQsXG5cdE91dHB1dCxcblx0U2ltcGxlQ2hhbmdlcyxcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHNraXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXIvZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyU2VydmljZSB9IGZyb20gJy4vZmFicmljLWRhdGUtcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy5kYXRlLXBpY2tlci1pbmxpbmUtZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljUmVhY3RpdmUgfSBmcm9tICcuLi8uLi9jb21tb24vZmFicmljLXJlYWN0aXZlJztcblxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uU2VydmljZSB9IGZyb20gJy4vZmFicmljLWRhdGUtcGlja2VyLWNvbXBvc2l0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZGF0ZS1waWNrZXInLFxuXHR0ZW1wbGF0ZVVybDogJy4vZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vZmFicmljLWRhdGUtcGlja2VyLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvZmFicmljLWRhdGUtcGlja2VyLmRhcmsubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9mYWJyaWMtZGF0ZS1waWNrZXIubWF0ZXJpYWwubmd4LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBGYWJyaWNSZWFjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXHRAVmlld0NoaWxkKCdkYXRlUGlja2VyJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdGRhdGVQaWNrZXJSZWY6IEVsZW1lbnRSZWY7XG5cblx0QElucHV0KClcblx0cGFyZW50RWxlbWVudDogRWxlbWVudFJlZjtcblxuXHRASW5wdXQoKVxuXHR0aGVtZTogVGhlbWU7XG5cblx0QElucHV0KClcblx0c2VsZWN0RGF0ZTogRGF0ZTtcblxuXHRASW5wdXQoKVxuXHRuYW1lOiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0b3BlbkRpYWxvZzogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBJbnB1dCgpXG5cdG9ubHlEaWFsb2c6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRkYXRlUGlwZU9wdGlvbnM6IHN0cmluZyA9ICdkZC9NTS95eXl5JztcblxuXHRAT3V0cHV0KClcblx0ZGF0ZVNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRkaWFsb2dPcGVuZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0ZGF0ZVBpY2tlckZvcm06IEZvcm1Hcm91cDtcblxuXHRwaWNrZWREYXRlOiBEYXRlO1xuXG5cdGlucHV0RGlzYWJsZWQ6ICdkaXNhYmxlZCcgfCAnJztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkYXRlUGlja2VyU2VydmljZTogRmFicmljRGF0ZVBpY2tlclNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGF0ZVBpY2tlckNvbXBvc2l0aW9uU2VydmljZTogRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmRhdGVQaWNrZXJGb3JtID0gZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuXHRcdFx0XHQnZGF0ZSc6IFsnJ11cblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0aWYgKGNoYW5nZXMuc2VsZWN0RGF0ZSkge1xuXHRcdFx0dGhpcy5kYXRlUGlja2VyU2VydmljZS5kYXRlU2VsZWN0ZWQodGhpcy5zZWxlY3REYXRlKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5vbmx5RGlhbG9nKSB7XG5cdFx0XHR0aGlzLmlucHV0RGlzYWJsZWQgPSB0aGlzLm9ubHlEaWFsb2cgPyAnZGlzYWJsZWQnIDogJyc7IC8vIHRvZG8gIT09IG51bGwgPz9cblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5kYXRlUGlwZU9wdGlvbnMpIHtcblx0XHRcdHRoaXMuZGF0ZVBpY2tlckNvbXBvc2l0aW9uU2VydmljZS5uZXh0KHRoaXMuZGF0ZVBpcGVPcHRpb25zKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Vcblx0XHRcdC5vYnNlcnZlU2VsZWN0ZWREYXRlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0YWtlKDEpLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHQoZGF0ZTogRGF0ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGlja2VkRGF0ZSA9IGRhdGU7XG5cdFx0XHRcdFx0dGhpcy5lbWl0U2VsZWN0ZWREYXRlKGRhdGUpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXG5cdFx0dGhpcy5kYXRlUGlja2VyU2VydmljZVxuXHRcdFx0Lm9ic2VydmVTZWxlY3RlZERhdGUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHNraXAoMSksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGRhdGU6IERhdGUpID0+IHtcblx0XHRcdFx0XHR0aGlzLnBpY2tlZERhdGUgPSBkYXRlO1xuXHRcdFx0XHRcdHRoaXMuZW1pdFNlbGVjdGVkRGF0ZShkYXRlKTtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdFx0XHR0aGlzLmNsb3NlRGF0ZVBpY2tlcigpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXG5cdFx0dGhpcy5mYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZVxuXHRcdFx0Lm9uT3BlbmVkKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRza2lwKDEpLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChvcGVuZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5kaWFsb2dPcGVuZWQuZW1pdChvcGVuZWQpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLm9ic2VydmVEYXlDaGFuZ2VzKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0aWYgKHRoaXMub3BlbkRpYWxvZykge1xuXHRcdFx0dGhpcy5vcGVuRGF0ZVBpY2tlcigpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHN1cGVyLm5nT25EZXN0cm95KCk7XG5cdFx0dGhpcy5mYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZS5jbG9zZSgpO1xuXHR9XG5cblx0b3BlbkRhdGVQaWNrZXIoKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLnBhcmVudEVsZW1lbnQpIHtcblx0XHRcdHRoaXMucGFyZW50RWxlbWVudCA9IHRoaXMuZGF0ZVBpY2tlclJlZjtcblx0XHR9XG5cdFx0dGhpcy5mYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZVxuXHRcdFx0Lm9wZW4oXG5cdFx0XHRcdHRoaXMucGFyZW50RWxlbWVudCxcblx0XHRcdFx0RmFicmljRGF0ZVBpY2tlckNhbGVuZGFyQ29tcG9uZW50LFxuXHRcdFx0XHR0aGlzLnRoZW1lXG5cdFx0XHQpO1xuXHR9XG5cblx0Y2xvc2VEYXRlUGlja2VyKCk6IHZvaWQge1xuXHRcdHRoaXMuZmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2UuY2xvc2UoKTtcblx0fVxuXG5cdHByaXZhdGUgZW1pdFNlbGVjdGVkRGF0ZShkYXRlOiBEYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5kYXRlU2VsZWN0ZWQuZW1pdChkYXRlKTtcblx0fVxuXG5cdHByaXZhdGUgb2JzZXJ2ZURheUNoYW5nZXMoKTogdm9pZCB7XG5cdFx0dGhpcy5kYXRlUGlja2VyRm9ybVxuXHRcdFx0LmNvbnRyb2xzWydkYXRlJ11cblx0XHRcdC52YWx1ZUNoYW5nZXNcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuXHRcdFx0XHRkZWJvdW5jZVRpbWUoMTUwMCksXG5cdFx0XHRcdG1hcCgoZGF5OiBzdHJpbmcpID0+IHRoaXMucGFyc2UoZGF5KSksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdChkYXk6IERhdGUpID0+IHtcblx0XHRcdFx0XHR0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmRhdGVTZWxlY3RlZChkYXkpO1xuXHRcdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgcGFyc2UodmFsdWU6IHN0cmluZyk6IERhdGUgeyAvLyBUT0RPXG5cblx0XHRpZiAoKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpICYmICh2YWx1ZS5pbmNsdWRlcygnLycpKSkge1xuXHRcdFx0Y29uc3Qgc3RyID0gdmFsdWUuc3BsaXQoJy8nKTtcblxuXHRcdFx0Y29uc3QgZGF0ZVZhbHVlcyA9IHRoaXMuZ2V0RGF0ZVZhbHVlcyhzdHIpLFxuXHRcdFx0XHRkYXRlSGFzQWxsVmFsdWVzID0gZGF0ZVZhbHVlcyAmJiBkYXRlVmFsdWVzLmxlbmd0aCA9PT0gMztcblxuXHRcdFx0aWYgKGRhdGVIYXNBbGxWYWx1ZXMpIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBEYXRlKGRhdGVWYWx1ZXNbMF0sIGRhdGVWYWx1ZXNbMV0sIGRhdGVWYWx1ZXNbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMucGlja2VkRGF0ZTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMucGlja2VkRGF0ZTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGdldERhdGVWYWx1ZXMoZGF0ZVZhbHVlczogQXJyYXk8c3RyaW5nPik6IEFycmF5PG51bWJlcj4geyAvLyBUT0RPXG5cdFx0aWYgKHRoaXMuZGF0ZVBpcGVPcHRpb25zLmluY2x1ZGVzKCcvJykpIHtcblx0XHRcdGNvbnN0IGRhdGVGb3JtYXRQYXJ0cyA9IHRoaXMuZGF0ZVBpcGVPcHRpb25zLnRvTG93ZXJDYXNlKCkuc3BsaXQoJy8nKTtcblxuXHRcdFx0bGV0IHllYXIsXG5cdFx0XHRcdG1vbnRoLFxuXHRcdFx0XHRkYXk7XG5cblx0XHRcdGRhdGVGb3JtYXRQYXJ0cy5mb3JFYWNoKChkYXRlUGFydDogc3RyaW5nLCBpOiBudW1iZXIpID0+IHtcblxuXHRcdFx0XHRpZiAoZGF0ZVBhcnQuaW5jbHVkZXMoJ2QnKSkge1xuXHRcdFx0XHRcdGRheSA9ICtkYXRlVmFsdWVzW2ldO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGRhdGVQYXJ0LmluY2x1ZGVzKCdtJykpIHtcblx0XHRcdFx0XHRtb250aCA9ICtkYXRlVmFsdWVzW2ldIC0gMTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChkYXRlUGFydC5pbmNsdWRlcygneScpKSB7XG5cdFx0XHRcdFx0eWVhciA9ICtkYXRlVmFsdWVzW2ldO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIFt5ZWFyLCBtb250aCwgZGF5XTtcblx0XHR9XG5cblx0XHRyZXR1cm4gW107XG5cdH1cbn1cblxuIiwiPGRpdiAjZGF0ZVBpY2tlclxuXHQgY2xhc3M9XCJndWktZGF0ZS1waWNrZXJcIj5cblxuXHQ8Zm9ybSBbZm9ybUdyb3VwXT1cImRhdGVQaWNrZXJGb3JtXCI+XG5cblx0XHQ8aW5wdXQgW2F0dHIuZGlzYWJsZWRdPVwiaW5wdXREaXNhYmxlZFwiXG5cdFx0XHQgICBbbmFtZV09bmFtZVxuXHRcdFx0ICAgW3ZhbHVlXT1cInBpY2tlZERhdGUgfCBkYXRlOiBkYXRlUGlwZU9wdGlvbnNcIlxuXHRcdFx0ICAgY2xhc3M9XCJndWktZGF0ZS1waWNrZXItaW5wdXRcIlxuXHRcdFx0ICAgZm9ybUNvbnRyb2xOYW1lPSdkYXRlJ1xuXHRcdFx0ICAgZ3VpLWlucHV0XG5cdFx0XHQgICByZWFkb25seT5cblx0PC9mb3JtPlxuXG5cdDxndWktZGF0ZS1waWNrZXItaWNvbiAoY2xpY2spPVwib3BlbkRhdGVQaWNrZXIoKVwiXG5cdFx0XHRcdFx0XHQgIGNsYXNzPVwiZ3VpLWRhdGUtcGlja2VyLWljb25cIj5cblx0PC9ndWktZGF0ZS1waWNrZXItaWNvbj5cblxuPC9kaXY+XG4iXX0=