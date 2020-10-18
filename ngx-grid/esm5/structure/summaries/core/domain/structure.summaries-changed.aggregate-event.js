/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureSummariesChangedEvent } from './structure.summaries-changed.event';
import { StructureAggregateEvent } from '../../../core/domain/structure.aggregate-event';
/** @type {?} */
export var StructureSummariesChangedAggregateEventName = 'StructureSummariesChangedAggregateEvent';
var StructureSummariesChangedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSummariesChangedAggregateEvent, _super);
    function StructureSummariesChangedAggregateEvent(aggregateId, summarizedValues) {
        var _this = _super.call(this, aggregateId, StructureSummariesChangedAggregateEventName) || this;
        _this.summarizedValues = summarizedValues;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureSummariesChangedAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new StructureSummariesChangedEvent(this.getAggregateId(), this.summarizedValues);
    };
    /**
     * @return {?}
     */
    StructureSummariesChangedAggregateEvent.prototype.getSummaries = /**
     * @return {?}
     */
    function () {
        return this.summarizedValues;
    };
    return StructureSummariesChangedAggregateEvent;
}(StructureAggregateEvent));
export { StructureSummariesChangedAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesChangedAggregateEvent.prototype.summarizedValues;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3N1bW1hcmllcy9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWNoYW5nZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBRXpGLE1BQU0sS0FBTywyQ0FBMkMsR0FBRyx5Q0FBeUM7QUFFcEc7SUFBNkQsbUVBQXVCO0lBRW5GLGlEQUFZLFdBQXdCLEVBQ2hCLGdCQUE4QztRQURsRSxZQUVDLGtCQUFNLFdBQVcsRUFBRSwyQ0FBMkMsQ0FBQyxTQUMvRDtRQUZtQixzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQThCOztJQUVsRSxDQUFDOzs7O0lBRUQsK0RBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLDhCQUE4QixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN6RixDQUFDOzs7O0lBRUQsOERBQVk7OztJQUFaO1FBQ0MsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQztJQUNGLDhDQUFDO0FBQUQsQ0FBQyxBQWRELENBQTZELHVCQUF1QixHQWNuRjs7Ozs7OztJQVhHLG1FQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkLCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN1bW1hcmllc1ZhbHVlcyB9IGZyb20gJy4vY2FsY3VsYXRpb24vc3VtbWFyaWVzLnZhbHVlcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkRXZlbnQgfSBmcm9tICcuL3N0cnVjdHVyZS5zdW1tYXJpZXMtY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5leHBvcnQgY29uc3QgU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50TmFtZSA9ICdTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkQWdncmVnYXRlRXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgU3RydWN0dXJlQWdncmVnYXRlRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdW1tYXJpemVkVmFsdWVzOiBNYXA8c3RyaW5nLCBTdW1tYXJpZXNWYWx1ZXM+KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsIFN0cnVjdHVyZVN1bW1hcmllc0NoYW5nZWRBZ2dyZWdhdGVFdmVudE5hbWUpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHJldHVybiBuZXcgU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSwgdGhpcy5zdW1tYXJpemVkVmFsdWVzKTtcblx0fVxuXG5cdGdldFN1bW1hcmllcygpOiBNYXA8c3RyaW5nLCBTdW1tYXJpZXNWYWx1ZXM+IHtcblx0XHRyZXR1cm4gdGhpcy5zdW1tYXJpemVkVmFsdWVzO1xuXHR9XG59XG4iXX0=