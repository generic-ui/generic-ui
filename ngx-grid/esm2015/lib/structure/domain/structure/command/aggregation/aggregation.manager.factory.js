/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { AGGREGATION_CALCULATORS } from './calculation/aggregation.calculators.token';
import { AggregationManager } from './aggregation.manager';
export class AggregationManagerFactory {
    /**
     * @param {?} calculators
     */
    constructor(calculators) {
        this.calculators = calculators;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    create(structureId) {
        return new AggregationManager(structureId, this.calculators);
    }
}
AggregationManagerFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AggregationManagerFactory.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [AGGREGATION_CALCULATORS,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregationManagerFactory.prototype.calculators;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRpb24ubWFuYWdlci5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9hZ2dyZWdhdGlvbi9hZ2dyZWdhdGlvbi5tYW5hZ2VyLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBR3RGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSzNELE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFFckMsWUFBcUQsV0FBbUQ7UUFBbkQsZ0JBQVcsR0FBWCxXQUFXLENBQXdDO0lBQUcsQ0FBQzs7Ozs7SUFFNUcsTUFBTSxDQUFDLFdBQXdCO1FBQzlCLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlELENBQUM7OztZQVBELFVBQVU7Ozs7WUFHd0QsS0FBSyx1QkFBMUQsTUFBTSxTQUFDLHVCQUF1Qjs7Ozs7OztJQUEvQixnREFBNEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQUdHUkVHQVRJT05fQ0FMQ1VMQVRPUlMgfSBmcm9tICcuL2NhbGN1bGF0aW9uL2FnZ3JlZ2F0aW9uLmNhbGN1bGF0b3JzLnRva2VuJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uQ2FsY3VsYXRvciB9IGZyb20gJy4vY2FsY3VsYXRpb24vYWdncmVnYXRpb24uY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvbk1hbmFnZXIgfSBmcm9tICcuL2FnZ3JlZ2F0aW9uLm1hbmFnZXInO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFnZ3JlZ2F0aW9uTWFuYWdlckZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoQUdHUkVHQVRJT05fQ0FMQ1VMQVRPUlMpIHByaXZhdGUgY2FsY3VsYXRvcnM6IEFycmF5PEFnZ3JlZ2F0aW9uQ2FsY3VsYXRvcjxhbnksIGFueT4+KSB7fVxuXG5cdGNyZWF0ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBZ2dyZWdhdGlvbk1hbmFnZXIge1xuXHRcdHJldHVybiBuZXcgQWdncmVnYXRpb25NYW5hZ2VyKHN0cnVjdHVyZUlkLCB0aGlzLmNhbGN1bGF0b3JzKTtcblx0fVxuXG59XG4iXX0=