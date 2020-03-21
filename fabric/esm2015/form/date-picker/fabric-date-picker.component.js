/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { distinctUntilChanged, map, skip, take, takeUntil } from 'rxjs/operators';
import { FabricDatePickerCalendarComponent } from './calendar/fabric-date-picker-calendar.component';
import { FabricDatePickerService } from './fabric-date-picker.service';
import { FabricDatePickerInlineDialogService } from './fabric.date-picker-inline-dialog.service';
export class FabricDatePickerComponent {
    /**
     * @param {?} fabricDatePickerInlineDialogService
     * @param {?} datePickerService
     * @param {?} formBuilder
     * @param {?} changeDetectorRef
     */
    constructor(fabricDatePickerInlineDialogService, datePickerService, formBuilder, changeDetectorRef) {
        this.fabricDatePickerInlineDialogService = fabricDatePickerInlineDialogService;
        this.datePickerService = datePickerService;
        this.formBuilder = formBuilder;
        this.changeDetectorRef = changeDetectorRef;
        this.openDialog = false;
        this.onlyDialog = false;
        this.dateSelected = new EventEmitter();
        this.dialogOpened = new EventEmitter();
        this.unsub$ = new Subject();
        this.datePickerForm = formBuilder.group({
            'date': ['']
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.selectDate) {
            this.datePickerService.dateSelected(this.selectDate);
        }
        if (changes.onlyDialog !== null) {
            this.inputDisabled = this.onlyDialog ? 'disabled' : '';
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.datePickerSubscription =
            this.datePickerService
                .observeSelectedDate()
                .pipe(take(1), distinctUntilChanged(), takeUntil(this.unsub$))
                .subscribe((/**
             * @param {?} date
             * @return {?}
             */
            (date) => {
                this.pickedDate = date;
                this.dateSelected.emit(date);
            }));
        this.datePickerService
            .observeSelectedDate()
            .pipe(skip(1), takeUntil(this.unsub$))
            .subscribe((/**
         * @param {?} date
         * @return {?}
         */
        (date) => {
            this.pickedDate = date;
            this.changeDetectorRef.detectChanges();
            this.dateSelected.emit(date);
            this.fabricDatePickerInlineDialogService.close();
        }));
        this.fabricDatePickerInlineDialogService
            .onOpened()
            .pipe(skip(1), takeUntil(this.unsub$))
            .subscribe((/**
         * @param {?} opened
         * @return {?}
         */
        (opened) => {
            this.dialogOpened.emit(opened);
        }));
        this.observeDayChanges();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.openDialog) {
            this.openDatePicker();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.fabricDatePickerInlineDialogService.close();
        this.datePickerSubscription.unsubscribe();
        this.datePickerDaySubscription.unsubscribe();
        this.unsub$.next();
        this.unsub$.complete();
    }
    /**
     * @return {?}
     */
    openDatePicker() {
        this.fabricDatePickerInlineDialogService.open(this.datePickerRef, FabricDatePickerCalendarComponent);
    }
    /**
     * @private
     * @return {?}
     */
    observeDayChanges() {
        this.datePickerDaySubscription =
            this.datePickerForm
                .controls['date']
                .valueChanges
                .pipe(distinctUntilChanged(), 
            // debounceTime(1000),
            map((/**
             * @param {?} day
             * @return {?}
             */
            (day) => this.parse(day))), takeUntil(this.unsub$))
                .subscribe((/**
             * @param {?} day
             * @return {?}
             */
            (day) => {
                this.datePickerService.dateSelected(day);
            }));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    parse(value) {
        if ((typeof value === 'string') && (value.includes('/'))) {
            /** @type {?} */
            const str = value.split('/');
            /** @type {?} */
            const year = +str[2];
            /** @type {?} */
            const month = +str[1] - 1;
            /** @type {?} */
            const date = +str[0];
            return new Date(year, month, date);
        }
        else
            return this.pickedDate;
    }
}
FabricDatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-date-picker',
                template: "<div #datePicker class=\"gui-date-picker\">\n\t<form [formGroup]=\"datePickerForm\">\n\t\t<input [value]=\"pickedDate | date: 'dd/MM/yyyy'\"\n\t\t\t   class=\"gui-date-picker-input\"\n\t\t\t   [name]=name\n\t\t\t   [attr.disabled]=\"inputDisabled\"\n\t\t\t   formControlName='date'\n\t\t\t   gui-input>\n\t</form>\n\t<div (click)=\"openDatePicker()\" class=\"gui-date-picker-icon\"></div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-date-picker{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.gui-date-picker input{background:0 0;font-family:Arial;font-size:14px;padding:4px;border-radius:0;border-width:0 0 1px}.gui-date-picker input:disabled{color:#333}.gui-date-picker .gui-date-picker-icon{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABHSURBVDhPY0AGERER/6FMnABdDSOIIEYjNrBixQpGJiibbECxAWBAjhdgegbeCygGgJwFw1AhgmA0FgaDARRnJiiTXMDAAABL+xpWANMN2gAAAABJRU5ErkJggg==);height:16px;width:16px;margin-left:-16px;cursor:pointer;opacity:.8}.gui-date-picker .gui-date-picker-icon:hover{opacity:1}", ".gui-dark .gui-input{background:0 0}.gui-dark .gui-date-picker-icon{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACNSURBVDhPY0AGe/fu/Q9l4gToahhBBC6NbOzsDP//szDcuP6Qwcxcg+HtmzdQGQhwdnZmZIKysYJfP38xCPBzM1hZ6zL8+PEDKooK8BrAwPCf4fXrVwyvXr5g+PrlC1QMCyDG7+gApoeACwgD6hoAchYMQ4UIgoH3AhgMo1ggB+DNTIQAKDNBmeQCBgYAklU89fLLqHkAAAAASUVORK5CYII=)}.gui-dark .gui-date-picker-calendar .gui-date-picker-container .gui-date-picker-interface button{color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day.gui-date-picker-selected-day span,.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-month.gui-date-picker-selected-month span,.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year.gui-date-picker-selected-year span{border-color:#ce93d8}.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day.gui-date-picker-current-day span,.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-month.gui-date-picker-current-month span,.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year.gui-date-picker-current-year span{background:#757575}"]
            }] }
];
/** @nocollapse */
FabricDatePickerComponent.ctorParameters = () => [
    { type: FabricDatePickerInlineDialogService },
    { type: FabricDatePickerService },
    { type: FormBuilder },
    { type: ChangeDetectorRef }
];
FabricDatePickerComponent.propDecorators = {
    datePickerRef: [{ type: ViewChild, args: ['datePicker', { static: false },] }],
    selectDate: [{ type: Input }],
    name: [{ type: Input }],
    openDialog: [{ type: Input }],
    onlyDialog: [{ type: Input }],
    dateSelected: [{ type: Output }],
    dialogOpened: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FabricDatePickerComponent.prototype.datePickerRef;
    /** @type {?} */
    FabricDatePickerComponent.prototype.selectDate;
    /** @type {?} */
    FabricDatePickerComponent.prototype.name;
    /** @type {?} */
    FabricDatePickerComponent.prototype.openDialog;
    /** @type {?} */
    FabricDatePickerComponent.prototype.onlyDialog;
    /** @type {?} */
    FabricDatePickerComponent.prototype.dateSelected;
    /** @type {?} */
    FabricDatePickerComponent.prototype.dialogOpened;
    /** @type {?} */
    FabricDatePickerComponent.prototype.datePickerForm;
    /** @type {?} */
    FabricDatePickerComponent.prototype.pickedDate;
    /** @type {?} */
    FabricDatePickerComponent.prototype.inputDisabled;
    /** @type {?} */
    FabricDatePickerComponent.prototype.datePickerSubscription;
    /** @type {?} */
    FabricDatePickerComponent.prototype.datePickerDaySubscription;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerComponent.prototype.unsub$;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerComponent.prototype.fabricDatePickerInlineDialogService;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerComponent.prototype.datePickerService;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDckcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFhakcsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7OztJQWtDckMsWUFBNkIsbUNBQXdFLEVBQ2pGLGlCQUEwQyxFQUMxQyxXQUF3QixFQUN4QixpQkFBb0M7UUFIM0Isd0NBQW1DLEdBQW5DLG1DQUFtQyxDQUFxQztRQUNqRixzQkFBaUIsR0FBakIsaUJBQWlCLENBQXlCO1FBQzFDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUF6QnhELGVBQVUsR0FBWSxLQUFLLENBQUM7UUFHNUIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUc1QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFHbEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBV2pCLFdBQU0sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBT3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUN0QyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDWixDQUNELENBQUM7SUFDSCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNqQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDckQ7UUFFRCxJQUFJLE9BQU8sQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7U0FDdkQ7SUFDRixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxzQkFBc0I7WUFDMUIsSUFBSSxDQUFDLGlCQUFpQjtpQkFDcEIsbUJBQW1CLEVBQUU7aUJBQ3JCLElBQUksQ0FDSixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1Asb0JBQW9CLEVBQUUsRUFDdEIsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FDdEI7aUJBQ0EsU0FBUzs7OztZQUNULENBQUMsSUFBVSxFQUFFLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlCLENBQUMsRUFDRCxDQUFDO1FBRUosSUFBSSxDQUFDLGlCQUFpQjthQUNwQixtQkFBbUIsRUFBRTthQUNyQixJQUFJLENBQ0osSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQ3RCO2FBQ0EsU0FBUzs7OztRQUNULENBQUMsSUFBVSxFQUFFLEVBQUU7WUFDZCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xELENBQUMsRUFDRCxDQUFDO1FBRUgsSUFBSSxDQUFDLG1DQUFtQzthQUN0QyxRQUFRLEVBQUU7YUFDVixJQUFJLENBQ0osSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQ3RCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsTUFBZSxFQUFFLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxFQUFDLENBQUM7UUFHSixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdEI7SUFDRixDQUFDOzs7O0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVqRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTdDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsY0FBYztRQUNiLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxpQ0FBaUMsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7Ozs7O0lBRU8saUJBQWlCO1FBQ3hCLElBQUksQ0FBQyx5QkFBeUI7WUFDN0IsSUFBSSxDQUFDLGNBQWM7aUJBQ2pCLFFBQVEsQ0FBQyxNQUFNLENBQUM7aUJBQ2hCLFlBQVk7aUJBQ1osSUFBSSxDQUNKLG9CQUFvQixFQUFFO1lBQ3RCLHNCQUFzQjtZQUN0QixHQUFHOzs7O1lBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUMsRUFDckMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FDdEI7aUJBQ0EsU0FBUzs7OztZQUNULENBQUMsR0FBUyxFQUFFLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQyxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7OztJQUVPLEtBQUssQ0FBQyxLQUFhO1FBQzFCLElBQUksQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTs7a0JBQ25ELEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7a0JBRXRCLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O2tCQUNuQixLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQzs7a0JBQ25CLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFZixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDbkM7O1lBQU0sT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQy9CLENBQUM7OztZQTdKRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsMFpBQWtEO2dCQUtsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3JDOzs7O1lBWlEsbUNBQW1DO1lBRG5DLHVCQUF1QjtZQUx2QixXQUFXO1lBWm5CLGlCQUFpQjs7OzRCQWlDaEIsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7eUJBR3pDLEtBQUs7bUJBR0wsS0FBSzt5QkFHTCxLQUFLO3lCQUdMLEtBQUs7MkJBR0wsTUFBTTsyQkFHTixNQUFNOzs7O0lBbEJQLGtEQUMwQjs7SUFFMUIsK0NBQ2lCOztJQUVqQix5Q0FDYTs7SUFFYiwrQ0FDNEI7O0lBRTVCLCtDQUM0Qjs7SUFFNUIsaURBQ2tDOztJQUVsQyxpREFDa0M7O0lBRWxDLG1EQUEwQjs7SUFFMUIsK0NBQWlCOztJQUVqQixrREFBK0I7O0lBRS9CLDJEQUFxQzs7SUFDckMsOERBQXdDOzs7OztJQUV4QywyQ0FBd0M7Ozs7O0lBRTVCLHdFQUF5Rjs7Ozs7SUFDbEcsc0RBQTJEOzs7OztJQUMzRCxnREFBeUM7Ozs7O0lBQ3pDLHNEQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPbkRlc3Ryb3ksXG5cdE9uSW5pdCxcblx0T3V0cHV0LFxuXHRTaW1wbGVDaGFuZ2VzLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgc2tpcCwgdGFrZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyL2ZhYnJpYy1kYXRlLXBpY2tlci1jYWxlbmRhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlclNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1kYXRlLXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMuZGF0ZS1waWNrZXItaW5saW5lLWRpYWxvZy5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZGF0ZS1waWNrZXInLFxuXHR0ZW1wbGF0ZVVybDogJy4vZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vZmFicmljLWRhdGUtcGlja2VyLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvZmFicmljLWRhdGUtcGlja2VyLmRhcmsubmd4LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cblx0QFZpZXdDaGlsZCgnZGF0ZVBpY2tlcicsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRkYXRlUGlja2VyUmVmOiBFbGVtZW50UmVmO1xuXG5cdEBJbnB1dCgpXG5cdHNlbGVjdERhdGU6IERhdGU7XG5cblx0QElucHV0KClcblx0bmFtZTogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdG9wZW5EaWFsb2c6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRvbmx5RGlhbG9nOiBib29sZWFuID0gZmFsc2U7XG5cblx0QE91dHB1dCgpXG5cdGRhdGVTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0ZGlhbG9nT3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGRhdGVQaWNrZXJGb3JtOiBGb3JtR3JvdXA7XG5cblx0cGlja2VkRGF0ZTogRGF0ZTtcblxuXHRpbnB1dERpc2FibGVkOiAnZGlzYWJsZWQnIHwgJyc7XG5cblx0ZGF0ZVBpY2tlclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXHRkYXRlUGlja2VyRGF5U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cblx0cHJpdmF0ZSByZWFkb25seSB1bnN1YiQgPSBuZXcgU3ViamVjdCgpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRhdGVQaWNrZXJTZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VyU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cblx0XHR0aGlzLmRhdGVQaWNrZXJGb3JtID0gZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuXHRcdFx0XHQnZGF0ZSc6IFsnJ11cblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmIChjaGFuZ2VzLnNlbGVjdERhdGUpIHtcblx0XHRcdHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZGF0ZVNlbGVjdGVkKHRoaXMuc2VsZWN0RGF0ZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMub25seURpYWxvZyAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5pbnB1dERpc2FibGVkID0gdGhpcy5vbmx5RGlhbG9nID8gJ2Rpc2FibGVkJyA6ICcnO1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuZGF0ZVBpY2tlclN1YnNjcmlwdGlvbiA9XG5cdFx0XHR0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlXG5cdFx0XHRcdC5vYnNlcnZlU2VsZWN0ZWREYXRlKClcblx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0dGFrZSgxKSxcblx0XHRcdFx0XHRkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuXHRcdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3ViJClcblx0XHRcdFx0KVxuXHRcdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRcdChkYXRlOiBEYXRlKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLnBpY2tlZERhdGUgPSBkYXRlO1xuXHRcdFx0XHRcdFx0dGhpcy5kYXRlU2VsZWN0ZWQuZW1pdChkYXRlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cblx0XHR0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlXG5cdFx0XHQub2JzZXJ2ZVNlbGVjdGVkRGF0ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0c2tpcCgxKSxcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWIkKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0KGRhdGU6IERhdGUpID0+IHtcblx0XHRcdFx0XHR0aGlzLnBpY2tlZERhdGUgPSBkYXRlO1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0XHRcdHRoaXMuZGF0ZVNlbGVjdGVkLmVtaXQoZGF0ZSk7XG5cdFx0XHRcdFx0dGhpcy5mYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZS5jbG9zZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXG5cdFx0dGhpcy5mYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZVxuXHRcdFx0Lm9uT3BlbmVkKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRza2lwKDEpLFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YiQpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChvcGVuZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5kaWFsb2dPcGVuZWQuZW1pdChvcGVuZWQpO1xuXHRcdFx0fSk7XG5cblxuXHRcdHRoaXMub2JzZXJ2ZURheUNoYW5nZXMoKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRpZiAodGhpcy5vcGVuRGlhbG9nKSB7XG5cdFx0XHR0aGlzLm9wZW5EYXRlUGlja2VyKCk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5mYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZS5jbG9zZSgpO1xuXG5cdFx0dGhpcy5kYXRlUGlja2VyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdFx0dGhpcy5kYXRlUGlja2VyRGF5U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cblx0XHR0aGlzLnVuc3ViJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YiQuY29tcGxldGUoKTtcblx0fVxuXG5cdG9wZW5EYXRlUGlja2VyKCkge1xuXHRcdHRoaXMuZmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2Uub3Blbih0aGlzLmRhdGVQaWNrZXJSZWYsIEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhckNvbXBvbmVudCk7XG5cdH1cblxuXHRwcml2YXRlIG9ic2VydmVEYXlDaGFuZ2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuZGF0ZVBpY2tlckRheVN1YnNjcmlwdGlvbiA9XG5cdFx0XHR0aGlzLmRhdGVQaWNrZXJGb3JtXG5cdFx0XHRcdC5jb250cm9sc1snZGF0ZSddXG5cdFx0XHRcdC52YWx1ZUNoYW5nZXNcblx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcblx0XHRcdFx0XHQvLyBkZWJvdW5jZVRpbWUoMTAwMCksXG5cdFx0XHRcdFx0bWFwKChkYXk6IHN0cmluZykgPT4gdGhpcy5wYXJzZShkYXkpKSxcblx0XHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YiQpXG5cdFx0XHRcdClcblx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0XHQoZGF5OiBEYXRlKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmRhdGVTZWxlY3RlZChkYXkpO1xuXHRcdFx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZSh2YWx1ZTogc3RyaW5nKTogRGF0ZSB7XG5cdFx0aWYgKCh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSAmJiAodmFsdWUuaW5jbHVkZXMoJy8nKSkpIHtcblx0XHRcdGNvbnN0IHN0ciA9IHZhbHVlLnNwbGl0KCcvJyk7XG5cblx0XHRcdGNvbnN0IHllYXIgPSArc3RyWzJdLFxuXHRcdFx0XHRtb250aCA9ICtzdHJbMV0gLSAxLFxuXHRcdFx0XHRkYXRlID0gK3N0clswXTtcblxuXHRcdFx0cmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXRlKTtcblx0XHR9IGVsc2UgcmV0dXJuIHRoaXMucGlja2VkRGF0ZTtcblx0fVxuXG59XG5cbiJdfQ==