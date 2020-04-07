/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
export class ToggleButtonGroupService {
    constructor() {
        this.toggleButtonId$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.toggleButtonId$.next();
        this.toggleButtonId$.complete();
    }
    /**
     * @return {?}
     */
    observeToggledButton() {
        return this.toggleButtonId$.asObservable();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    toggleButton(id) {
        this.toggleButtonId$.next(id);
    }
}
ToggleButtonGroupService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToggleButtonGroupService.prototype.toggleButtonId$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWJ1dHRvbi1ncm91cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiZ2VuZXJhbC9idXR0b24vdG9nZ2xlLWJ1dHRvbi1ncm91cC90b2dnbGUtYnV0dG9uLWdyb3VwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUl0RCxNQUFNLE9BQU8sd0JBQXdCO0lBRnJDO1FBSWtCLG9CQUFlLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7SUFjbkUsQ0FBQzs7OztJQVpBLFdBQVc7UUFDVixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELG9CQUFvQjtRQUNuQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsRUFBVTtRQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7WUFqQkQsVUFBVTs7Ozs7OztJQUlWLG1EQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBUb2dnbGVCdXR0b25Hcm91cFNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdG9nZ2xlQnV0dG9uSWQkOiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdCgpO1xuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudG9nZ2xlQnV0dG9uSWQkLm5leHQoKTtcblx0XHR0aGlzLnRvZ2dsZUJ1dHRvbklkJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0b2JzZXJ2ZVRvZ2dsZWRCdXR0b24oKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy50b2dnbGVCdXR0b25JZCQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHR0b2dnbGVCdXR0b24oaWQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMudG9nZ2xlQnV0dG9uSWQkLm5leHQoaWQpO1xuXHR9XG59XG4iXX0=