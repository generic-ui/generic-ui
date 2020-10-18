/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataField } from '../data-field';
import { DataType } from '../data-type';
import { SummariesType } from '../../../../../../summaries/core/domain/summaries.type';
export class UnknownDataField extends DataField {
    /**
     * @param {?} accessor
     * @param {?} matchers
     * @param {?=} summariesConfig
     */
    constructor(accessor, matchers, summariesConfig) {
        super(accessor, DataType.UNKNOWN, matchers, summariesConfig);
    }
    /**
     * @return {?}
     */
    assignDefaultSummaries() {
        return 0;
        // return SummariesType.COUNT |
        // 	SummariesType.DISTINCT;
    }
    /**
     * @return {?}
     */
    assignPossibleSummaries() {
        return SummariesType.COUNT |
            SummariesType.DISTINCT;
    }
    /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    search(item, searchPhrase) {
        return false;
    }
    /**
     * @param {?} one
     * @param {?} two
     * @return {?}
     */
    sort(one, two) {
        return 0;
    }
    /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    filter(value, filterPhrase) {
        return false;
    }
    /**
     * @param {?} item
     * @param {?} value
     * @return {?}
     */
    equals(item, value) {
        return false;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    getDisplayValue(item) {
        return item;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1kYXRhLWZpZWxkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvY29yZS9kb21haW4vZmllbGQvZGF0YS90eXBlL3Vua25vd24tZGF0YS1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUt2RixNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsU0FBYzs7Ozs7O0lBRW5ELFlBQVksUUFBYSxFQUN0QixRQUF1QixFQUN2QixlQUF1QztRQUN6QyxLQUFLLENBQ0osUUFBUSxFQUNSLFFBQVEsQ0FBQyxPQUFPLEVBQ2hCLFFBQVEsRUFDUixlQUFlLENBQUMsQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsc0JBQXNCO1FBQ3JCLE9BQU8sQ0FBQyxDQUFDO1FBQ1QsK0JBQStCO1FBQy9CLDJCQUEyQjtJQUM1QixDQUFDOzs7O0lBRUQsdUJBQXVCO1FBQ3RCLE9BQU8sYUFBYSxDQUFDLEtBQUs7WUFDekIsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBc0IsRUFBRSxZQUFvQjtRQUNsRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVELElBQUksQ0FBQyxHQUFRLEVBQUUsR0FBUTtRQUN0QixPQUFPLENBQUMsQ0FBQztJQUNWLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxLQUFVLEVBQUUsWUFBaUI7UUFDbkMsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBc0IsRUFBRSxLQUFVO1FBQ3hDLE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsSUFBUztRQUN4QixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFGaWVsZCB9IGZyb20gJy4uL2RhdGEtZmllbGQnO1xuaW1wb3J0IHsgQ29sdW1uU3VtbWFyaWVzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29sdW1uL2NvbHVtbi1zdW1tYXJpZXMuY29uZmlnJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vZGF0YS10eXBlJztcbmltcG9ydCB7IFN1bW1hcmllc1R5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zdW1tYXJpZXMvY29yZS9kb21haW4vc3VtbWFyaWVzLnR5cGUnO1xuaW1wb3J0IHsgRmllbGRNYXRjaGVycyB9IGZyb20gJy4uLy4uLy4uL21hdGNoZXIvZmllbGQubWF0Y2hlcnMnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuXG5leHBvcnQgY2xhc3MgVW5rbm93bkRhdGFGaWVsZCBleHRlbmRzIERhdGFGaWVsZDxhbnk+IHtcblxuXHRjb25zdHJ1Y3RvcihhY2Nlc3NvcjogYW55LFxuXHRcdFx0XHRtYXRjaGVyczogRmllbGRNYXRjaGVycyxcblx0XHRcdFx0c3VtbWFyaWVzQ29uZmlnPzogQ29sdW1uU3VtbWFyaWVzQ29uZmlnKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRhY2Nlc3Nvcixcblx0XHRcdERhdGFUeXBlLlVOS05PV04sXG5cdFx0XHRtYXRjaGVycyxcblx0XHRcdHN1bW1hcmllc0NvbmZpZyk7XG5cdH1cblxuXHRhc3NpZ25EZWZhdWx0U3VtbWFyaWVzKCk6IFN1bW1hcmllc1R5cGUge1xuXHRcdHJldHVybiAwO1xuXHRcdC8vIHJldHVybiBTdW1tYXJpZXNUeXBlLkNPVU5UIHxcblx0XHQvLyBcdFN1bW1hcmllc1R5cGUuRElTVElOQ1Q7XG5cdH1cblxuXHRhc3NpZ25Qb3NzaWJsZVN1bW1hcmllcygpOiBTdW1tYXJpZXNUeXBlIHtcblx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5DT1VOVCB8XG5cdFx0XHRTdW1tYXJpZXNUeXBlLkRJU1RJTkNUO1xuXHR9XG5cblx0c2VhcmNoKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHksIHNlYXJjaFBocmFzZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0c29ydChvbmU6IGFueSwgdHdvOiBhbnkpOiBudW1iZXIge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0ZmlsdGVyKHZhbHVlOiBhbnksIGZpbHRlclBocmFzZTogYW55KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0ZXF1YWxzKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHksIHZhbHVlOiBhbnkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRnZXREaXNwbGF5VmFsdWUoaXRlbTogYW55KTogc3RyaW5nIHtcblx0XHRyZXR1cm4gaXRlbTtcblx0fVxuXG59XG4iXX0=