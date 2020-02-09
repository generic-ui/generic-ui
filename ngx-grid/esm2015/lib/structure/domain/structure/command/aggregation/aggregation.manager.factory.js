/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRpb24ubWFuYWdlci5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9hZ2dyZWdhdGlvbi9hZ2dyZWdhdGlvbi5tYW5hZ2VyLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBR3RGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSTNELE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFFckMsWUFBcUQsV0FBbUQ7UUFBbkQsZ0JBQVcsR0FBWCxXQUFXLENBQXdDO0lBQ3hHLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFdBQXdCO1FBQzlCLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlELENBQUM7OztZQVJELFVBQVU7Ozs7WUFHd0QsS0FBSyx1QkFBMUQsTUFBTSxTQUFDLHVCQUF1Qjs7Ozs7OztJQUEvQixnREFBNEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQUdHUkVHQVRJT05fQ0FMQ1VMQVRPUlMgfSBmcm9tICcuL2NhbGN1bGF0aW9uL2FnZ3JlZ2F0aW9uLmNhbGN1bGF0b3JzLnRva2VuJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uQ2FsY3VsYXRvciB9IGZyb20gJy4vY2FsY3VsYXRpb24vYWdncmVnYXRpb24uY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvbk1hbmFnZXIgfSBmcm9tICcuL2FnZ3JlZ2F0aW9uLm1hbmFnZXInO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZ2dyZWdhdGlvbk1hbmFnZXJGYWN0b3J5IHtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KEFHR1JFR0FUSU9OX0NBTENVTEFUT1JTKSBwcml2YXRlIGNhbGN1bGF0b3JzOiBBcnJheTxBZ2dyZWdhdGlvbkNhbGN1bGF0b3I8YW55LCBhbnk+Pikge1xuXHR9XG5cblx0Y3JlYXRlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFnZ3JlZ2F0aW9uTWFuYWdlciB7XG5cdFx0cmV0dXJuIG5ldyBBZ2dyZWdhdGlvbk1hbmFnZXIoc3RydWN0dXJlSWQsIHRoaXMuY2FsY3VsYXRvcnMpO1xuXHR9XG5cbn1cbiJdfQ==