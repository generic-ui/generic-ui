/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StructureSummariesChangedEvent } from './structure.summaries-changed.event';
import { StructureAggregateEvent } from '../../../core/domain/structure.aggregate-event';
/** @type {?} */
export const StructureSummariesChangedAggregateEventName = 'StructureSummariesChangedAggregateEvent';
export class StructureSummariesChangedAggregateEvent extends StructureAggregateEvent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3N1bW1hcmllcy9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWNoYW5nZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7QUFFekYsTUFBTSxPQUFPLDJDQUEyQyxHQUFHLHlDQUF5QztBQUVwRyxNQUFNLE9BQU8sdUNBQXdDLFNBQVEsdUJBQXVCOzs7OztJQUVuRixZQUFZLFdBQXdCLEVBQ2hCLGdCQUE4QztRQUNqRSxLQUFLLENBQUMsV0FBVyxFQUFFLDJDQUEyQyxDQUFDLENBQUM7UUFEN0MscUJBQWdCLEdBQWhCLGdCQUFnQixDQUE4QjtJQUVsRSxDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDekYsQ0FBQzs7OztJQUVELFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDO0NBQ0Q7Ozs7OztJQVhHLG1FQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkLCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN1bW1hcmllc1ZhbHVlcyB9IGZyb20gJy4vY2FsY3VsYXRpb24vc3VtbWFyaWVzLnZhbHVlcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkRXZlbnQgfSBmcm9tICcuL3N0cnVjdHVyZS5zdW1tYXJpZXMtY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5leHBvcnQgY29uc3QgU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50TmFtZSA9ICdTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkQWdncmVnYXRlRXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgU3RydWN0dXJlQWdncmVnYXRlRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdW1tYXJpemVkVmFsdWVzOiBNYXA8c3RyaW5nLCBTdW1tYXJpZXNWYWx1ZXM+KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsIFN0cnVjdHVyZVN1bW1hcmllc0NoYW5nZWRBZ2dyZWdhdGVFdmVudE5hbWUpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHJldHVybiBuZXcgU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSwgdGhpcy5zdW1tYXJpemVkVmFsdWVzKTtcblx0fVxuXG5cdGdldFN1bW1hcmllcygpOiBNYXA8c3RyaW5nLCBTdW1tYXJpZXNWYWx1ZXM+IHtcblx0XHRyZXR1cm4gdGhpcy5zdW1tYXJpemVkVmFsdWVzO1xuXHR9XG59XG4iXX0=