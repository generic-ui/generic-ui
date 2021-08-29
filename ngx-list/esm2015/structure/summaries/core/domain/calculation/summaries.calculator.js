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
        const count = new Map();
        /** @type {?} */
        const distinct = new Map();
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
        const summaries = new Map();
        filteredFields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        (field) => {
            /** @type {?} */
            const key = field.getKey();
            /** @type {?} */
            const aggregatedValues = this.generateAggregatedValues(field);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmNhbGN1bGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9kb21haW4vY2FsY3VsYXRpb24vc3VtbWFyaWVzLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7QUFJbEQsTUFBTSxPQUFnQixtQkFBbUI7Ozs7OztJQVl4QyxTQUFTLENBQUMsTUFBb0IsRUFBRSxLQUE4Qjs7Y0FFdkQsY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUM7UUFFN0YsSUFBSSxDQUFDLGNBQWMsSUFBSSxjQUFjLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN6RSxPQUFPLElBQUksQ0FBQztTQUNaOztjQUVLLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBa0I7O2NBQ3RDLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBdUI7UUFFMUMsT0FBTztRQUNQLGNBQWMsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRTs7a0JBRWpDLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBRTFCLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztZQUU3QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsRUFBQyxDQUFDO1FBRUgsWUFBWTtRQUNaLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxJQUFzQixFQUFFLEVBQUU7WUFFeEMsY0FBYyxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLEtBQVksRUFBRSxFQUFFOztzQkFFakMsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7O3NCQUN6QixLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBRTdCLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7b0JBRTFELElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7OzhCQUNyQyxhQUFhLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7d0JBQ3BDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDbEM7b0JBRUQsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRTs7OEJBQ3hDLFdBQVcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzt3QkFDckMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDdkI7aUJBQ0Q7Z0JBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDOUIsQ0FBQyxFQUFDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztRQUVILGNBQWMsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRTtZQUV2QyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVsQyxDQUFDLEVBQUMsQ0FBQzs7Y0FFRyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQUU7UUFFM0IsY0FBYyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEtBQVksRUFBRSxFQUFFOztrQkFFakMsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7O2tCQUVwQixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDO1lBRTdELElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzNDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDMUM7WUFFRCxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUM5QyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkQ7WUFFRCxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxTQUFTLENBQUM7SUFDbEIsQ0FBQztDQUVEOzs7Ozs7O0lBckZBLG9FQUFrRDs7Ozs7O0lBRWxELDZEQUFxQzs7Ozs7OztJQUVyQywwRUFBMkU7Ozs7Ozs7SUFFM0Usc0VBQWlEOzs7Ozs7SUFFakQsOEVBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3VtbWFyaWVzVmFsdWVzIH0gZnJvbSAnLi9zdW1tYXJpZXMudmFsdWVzJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZGF0YS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN1bW1hcmllc1R5cGUgfSBmcm9tICcuLi9zdW1tYXJpZXMudHlwZSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3VtbWFyaWVzQ2FsY3VsYXRvcjxULCBBIGV4dGVuZHMgU3VtbWFyaWVzVmFsdWVzPiB7XG5cblx0YWJzdHJhY3QgZm9yRGF0YVR5cGUoZGF0YVR5cGU6IERhdGFUeXBlKTogYm9vbGVhbjtcblxuXHRhYnN0cmFjdCBwcmVwYXJlKGZpZWxkOiBGaWVsZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3QgcG9zdENhbGN1bGF0ZShmaWVsZDogRmllbGQsIGl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IHZvaWQ7XG5cblx0YWJzdHJhY3QgYWdncmVnYXRlKGZpZWxkOiBGaWVsZCwgdmFsdWU6IFQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IGdlbmVyYXRlQWdncmVnYXRlZFZhbHVlcyhmaWVsZDogRmllbGQpOiBBO1xuXG5cdGNhbGN1bGF0ZShmaWVsZHM6IEFycmF5PEZpZWxkPiwgaXRlbXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogTWFwPHN0cmluZywgQT4ge1xuXG5cdFx0Y29uc3QgZmlsdGVyZWRGaWVsZHMgPSBmaWVsZHMuZmlsdGVyKChmaWVsZDogRmllbGQpID0+IHRoaXMuZm9yRGF0YVR5cGUoZmllbGQuZ2V0RGF0YVR5cGUoKSkpO1xuXG5cdFx0aWYgKCFmaWx0ZXJlZEZpZWxkcyB8fCBmaWx0ZXJlZEZpZWxkcy5sZW5ndGggPT09IDAgfHwgaXRlbXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRjb25zdCBjb3VudCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCksXG5cdFx0XHRkaXN0aW5jdCA9IG5ldyBNYXA8c3RyaW5nLCBTZXQ8c3RyaW5nPj4oKTtcblxuXHRcdC8vIGluaXRcblx0XHRmaWx0ZXJlZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogRmllbGQpID0+IHtcblxuXHRcdFx0Y29uc3Qga2V5ID0gZmllbGQuZ2V0S2V5KCk7XG5cblx0XHRcdGNvdW50LnNldChrZXksIDApO1xuXHRcdFx0ZGlzdGluY3Quc2V0KGtleSwgbmV3IFNldCgpKTtcblxuXHRcdFx0dGhpcy5wcmVwYXJlKGZpZWxkKTtcblx0XHR9KTtcblxuXHRcdC8vIGNhbGN1bGF0ZVxuXHRcdGl0ZW1zLmZvckVhY2goKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkpID0+IHtcblxuXHRcdFx0ZmlsdGVyZWRGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IEZpZWxkKSA9PiB7XG5cblx0XHRcdFx0Y29uc3Qga2V5ID0gZmllbGQuZ2V0S2V5KCksXG5cdFx0XHRcdFx0dmFsdWUgPSBmaWVsZC5nZXRWYWx1ZShpdGVtKTtcblxuXHRcdFx0XHRpZiAodmFsdWUgIT09IG51bGwgfHwgdmFsdWUgIT09IHVuZGVmaW5lZCB8fCB2YWx1ZSAhPT0gJycpIHtcblxuXHRcdFx0XHRcdGlmIChmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLkNPVU5UKSkge1xuXHRcdFx0XHRcdFx0Y29uc3QgY291bnRGb3JGaWVsZCA9IGNvdW50LmdldChrZXkpO1xuXHRcdFx0XHRcdFx0Y291bnQuc2V0KGtleSwgY291bnRGb3JGaWVsZCArIDEpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLkRJU1RJTkNUKSkge1xuXHRcdFx0XHRcdFx0Y29uc3QgZGlzdGluY3RTZXQgPSBkaXN0aW5jdC5nZXQoa2V5KTtcblx0XHRcdFx0XHRcdGRpc3RpbmN0U2V0LmFkZCh2YWx1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5hZ2dyZWdhdGUoZmllbGQsIHZhbHVlKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0ZmlsdGVyZWRGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IEZpZWxkKSA9PiB7XG5cblx0XHRcdHRoaXMucG9zdENhbGN1bGF0ZShmaWVsZCwgaXRlbXMpO1xuXG5cdFx0fSk7XG5cblx0XHRjb25zdCBzdW1tYXJpZXMgPSBuZXcgTWFwKCk7XG5cblx0XHRmaWx0ZXJlZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogRmllbGQpID0+IHtcblxuXHRcdFx0Y29uc3Qga2V5ID0gZmllbGQuZ2V0S2V5KCk7XG5cblx0XHRcdGNvbnN0IGFnZ3JlZ2F0ZWRWYWx1ZXMgPSB0aGlzLmdlbmVyYXRlQWdncmVnYXRlZFZhbHVlcyhmaWVsZCk7XG5cblx0XHRcdGlmIChmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLkNPVU5UKSkge1xuXHRcdFx0XHRhZ2dyZWdhdGVkVmFsdWVzLnNldENvdW50KGNvdW50LmdldChrZXkpKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuRElTVElOQ1QpKSB7XG5cdFx0XHRcdGFnZ3JlZ2F0ZWRWYWx1ZXMuc2V0RGlzdGluY3QoKGRpc3RpbmN0LmdldChrZXkpKS5zaXplKTtcblx0XHRcdH1cblxuXHRcdFx0c3VtbWFyaWVzLnNldChrZXksIGFnZ3JlZ2F0ZWRWYWx1ZXMpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHN1bW1hcmllcztcblx0fVxuXG59XG4iXX0=