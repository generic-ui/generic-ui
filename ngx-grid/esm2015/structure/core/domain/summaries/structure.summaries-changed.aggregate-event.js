/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateEvent } from '@generic-ui/hermes';
import { StructureSummariesChangedEvent } from './structure.summaries-changed.event';
/** @type {?} */
export const StructureSummariesChangedAggregateEventName = 'StructureSummariesChangedAggregateEvent';
export class StructureSummariesChangedAggregateEvent extends AggregateEvent {
    /**
     * @param {?} aggregateId
     * @param {?} summarizedValues
     */
    constructor(aggregateId, summarizedValues) {
        super(aggregateId, StructureSummariesChangedAggregateEventName);
        this.summarizedValues = summarizedValues;
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new StructureSummariesChangedEvent(this.getAggregateId(), this.summarizedValues);
    }
    /**
     * @return {?}
     */
    getSummaries() {
        return this.summarizedValues;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesChangedAggregateEvent.prototype.summarizedValues;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZG9tYWluL3N1bW1hcmllcy9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWNoYW5nZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUE0QixNQUFNLG9CQUFvQixDQUFDO0FBSTlFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOztBQUVyRixNQUFNLE9BQU8sMkNBQTJDLEdBQUcseUNBQXlDO0FBRXBHLE1BQU0sT0FBTyx1Q0FBd0MsU0FBUSxjQUEyQjs7Ozs7SUFFdkYsWUFBWSxXQUF3QixFQUNoQixnQkFBOEM7UUFDakUsS0FBSyxDQUFDLFdBQVcsRUFBRSwyQ0FBMkMsQ0FBQyxDQUFDO1FBRDdDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBOEI7SUFFbEUsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksOEJBQThCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1gsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQztDQUNEOzs7Ozs7SUFYRyxtRUFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgQWdncmVnYXRlSWQsIERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3VtbWFyaWVzVmFsdWVzIH0gZnJvbSAnLi9jYWxjdWxhdGlvbi9zdW1tYXJpZXMudmFsdWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc0NoYW5nZWRFdmVudCB9IGZyb20gJy4vc3RydWN0dXJlLnN1bW1hcmllcy1jaGFuZ2VkLmV2ZW50JztcblxuZXhwb3J0IGNvbnN0IFN0cnVjdHVyZVN1bW1hcmllc0NoYW5nZWRBZ2dyZWdhdGVFdmVudE5hbWUgPSAnU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVN1bW1hcmllc0NoYW5nZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN1bW1hcml6ZWRWYWx1ZXM6IE1hcDxzdHJpbmcsIFN1bW1hcmllc1ZhbHVlcz4pIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50TmFtZSk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkRXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpLCB0aGlzLnN1bW1hcml6ZWRWYWx1ZXMpO1xuXHR9XG5cblx0Z2V0U3VtbWFyaWVzKCk6IE1hcDxzdHJpbmcsIFN1bW1hcmllc1ZhbHVlcz4ge1xuXHRcdHJldHVybiB0aGlzLnN1bW1hcml6ZWRWYWx1ZXM7XG5cdH1cbn1cbiJdfQ==