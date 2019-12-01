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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRpb24uY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvYWdncmVnYXRpb24vY2FsY3VsYXRpb24vYWdncmVnYXRpb24uY2FsY3VsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7OztBQUd0RDs7Ozs7SUFBQTtJQXVGQSxDQUFDOzs7Ozs7SUEzRUEseUNBQVM7Ozs7O0lBQVQsVUFBVSxNQUFvQixFQUFFLEtBQThCO1FBQTlELGlCQXlFQzs7WUF2RU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxLQUFZLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFyQyxDQUFxQyxFQUFDO1FBRTdGLElBQUksQ0FBQyxjQUFjLElBQUksY0FBYyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDekUsT0FBTyxJQUFJLENBQUM7U0FDWjs7WUFFRyxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQWtCOztZQUNwQyxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQXVCO1FBRTFDLE9BQU87UUFDUCxjQUFjLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsS0FBWTs7Z0JBRTdCLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBRTFCLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztZQUU3QixLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsRUFBQyxDQUFDO1FBRUgsWUFBWTtRQUNaLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxJQUFzQjtZQUVwQyxjQUFjLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsS0FBWTs7b0JBRTdCLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFOztvQkFDekIsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUU3QixJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO29CQUUxRCxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUFFOzs0QkFDekMsYUFBYSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO3dCQUNwQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQ2xDO29CQUVELElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUU7OzRCQUM1QyxXQUFXLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7d0JBQ3JDLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ3ZCO2lCQUNEO2dCQUVELEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzlCLENBQUMsRUFBQyxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7UUFFSCxjQUFjLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsS0FBWTtZQUVuQyxLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVsQyxDQUFDLEVBQUMsQ0FBQzs7WUFFQyxZQUFZLEdBQUcsSUFBSSxHQUFHLEVBQUU7UUFFNUIsY0FBYyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLEtBQVk7O2dCQUU3QixHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRTs7Z0JBRTdCLGdCQUFnQixHQUFHLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUM7WUFFM0QsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDL0MsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMxQztZQUVELElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2xELGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2RDtZQUVELFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDekMsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDO0lBRUYsNEJBQUM7QUFBRCxDQUFDLEFBdkZELElBdUZDOzs7Ozs7Ozs7Ozs7SUFyRkEsc0VBQWtEOzs7Ozs7SUFFbEQsK0RBQXFDOzs7Ozs7O0lBRXJDLDRFQUEyRTs7Ozs7OztJQUUzRSx3RUFBaUQ7Ozs7OztJQUVqRCxnRkFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVkVmFsdWVzIH0gZnJvbSAnLi9hZ2dyZWdhdGVkLnZhbHVlcyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi9maWVsZC9kYXRhLXR5cGUvZmllbGQnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb21tYW5kL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgQWdncmVnYXRpb25UeXBlIH0gZnJvbSAnLi4vYWdncmVnYXRpb24udHlwZSc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFnZ3JlZ2F0aW9uQ2FsY3VsYXRvcjxULCBBIGV4dGVuZHMgQWdncmVnYXRlZFZhbHVlcz4ge1xuXG5cdGFic3RyYWN0IGZvckRhdGFUeXBlKGRhdGFUeXBlOiBEYXRhVHlwZSk6IGJvb2xlYW47XG5cblx0YWJzdHJhY3QgcHJlcGFyZShmaWVsZDogRmllbGQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHBvc3RDYWxjdWxhdGUoZmllbGQ6IEZpZWxkLCBpdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiB2b2lkO1xuXG5cdGFic3RyYWN0IGFnZ3JlZ2F0ZShmaWVsZDogRmllbGQsIHZhbHVlOiBUKTogdm9pZDtcblxuXHRhYnN0cmFjdCBnZW5lcmF0ZUFnZ3JlZ2F0ZWRWYWx1ZXMoZmllbGQ6IEZpZWxkKTogQTtcblxuXHRjYWxjdWxhdGUoZmllbGRzOiBBcnJheTxGaWVsZD4sIGl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IE1hcDxzdHJpbmcsIEE+IHtcblxuXHRcdGNvbnN0IGZpbHRlcmVkRmllbGRzID0gZmllbGRzLmZpbHRlcigoZmllbGQ6IEZpZWxkKSA9PiB0aGlzLmZvckRhdGFUeXBlKGZpZWxkLmdldERhdGFUeXBlKCkpKTtcblxuXHRcdGlmICghZmlsdGVyZWRGaWVsZHMgfHwgZmlsdGVyZWRGaWVsZHMubGVuZ3RoID09PSAwIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0bGV0IGNvdW50ID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKSxcblx0XHRcdGRpc3RpbmN0ID0gbmV3IE1hcDxzdHJpbmcsIFNldDxzdHJpbmc+PigpO1xuXG5cdFx0Ly8gaW5pdFxuXHRcdGZpbHRlcmVkRmllbGRzLmZvckVhY2goKGZpZWxkOiBGaWVsZCkgPT4ge1xuXG5cdFx0XHRjb25zdCBrZXkgPSBmaWVsZC5nZXRLZXkoKTtcblxuXHRcdFx0Y291bnQuc2V0KGtleSwgMCk7XG5cdFx0XHRkaXN0aW5jdC5zZXQoa2V5LCBuZXcgU2V0KCkpO1xuXG5cdFx0XHR0aGlzLnByZXBhcmUoZmllbGQpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gY2FsY3VsYXRlXG5cdFx0aXRlbXMuZm9yRWFjaCgoaXRlbTogT3JpZ2luSXRlbUVudGl0eSkgPT4ge1xuXG5cdFx0XHRmaWx0ZXJlZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogRmllbGQpID0+IHtcblxuXHRcdFx0XHRjb25zdCBrZXkgPSBmaWVsZC5nZXRLZXkoKSxcblx0XHRcdFx0XHR2YWx1ZSA9IGZpZWxkLmdldFZhbHVlKGl0ZW0pO1xuXG5cdFx0XHRcdGlmICh2YWx1ZSAhPT0gbnVsbCB8fCB2YWx1ZSAhPT0gdW5kZWZpbmVkIHx8IHZhbHVlICE9PSAnJykge1xuXG5cdFx0XHRcdFx0aWYgKGZpZWxkLmlzQWdncmVnYXRpb24oQWdncmVnYXRpb25UeXBlLkNPVU5UKSkge1xuXHRcdFx0XHRcdFx0Y29uc3QgY291bnRGb3JGaWVsZCA9IGNvdW50LmdldChrZXkpO1xuXHRcdFx0XHRcdFx0Y291bnQuc2V0KGtleSwgY291bnRGb3JGaWVsZCArIDEpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChmaWVsZC5pc0FnZ3JlZ2F0aW9uKEFnZ3JlZ2F0aW9uVHlwZS5ESVNUSU5DVCkpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGRpc3RpbmN0U2V0ID0gZGlzdGluY3QuZ2V0KGtleSk7XG5cdFx0XHRcdFx0XHRkaXN0aW5jdFNldC5hZGQodmFsdWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuYWdncmVnYXRlKGZpZWxkLCB2YWx1ZSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdGZpbHRlcmVkRmllbGRzLmZvckVhY2goKGZpZWxkOiBGaWVsZCkgPT4ge1xuXG5cdFx0XHR0aGlzLnBvc3RDYWxjdWxhdGUoZmllbGQsIGl0ZW1zKTtcblxuXHRcdH0pO1xuXG5cdFx0bGV0IGFnZ3JlZ2F0aW9ucyA9IG5ldyBNYXAoKTtcblxuXHRcdGZpbHRlcmVkRmllbGRzLmZvckVhY2goKGZpZWxkOiBGaWVsZCkgPT4ge1xuXG5cdFx0XHRjb25zdCBrZXkgPSBmaWVsZC5nZXRJZCgpLmdldElkKCk7XG5cblx0XHRcdGxldCBhZ2dyZWdhdGVkVmFsdWVzID0gdGhpcy5nZW5lcmF0ZUFnZ3JlZ2F0ZWRWYWx1ZXMoZmllbGQpO1xuXG5cdFx0XHRpZiAoZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuQ09VTlQpKSB7XG5cdFx0XHRcdGFnZ3JlZ2F0ZWRWYWx1ZXMuc2V0Q291bnQoY291bnQuZ2V0KGtleSkpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuRElTVElOQ1QpKSB7XG5cdFx0XHRcdGFnZ3JlZ2F0ZWRWYWx1ZXMuc2V0RGlzdGluY3QoKGRpc3RpbmN0LmdldChrZXkpKS5zaXplKTtcblx0XHRcdH1cblxuXHRcdFx0YWdncmVnYXRpb25zLnNldChrZXksIGFnZ3JlZ2F0ZWRWYWx1ZXMpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGFnZ3JlZ2F0aW9ucztcblx0fVxuXG59XG4iXX0=