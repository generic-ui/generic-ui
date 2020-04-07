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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24vZHJvcGRvd24vZ2VvbWV0cnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFdEM7SUFBQTtRQUdTLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUFZLENBQUM7SUFhcEQsQ0FBQzs7OztJQVhBLHVDQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdDLENBQUM7Ozs7Ozs7SUFFRCx3Q0FBYzs7Ozs7O0lBQWQsVUFBZSxTQUFxQixFQUFFLElBQWdCLEVBQUUsVUFBa0I7O1lBRXJFLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQztRQUV4RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXRDLENBQUM7O2dCQWZELFVBQVU7O0lBZ0JYLHNCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FmWSxlQUFlOzs7Ozs7SUFFM0IsMkNBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2VvbWV0cnlTZXJ2aWNlIHtcblxuXHRwcml2YXRlIGdlb21ldHJ5UmVzdWx0cyQgPSBuZXcgU3ViamVjdDxHZW9tZXRyeT4oKTtcblxuXHR3YXRjaEdlb21ldHJ5KCk6IE9ic2VydmFibGU8R2VvbWV0cnk+IHtcblx0XHRyZXR1cm4gdGhpcy5nZW9tZXRyeVJlc3VsdHMkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0Y2hhbmdlR2VvbWV0cnkoY29udGFpbmVyOiBFbGVtZW50UmVmLCBtZW51OiBFbGVtZW50UmVmLCB3aW5kb3dTaXplOiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdGxldCBnZW9tZXRyeSA9IG5ldyBHZW9tZXRyeShjb250YWluZXIsIG1lbnUsIHdpbmRvd1NpemUpO1xuXG5cdFx0dGhpcy5nZW9tZXRyeVJlc3VsdHMkLm5leHQoZ2VvbWV0cnkpO1xuXG5cdH1cbn1cbiJdfQ==