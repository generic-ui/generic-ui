/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
export class FabricDatePickerService {
    constructor() {
        this.dateMonth$ = new Subject();
        this.dateYear$ = new Subject();
        this.initialDate = new Date();
        this.selectedDate$ = new BehaviorSubject(this.initialDate);
    }
    /**
     * @return {?}
     */
    observeDateMonth() {
        return this.dateMonth$.asObservable();
    }
    /**
     * @return {?}
     */
    observeDateYear() {
        return this.dateYear$.asObservable();
    }
    /**
     * @return {?}
     */
    observeSelectedDate() {
        return this.selectedDate$.asObservable();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    dateSelected(date) {
        this.selectedDate$.next(date);
    }
    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    nextMonth(year, month) {
        if (month === 11) {
            this.dateYear$.next(year + 1);
            this.dateMonth$.next(0);
        }
        else {
            this.dateMonth$.next(month + 1);
        }
    }
    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    prevMonth(year, month) {
        if (month === 0) {
            this.dateYear$.next(year - 1);
            this.dateMonth$.next(11);
        }
        else {
            this.dateMonth$.next(month - 1);
        }
    }
}
FabricDatePickerService.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJmb3JtL2RhdGUtcGlja2VyL2ZhYnJpYy1kYXRlLXBpY2tlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRzVELE1BQU0sT0FBTyx1QkFBdUI7SUFEcEM7UUFHUyxlQUFVLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUNuQyxjQUFTLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUVsQyxnQkFBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDekIsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFvQy9ELENBQUM7Ozs7SUFsQ0EsZ0JBQWdCO1FBQ2YsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDbEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQVU7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLElBQVksRUFBRSxLQUFhO1FBQ3BDLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEI7YUFBTTtZQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNoQztJQUNGLENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxJQUFZLEVBQUUsS0FBYTtRQUNwQyxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3pCO2FBQU07WUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDaEM7SUFDRixDQUFDOzs7WUF6Q0QsVUFBVTs7Ozs7OztJQUdWLDZDQUEyQzs7Ozs7SUFDM0MsNENBQTBDOzs7OztJQUUxQyw4Q0FBaUM7Ozs7O0lBQ2pDLGdEQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFicmljRGF0ZVBpY2tlclNlcnZpY2Uge1xuXG5cdHByaXZhdGUgZGF0ZU1vbnRoJCA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblx0cHJpdmF0ZSBkYXRlWWVhciQgPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG5cblx0cHJpdmF0ZSBpbml0aWFsRGF0ZSA9IG5ldyBEYXRlKCk7XG5cdHByaXZhdGUgc2VsZWN0ZWREYXRlJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5pbml0aWFsRGF0ZSk7XG5cblx0b2JzZXJ2ZURhdGVNb250aCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLmRhdGVNb250aCQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHRvYnNlcnZlRGF0ZVllYXIoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5kYXRlWWVhciQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHRvYnNlcnZlU2VsZWN0ZWREYXRlKCk6IE9ic2VydmFibGU8RGF0ZT4ge1xuXHRcdHJldHVybiB0aGlzLnNlbGVjdGVkRGF0ZSQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHRkYXRlU2VsZWN0ZWQoZGF0ZTogRGF0ZSk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWREYXRlJC5uZXh0KGRhdGUpO1xuXHR9XG5cblx0bmV4dE1vbnRoKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcikge1xuXHRcdGlmIChtb250aCA9PT0gMTEpIHtcblx0XHRcdHRoaXMuZGF0ZVllYXIkLm5leHQoeWVhciArIDEpO1xuXHRcdFx0dGhpcy5kYXRlTW9udGgkLm5leHQoMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZGF0ZU1vbnRoJC5uZXh0KG1vbnRoICsgMSk7XG5cdFx0fVxuXHR9XG5cblx0cHJldk1vbnRoKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcikge1xuXHRcdGlmIChtb250aCA9PT0gMCkge1xuXHRcdFx0dGhpcy5kYXRlWWVhciQubmV4dCh5ZWFyIC0gMSk7XG5cdFx0XHR0aGlzLmRhdGVNb250aCQubmV4dCgxMSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZGF0ZU1vbnRoJC5uZXh0KG1vbnRoIC0gMSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==