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
        this.selectedDate = new Date(date.getTime());
        this.selectedDate$.next(this.selectedDate);
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
    FabricDatePickerService.prototype.selectedDate;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerService.prototype.selectedDate$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJmb3JtL2RhdGUtcGlja2VyL2ZhYnJpYy1kYXRlLXBpY2tlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRzVELE1BQU0sT0FBTyx1QkFBdUI7SUFEcEM7UUFHUyxlQUFVLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUNuQyxjQUFTLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUVsQyxnQkFBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFHaEIsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFxQ3hFLENBQUM7Ozs7SUFuQ0EsZ0JBQWdCO1FBQ2YsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDbEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQVU7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLElBQVksRUFBRSxLQUFhO1FBQ3BDLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEI7YUFBTTtZQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNoQztJQUNGLENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxJQUFZLEVBQUUsS0FBYTtRQUNwQyxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3pCO2FBQU07WUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDaEM7SUFDRixDQUFDOzs7WUE1Q0QsVUFBVTs7Ozs7OztJQUdWLDZDQUEyQzs7Ozs7SUFDM0MsNENBQTBDOzs7OztJQUUxQyw4Q0FBaUM7Ozs7O0lBRWpDLCtDQUEyQjs7Ozs7SUFDM0IsZ0RBQXVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWJyaWNEYXRlUGlja2VyU2VydmljZSB7XG5cblx0cHJpdmF0ZSBkYXRlTW9udGgkID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuXHRwcml2YXRlIGRhdGVZZWFyJCA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblxuXHRwcml2YXRlIGluaXRpYWxEYXRlID0gbmV3IERhdGUoKTtcblxuXHRwcml2YXRlIHNlbGVjdGVkRGF0ZTogRGF0ZTtcblx0cHJpdmF0ZSByZWFkb25seSBzZWxlY3RlZERhdGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLmluaXRpYWxEYXRlKTtcblxuXHRvYnNlcnZlRGF0ZU1vbnRoKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0ZU1vbnRoJC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdG9ic2VydmVEYXRlWWVhcigpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLmRhdGVZZWFyJC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdG9ic2VydmVTZWxlY3RlZERhdGUoKTogT2JzZXJ2YWJsZTxEYXRlPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWREYXRlJC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdGRhdGVTZWxlY3RlZChkYXRlOiBEYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RlZERhdGUgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSk7XG5cdFx0dGhpcy5zZWxlY3RlZERhdGUkLm5leHQodGhpcy5zZWxlY3RlZERhdGUpO1xuXHR9XG5cblx0bmV4dE1vbnRoKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcikge1xuXHRcdGlmIChtb250aCA9PT0gMTEpIHtcblx0XHRcdHRoaXMuZGF0ZVllYXIkLm5leHQoeWVhciArIDEpO1xuXHRcdFx0dGhpcy5kYXRlTW9udGgkLm5leHQoMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZGF0ZU1vbnRoJC5uZXh0KG1vbnRoICsgMSk7XG5cdFx0fVxuXHR9XG5cblx0cHJldk1vbnRoKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcikge1xuXHRcdGlmIChtb250aCA9PT0gMCkge1xuXHRcdFx0dGhpcy5kYXRlWWVhciQubmV4dCh5ZWFyIC0gMSk7XG5cdFx0XHR0aGlzLmRhdGVNb250aCQubmV4dCgxMSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZGF0ZU1vbnRoJC5uZXh0KG1vbnRoIC0gMSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==