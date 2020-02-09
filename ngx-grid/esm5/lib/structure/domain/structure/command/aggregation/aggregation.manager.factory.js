/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { AGGREGATION_CALCULATORS } from './calculation/aggregation.calculators.token';
import { AggregationManager } from './aggregation.manager';
var AggregationManagerFactory = /** @class */ (function () {
    function AggregationManagerFactory(calculators) {
        this.calculators = calculators;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    AggregationManagerFactory.prototype.create = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return new AggregationManager(structureId, this.calculators);
    };
    AggregationManagerFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AggregationManagerFactory.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Inject, args: [AGGREGATION_CALCULATORS,] }] }
    ]; };
    return AggregationManagerFactory;
}());
export { AggregationManagerFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregationManagerFactory.prototype.calculators;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRpb24ubWFuYWdlci5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9hZ2dyZWdhdGlvbi9hZ2dyZWdhdGlvbi5tYW5hZ2VyLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBR3RGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRzNEO0lBR0MsbUNBQXFELFdBQW1EO1FBQW5ELGdCQUFXLEdBQVgsV0FBVyxDQUF3QztJQUN4RyxDQUFDOzs7OztJQUVELDBDQUFNOzs7O0lBQU4sVUFBTyxXQUF3QjtRQUM5QixPQUFPLElBQUksa0JBQWtCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5RCxDQUFDOztnQkFSRCxVQUFVOzs7O2dCQUd3RCxLQUFLLHVCQUExRCxNQUFNLFNBQUMsdUJBQXVCOztJQU81QyxnQ0FBQztDQUFBLEFBVkQsSUFVQztTQVRZLHlCQUF5Qjs7Ozs7O0lBRXpCLGdEQUE0RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBR0dSRUdBVElPTl9DQUxDVUxBVE9SUyB9IGZyb20gJy4vY2FsY3VsYXRpb24vYWdncmVnYXRpb24uY2FsY3VsYXRvcnMudG9rZW4nO1xuaW1wb3J0IHsgQWdncmVnYXRpb25DYWxjdWxhdG9yIH0gZnJvbSAnLi9jYWxjdWxhdGlvbi9hZ2dyZWdhdGlvbi5jYWxjdWxhdG9yJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uTWFuYWdlciB9IGZyb20gJy4vYWdncmVnYXRpb24ubWFuYWdlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFnZ3JlZ2F0aW9uTWFuYWdlckZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoQUdHUkVHQVRJT05fQ0FMQ1VMQVRPUlMpIHByaXZhdGUgY2FsY3VsYXRvcnM6IEFycmF5PEFnZ3JlZ2F0aW9uQ2FsY3VsYXRvcjxhbnksIGFueT4+KSB7XG5cdH1cblxuXHRjcmVhdGUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQWdncmVnYXRpb25NYW5hZ2VyIHtcblx0XHRyZXR1cm4gbmV3IEFnZ3JlZ2F0aW9uTWFuYWdlcihzdHJ1Y3R1cmVJZCwgdGhpcy5jYWxjdWxhdG9ycyk7XG5cdH1cblxufVxuIl19