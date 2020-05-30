/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SummariesType } from '../summaries.type';
/**
 * @abstract
 * @template T, A
 */
export class SummariesCalculator {
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
                    if (field.isSummaries(SummariesType.COUNT)) {
                        /** @type {?} */
                        const countForField = count.get(key);
                        count.set(key, countForField + 1);
                    }
                    if (field.isSummaries(SummariesType.DISTINCT)) {
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
        let summaries = new Map();
        filteredFields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        (field) => {
            /** @type {?} */
            const key = field.getId().getId();
            /** @type {?} */
            let aggregatedValues = this.generateAggregatedValues(field);
            if (field.isSummaries(SummariesType.COUNT)) {
                aggregatedValues.setCount(count.get(key));
            }
            if (field.isSummaries(SummariesType.DISTINCT)) {
                aggregatedValues.setDistinct((distinct.get(key)).size);
            }
            summaries.set(key, aggregatedValues);
        }));
        return summaries;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmNhbGN1bGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9zdW1tYXJpZXMvY2FsY3VsYXRpb24vc3VtbWFyaWVzLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7QUFJbEQsTUFBTSxPQUFnQixtQkFBbUI7Ozs7OztJQVl4QyxTQUFTLENBQUMsTUFBNEIsRUFBRSxLQUE4Qjs7Y0FFL0QsY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxLQUFvQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFDO1FBRXJHLElBQUksQ0FBQyxjQUFjLElBQUksY0FBYyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDekUsT0FBTyxJQUFJLENBQUM7U0FDWjs7WUFFRyxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQWtCOztZQUNwQyxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQXVCO1FBRTFDLE9BQU87UUFDUCxjQUFjLENBQUMsT0FBTzs7OztRQUFDLENBQUMsS0FBb0IsRUFBRSxFQUFFOztrQkFFekMsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFFMUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBRTdCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsQ0FBQyxFQUFDLENBQUM7UUFFSCxZQUFZO1FBQ1osS0FBSyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLElBQXNCLEVBQUUsRUFBRTtZQUV4QyxjQUFjLENBQUMsT0FBTzs7OztZQUFDLENBQUMsS0FBb0IsRUFBRSxFQUFFOztzQkFFekMsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7O3NCQUN6QixLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBRTdCLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7b0JBRTFELElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7OzhCQUNyQyxhQUFhLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7d0JBQ3BDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDbEM7b0JBRUQsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRTs7OEJBQ3hDLFdBQVcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzt3QkFDckMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDdkI7aUJBQ0Q7Z0JBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDOUIsQ0FBQyxFQUFDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztRQUVILGNBQWMsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxLQUFvQixFQUFFLEVBQUU7WUFFL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFbEMsQ0FBQyxFQUFDLENBQUM7O1lBRUMsU0FBUyxHQUFHLElBQUksR0FBRyxFQUFFO1FBRXpCLGNBQWMsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxLQUFvQixFQUFFLEVBQUU7O2tCQUV6QyxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRTs7Z0JBRTdCLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUM7WUFFM0QsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDM0MsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMxQztZQUVELElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzlDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2RDtZQUVELFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDdEMsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDO0NBRUQ7Ozs7Ozs7SUFyRkEsb0VBQWtEOzs7Ozs7SUFFbEQsNkRBQTZDOzs7Ozs7O0lBRTdDLDBFQUFtRjs7Ozs7OztJQUVuRixzRUFBeUQ7Ozs7OztJQUV6RCw4RUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdW1tYXJpZXNWYWx1ZXMgfSBmcm9tICcuL3N1bW1hcmllcy52YWx1ZXMnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN1bW1hcmllc1R5cGUgfSBmcm9tICcuLi9zdW1tYXJpZXMudHlwZSc7XG5pbXBvcnQgeyBBbGxGaWVsZFR5cGVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9kYXRhLXR5cGUvYWxsLWZpZWxkLXR5cGVzJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3VtbWFyaWVzQ2FsY3VsYXRvcjxULCBBIGV4dGVuZHMgU3VtbWFyaWVzVmFsdWVzPiB7XG5cblx0YWJzdHJhY3QgZm9yRGF0YVR5cGUoZGF0YVR5cGU6IERhdGFUeXBlKTogYm9vbGVhbjtcblxuXHRhYnN0cmFjdCBwcmVwYXJlKGZpZWxkOiBBbGxGaWVsZFR5cGVzKTogdm9pZDtcblxuXHRhYnN0cmFjdCBwb3N0Q2FsY3VsYXRlKGZpZWxkOiBBbGxGaWVsZFR5cGVzLCBpdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiB2b2lkO1xuXG5cdGFic3RyYWN0IGFnZ3JlZ2F0ZShmaWVsZDogQWxsRmllbGRUeXBlcywgdmFsdWU6IFQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IGdlbmVyYXRlQWdncmVnYXRlZFZhbHVlcyhmaWVsZDogQWxsRmllbGRUeXBlcyk6IEE7XG5cblx0Y2FsY3VsYXRlKGZpZWxkczogQXJyYXk8QWxsRmllbGRUeXBlcz4sIGl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IE1hcDxzdHJpbmcsIEE+IHtcblxuXHRcdGNvbnN0IGZpbHRlcmVkRmllbGRzID0gZmllbGRzLmZpbHRlcigoZmllbGQ6IEFsbEZpZWxkVHlwZXMpID0+IHRoaXMuZm9yRGF0YVR5cGUoZmllbGQuZ2V0RGF0YVR5cGUoKSkpO1xuXG5cdFx0aWYgKCFmaWx0ZXJlZEZpZWxkcyB8fCBmaWx0ZXJlZEZpZWxkcy5sZW5ndGggPT09IDAgfHwgaXRlbXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRsZXQgY291bnQgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpLFxuXHRcdFx0ZGlzdGluY3QgPSBuZXcgTWFwPHN0cmluZywgU2V0PHN0cmluZz4+KCk7XG5cblx0XHQvLyBpbml0XG5cdFx0ZmlsdGVyZWRGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IEFsbEZpZWxkVHlwZXMpID0+IHtcblxuXHRcdFx0Y29uc3Qga2V5ID0gZmllbGQuZ2V0S2V5KCk7XG5cblx0XHRcdGNvdW50LnNldChrZXksIDApO1xuXHRcdFx0ZGlzdGluY3Quc2V0KGtleSwgbmV3IFNldCgpKTtcblxuXHRcdFx0dGhpcy5wcmVwYXJlKGZpZWxkKTtcblx0XHR9KTtcblxuXHRcdC8vIGNhbGN1bGF0ZVxuXHRcdGl0ZW1zLmZvckVhY2goKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkpID0+IHtcblxuXHRcdFx0ZmlsdGVyZWRGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IEFsbEZpZWxkVHlwZXMpID0+IHtcblxuXHRcdFx0XHRjb25zdCBrZXkgPSBmaWVsZC5nZXRLZXkoKSxcblx0XHRcdFx0XHR2YWx1ZSA9IGZpZWxkLmdldFZhbHVlKGl0ZW0pO1xuXG5cdFx0XHRcdGlmICh2YWx1ZSAhPT0gbnVsbCB8fCB2YWx1ZSAhPT0gdW5kZWZpbmVkIHx8IHZhbHVlICE9PSAnJykge1xuXG5cdFx0XHRcdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuQ09VTlQpKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBjb3VudEZvckZpZWxkID0gY291bnQuZ2V0KGtleSk7XG5cdFx0XHRcdFx0XHRjb3VudC5zZXQoa2V5LCBjb3VudEZvckZpZWxkICsgMSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuRElTVElOQ1QpKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBkaXN0aW5jdFNldCA9IGRpc3RpbmN0LmdldChrZXkpO1xuXHRcdFx0XHRcdFx0ZGlzdGluY3RTZXQuYWRkKHZhbHVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmFnZ3JlZ2F0ZShmaWVsZCwgdmFsdWUpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRmaWx0ZXJlZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogQWxsRmllbGRUeXBlcykgPT4ge1xuXG5cdFx0XHR0aGlzLnBvc3RDYWxjdWxhdGUoZmllbGQsIGl0ZW1zKTtcblxuXHRcdH0pO1xuXG5cdFx0bGV0IHN1bW1hcmllcyA9IG5ldyBNYXAoKTtcblxuXHRcdGZpbHRlcmVkRmllbGRzLmZvckVhY2goKGZpZWxkOiBBbGxGaWVsZFR5cGVzKSA9PiB7XG5cblx0XHRcdGNvbnN0IGtleSA9IGZpZWxkLmdldElkKCkuZ2V0SWQoKTtcblxuXHRcdFx0bGV0IGFnZ3JlZ2F0ZWRWYWx1ZXMgPSB0aGlzLmdlbmVyYXRlQWdncmVnYXRlZFZhbHVlcyhmaWVsZCk7XG5cblx0XHRcdGlmIChmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLkNPVU5UKSkge1xuXHRcdFx0XHRhZ2dyZWdhdGVkVmFsdWVzLnNldENvdW50KGNvdW50LmdldChrZXkpKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuRElTVElOQ1QpKSB7XG5cdFx0XHRcdGFnZ3JlZ2F0ZWRWYWx1ZXMuc2V0RGlzdGluY3QoKGRpc3RpbmN0LmdldChrZXkpKS5zaXplKTtcblx0XHRcdH1cblxuXHRcdFx0c3VtbWFyaWVzLnNldChrZXksIGFnZ3JlZ2F0ZWRWYWx1ZXMpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHN1bW1hcmllcztcblx0fVxuXG59XG4iXX0=