/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Geometry } from './geometry';
export class GeometryService {
    constructor() {
        this.geometryResults$ = new Subject();
    }
    /**
     * @return {?}
     */
    watchGeometry() {
        return this.geometryResults$.asObservable();
    }
    /**
     * @param {?} container
     * @param {?} menu
     * @param {?} windowSize
     * @return {?}
     */
    changeGeometry(container, menu, windowSize) {
        /** @type {?} */
        let geometry = new Geometry(container, menu, windowSize);
        this.geometryResults$.next(geometry);
    }
}
GeometryService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    GeometryService.prototype.geometryResults$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxheW91dC9kcm9wZG93bi9nZW9tZXRyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUd0QyxNQUFNLE9BQU8sZUFBZTtJQUQ1QjtRQUdTLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUFZLENBQUM7SUFhcEQsQ0FBQzs7OztJQVhBLGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7O0lBRUQsY0FBYyxDQUFDLFNBQXFCLEVBQUUsSUFBZ0IsRUFBRSxVQUFrQjs7WUFFckUsUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDO1FBRXhELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFdEMsQ0FBQzs7O1lBZkQsVUFBVTs7Ozs7OztJQUdWLDJDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdlb21ldHJ5U2VydmljZSB7XG5cblx0cHJpdmF0ZSBnZW9tZXRyeVJlc3VsdHMkID0gbmV3IFN1YmplY3Q8R2VvbWV0cnk+KCk7XG5cblx0d2F0Y2hHZW9tZXRyeSgpOiBPYnNlcnZhYmxlPEdlb21ldHJ5PiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2VvbWV0cnlSZXN1bHRzJC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdGNoYW5nZUdlb21ldHJ5KGNvbnRhaW5lcjogRWxlbWVudFJlZiwgbWVudTogRWxlbWVudFJlZiwgd2luZG93U2l6ZTogbnVtYmVyKTogdm9pZCB7XG5cblx0XHRsZXQgZ2VvbWV0cnkgPSBuZXcgR2VvbWV0cnkoY29udGFpbmVyLCBtZW51LCB3aW5kb3dTaXplKTtcblxuXHRcdHRoaXMuZ2VvbWV0cnlSZXN1bHRzJC5uZXh0KGdlb21ldHJ5KTtcblxuXHR9XG59XG4iXX0=