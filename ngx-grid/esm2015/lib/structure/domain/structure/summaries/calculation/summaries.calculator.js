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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmNhbGN1bGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9zdW1tYXJpZXMvY2FsY3VsYXRpb24vc3VtbWFyaWVzLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7QUFJbEQsTUFBTSxPQUFnQixtQkFBbUI7Ozs7OztJQVl4QyxTQUFTLENBQUMsTUFBNEIsRUFBRSxLQUE4Qjs7Y0FFL0QsY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxLQUFvQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFDO1FBRXJHLElBQUksQ0FBQyxjQUFjLElBQUksY0FBYyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDekUsT0FBTyxJQUFJLENBQUM7U0FDWjs7WUFFRyxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQWtCOztZQUNwQyxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQXVCO1FBRTFDLE9BQU87UUFDUCxjQUFjLENBQUMsT0FBTzs7OztRQUFDLENBQUMsS0FBb0IsRUFBRSxFQUFFOztrQkFFekMsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFFMUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBRTdCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsQ0FBQyxFQUFDLENBQUM7UUFFSCxZQUFZO1FBQ1osS0FBSyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLElBQXNCLEVBQUUsRUFBRTtZQUV4QyxjQUFjLENBQUMsT0FBTzs7OztZQUFDLENBQUMsS0FBb0IsRUFBRSxFQUFFOztzQkFFekMsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7O3NCQUN6QixLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBRTdCLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7b0JBRTFELElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7OzhCQUNyQyxhQUFhLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7d0JBQ3BDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDbEM7b0JBRUQsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRTs7OEJBQ3hDLFdBQVcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzt3QkFDckMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDdkI7aUJBQ0Q7Z0JBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDOUIsQ0FBQyxFQUFDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztRQUVILGNBQWMsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxLQUFvQixFQUFFLEVBQUU7WUFFL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFbEMsQ0FBQyxFQUFDLENBQUM7O1lBRUMsU0FBUyxHQUFHLElBQUksR0FBRyxFQUFFO1FBRXpCLGNBQWMsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxLQUFvQixFQUFFLEVBQUU7O2tCQUV6QyxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRTs7Z0JBRTdCLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUM7WUFFM0QsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDM0MsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMxQztZQUVELElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzlDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2RDtZQUVELFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDdEMsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDO0NBRUQ7Ozs7Ozs7SUFyRkEsb0VBQWtEOzs7Ozs7SUFFbEQsNkRBQTZDOzs7Ozs7O0lBRTdDLDBFQUFtRjs7Ozs7OztJQUVuRixzRUFBeUQ7Ozs7OztJQUV6RCw4RUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdW1tYXJpZXNWYWx1ZXMgfSBmcm9tICcuL3N1bW1hcmllcy52YWx1ZXMnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2Uvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNUeXBlIH0gZnJvbSAnLi4vc3VtbWFyaWVzLnR5cGUnO1xuaW1wb3J0IHsgQWxsRmllbGRUeXBlcyB9IGZyb20gJy4uLy4uL2ZpZWxkL2RhdGEtdHlwZS9hbGwtZmllbGQtdHlwZXMnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdW1tYXJpZXNDYWxjdWxhdG9yPFQsIEEgZXh0ZW5kcyBTdW1tYXJpZXNWYWx1ZXM+IHtcblxuXHRhYnN0cmFjdCBmb3JEYXRhVHlwZShkYXRhVHlwZTogRGF0YVR5cGUpOiBib29sZWFuO1xuXG5cdGFic3RyYWN0IHByZXBhcmUoZmllbGQ6IEFsbEZpZWxkVHlwZXMpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHBvc3RDYWxjdWxhdGUoZmllbGQ6IEFsbEZpZWxkVHlwZXMsIGl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IHZvaWQ7XG5cblx0YWJzdHJhY3QgYWdncmVnYXRlKGZpZWxkOiBBbGxGaWVsZFR5cGVzLCB2YWx1ZTogVCk6IHZvaWQ7XG5cblx0YWJzdHJhY3QgZ2VuZXJhdGVBZ2dyZWdhdGVkVmFsdWVzKGZpZWxkOiBBbGxGaWVsZFR5cGVzKTogQTtcblxuXHRjYWxjdWxhdGUoZmllbGRzOiBBcnJheTxBbGxGaWVsZFR5cGVzPiwgaXRlbXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogTWFwPHN0cmluZywgQT4ge1xuXG5cdFx0Y29uc3QgZmlsdGVyZWRGaWVsZHMgPSBmaWVsZHMuZmlsdGVyKChmaWVsZDogQWxsRmllbGRUeXBlcykgPT4gdGhpcy5mb3JEYXRhVHlwZShmaWVsZC5nZXREYXRhVHlwZSgpKSk7XG5cblx0XHRpZiAoIWZpbHRlcmVkRmllbGRzIHx8IGZpbHRlcmVkRmllbGRzLmxlbmd0aCA9PT0gMCB8fCBpdGVtcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGxldCBjb3VudCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCksXG5cdFx0XHRkaXN0aW5jdCA9IG5ldyBNYXA8c3RyaW5nLCBTZXQ8c3RyaW5nPj4oKTtcblxuXHRcdC8vIGluaXRcblx0XHRmaWx0ZXJlZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogQWxsRmllbGRUeXBlcykgPT4ge1xuXG5cdFx0XHRjb25zdCBrZXkgPSBmaWVsZC5nZXRLZXkoKTtcblxuXHRcdFx0Y291bnQuc2V0KGtleSwgMCk7XG5cdFx0XHRkaXN0aW5jdC5zZXQoa2V5LCBuZXcgU2V0KCkpO1xuXG5cdFx0XHR0aGlzLnByZXBhcmUoZmllbGQpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gY2FsY3VsYXRlXG5cdFx0aXRlbXMuZm9yRWFjaCgoaXRlbTogT3JpZ2luSXRlbUVudGl0eSkgPT4ge1xuXG5cdFx0XHRmaWx0ZXJlZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogQWxsRmllbGRUeXBlcykgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGtleSA9IGZpZWxkLmdldEtleSgpLFxuXHRcdFx0XHRcdHZhbHVlID0gZmllbGQuZ2V0VmFsdWUoaXRlbSk7XG5cblx0XHRcdFx0aWYgKHZhbHVlICE9PSBudWxsIHx8IHZhbHVlICE9PSB1bmRlZmluZWQgfHwgdmFsdWUgIT09ICcnKSB7XG5cblx0XHRcdFx0XHRpZiAoZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5DT1VOVCkpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGNvdW50Rm9yRmllbGQgPSBjb3VudC5nZXQoa2V5KTtcblx0XHRcdFx0XHRcdGNvdW50LnNldChrZXksIGNvdW50Rm9yRmllbGQgKyAxKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5ESVNUSU5DVCkpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGRpc3RpbmN0U2V0ID0gZGlzdGluY3QuZ2V0KGtleSk7XG5cdFx0XHRcdFx0XHRkaXN0aW5jdFNldC5hZGQodmFsdWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuYWdncmVnYXRlKGZpZWxkLCB2YWx1ZSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdGZpbHRlcmVkRmllbGRzLmZvckVhY2goKGZpZWxkOiBBbGxGaWVsZFR5cGVzKSA9PiB7XG5cblx0XHRcdHRoaXMucG9zdENhbGN1bGF0ZShmaWVsZCwgaXRlbXMpO1xuXG5cdFx0fSk7XG5cblx0XHRsZXQgc3VtbWFyaWVzID0gbmV3IE1hcCgpO1xuXG5cdFx0ZmlsdGVyZWRGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IEFsbEZpZWxkVHlwZXMpID0+IHtcblxuXHRcdFx0Y29uc3Qga2V5ID0gZmllbGQuZ2V0SWQoKS5nZXRJZCgpO1xuXG5cdFx0XHRsZXQgYWdncmVnYXRlZFZhbHVlcyA9IHRoaXMuZ2VuZXJhdGVBZ2dyZWdhdGVkVmFsdWVzKGZpZWxkKTtcblxuXHRcdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuQ09VTlQpKSB7XG5cdFx0XHRcdGFnZ3JlZ2F0ZWRWYWx1ZXMuc2V0Q291bnQoY291bnQuZ2V0KGtleSkpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5ESVNUSU5DVCkpIHtcblx0XHRcdFx0YWdncmVnYXRlZFZhbHVlcy5zZXREaXN0aW5jdCgoZGlzdGluY3QuZ2V0KGtleSkpLnNpemUpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdW1tYXJpZXMuc2V0KGtleSwgYWdncmVnYXRlZFZhbHVlcyk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gc3VtbWFyaWVzO1xuXHR9XG5cbn1cbiJdfQ==