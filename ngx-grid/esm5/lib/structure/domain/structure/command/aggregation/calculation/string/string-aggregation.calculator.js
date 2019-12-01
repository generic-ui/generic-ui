/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AggregationCalculator } from '../aggregation.calculator';
import { StringAggregatedValues } from './string-aggregated.values';
import { DataType } from '../../../field/data-type/data-type';
var StringAggregationCalculator = /** @class */ (function (_super) {
    tslib_1.__extends(StringAggregationCalculator, _super);
    function StringAggregationCalculator() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    StringAggregationCalculator.prototype.forDataType = /**
     * @param {?} dataType
     * @return {?}
     */
    function (dataType) {
        return dataType === DataType.STRING;
    };
    /**
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    StringAggregationCalculator.prototype.aggregate = /**
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
    StringAggregationCalculator.prototype.generateAggregatedValues = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return new StringAggregatedValues();
    };
    /**
     * @param {?} field
     * @return {?}
     */
    StringAggregationCalculator.prototype.prepare = /**
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
    StringAggregationCalculator.prototype.postCalculate = /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    function (field, items) { };
    StringAggregationCalculator.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StringAggregationCalculator.ctorParameters = function () { return []; };
    return StringAggregationCalculator;
}(AggregationCalculator));
export { StringAggregationCalculator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWFnZ3JlZ2F0aW9uLmNhbGN1bGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2FnZ3JlZ2F0aW9uL2NhbGN1bGF0aW9uL3N0cmluZy9zdHJpbmctYWdncmVnYXRpb24uY2FsY3VsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBTTlEO0lBQ2lELHVEQUFxRDtJQUVyRztlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxpREFBVzs7OztJQUFYLFVBQVksUUFBa0I7UUFDN0IsT0FBTyxRQUFRLEtBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFRCwrQ0FBUzs7Ozs7SUFBVCxVQUFVLEtBQVksRUFBRSxLQUFhO0lBQ3JDLENBQUM7Ozs7O0lBRUQsOERBQXdCOzs7O0lBQXhCLFVBQXlCLEtBQVk7UUFDcEMsT0FBTyxJQUFJLHNCQUFzQixFQUFFLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCw2Q0FBTzs7OztJQUFQLFVBQVEsS0FBWTtJQUNwQixDQUFDOzs7Ozs7SUFFRCxtREFBYTs7Ozs7SUFBYixVQUFjLEtBQVksRUFBRSxLQUE4QixJQUFTLENBQUM7O2dCQXJCcEUsVUFBVTs7OztJQXVCWCxrQ0FBQztDQUFBLEFBdkJELENBQ2lELHFCQUFxQixHQXNCckU7U0F0QlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWdncmVnYXRpb25DYWxjdWxhdG9yIH0gZnJvbSAnLi4vYWdncmVnYXRpb24uY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBTdHJpbmdBZ2dyZWdhdGVkVmFsdWVzIH0gZnJvbSAnLi9zdHJpbmctYWdncmVnYXRlZC52YWx1ZXMnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZGF0YS10eXBlL2ZpZWxkJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJpbmdBZ2dyZWdhdGlvbkNhbGN1bGF0b3IgZXh0ZW5kcyBBZ2dyZWdhdGlvbkNhbGN1bGF0b3I8c3RyaW5nLCBTdHJpbmdBZ2dyZWdhdGVkVmFsdWVzPiB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGZvckRhdGFUeXBlKGRhdGFUeXBlOiBEYXRhVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBkYXRhVHlwZSA9PT0gRGF0YVR5cGUuU1RSSU5HO1xuXHR9XG5cblx0YWdncmVnYXRlKGZpZWxkOiBGaWVsZCwgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHR9XG5cblx0Z2VuZXJhdGVBZ2dyZWdhdGVkVmFsdWVzKGZpZWxkOiBGaWVsZCk6IFN0cmluZ0FnZ3JlZ2F0ZWRWYWx1ZXMge1xuXHRcdHJldHVybiBuZXcgU3RyaW5nQWdncmVnYXRlZFZhbHVlcygpO1xuXHR9XG5cblx0cHJlcGFyZShmaWVsZDogRmllbGQpOiB2b2lkIHtcblx0fVxuXG5cdHBvc3RDYWxjdWxhdGUoZmllbGQ6IEZpZWxkLCBpdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiB2b2lkIHt9XG5cbn1cbiJdfQ==