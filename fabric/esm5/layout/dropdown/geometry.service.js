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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxheW91dC9kcm9wZG93bi9nZW9tZXRyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUV0QztJQUFBO1FBR1MscUJBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQVksQ0FBQztJQWFwRCxDQUFDOzs7O0lBWEEsdUNBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0MsQ0FBQzs7Ozs7OztJQUVELHdDQUFjOzs7Ozs7SUFBZCxVQUFlLFNBQXFCLEVBQUUsSUFBZ0IsRUFBRSxVQUFrQjs7WUFFckUsUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDO1FBRXhELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFdEMsQ0FBQzs7Z0JBZkQsVUFBVTs7SUFnQlgsc0JBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQWZZLGVBQWU7Ozs7OztJQUUzQiwyQ0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHZW9tZXRyeVNlcnZpY2Uge1xuXG5cdHByaXZhdGUgZ2VvbWV0cnlSZXN1bHRzJCA9IG5ldyBTdWJqZWN0PEdlb21ldHJ5PigpO1xuXG5cdHdhdGNoR2VvbWV0cnkoKTogT2JzZXJ2YWJsZTxHZW9tZXRyeT4ge1xuXHRcdHJldHVybiB0aGlzLmdlb21ldHJ5UmVzdWx0cyQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHRjaGFuZ2VHZW9tZXRyeShjb250YWluZXI6IEVsZW1lbnRSZWYsIG1lbnU6IEVsZW1lbnRSZWYsIHdpbmRvd1NpemU6IG51bWJlcik6IHZvaWQge1xuXG5cdFx0bGV0IGdlb21ldHJ5ID0gbmV3IEdlb21ldHJ5KGNvbnRhaW5lciwgbWVudSwgd2luZG93U2l6ZSk7XG5cblx0XHR0aGlzLmdlb21ldHJ5UmVzdWx0cyQubmV4dChnZW9tZXRyeSk7XG5cblx0fVxufVxuIl19