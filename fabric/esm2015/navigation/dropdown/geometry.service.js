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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24vZHJvcGRvd24vZ2VvbWV0cnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFHdEMsTUFBTSxPQUFPLGVBQWU7SUFENUI7UUFHUyxxQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBWSxDQUFDO0lBYXBELENBQUM7Ozs7SUFYQSxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0MsQ0FBQzs7Ozs7OztJQUVELGNBQWMsQ0FBQyxTQUFxQixFQUFFLElBQWdCLEVBQUUsVUFBa0I7O1lBRXJFLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQztRQUV4RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXRDLENBQUM7OztZQWZELFVBQVU7Ozs7Ozs7SUFHViwyQ0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHZW9tZXRyeVNlcnZpY2Uge1xuXG5cdHByaXZhdGUgZ2VvbWV0cnlSZXN1bHRzJCA9IG5ldyBTdWJqZWN0PEdlb21ldHJ5PigpO1xuXG5cdHdhdGNoR2VvbWV0cnkoKTogT2JzZXJ2YWJsZTxHZW9tZXRyeT4ge1xuXHRcdHJldHVybiB0aGlzLmdlb21ldHJ5UmVzdWx0cyQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHRjaGFuZ2VHZW9tZXRyeShjb250YWluZXI6IEVsZW1lbnRSZWYsIG1lbnU6IEVsZW1lbnRSZWYsIHdpbmRvd1NpemU6IG51bWJlcik6IHZvaWQge1xuXG5cdFx0bGV0IGdlb21ldHJ5ID0gbmV3IEdlb21ldHJ5KGNvbnRhaW5lciwgbWVudSwgd2luZG93U2l6ZSk7XG5cblx0XHR0aGlzLmdlb21ldHJ5UmVzdWx0cyQubmV4dChnZW9tZXRyeSk7XG5cblx0fVxufVxuIl19