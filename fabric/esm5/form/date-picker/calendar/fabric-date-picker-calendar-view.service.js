/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var FabricDatePickerCalendarViewService = /** @class */ (function () {
    function FabricDatePickerCalendarViewService() {
        this.activeView$ = new Subject();
    }
    /**
     * @return {?}
     */
    FabricDatePickerCalendarViewService.prototype.onActiveView = /**
     * @return {?}
     */
    function () {
        return this.activeView$.asObservable();
    };
    /**
     * @param {?} viewName
     * @return {?}
     */
    FabricDatePickerCalendarViewService.prototype.switchView = /**
     * @param {?} viewName
     * @return {?}
     */
    function (viewName) {
        this.activeView$.next(viewName);
    };
    FabricDatePickerCalendarViewService.decorators = [
        { type: Injectable }
    ];
    return FabricDatePickerCalendarViewService;
}());
export { FabricDatePickerCalendarViewService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarViewService.prototype.activeView$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLXZpZXcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvY2FsZW5kYXIvZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLXZpZXcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRzNDO0lBQUE7UUFHUyxnQkFBVyxHQUFHLElBQUksT0FBTyxFQUFzQixDQUFDO0lBVXpELENBQUM7Ozs7SUFSQSwwREFBWTs7O0lBQVo7UUFDQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFRCx3REFBVTs7OztJQUFWLFVBQVcsUUFBNEI7UUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Z0JBWEQsVUFBVTs7SUFhWCwwQ0FBQztDQUFBLEFBYkQsSUFhQztTQVpZLG1DQUFtQzs7Ozs7O0lBRS9DLDBEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZhYnJpY0NhbGVuZGFyVmlldyB9IGZyb20gJy4uL21vZGVscy9mYWJyaWMtY2FsZW5kYXItdmlldyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJWaWV3U2VydmljZSB7XG5cblx0cHJpdmF0ZSBhY3RpdmVWaWV3JCA9IG5ldyBTdWJqZWN0PEZhYnJpY0NhbGVuZGFyVmlldz4oKTtcblxuXHRvbkFjdGl2ZVZpZXcoKTogT2JzZXJ2YWJsZTxGYWJyaWNDYWxlbmRhclZpZXc+IHtcblx0XHRyZXR1cm4gdGhpcy5hY3RpdmVWaWV3JC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdHN3aXRjaFZpZXcodmlld05hbWU6IEZhYnJpY0NhbGVuZGFyVmlldyk6IHZvaWQge1xuXHRcdHRoaXMuYWN0aXZlVmlldyQubmV4dCh2aWV3TmFtZSk7XG5cdH1cblxufVxuIl19