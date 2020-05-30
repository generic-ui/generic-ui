/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SummariesType } from '../summaries.type';
/**
 * @abstract
 * @template T, A
 */
var /**
 * @abstract
 * @template T, A
 */
SummariesCalculator = /** @class */ (function () {
    function SummariesCalculator() {
    }
    /**
     * @param {?} fields
     * @param {?} items
     * @return {?}
     */
    SummariesCalculator.prototype.calculate = /**
     * @param {?} fields
     * @param {?} items
     * @return {?}
     */
    function (fields, items) {
        var _this = this;
        /** @type {?} */
        var filteredFields = fields.filter((/**
         * @param {?} field
         * @return {?}
         */
        function (field) { return _this.forDataType(field.getDataType()); }));
        if (!filteredFields || filteredFields.length === 0 || items.length === 0) {
            return null;
        }
        /** @type {?} */
        var count = new Map();
        /** @type {?} */
        var distinct = new Map();
        // init
        filteredFields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            /** @type {?} */
            var key = field.getKey();
            count.set(key, 0);
            distinct.set(key, new Set());
            _this.prepare(field);
        }));
        // calculate
        items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            filteredFields.forEach((/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                /** @type {?} */
                var key = field.getKey();
                /** @type {?} */
                var value = field.getValue(item);
                if (value !== null || value !== undefined || value !== '') {
                    if (field.isSummaries(SummariesType.COUNT)) {
                        /** @type {?} */
                        var countForField = count.get(key);
                        count.set(key, countForField + 1);
                    }
                    if (field.isSummaries(SummariesType.DISTINCT)) {
                        /** @type {?} */
                        var distinctSet = distinct.get(key);
                        distinctSet.add(value);
                    }
                }
                _this.aggregate(field, value);
            }));
        }));
        filteredFields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            _this.postCalculate(field, items);
        }));
        /** @type {?} */
        var summaries = new Map();
        filteredFields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            /** @type {?} */
            var key = field.getId().getId();
            /** @type {?} */
            var aggregatedValues = _this.generateAggregatedValues(field);
            if (field.isSummaries(SummariesType.COUNT)) {
                aggregatedValues.setCount(count.get(key));
            }
            if (field.isSummaries(SummariesType.DISTINCT)) {
                aggregatedValues.setDistinct((distinct.get(key)).size);
            }
            summaries.set(key, aggregatedValues);
        }));
        return summaries;
    };
    return SummariesCalculator;
}());
/**
 * @abstract
 * @template T, A
 */
export { SummariesCalculator };
if (false) {
    /**
     * @abstract
     * @param {?} dataType
     * @return {?}
     */
    SummariesCalculator.prototype.forDataType = function (dataType) { };
    /**
     * @abstract
     * @param {?} field
     * @return {?}
     */
    SummariesCalculator.prototype.prepare = function (field) { };
    /**
     * @abstract
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    SummariesCalculator.prototype.postCalculate = function (field, items) { };
    /**
     * @abstract
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    SummariesCalculator.prototype.aggregate = function (field, value) { };
    /**
     * @abstract
     * @param {?} field
     * @return {?}
     */
    SummariesCalculator.prototype.generateAggregatedValues = function (field) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmNhbGN1bGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9zdW1tYXJpZXMvY2FsY3VsYXRpb24vc3VtbWFyaWVzLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7QUFJbEQ7Ozs7O0lBQUE7SUF1RkEsQ0FBQzs7Ozs7O0lBM0VBLHVDQUFTOzs7OztJQUFULFVBQVUsTUFBNEIsRUFBRSxLQUE4QjtRQUF0RSxpQkF5RUM7O1lBdkVNLGNBQWMsR0FBRyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsS0FBb0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQXJDLENBQXFDLEVBQUM7UUFFckcsSUFBSSxDQUFDLGNBQWMsSUFBSSxjQUFjLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN6RSxPQUFPLElBQUksQ0FBQztTQUNaOztZQUVHLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBa0I7O1lBQ3BDLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBdUI7UUFFMUMsT0FBTztRQUNQLGNBQWMsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxLQUFvQjs7Z0JBRXJDLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBRTFCLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztZQUU3QixLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsRUFBQyxDQUFDO1FBRUgsWUFBWTtRQUNaLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxJQUFzQjtZQUVwQyxjQUFjLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsS0FBb0I7O29CQUVyQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTs7b0JBQ3pCLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFFN0IsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtvQkFFMUQsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTs7NEJBQ3JDLGFBQWEsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzt3QkFDcEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUNsQztvQkFFRCxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFOzs0QkFDeEMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO3dCQUNyQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUN2QjtpQkFDRDtnQkFFRCxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM5QixDQUFDLEVBQUMsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO1FBRUgsY0FBYyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLEtBQW9CO1lBRTNDLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRWxDLENBQUMsRUFBQyxDQUFDOztZQUVDLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBRTtRQUV6QixjQUFjLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsS0FBb0I7O2dCQUVyQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRTs7Z0JBRTdCLGdCQUFnQixHQUFHLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUM7WUFFM0QsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDM0MsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMxQztZQUVELElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzlDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2RDtZQUVELFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDdEMsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDO0lBRUYsMEJBQUM7QUFBRCxDQUFDLEFBdkZELElBdUZDOzs7Ozs7Ozs7Ozs7SUFyRkEsb0VBQWtEOzs7Ozs7SUFFbEQsNkRBQTZDOzs7Ozs7O0lBRTdDLDBFQUFtRjs7Ozs7OztJQUVuRixzRUFBeUQ7Ozs7OztJQUV6RCw4RUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdW1tYXJpZXNWYWx1ZXMgfSBmcm9tICcuL3N1bW1hcmllcy52YWx1ZXMnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN1bW1hcmllc1R5cGUgfSBmcm9tICcuLi9zdW1tYXJpZXMudHlwZSc7XG5pbXBvcnQgeyBBbGxGaWVsZFR5cGVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9kYXRhLXR5cGUvYWxsLWZpZWxkLXR5cGVzJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3VtbWFyaWVzQ2FsY3VsYXRvcjxULCBBIGV4dGVuZHMgU3VtbWFyaWVzVmFsdWVzPiB7XG5cblx0YWJzdHJhY3QgZm9yRGF0YVR5cGUoZGF0YVR5cGU6IERhdGFUeXBlKTogYm9vbGVhbjtcblxuXHRhYnN0cmFjdCBwcmVwYXJlKGZpZWxkOiBBbGxGaWVsZFR5cGVzKTogdm9pZDtcblxuXHRhYnN0cmFjdCBwb3N0Q2FsY3VsYXRlKGZpZWxkOiBBbGxGaWVsZFR5cGVzLCBpdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiB2b2lkO1xuXG5cdGFic3RyYWN0IGFnZ3JlZ2F0ZShmaWVsZDogQWxsRmllbGRUeXBlcywgdmFsdWU6IFQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IGdlbmVyYXRlQWdncmVnYXRlZFZhbHVlcyhmaWVsZDogQWxsRmllbGRUeXBlcyk6IEE7XG5cblx0Y2FsY3VsYXRlKGZpZWxkczogQXJyYXk8QWxsRmllbGRUeXBlcz4sIGl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IE1hcDxzdHJpbmcsIEE+IHtcblxuXHRcdGNvbnN0IGZpbHRlcmVkRmllbGRzID0gZmllbGRzLmZpbHRlcigoZmllbGQ6IEFsbEZpZWxkVHlwZXMpID0+IHRoaXMuZm9yRGF0YVR5cGUoZmllbGQuZ2V0RGF0YVR5cGUoKSkpO1xuXG5cdFx0aWYgKCFmaWx0ZXJlZEZpZWxkcyB8fCBmaWx0ZXJlZEZpZWxkcy5sZW5ndGggPT09IDAgfHwgaXRlbXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRsZXQgY291bnQgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpLFxuXHRcdFx0ZGlzdGluY3QgPSBuZXcgTWFwPHN0cmluZywgU2V0PHN0cmluZz4+KCk7XG5cblx0XHQvLyBpbml0XG5cdFx0ZmlsdGVyZWRGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IEFsbEZpZWxkVHlwZXMpID0+IHtcblxuXHRcdFx0Y29uc3Qga2V5ID0gZmllbGQuZ2V0S2V5KCk7XG5cblx0XHRcdGNvdW50LnNldChrZXksIDApO1xuXHRcdFx0ZGlzdGluY3Quc2V0KGtleSwgbmV3IFNldCgpKTtcblxuXHRcdFx0dGhpcy5wcmVwYXJlKGZpZWxkKTtcblx0XHR9KTtcblxuXHRcdC8vIGNhbGN1bGF0ZVxuXHRcdGl0ZW1zLmZvckVhY2goKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkpID0+IHtcblxuXHRcdFx0ZmlsdGVyZWRGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IEFsbEZpZWxkVHlwZXMpID0+IHtcblxuXHRcdFx0XHRjb25zdCBrZXkgPSBmaWVsZC5nZXRLZXkoKSxcblx0XHRcdFx0XHR2YWx1ZSA9IGZpZWxkLmdldFZhbHVlKGl0ZW0pO1xuXG5cdFx0XHRcdGlmICh2YWx1ZSAhPT0gbnVsbCB8fCB2YWx1ZSAhPT0gdW5kZWZpbmVkIHx8IHZhbHVlICE9PSAnJykge1xuXG5cdFx0XHRcdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuQ09VTlQpKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBjb3VudEZvckZpZWxkID0gY291bnQuZ2V0KGtleSk7XG5cdFx0XHRcdFx0XHRjb3VudC5zZXQoa2V5LCBjb3VudEZvckZpZWxkICsgMSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuRElTVElOQ1QpKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBkaXN0aW5jdFNldCA9IGRpc3RpbmN0LmdldChrZXkpO1xuXHRcdFx0XHRcdFx0ZGlzdGluY3RTZXQuYWRkKHZhbHVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmFnZ3JlZ2F0ZShmaWVsZCwgdmFsdWUpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRmaWx0ZXJlZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogQWxsRmllbGRUeXBlcykgPT4ge1xuXG5cdFx0XHR0aGlzLnBvc3RDYWxjdWxhdGUoZmllbGQsIGl0ZW1zKTtcblxuXHRcdH0pO1xuXG5cdFx0bGV0IHN1bW1hcmllcyA9IG5ldyBNYXAoKTtcblxuXHRcdGZpbHRlcmVkRmllbGRzLmZvckVhY2goKGZpZWxkOiBBbGxGaWVsZFR5cGVzKSA9PiB7XG5cblx0XHRcdGNvbnN0IGtleSA9IGZpZWxkLmdldElkKCkuZ2V0SWQoKTtcblxuXHRcdFx0bGV0IGFnZ3JlZ2F0ZWRWYWx1ZXMgPSB0aGlzLmdlbmVyYXRlQWdncmVnYXRlZFZhbHVlcyhmaWVsZCk7XG5cblx0XHRcdGlmIChmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLkNPVU5UKSkge1xuXHRcdFx0XHRhZ2dyZWdhdGVkVmFsdWVzLnNldENvdW50KGNvdW50LmdldChrZXkpKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuRElTVElOQ1QpKSB7XG5cdFx0XHRcdGFnZ3JlZ2F0ZWRWYWx1ZXMuc2V0RGlzdGluY3QoKGRpc3RpbmN0LmdldChrZXkpKS5zaXplKTtcblx0XHRcdH1cblxuXHRcdFx0c3VtbWFyaWVzLnNldChrZXksIGFnZ3JlZ2F0ZWRWYWx1ZXMpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHN1bW1hcmllcztcblx0fVxuXG59XG4iXX0=