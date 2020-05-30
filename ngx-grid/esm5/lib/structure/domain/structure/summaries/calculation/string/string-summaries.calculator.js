/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { SummariesCalculator } from '../summaries.calculator';
import { StringSummarizedValues } from './string-summarized.values';
import { DataType } from '../../../../../../../structure/field/domain/data-type/data-type';
var StringSummariesCalculator = /** @class */ (function (_super) {
    tslib_1.__extends(StringSummariesCalculator, _super);
    function StringSummariesCalculator() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    StringSummariesCalculator.prototype.forDataType = /**
     * @param {?} dataType
     * @return {?}
     */
    function (dataType) {
        return dataType === DataType.STRING;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    StringSummariesCalculator.prototype.prepare = /**
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
    StringSummariesCalculator.prototype.postCalculate = /**
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
    StringSummariesCalculator.prototype.aggregate = /**
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
    StringSummariesCalculator.prototype.generateAggregatedValues = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return new StringSummarizedValues();
    };
    StringSummariesCalculator.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StringSummariesCalculator.ctorParameters = function () { return []; };
    return StringSummariesCalculator;
}(SummariesCalculator));
export { StringSummariesCalculator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLXN1bW1hcmllcy5jYWxjdWxhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvc3VtbWFyaWVzL2NhbGN1bGF0aW9uL3N0cmluZy9zdHJpbmctc3VtbWFyaWVzLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUszRjtJQUMrQyxxREFBbUQ7SUFFakc7ZUFDQyxpQkFBTztJQUNSLENBQUM7Ozs7O0lBRUQsK0NBQVc7Ozs7SUFBWCxVQUFZLFFBQWtCO1FBQzdCLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCwyQ0FBTzs7OztJQUFQLFVBQVEsS0FBb0I7SUFDNUIsQ0FBQzs7Ozs7O0lBRUQsaURBQWE7Ozs7O0lBQWIsVUFBYyxLQUFvQixFQUFFLEtBQThCO0lBQ2xFLENBQUM7Ozs7OztJQUVELDZDQUFTOzs7OztJQUFULFVBQVUsS0FBb0IsRUFBRSxLQUFhO0lBQzdDLENBQUM7Ozs7O0lBRUQsNERBQXdCOzs7O0lBQXhCLFVBQXlCLEtBQW9CO1FBQzVDLE9BQU8sSUFBSSxzQkFBc0IsRUFBRSxDQUFDO0lBQ3JDLENBQUM7O2dCQXRCRCxVQUFVOzs7O0lBd0JYLGdDQUFDO0NBQUEsQUF4QkQsQ0FDK0MsbUJBQW1CLEdBdUJqRTtTQXZCWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNDYWxjdWxhdG9yIH0gZnJvbSAnLi4vc3VtbWFyaWVzLmNhbGN1bGF0b3InO1xuaW1wb3J0IHsgU3RyaW5nU3VtbWFyaXplZFZhbHVlcyB9IGZyb20gJy4vc3RyaW5nLXN1bW1hcml6ZWQudmFsdWVzJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9kYXRhLXR5cGUvZGF0YS10eXBlJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9kYXRhLXR5cGUvZmllbGQnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RyaW5nU3VtbWFyaWVzQ2FsY3VsYXRvciBleHRlbmRzIFN1bW1hcmllc0NhbGN1bGF0b3I8c3RyaW5nLCBTdHJpbmdTdW1tYXJpemVkVmFsdWVzPiB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGZvckRhdGFUeXBlKGRhdGFUeXBlOiBEYXRhVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBkYXRhVHlwZSA9PT0gRGF0YVR5cGUuU1RSSU5HO1xuXHR9XG5cblx0cHJlcGFyZShmaWVsZDogRmllbGQ8c3RyaW5nPik6IHZvaWQge1xuXHR9XG5cblx0cG9zdENhbGN1bGF0ZShmaWVsZDogRmllbGQ8c3RyaW5nPiwgaXRlbXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogdm9pZCB7XG5cdH1cblxuXHRhZ2dyZWdhdGUoZmllbGQ6IEZpZWxkPHN0cmluZz4sIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0fVxuXG5cdGdlbmVyYXRlQWdncmVnYXRlZFZhbHVlcyhmaWVsZDogRmllbGQ8c3RyaW5nPik6IFN0cmluZ1N1bW1hcml6ZWRWYWx1ZXMge1xuXHRcdHJldHVybiBuZXcgU3RyaW5nU3VtbWFyaXplZFZhbHVlcygpO1xuXHR9XG5cbn1cbiJdfQ==