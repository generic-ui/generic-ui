/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export class FabricDatePickerCalendarViewService {
    constructor() {
        this.activeView$ = new Subject();
    }
    /**
     * @return {?}
     */
    onActiveView() {
        return this.activeView$.asObservable();
    }
    /**
     * @param {?} viewName
     * @return {?}
     */
    switchView(viewName) {
        this.activeView$.next(viewName);
    }
}
FabricDatePickerCalendarViewService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarViewService.prototype.activeView$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLXZpZXcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvY2FsZW5kYXIvZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLXZpZXcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSTNDLE1BQU0sT0FBTyxtQ0FBbUM7SUFEaEQ7UUFHUyxnQkFBVyxHQUFHLElBQUksT0FBTyxFQUFzQixDQUFDO0lBVXpELENBQUM7Ozs7SUFSQSxZQUFZO1FBQ1gsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLFFBQTRCO1FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OztZQVhELFVBQVU7Ozs7Ozs7SUFHViwwREFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGYWJyaWNDYWxlbmRhclZpZXcgfSBmcm9tICcuLi9tb2RlbHMvZmFicmljLWNhbGVuZGFyLXZpZXcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyVmlld1NlcnZpY2Uge1xuXG5cdHByaXZhdGUgYWN0aXZlVmlldyQgPSBuZXcgU3ViamVjdDxGYWJyaWNDYWxlbmRhclZpZXc+KCk7XG5cblx0b25BY3RpdmVWaWV3KCk6IE9ic2VydmFibGU8RmFicmljQ2FsZW5kYXJWaWV3PiB7XG5cdFx0cmV0dXJuIHRoaXMuYWN0aXZlVmlldyQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHRzd2l0Y2hWaWV3KHZpZXdOYW1lOiBGYWJyaWNDYWxlbmRhclZpZXcpOiB2b2lkIHtcblx0XHR0aGlzLmFjdGl2ZVZpZXckLm5leHQodmlld05hbWUpO1xuXHR9XG5cbn1cbiJdfQ==