/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AggregationCalculator } from '../aggregation.calculator';
import { UnknownAggregatedValues } from './unknown-aggregated.values';
import { DataType } from '../../../field/data-type/data-type';
var UnknownAggregationCalculator = /** @class */ (function (_super) {
    tslib_1.__extends(UnknownAggregationCalculator, _super);
    function UnknownAggregationCalculator() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    UnknownAggregationCalculator.prototype.forDataType = /**
     * @param {?} dataType
     * @return {?}
     */
    function (dataType) {
        return dataType === DataType.UNKNOWN;
    };
    /**
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    UnknownAggregationCalculator.prototype.aggregate = /**
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
    UnknownAggregationCalculator.prototype.generateAggregatedValues = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return new UnknownAggregatedValues();
    };
    /**
     * @param {?} field
     * @return {?}
     */
    UnknownAggregationCalculator.prototype.prepare = /**
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
    UnknownAggregationCalculator.prototype.postCalculate = /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    function (field, items) {
    };
    UnknownAggregationCalculator.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UnknownAggregationCalculator.ctorParameters = function () { return []; };
    return UnknownAggregationCalculator;
}(AggregationCalculator));
export { UnknownAggregationCalculator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1hZ2dyZWdhdGlvbi5jYWxjdWxhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9hZ2dyZWdhdGlvbi9jYWxjdWxhdGlvbi91bmtub3duL3Vua25vd24tYWdncmVnYXRpb24uY2FsY3VsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBTTlEO0lBQ2tELHdEQUFtRDtJQUVwRztlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxrREFBVzs7OztJQUFYLFVBQVksUUFBa0I7UUFDN0IsT0FBTyxRQUFRLEtBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQztJQUN0QyxDQUFDOzs7Ozs7SUFFRCxnREFBUzs7Ozs7SUFBVCxVQUFVLEtBQVksRUFBRSxLQUFVO0lBQ2xDLENBQUM7Ozs7O0lBRUQsK0RBQXdCOzs7O0lBQXhCLFVBQXlCLEtBQVk7UUFDcEMsT0FBTyxJQUFJLHVCQUF1QixFQUFFLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCw4Q0FBTzs7OztJQUFQLFVBQVEsS0FBWTtJQUNwQixDQUFDOzs7Ozs7SUFFRCxvREFBYTs7Ozs7SUFBYixVQUFjLEtBQVksRUFBRSxLQUE4QjtJQUMxRCxDQUFDOztnQkF0QkQsVUFBVTs7OztJQXdCWCxtQ0FBQztDQUFBLEFBeEJELENBQ2tELHFCQUFxQixHQXVCdEU7U0F2QlksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWdncmVnYXRpb25DYWxjdWxhdG9yIH0gZnJvbSAnLi4vYWdncmVnYXRpb24uY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBVbmtub3duQWdncmVnYXRlZFZhbHVlcyB9IGZyb20gJy4vdW5rbm93bi1hZ2dyZWdhdGVkLnZhbHVlcyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kYXRhLXR5cGUvZmllbGQnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jb21tYW5kL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVua25vd25BZ2dyZWdhdGlvbkNhbGN1bGF0b3IgZXh0ZW5kcyBBZ2dyZWdhdGlvbkNhbGN1bGF0b3I8YW55LCBVbmtub3duQWdncmVnYXRlZFZhbHVlcz4ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRmb3JEYXRhVHlwZShkYXRhVHlwZTogRGF0YVR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZGF0YVR5cGUgPT09IERhdGFUeXBlLlVOS05PV047XG5cdH1cblxuXHRhZ2dyZWdhdGUoZmllbGQ6IEZpZWxkLCB2YWx1ZTogYW55KTogdm9pZCB7XG5cdH1cblxuXHRnZW5lcmF0ZUFnZ3JlZ2F0ZWRWYWx1ZXMoZmllbGQ6IEZpZWxkKTogVW5rbm93bkFnZ3JlZ2F0ZWRWYWx1ZXMge1xuXHRcdHJldHVybiBuZXcgVW5rbm93bkFnZ3JlZ2F0ZWRWYWx1ZXMoKTtcblx0fVxuXG5cdHByZXBhcmUoZmllbGQ6IEZpZWxkKTogdm9pZCB7XG5cdH1cblxuXHRwb3N0Q2FsY3VsYXRlKGZpZWxkOiBGaWVsZCwgaXRlbXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogdm9pZCB7XG5cdH1cblxufVxuIl19