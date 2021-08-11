/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export class FabricDatePickerCalendarService {
    constructor() {
        this.activeMonth$ = new Subject();
        this.activeYear$ = new Subject();
    }
    /**
     * @return {?}
     */
    onActiveMonth() {
        return this.activeMonth$.asObservable();
    }
    /**
     * @return {?}
     */
    onActiveYear() {
        return this.activeYear$.asObservable();
    }
    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    nextMonth(year, month) {
        if (month === 11) {
            this.activeYear$.next(year + 1);
            this.selectMonth(0);
        }
        else {
            this.selectMonth(month + 1);
        }
    }
    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    prevMonth(year, month) {
        if (month === 0) {
            this.activeYear$.next(year - 1);
            this.selectMonth(11);
        }
        else {
            this.selectMonth(month - 1);
        }
    }
    /**
     * @param {?} year
     * @return {?}
     */
    selectYear(year) {
        this.activeYear$.next(year);
    }
    /**
     * @param {?} month
     * @return {?}
     */
    selectMonth(month) {
        this.activeMonth$.next(month);
    }
}
FabricDatePickerCalendarService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarService.prototype.activeMonth$;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarService.prototype.activeYear$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJmb3JtL2RhdGUtcGlja2VyL2NhbGVuZGFyL2ZhYnJpYy1kYXRlLXBpY2tlci1jYWxlbmRhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHM0MsTUFBTSxPQUFPLCtCQUErQjtJQUQ1QztRQUdrQixpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFFckMsZ0JBQVcsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO0lBbUN0RCxDQUFDOzs7O0lBakNBLGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEMsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLElBQVksRUFBRSxLQUFhO1FBQ3BDLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQjthQUFNO1lBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDNUI7SUFDRixDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsSUFBWSxFQUFFLEtBQWE7UUFDcEMsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3JCO2FBQU07WUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM1QjtJQUNGLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQVk7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7WUF2Q0QsVUFBVTs7Ozs7OztJQUdWLHVEQUFzRDs7Ozs7SUFFdEQsc0RBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyU2VydmljZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhY3RpdmVNb250aCQgPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhY3RpdmVZZWFyJCA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblxuXHRvbkFjdGl2ZU1vbnRoKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuYWN0aXZlTW9udGgkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0b25BY3RpdmVZZWFyKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuYWN0aXZlWWVhciQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHRuZXh0TW9udGgoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0aWYgKG1vbnRoID09PSAxMSkge1xuXHRcdFx0dGhpcy5hY3RpdmVZZWFyJC5uZXh0KHllYXIgKyAxKTtcblx0XHRcdHRoaXMuc2VsZWN0TW9udGgoMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2VsZWN0TW9udGgobW9udGggKyAxKTtcblx0XHR9XG5cdH1cblxuXHRwcmV2TW9udGgoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0aWYgKG1vbnRoID09PSAwKSB7XG5cdFx0XHR0aGlzLmFjdGl2ZVllYXIkLm5leHQoeWVhciAtIDEpO1xuXHRcdFx0dGhpcy5zZWxlY3RNb250aCgxMSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2VsZWN0TW9udGgobW9udGggLSAxKTtcblx0XHR9XG5cdH1cblxuXHRzZWxlY3RZZWFyKHllYXI6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuYWN0aXZlWWVhciQubmV4dCh5ZWFyKTtcblx0fVxuXG5cdHNlbGVjdE1vbnRoKG1vbnRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmFjdGl2ZU1vbnRoJC5uZXh0KG1vbnRoKTtcblx0fVxufVxuIl19