/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregationType } from '../aggregation.type';
/**
 * @abstract
 * @template T, A
 */
var /**
 * @abstract
 * @template T, A
 */
AggregationCalculator = /** @class */ (function () {
    function AggregationCalculator() {
    }
    /**
     * @param {?} fields
     * @param {?} items
     * @return {?}
     */
    AggregationCalculator.prototype.calculate = /**
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
                    if (field.isAggregation(AggregationType.COUNT)) {
                        /** @type {?} */
                        var countForField = count.get(key);
                        count.set(key, countForField + 1);
                    }
                    if (field.isAggregation(AggregationType.DISTINCT)) {
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
        var aggregations = new Map();
        filteredFields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            /** @type {?} */
            var key = field.getId().getId();
            /** @type {?} */
            var aggregatedValues = _this.generateAggregatedValues(field);
            if (field.isAggregation(AggregationType.COUNT)) {
                aggregatedValues.setCount(count.get(key));
            }
            if (field.isAggregation(AggregationType.DISTINCT)) {
                aggregatedValues.setDistinct((distinct.get(key)).size);
            }
            aggregations.set(key, aggregatedValues);
        }));
        return aggregations;
    };
    return AggregationCalculator;
}());
/**
 * @abstract
 * @template T, A
 */
export { AggregationCalculator };
if (false) {
    /**
     * @abstract
     * @param {?} dataType
     * @return {?}
     */
    AggregationCalculator.prototype.forDataType = function (dataType) { };
    /**
     * @abstract
     * @param {?} field
     * @return {?}
     */
    AggregationCalculator.prototype.prepare = function (field) { };
    /**
     * @abstract
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    AggregationCalculator.prototype.postCalculate = function (field, items) { };
    /**
     * @abstract
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    AggregationCalculator.prototype.aggregate = function (field, value) { };
    /**
     * @abstract
     * @param {?} field
     * @return {?}
     */
    AggregationCalculator.prototype.generateAggregatedValues = function (field) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRpb24uY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2FnZ3JlZ2F0aW9uL2NhbGN1bGF0aW9uL2FnZ3JlZ2F0aW9uLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7QUFJdEQ7Ozs7O0lBQUE7SUF1RkEsQ0FBQzs7Ozs7O0lBM0VBLHlDQUFTOzs7OztJQUFULFVBQVUsTUFBNEIsRUFBRSxLQUE4QjtRQUF0RSxpQkF5RUM7O1lBdkVNLGNBQWMsR0FBRyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsS0FBb0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQXJDLENBQXFDLEVBQUM7UUFFckcsSUFBSSxDQUFDLGNBQWMsSUFBSSxjQUFjLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN6RSxPQUFPLElBQUksQ0FBQztTQUNaOztZQUVHLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBa0I7O1lBQ3BDLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBdUI7UUFFMUMsT0FBTztRQUNQLGNBQWMsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxLQUFvQjs7Z0JBRXJDLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBRTFCLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztZQUU3QixLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsRUFBQyxDQUFDO1FBRUgsWUFBWTtRQUNaLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxJQUFzQjtZQUVwQyxjQUFjLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsS0FBb0I7O29CQUVyQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTs7b0JBQ3pCLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFFN0IsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtvQkFFMUQsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRTs7NEJBQ3pDLGFBQWEsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzt3QkFDcEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUNsQztvQkFFRCxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFOzs0QkFDNUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO3dCQUNyQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUN2QjtpQkFDRDtnQkFFRCxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM5QixDQUFDLEVBQUMsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO1FBRUgsY0FBYyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLEtBQW9CO1lBRTNDLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRWxDLENBQUMsRUFBQyxDQUFDOztZQUVDLFlBQVksR0FBRyxJQUFJLEdBQUcsRUFBRTtRQUU1QixjQUFjLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsS0FBb0I7O2dCQUVyQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRTs7Z0JBRTdCLGdCQUFnQixHQUFHLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUM7WUFFM0QsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDL0MsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMxQztZQUVELElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2xELGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2RDtZQUVELFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDekMsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDO0lBRUYsNEJBQUM7QUFBRCxDQUFDLEFBdkZELElBdUZDOzs7Ozs7Ozs7Ozs7SUFyRkEsc0VBQWtEOzs7Ozs7SUFFbEQsK0RBQTZDOzs7Ozs7O0lBRTdDLDRFQUFtRjs7Ozs7OztJQUVuRix3RUFBeUQ7Ozs7OztJQUV6RCxnRkFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVkVmFsdWVzIH0gZnJvbSAnLi9hZ2dyZWdhdGVkLnZhbHVlcyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uVHlwZSB9IGZyb20gJy4uL2FnZ3JlZ2F0aW9uLnR5cGUnO1xuaW1wb3J0IHsgQWxsRmllbGRUeXBlcyB9IGZyb20gJy4uLy4uL2ZpZWxkL2RhdGEtdHlwZS9hbGwtZmllbGQtdHlwZXMnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBZ2dyZWdhdGlvbkNhbGN1bGF0b3I8VCwgQSBleHRlbmRzIEFnZ3JlZ2F0ZWRWYWx1ZXM+IHtcblxuXHRhYnN0cmFjdCBmb3JEYXRhVHlwZShkYXRhVHlwZTogRGF0YVR5cGUpOiBib29sZWFuO1xuXG5cdGFic3RyYWN0IHByZXBhcmUoZmllbGQ6IEFsbEZpZWxkVHlwZXMpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHBvc3RDYWxjdWxhdGUoZmllbGQ6IEFsbEZpZWxkVHlwZXMsIGl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IHZvaWQ7XG5cblx0YWJzdHJhY3QgYWdncmVnYXRlKGZpZWxkOiBBbGxGaWVsZFR5cGVzLCB2YWx1ZTogVCk6IHZvaWQ7XG5cblx0YWJzdHJhY3QgZ2VuZXJhdGVBZ2dyZWdhdGVkVmFsdWVzKGZpZWxkOiBBbGxGaWVsZFR5cGVzKTogQTtcblxuXHRjYWxjdWxhdGUoZmllbGRzOiBBcnJheTxBbGxGaWVsZFR5cGVzPiwgaXRlbXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogTWFwPHN0cmluZywgQT4ge1xuXG5cdFx0Y29uc3QgZmlsdGVyZWRGaWVsZHMgPSBmaWVsZHMuZmlsdGVyKChmaWVsZDogQWxsRmllbGRUeXBlcykgPT4gdGhpcy5mb3JEYXRhVHlwZShmaWVsZC5nZXREYXRhVHlwZSgpKSk7XG5cblx0XHRpZiAoIWZpbHRlcmVkRmllbGRzIHx8IGZpbHRlcmVkRmllbGRzLmxlbmd0aCA9PT0gMCB8fCBpdGVtcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGxldCBjb3VudCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCksXG5cdFx0XHRkaXN0aW5jdCA9IG5ldyBNYXA8c3RyaW5nLCBTZXQ8c3RyaW5nPj4oKTtcblxuXHRcdC8vIGluaXRcblx0XHRmaWx0ZXJlZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogQWxsRmllbGRUeXBlcykgPT4ge1xuXG5cdFx0XHRjb25zdCBrZXkgPSBmaWVsZC5nZXRLZXkoKTtcblxuXHRcdFx0Y291bnQuc2V0KGtleSwgMCk7XG5cdFx0XHRkaXN0aW5jdC5zZXQoa2V5LCBuZXcgU2V0KCkpO1xuXG5cdFx0XHR0aGlzLnByZXBhcmUoZmllbGQpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gY2FsY3VsYXRlXG5cdFx0aXRlbXMuZm9yRWFjaCgoaXRlbTogT3JpZ2luSXRlbUVudGl0eSkgPT4ge1xuXG5cdFx0XHRmaWx0ZXJlZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogQWxsRmllbGRUeXBlcykgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGtleSA9IGZpZWxkLmdldEtleSgpLFxuXHRcdFx0XHRcdHZhbHVlID0gZmllbGQuZ2V0VmFsdWUoaXRlbSk7XG5cblx0XHRcdFx0aWYgKHZhbHVlICE9PSBudWxsIHx8IHZhbHVlICE9PSB1bmRlZmluZWQgfHwgdmFsdWUgIT09ICcnKSB7XG5cblx0XHRcdFx0XHRpZiAoZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuQ09VTlQpKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBjb3VudEZvckZpZWxkID0gY291bnQuZ2V0KGtleSk7XG5cdFx0XHRcdFx0XHRjb3VudC5zZXQoa2V5LCBjb3VudEZvckZpZWxkICsgMSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGZpZWxkLmlzQWdncmVnYXRpb24oQWdncmVnYXRpb25UeXBlLkRJU1RJTkNUKSkge1xuXHRcdFx0XHRcdFx0Y29uc3QgZGlzdGluY3RTZXQgPSBkaXN0aW5jdC5nZXQoa2V5KTtcblx0XHRcdFx0XHRcdGRpc3RpbmN0U2V0LmFkZCh2YWx1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5hZ2dyZWdhdGUoZmllbGQsIHZhbHVlKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0ZmlsdGVyZWRGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IEFsbEZpZWxkVHlwZXMpID0+IHtcblxuXHRcdFx0dGhpcy5wb3N0Q2FsY3VsYXRlKGZpZWxkLCBpdGVtcyk7XG5cblx0XHR9KTtcblxuXHRcdGxldCBhZ2dyZWdhdGlvbnMgPSBuZXcgTWFwKCk7XG5cblx0XHRmaWx0ZXJlZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogQWxsRmllbGRUeXBlcykgPT4ge1xuXG5cdFx0XHRjb25zdCBrZXkgPSBmaWVsZC5nZXRJZCgpLmdldElkKCk7XG5cblx0XHRcdGxldCBhZ2dyZWdhdGVkVmFsdWVzID0gdGhpcy5nZW5lcmF0ZUFnZ3JlZ2F0ZWRWYWx1ZXMoZmllbGQpO1xuXG5cdFx0XHRpZiAoZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuQ09VTlQpKSB7XG5cdFx0XHRcdGFnZ3JlZ2F0ZWRWYWx1ZXMuc2V0Q291bnQoY291bnQuZ2V0KGtleSkpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuRElTVElOQ1QpKSB7XG5cdFx0XHRcdGFnZ3JlZ2F0ZWRWYWx1ZXMuc2V0RGlzdGluY3QoKGRpc3RpbmN0LmdldChrZXkpKS5zaXplKTtcblx0XHRcdH1cblxuXHRcdFx0YWdncmVnYXRpb25zLnNldChrZXksIGFnZ3JlZ2F0ZWRWYWx1ZXMpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGFnZ3JlZ2F0aW9ucztcblx0fVxuXG59XG4iXX0=