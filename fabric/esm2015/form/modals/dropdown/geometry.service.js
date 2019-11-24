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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vbW9kYWxzL2Ryb3Bkb3duL2dlb21ldHJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBR3RDLE1BQU0sT0FBTyxlQUFlO0lBRDVCO1FBR1MscUJBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQVksQ0FBQztJQWFwRCxDQUFDOzs7O0lBWEEsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdDLENBQUM7Ozs7Ozs7SUFFRCxjQUFjLENBQUMsU0FBcUIsRUFBRSxJQUFnQixFQUFFLFVBQWtCOztZQUVyRSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUM7UUFFeEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUV0QyxDQUFDOzs7WUFmRCxVQUFVOzs7Ozs7O0lBR1YsMkNBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2VvbWV0cnlTZXJ2aWNlIHtcblxuXHRwcml2YXRlIGdlb21ldHJ5UmVzdWx0cyQgPSBuZXcgU3ViamVjdDxHZW9tZXRyeT4oKTtcblxuXHR3YXRjaEdlb21ldHJ5KCk6IE9ic2VydmFibGU8R2VvbWV0cnk+IHtcblx0XHRyZXR1cm4gdGhpcy5nZW9tZXRyeVJlc3VsdHMkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0Y2hhbmdlR2VvbWV0cnkoY29udGFpbmVyOiBFbGVtZW50UmVmLCBtZW51OiBFbGVtZW50UmVmLCB3aW5kb3dTaXplOiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdGxldCBnZW9tZXRyeSA9IG5ldyBHZW9tZXRyeShjb250YWluZXIsIG1lbnUsIHdpbmRvd1NpemUpO1xuXG5cdFx0dGhpcy5nZW9tZXRyeVJlc3VsdHMkLm5leHQoZ2VvbWV0cnkpO1xuXG5cdH1cbn1cbiJdfQ==