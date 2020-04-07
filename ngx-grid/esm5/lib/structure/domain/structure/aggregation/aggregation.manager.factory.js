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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRpb24ubWFuYWdlci5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvYWdncmVnYXRpb24vYWdncmVnYXRpb24ubWFuYWdlci5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUd0RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUczRDtJQUdDLG1DQUFxRCxXQUFtRDtRQUFuRCxnQkFBVyxHQUFYLFdBQVcsQ0FBd0M7SUFDeEcsQ0FBQzs7Ozs7SUFFRCwwQ0FBTTs7OztJQUFOLFVBQU8sV0FBd0I7UUFDOUIsT0FBTyxJQUFJLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Z0JBUkQsVUFBVTs7OztnQkFHd0QsS0FBSyx1QkFBMUQsTUFBTSxTQUFDLHVCQUF1Qjs7SUFPNUMsZ0NBQUM7Q0FBQSxBQVZELElBVUM7U0FUWSx5QkFBeUI7Ozs7OztJQUV6QixnREFBNEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQUdHUkVHQVRJT05fQ0FMQ1VMQVRPUlMgfSBmcm9tICcuL2NhbGN1bGF0aW9uL2FnZ3JlZ2F0aW9uLmNhbGN1bGF0b3JzLnRva2VuJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uQ2FsY3VsYXRvciB9IGZyb20gJy4vY2FsY3VsYXRpb24vYWdncmVnYXRpb24uY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvbk1hbmFnZXIgfSBmcm9tICcuL2FnZ3JlZ2F0aW9uLm1hbmFnZXInO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZ2dyZWdhdGlvbk1hbmFnZXJGYWN0b3J5IHtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KEFHR1JFR0FUSU9OX0NBTENVTEFUT1JTKSBwcml2YXRlIGNhbGN1bGF0b3JzOiBBcnJheTxBZ2dyZWdhdGlvbkNhbGN1bGF0b3I8YW55LCBhbnk+Pikge1xuXHR9XG5cblx0Y3JlYXRlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFnZ3JlZ2F0aW9uTWFuYWdlciB7XG5cdFx0cmV0dXJuIG5ldyBBZ2dyZWdhdGlvbk1hbmFnZXIoc3RydWN0dXJlSWQsIHRoaXMuY2FsY3VsYXRvcnMpO1xuXHR9XG5cbn1cbiJdfQ==