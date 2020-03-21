/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
var FabricDatePickerService = /** @class */ (function () {
    function FabricDatePickerService() {
        this.dateMonth$ = new Subject();
        this.dateYear$ = new Subject();
        this.initialDate = new Date();
        this.selectedDate$ = new BehaviorSubject(this.initialDate);
    }
    /**
     * @return {?}
     */
    FabricDatePickerService.prototype.observeDateMonth = /**
     * @return {?}
     */
    function () {
        return this.dateMonth$.asObservable();
    };
    /**
     * @return {?}
     */
    FabricDatePickerService.prototype.observeDateYear = /**
     * @return {?}
     */
    function () {
        return this.dateYear$.asObservable();
    };
    /**
     * @return {?}
     */
    FabricDatePickerService.prototype.observeSelectedDate = /**
     * @return {?}
     */
    function () {
        return this.selectedDate$.asObservable();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    FabricDatePickerService.prototype.dateSelected = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.selectedDate = new Date(date.getTime());
        this.selectedDate$.next(this.selectedDate);
    };
    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    FabricDatePickerService.prototype.nextMonth = /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    function (year, month) {
        if (month === 11) {
            this.dateYear$.next(year + 1);
            this.dateMonth$.next(0);
        }
        else {
            this.dateMonth$.next(month + 1);
        }
    };
    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    FabricDatePickerService.prototype.prevMonth = /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    function (year, month) {
        if (month === 0) {
            this.dateYear$.next(year - 1);
            this.dateMonth$.next(11);
        }
        else {
            this.dateMonth$.next(month - 1);
        }
    };
    FabricDatePickerService.decorators = [
        { type: Injectable }
    ];
    return FabricDatePickerService;
}());
export { FabricDatePickerService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerService.prototype.dateMonth$;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerService.prototype.dateYear$;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerService.prototype.initialDate;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerService.prototype.selectedDate;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerService.prototype.selectedDate$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJmb3JtL2RhdGUtcGlja2VyL2ZhYnJpYy1kYXRlLXBpY2tlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTVEO0lBQUE7UUFHUyxlQUFVLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUNuQyxjQUFTLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUVsQyxnQkFBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFHaEIsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFxQ3hFLENBQUM7Ozs7SUFuQ0Esa0RBQWdCOzs7SUFBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELGlEQUFlOzs7SUFBZjtRQUNDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQscURBQW1COzs7SUFBbkI7UUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFRCw4Q0FBWTs7OztJQUFaLFVBQWEsSUFBVTtRQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7Ozs7SUFFRCwyQ0FBUzs7Ozs7SUFBVCxVQUFVLElBQVksRUFBRSxLQUFhO1FBQ3BDLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEI7YUFBTTtZQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNoQztJQUNGLENBQUM7Ozs7OztJQUVELDJDQUFTOzs7OztJQUFULFVBQVUsSUFBWSxFQUFFLEtBQWE7UUFDcEMsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN6QjthQUFNO1lBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2hDO0lBQ0YsQ0FBQzs7Z0JBNUNELFVBQVU7O0lBOENYLDhCQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7U0E3Q1ksdUJBQXVCOzs7Ozs7SUFFbkMsNkNBQTJDOzs7OztJQUMzQyw0Q0FBMEM7Ozs7O0lBRTFDLDhDQUFpQzs7Ozs7SUFFakMsK0NBQTJCOzs7OztJQUMzQixnREFBdUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJTZXJ2aWNlIHtcblxuXHRwcml2YXRlIGRhdGVNb250aCQgPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG5cdHByaXZhdGUgZGF0ZVllYXIkID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuXG5cdHByaXZhdGUgaW5pdGlhbERhdGUgPSBuZXcgRGF0ZSgpO1xuXG5cdHByaXZhdGUgc2VsZWN0ZWREYXRlOiBEYXRlO1xuXHRwcml2YXRlIHJlYWRvbmx5IHNlbGVjdGVkRGF0ZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuaW5pdGlhbERhdGUpO1xuXG5cdG9ic2VydmVEYXRlTW9udGgoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5kYXRlTW9udGgkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0b2JzZXJ2ZURhdGVZZWFyKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0ZVllYXIkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0b2JzZXJ2ZVNlbGVjdGVkRGF0ZSgpOiBPYnNlcnZhYmxlPERhdGU+IHtcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZERhdGUkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0ZGF0ZVNlbGVjdGVkKGRhdGU6IERhdGUpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKTtcblx0XHR0aGlzLnNlbGVjdGVkRGF0ZSQubmV4dCh0aGlzLnNlbGVjdGVkRGF0ZSk7XG5cdH1cblxuXHRuZXh0TW9udGgoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyKSB7XG5cdFx0aWYgKG1vbnRoID09PSAxMSkge1xuXHRcdFx0dGhpcy5kYXRlWWVhciQubmV4dCh5ZWFyICsgMSk7XG5cdFx0XHR0aGlzLmRhdGVNb250aCQubmV4dCgwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kYXRlTW9udGgkLm5leHQobW9udGggKyAxKTtcblx0XHR9XG5cdH1cblxuXHRwcmV2TW9udGgoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyKSB7XG5cdFx0aWYgKG1vbnRoID09PSAwKSB7XG5cdFx0XHR0aGlzLmRhdGVZZWFyJC5uZXh0KHllYXIgLSAxKTtcblx0XHRcdHRoaXMuZGF0ZU1vbnRoJC5uZXh0KDExKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kYXRlTW9udGgkLm5leHQobW9udGggLSAxKTtcblx0XHR9XG5cdH1cblxufVxuIl19