/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var FabricDatePickerCalendarService = /** @class */ (function () {
    function FabricDatePickerCalendarService() {
        this.activeMonth$ = new Subject();
        this.activeYear$ = new Subject();
    }
    /**
     * @return {?}
     */
    FabricDatePickerCalendarService.prototype.onActiveMonth = /**
     * @return {?}
     */
    function () {
        return this.activeMonth$.asObservable();
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarService.prototype.onActiveYear = /**
     * @return {?}
     */
    function () {
        return this.activeYear$.asObservable();
    };
    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    FabricDatePickerCalendarService.prototype.nextMonth = /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    function (year, month) {
        if (month === 11) {
            this.activeYear$.next(year + 1);
            this.selectMonth(0);
        }
        else {
            this.selectMonth(month + 1);
        }
    };
    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    FabricDatePickerCalendarService.prototype.prevMonth = /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    function (year, month) {
        if (month === 0) {
            this.activeYear$.next(year - 1);
            this.selectMonth(11);
        }
        else {
            this.selectMonth(month - 1);
        }
    };
    /**
     * @param {?} year
     * @return {?}
     */
    FabricDatePickerCalendarService.prototype.selectYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.activeYear$.next(year);
    };
    /**
     * @param {?} month
     * @return {?}
     */
    FabricDatePickerCalendarService.prototype.selectMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        this.activeMonth$.next(month);
    };
    FabricDatePickerCalendarService.decorators = [
        { type: Injectable }
    ];
    return FabricDatePickerCalendarService;
}());
export { FabricDatePickerCalendarService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJmb3JtL2RhdGUtcGlja2VyL2NhbGVuZGFyL2ZhYnJpYy1kYXRlLXBpY2tlci1jYWxlbmRhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0M7SUFBQTtRQUdrQixpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFFckMsZ0JBQVcsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO0lBbUN0RCxDQUFDOzs7O0lBakNBLHVEQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsc0RBQVk7OztJQUFaO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7OztJQUVELG1EQUFTOzs7OztJQUFULFVBQVUsSUFBWSxFQUFFLEtBQWE7UUFDcEMsSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BCO2FBQU07WUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM1QjtJQUNGLENBQUM7Ozs7OztJQUVELG1EQUFTOzs7OztJQUFULFVBQVUsSUFBWSxFQUFFLEtBQWE7UUFDcEMsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3JCO2FBQU07WUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM1QjtJQUNGLENBQUM7Ozs7O0lBRUQsb0RBQVU7Ozs7SUFBVixVQUFXLElBQVk7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxxREFBVzs7OztJQUFYLFVBQVksS0FBYTtRQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDOztnQkF2Q0QsVUFBVTs7SUF3Q1gsc0NBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQXZDWSwrQkFBK0I7Ozs7OztJQUUzQyx1REFBc0Q7Ozs7O0lBRXRELHNEQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhclNlcnZpY2Uge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYWN0aXZlTW9udGgkID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYWN0aXZlWWVhciQgPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG5cblx0b25BY3RpdmVNb250aCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLmFjdGl2ZU1vbnRoJC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdG9uQWN0aXZlWWVhcigpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLmFjdGl2ZVllYXIkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0bmV4dE1vbnRoKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcik6IHZvaWQge1xuXHRcdGlmIChtb250aCA9PT0gMTEpIHtcblx0XHRcdHRoaXMuYWN0aXZlWWVhciQubmV4dCh5ZWFyICsgMSk7XG5cdFx0XHR0aGlzLnNlbGVjdE1vbnRoKDApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNlbGVjdE1vbnRoKG1vbnRoICsgMSk7XG5cdFx0fVxuXHR9XG5cblx0cHJldk1vbnRoKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcik6IHZvaWQge1xuXHRcdGlmIChtb250aCA9PT0gMCkge1xuXHRcdFx0dGhpcy5hY3RpdmVZZWFyJC5uZXh0KHllYXIgLSAxKTtcblx0XHRcdHRoaXMuc2VsZWN0TW9udGgoMTEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNlbGVjdE1vbnRoKG1vbnRoIC0gMSk7XG5cdFx0fVxuXHR9XG5cblx0c2VsZWN0WWVhcih5ZWFyOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmFjdGl2ZVllYXIkLm5leHQoeWVhcik7XG5cdH1cblxuXHRzZWxlY3RNb250aChtb250aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5hY3RpdmVNb250aCQubmV4dChtb250aCk7XG5cdH1cbn1cbiJdfQ==