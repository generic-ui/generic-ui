/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export class FabricDatePickerYearsService {
    constructor() {
        this.years$ = new Subject();
    }
    /**
     * @return {?}
     */
    onYears() {
        return this.years$.asObservable();
    }
    /**
     * @param {?} years
     * @return {?}
     */
    next(years) {
        this.years$.next(years);
    }
}
FabricDatePickerYearsService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerYearsService.prototype.years$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLXllYXJzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJmb3JtL2RhdGUtcGlja2VyL2NhbGVuZGFyL3llYXJzL2ZhYnJpYy1kYXRlLXBpY2tlci15ZWFycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHM0MsTUFBTSxPQUFPLDRCQUE0QjtJQUR6QztRQUdrQixXQUFNLEdBQUcsSUFBSSxPQUFPLEVBQXdCLENBQUM7SUFVL0QsQ0FBQzs7OztJQVJBLE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsS0FBMkI7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7O1lBWEQsVUFBVTs7Ozs7OztJQUdWLDhDQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJZZWFyc1NlcnZpY2Uge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgeWVhcnMkID0gbmV3IFN1YmplY3Q8QXJyYXk8QXJyYXk8bnVtYmVyPj4+KCk7XG5cblx0b25ZZWFycygpOiBPYnNlcnZhYmxlPEFycmF5PEFycmF5PG51bWJlcj4+PiB7XG5cdFx0cmV0dXJuIHRoaXMueWVhcnMkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0bmV4dCh5ZWFyczogQXJyYXk8QXJyYXk8bnVtYmVyPj4pOiB2b2lkIHtcblx0XHR0aGlzLnllYXJzJC5uZXh0KHllYXJzKTtcblx0fVxuXG59XG4iXX0=