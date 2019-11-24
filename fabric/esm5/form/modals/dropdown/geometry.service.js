/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Geometry } from './geometry';
var GeometryService = /** @class */ (function () {
    function GeometryService() {
        this.geometryResults$ = new Subject();
    }
    /**
     * @return {?}
     */
    GeometryService.prototype.watchGeometry = /**
     * @return {?}
     */
    function () {
        return this.geometryResults$.asObservable();
    };
    /**
     * @param {?} container
     * @param {?} menu
     * @param {?} windowSize
     * @return {?}
     */
    GeometryService.prototype.changeGeometry = /**
     * @param {?} container
     * @param {?} menu
     * @param {?} windowSize
     * @return {?}
     */
    function (container, menu, windowSize) {
        /** @type {?} */
        var geometry = new Geometry(container, menu, windowSize);
        this.geometryResults$.next(geometry);
    };
    GeometryService.decorators = [
        { type: Injectable }
    ];
    return GeometryService;
}());
export { GeometryService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GeometryService.prototype.geometryResults$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vbW9kYWxzL2Ryb3Bkb3duL2dlb21ldHJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXRDO0lBQUE7UUFHUyxxQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBWSxDQUFDO0lBYXBELENBQUM7Ozs7SUFYQSx1Q0FBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7O0lBRUQsd0NBQWM7Ozs7OztJQUFkLFVBQWUsU0FBcUIsRUFBRSxJQUFnQixFQUFFLFVBQWtCOztZQUVyRSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUM7UUFFeEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUV0QyxDQUFDOztnQkFmRCxVQUFVOztJQWdCWCxzQkFBQztDQUFBLEFBaEJELElBZ0JDO1NBZlksZUFBZTs7Ozs7O0lBRTNCLDJDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdlb21ldHJ5U2VydmljZSB7XG5cblx0cHJpdmF0ZSBnZW9tZXRyeVJlc3VsdHMkID0gbmV3IFN1YmplY3Q8R2VvbWV0cnk+KCk7XG5cblx0d2F0Y2hHZW9tZXRyeSgpOiBPYnNlcnZhYmxlPEdlb21ldHJ5PiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2VvbWV0cnlSZXN1bHRzJC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdGNoYW5nZUdlb21ldHJ5KGNvbnRhaW5lcjogRWxlbWVudFJlZiwgbWVudTogRWxlbWVudFJlZiwgd2luZG93U2l6ZTogbnVtYmVyKTogdm9pZCB7XG5cblx0XHRsZXQgZ2VvbWV0cnkgPSBuZXcgR2VvbWV0cnkoY29udGFpbmVyLCBtZW51LCB3aW5kb3dTaXplKTtcblxuXHRcdHRoaXMuZ2VvbWV0cnlSZXN1bHRzJC5uZXh0KGdlb21ldHJ5KTtcblxuXHR9XG59XG4iXX0=