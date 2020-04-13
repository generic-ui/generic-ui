/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { SummariesCalculator } from '../summaries.calculator';
import { UnknownSummarizedValues } from './unknown-summarized.values';
import { DataType } from '../../../field/data-type/data-type';
var UnknownSummariesCalculator = /** @class */ (function (_super) {
    tslib_1.__extends(UnknownSummariesCalculator, _super);
    function UnknownSummariesCalculator() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    UnknownSummariesCalculator.prototype.forDataType = /**
     * @param {?} dataType
     * @return {?}
     */
    function (dataType) {
        return dataType === DataType.UNKNOWN;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    UnknownSummariesCalculator.prototype.prepare = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
    };
    /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    UnknownSummariesCalculator.prototype.postCalculate = /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    function (field, items) {
    };
    /**
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    UnknownSummariesCalculator.prototype.aggregate = /**
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    function (field, value) {
    };
    /**
     * @param {?} field
     * @return {?}
     */
    UnknownSummariesCalculator.prototype.generateAggregatedValues = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return new UnknownSummarizedValues();
    };
    UnknownSummariesCalculator.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UnknownSummariesCalculator.ctorParameters = function () { return []; };
    return UnknownSummariesCalculator;
}(SummariesCalculator));
export { UnknownSummariesCalculator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1zdW1tYXJpZXMuY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3N1bW1hcmllcy9jYWxjdWxhdGlvbi91bmtub3duL3Vua25vd24tc3VtbWFyaWVzLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUs5RDtJQUNnRCxzREFBaUQ7SUFFaEc7ZUFDQyxpQkFBTztJQUNSLENBQUM7Ozs7O0lBRUQsZ0RBQVc7Ozs7SUFBWCxVQUFZLFFBQWtCO1FBQzdCLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQyxPQUFPLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCw0Q0FBTzs7OztJQUFQLFVBQVEsS0FBaUI7SUFDekIsQ0FBQzs7Ozs7O0lBRUQsa0RBQWE7Ozs7O0lBQWIsVUFBYyxLQUFpQixFQUFFLEtBQThCO0lBQy9ELENBQUM7Ozs7OztJQUVELDhDQUFTOzs7OztJQUFULFVBQVUsS0FBaUIsRUFBRSxLQUFVO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsNkRBQXdCOzs7O0lBQXhCLFVBQXlCLEtBQWlCO1FBQ3pDLE9BQU8sSUFBSSx1QkFBdUIsRUFBRSxDQUFDO0lBQ3RDLENBQUM7O2dCQXRCRCxVQUFVOzs7O0lBd0JYLGlDQUFDO0NBQUEsQUF4QkQsQ0FDZ0QsbUJBQW1CLEdBdUJsRTtTQXZCWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNDYWxjdWxhdG9yIH0gZnJvbSAnLi4vc3VtbWFyaWVzLmNhbGN1bGF0b3InO1xuaW1wb3J0IHsgVW5rbm93blN1bW1hcml6ZWRWYWx1ZXMgfSBmcm9tICcuL3Vua25vd24tc3VtbWFyaXplZC52YWx1ZXMnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZGF0YS10eXBlL2ZpZWxkJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2Uvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVua25vd25TdW1tYXJpZXNDYWxjdWxhdG9yIGV4dGVuZHMgU3VtbWFyaWVzQ2FsY3VsYXRvcjxhbnksIFVua25vd25TdW1tYXJpemVkVmFsdWVzPiB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGZvckRhdGFUeXBlKGRhdGFUeXBlOiBEYXRhVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBkYXRhVHlwZSA9PT0gRGF0YVR5cGUuVU5LTk9XTjtcblx0fVxuXG5cdHByZXBhcmUoZmllbGQ6IEZpZWxkPGFueT4pOiB2b2lkIHtcblx0fVxuXG5cdHBvc3RDYWxjdWxhdGUoZmllbGQ6IEZpZWxkPGFueT4sIGl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IHZvaWQge1xuXHR9XG5cblx0YWdncmVnYXRlKGZpZWxkOiBGaWVsZDxhbnk+LCB2YWx1ZTogYW55KTogdm9pZCB7XG5cdH1cblxuXHRnZW5lcmF0ZUFnZ3JlZ2F0ZWRWYWx1ZXMoZmllbGQ6IEZpZWxkPGFueT4pOiBVbmtub3duU3VtbWFyaXplZFZhbHVlcyB7XG5cdFx0cmV0dXJuIG5ldyBVbmtub3duU3VtbWFyaXplZFZhbHVlcygpO1xuXHR9XG5cbn1cbiJdfQ==