/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregationType } from '../aggregation.type';
/**
 * @abstract
 * @template T, A
 */
export class AggregationCalculator {
    /**
     * @param {?} fields
     * @param {?} items
     * @return {?}
     */
    calculate(fields, items) {
        /** @type {?} */
        const filteredFields = fields.filter((/**
         * @param {?} field
         * @return {?}
         */
        (field) => this.forDataType(field.getDataType())));
        if (!filteredFields || filteredFields.length === 0 || items.length === 0) {
            return null;
        }
        /** @type {?} */
        let count = new Map();
        /** @type {?} */
        let distinct = new Map();
        // init
        filteredFields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        (field) => {
            /** @type {?} */
            const key = field.getKey();
            count.set(key, 0);
            distinct.set(key, new Set());
            this.prepare(field);
        }));
        // calculate
        items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            filteredFields.forEach((/**
             * @param {?} field
             * @return {?}
             */
            (field) => {
                /** @type {?} */
                const key = field.getKey();
                /** @type {?} */
                const value = field.getValue(item);
                if (value !== null || value !== undefined || value !== '') {
                    if (field.isAggregation(AggregationType.COUNT)) {
                        /** @type {?} */
                        const countForField = count.get(key);
                        count.set(key, countForField + 1);
                    }
                    if (field.isAggregation(AggregationType.DISTINCT)) {
                        /** @type {?} */
                        const distinctSet = distinct.get(key);
                        distinctSet.add(value);
                    }
                }
                this.aggregate(field, value);
            }));
        }));
        filteredFields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        (field) => {
            this.postCalculate(field, items);
        }));
        /** @type {?} */
        let aggregations = new Map();
        filteredFields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        (field) => {
            /** @type {?} */
            const key = field.getId().getId();
            /** @type {?} */
            let aggregatedValues = this.generateAggregatedValues(field);
            if (field.isAggregation(AggregationType.COUNT)) {
                aggregatedValues.setCount(count.get(key));
            }
            if (field.isAggregation(AggregationType.DISTINCT)) {
                aggregatedValues.setDistinct((distinct.get(key)).size);
            }
            aggregations.set(key, aggregatedValues);
        }));
        return aggregations;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRpb24uY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2FnZ3JlZ2F0aW9uL2NhbGN1bGF0aW9uL2FnZ3JlZ2F0aW9uLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7QUFJdEQsTUFBTSxPQUFnQixxQkFBcUI7Ozs7OztJQVkxQyxTQUFTLENBQUMsTUFBNEIsRUFBRSxLQUE4Qjs7Y0FFL0QsY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxLQUFvQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFDO1FBRXJHLElBQUksQ0FBQyxjQUFjLElBQUksY0FBYyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDekUsT0FBTyxJQUFJLENBQUM7U0FDWjs7WUFFRyxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQWtCOztZQUNwQyxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQXVCO1FBRTFDLE9BQU87UUFDUCxjQUFjLENBQUMsT0FBTzs7OztRQUFDLENBQUMsS0FBb0IsRUFBRSxFQUFFOztrQkFFekMsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFFMUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBRTdCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsQ0FBQyxFQUFDLENBQUM7UUFFSCxZQUFZO1FBQ1osS0FBSyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLElBQXNCLEVBQUUsRUFBRTtZQUV4QyxjQUFjLENBQUMsT0FBTzs7OztZQUFDLENBQUMsS0FBb0IsRUFBRSxFQUFFOztzQkFFekMsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7O3NCQUN6QixLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBRTdCLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7b0JBRTFELElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUU7OzhCQUN6QyxhQUFhLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7d0JBQ3BDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDbEM7b0JBRUQsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsRUFBRTs7OEJBQzVDLFdBQVcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzt3QkFDckMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDdkI7aUJBQ0Q7Z0JBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDOUIsQ0FBQyxFQUFDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztRQUVILGNBQWMsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxLQUFvQixFQUFFLEVBQUU7WUFFL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFbEMsQ0FBQyxFQUFDLENBQUM7O1lBRUMsWUFBWSxHQUFHLElBQUksR0FBRyxFQUFFO1FBRTVCLGNBQWMsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxLQUFvQixFQUFFLEVBQUU7O2tCQUV6QyxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRTs7Z0JBRTdCLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUM7WUFFM0QsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDL0MsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMxQztZQUVELElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2xELGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2RDtZQUVELFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDekMsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDO0NBRUQ7Ozs7Ozs7SUFyRkEsc0VBQWtEOzs7Ozs7SUFFbEQsK0RBQTZDOzs7Ozs7O0lBRTdDLDRFQUFtRjs7Ozs7OztJQUVuRix3RUFBeUQ7Ozs7OztJQUV6RCxnRkFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVkVmFsdWVzIH0gZnJvbSAnLi9hZ2dyZWdhdGVkLnZhbHVlcyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uVHlwZSB9IGZyb20gJy4uL2FnZ3JlZ2F0aW9uLnR5cGUnO1xuaW1wb3J0IHsgQWxsRmllbGRUeXBlcyB9IGZyb20gJy4uLy4uL2ZpZWxkL2RhdGEtdHlwZS9hbGwtZmllbGQtdHlwZXMnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBZ2dyZWdhdGlvbkNhbGN1bGF0b3I8VCwgQSBleHRlbmRzIEFnZ3JlZ2F0ZWRWYWx1ZXM+IHtcblxuXHRhYnN0cmFjdCBmb3JEYXRhVHlwZShkYXRhVHlwZTogRGF0YVR5cGUpOiBib29sZWFuO1xuXG5cdGFic3RyYWN0IHByZXBhcmUoZmllbGQ6IEFsbEZpZWxkVHlwZXMpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHBvc3RDYWxjdWxhdGUoZmllbGQ6IEFsbEZpZWxkVHlwZXMsIGl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IHZvaWQ7XG5cblx0YWJzdHJhY3QgYWdncmVnYXRlKGZpZWxkOiBBbGxGaWVsZFR5cGVzLCB2YWx1ZTogVCk6IHZvaWQ7XG5cblx0YWJzdHJhY3QgZ2VuZXJhdGVBZ2dyZWdhdGVkVmFsdWVzKGZpZWxkOiBBbGxGaWVsZFR5cGVzKTogQTtcblxuXHRjYWxjdWxhdGUoZmllbGRzOiBBcnJheTxBbGxGaWVsZFR5cGVzPiwgaXRlbXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogTWFwPHN0cmluZywgQT4ge1xuXG5cdFx0Y29uc3QgZmlsdGVyZWRGaWVsZHMgPSBmaWVsZHMuZmlsdGVyKChmaWVsZDogQWxsRmllbGRUeXBlcykgPT4gdGhpcy5mb3JEYXRhVHlwZShmaWVsZC5nZXREYXRhVHlwZSgpKSk7XG5cblx0XHRpZiAoIWZpbHRlcmVkRmllbGRzIHx8IGZpbHRlcmVkRmllbGRzLmxlbmd0aCA9PT0gMCB8fCBpdGVtcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGxldCBjb3VudCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCksXG5cdFx0XHRkaXN0aW5jdCA9IG5ldyBNYXA8c3RyaW5nLCBTZXQ8c3RyaW5nPj4oKTtcblxuXHRcdC8vIGluaXRcblx0XHRmaWx0ZXJlZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogQWxsRmllbGRUeXBlcykgPT4ge1xuXG5cdFx0XHRjb25zdCBrZXkgPSBmaWVsZC5nZXRLZXkoKTtcblxuXHRcdFx0Y291bnQuc2V0KGtleSwgMCk7XG5cdFx0XHRkaXN0aW5jdC5zZXQoa2V5LCBuZXcgU2V0KCkpO1xuXG5cdFx0XHR0aGlzLnByZXBhcmUoZmllbGQpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gY2FsY3VsYXRlXG5cdFx0aXRlbXMuZm9yRWFjaCgoaXRlbTogT3JpZ2luSXRlbUVudGl0eSkgPT4ge1xuXG5cdFx0XHRmaWx0ZXJlZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogQWxsRmllbGRUeXBlcykgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGtleSA9IGZpZWxkLmdldEtleSgpLFxuXHRcdFx0XHRcdHZhbHVlID0gZmllbGQuZ2V0VmFsdWUoaXRlbSk7XG5cblx0XHRcdFx0aWYgKHZhbHVlICE9PSBudWxsIHx8IHZhbHVlICE9PSB1bmRlZmluZWQgfHwgdmFsdWUgIT09ICcnKSB7XG5cblx0XHRcdFx0XHRpZiAoZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuQ09VTlQpKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBjb3VudEZvckZpZWxkID0gY291bnQuZ2V0KGtleSk7XG5cdFx0XHRcdFx0XHRjb3VudC5zZXQoa2V5LCBjb3VudEZvckZpZWxkICsgMSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGZpZWxkLmlzQWdncmVnYXRpb24oQWdncmVnYXRpb25UeXBlLkRJU1RJTkNUKSkge1xuXHRcdFx0XHRcdFx0Y29uc3QgZGlzdGluY3RTZXQgPSBkaXN0aW5jdC5nZXQoa2V5KTtcblx0XHRcdFx0XHRcdGRpc3RpbmN0U2V0LmFkZCh2YWx1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5hZ2dyZWdhdGUoZmllbGQsIHZhbHVlKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0ZmlsdGVyZWRGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IEFsbEZpZWxkVHlwZXMpID0+IHtcblxuXHRcdFx0dGhpcy5wb3N0Q2FsY3VsYXRlKGZpZWxkLCBpdGVtcyk7XG5cblx0XHR9KTtcblxuXHRcdGxldCBhZ2dyZWdhdGlvbnMgPSBuZXcgTWFwKCk7XG5cblx0XHRmaWx0ZXJlZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogQWxsRmllbGRUeXBlcykgPT4ge1xuXG5cdFx0XHRjb25zdCBrZXkgPSBmaWVsZC5nZXRJZCgpLmdldElkKCk7XG5cblx0XHRcdGxldCBhZ2dyZWdhdGVkVmFsdWVzID0gdGhpcy5nZW5lcmF0ZUFnZ3JlZ2F0ZWRWYWx1ZXMoZmllbGQpO1xuXG5cdFx0XHRpZiAoZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuQ09VTlQpKSB7XG5cdFx0XHRcdGFnZ3JlZ2F0ZWRWYWx1ZXMuc2V0Q291bnQoY291bnQuZ2V0KGtleSkpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuRElTVElOQ1QpKSB7XG5cdFx0XHRcdGFnZ3JlZ2F0ZWRWYWx1ZXMuc2V0RGlzdGluY3QoKGRpc3RpbmN0LmdldChrZXkpKS5zaXplKTtcblx0XHRcdH1cblxuXHRcdFx0YWdncmVnYXRpb25zLnNldChrZXksIGFnZ3JlZ2F0ZWRWYWx1ZXMpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGFnZ3JlZ2F0aW9ucztcblx0fVxuXG59XG4iXX0=