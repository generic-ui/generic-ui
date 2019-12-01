/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class GridIdGenerator {
    /**
     * @return {?}
     */
    generateId() {
        GridIdGenerator.index++;
        return GridIdGenerator.PREFIX + GridIdGenerator.index;
    }
}
GridIdGenerator.PREFIX = 'gui-grid-';
GridIdGenerator.index = 0;
GridIdGenerator.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    GridIdGenerator.PREFIX;
    /**
     * @type {?}
     * @private
     */
    GridIdGenerator.index;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1pZC5nZW5lcmF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL3VpL2dyaWQvcmVnaXN0ZXIvZ3JpZC1pZC5nZW5lcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsTUFBTSxPQUFPLGVBQWU7Ozs7SUFNM0IsVUFBVTtRQUNULGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUV4QixPQUFPLGVBQWUsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQztJQUN2RCxDQUFDOztBQVJ1QixzQkFBTSxHQUFHLFdBQVcsQ0FBQztBQUU5QixxQkFBSyxHQUFHLENBQUMsQ0FBQzs7WUFMekIsVUFBVTs7Ozs7OztJQUdWLHVCQUE2Qzs7Ozs7SUFFN0Msc0JBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR3JpZElkR2VuZXJhdG9yIHtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBQUkVGSVggPSAnZ3VpLWdyaWQtJztcblxuXHRwcml2YXRlIHN0YXRpYyBpbmRleCA9IDA7XG5cblx0Z2VuZXJhdGVJZCgpOiBzdHJpbmcge1xuXHRcdEdyaWRJZEdlbmVyYXRvci5pbmRleCsrO1xuXG5cdFx0cmV0dXJuIEdyaWRJZEdlbmVyYXRvci5QUkVGSVggKyBHcmlkSWRHZW5lcmF0b3IuaW5kZXg7XG5cdH1cbn1cbiJdfQ==