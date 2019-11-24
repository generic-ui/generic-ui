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
        this.selectedDate$.next(date);
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
    FabricDatePickerService.prototype.selectedDate$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJmb3JtL2RhdGUtcGlja2VyL2ZhYnJpYy1kYXRlLXBpY2tlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTVEO0lBQUE7UUFHUyxlQUFVLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUNuQyxjQUFTLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUVsQyxnQkFBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDekIsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFvQy9ELENBQUM7Ozs7SUFsQ0Esa0RBQWdCOzs7SUFBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELGlEQUFlOzs7SUFBZjtRQUNDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQscURBQW1COzs7SUFBbkI7UUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFRCw4Q0FBWTs7OztJQUFaLFVBQWEsSUFBVTtRQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFRCwyQ0FBUzs7Ozs7SUFBVCxVQUFVLElBQVksRUFBRSxLQUFhO1FBQ3BDLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEI7YUFBTTtZQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNoQztJQUNGLENBQUM7Ozs7OztJQUVELDJDQUFTOzs7OztJQUFULFVBQVUsSUFBWSxFQUFFLEtBQWE7UUFDcEMsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN6QjthQUFNO1lBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2hDO0lBQ0YsQ0FBQzs7Z0JBekNELFVBQVU7O0lBMkNYLDhCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7U0ExQ1ksdUJBQXVCOzs7Ozs7SUFFbkMsNkNBQTJDOzs7OztJQUMzQyw0Q0FBMEM7Ozs7O0lBRTFDLDhDQUFpQzs7Ozs7SUFDakMsZ0RBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWJyaWNEYXRlUGlja2VyU2VydmljZSB7XG5cblx0cHJpdmF0ZSBkYXRlTW9udGgkID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuXHRwcml2YXRlIGRhdGVZZWFyJCA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblxuXHRwcml2YXRlIGluaXRpYWxEYXRlID0gbmV3IERhdGUoKTtcblx0cHJpdmF0ZSBzZWxlY3RlZERhdGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLmluaXRpYWxEYXRlKTtcblxuXHRvYnNlcnZlRGF0ZU1vbnRoKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0ZU1vbnRoJC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdG9ic2VydmVEYXRlWWVhcigpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLmRhdGVZZWFyJC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdG9ic2VydmVTZWxlY3RlZERhdGUoKTogT2JzZXJ2YWJsZTxEYXRlPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWREYXRlJC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdGRhdGVTZWxlY3RlZChkYXRlOiBEYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RlZERhdGUkLm5leHQoZGF0ZSk7XG5cdH1cblxuXHRuZXh0TW9udGgoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyKSB7XG5cdFx0aWYgKG1vbnRoID09PSAxMSkge1xuXHRcdFx0dGhpcy5kYXRlWWVhciQubmV4dCh5ZWFyICsgMSk7XG5cdFx0XHR0aGlzLmRhdGVNb250aCQubmV4dCgwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kYXRlTW9udGgkLm5leHQobW9udGggKyAxKTtcblx0XHR9XG5cdH1cblxuXHRwcmV2TW9udGgoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyKSB7XG5cdFx0aWYgKG1vbnRoID09PSAwKSB7XG5cdFx0XHR0aGlzLmRhdGVZZWFyJC5uZXh0KHllYXIgLSAxKTtcblx0XHRcdHRoaXMuZGF0ZU1vbnRoJC5uZXh0KDExKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kYXRlTW9udGgkLm5leHQobW9udGggLSAxKTtcblx0XHR9XG5cdH1cblxufVxuIl19