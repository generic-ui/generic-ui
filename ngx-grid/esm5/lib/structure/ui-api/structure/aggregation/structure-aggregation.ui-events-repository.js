/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructureAggregationsChangedEvent } from '../../../domain/structure/aggregation/structure.aggregations-changed.event';
var StructureAggregationUiEventsRepository = /** @class */ (function () {
    function StructureAggregationUiEventsRepository(domainEventBus) {
        this.domainEventBus = domainEventBus;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureAggregationUiEventsRepository.prototype.onAggregationsChanged = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.domainEventBus
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event instanceof StructureAggregationsChangedEvent; })), filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().toString() === structureId.toString(); })));
    };
    StructureAggregationUiEventsRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureAggregationUiEventsRepository.ctorParameters = function () { return [
        { type: DomainEventBus }
    ]; };
    return StructureAggregationUiEventsRepository;
}());
export { StructureAggregationUiEventsRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureAggregationUiEventsRepository.prototype.domainEventBus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWFnZ3JlZ2F0aW9uLnVpLWV2ZW50cy1yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpLWFwaS9zdHJ1Y3R1cmUvYWdncmVnYXRpb24vc3RydWN0dXJlLWFnZ3JlZ2F0aW9uLnVpLWV2ZW50cy1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QyxPQUFPLEVBQWUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHakUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFHL0g7SUFHQyxnREFBNkIsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQzNELENBQUM7Ozs7O0lBRUQsc0VBQXFCOzs7O0lBQXJCLFVBQXNCLFdBQXdCO1FBRTdDLE9BQU8sSUFBSSxDQUFDLGNBQWM7YUFDcEIsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLEtBQWtCLElBQUssT0FBQSxLQUFLLFlBQVksaUNBQWlDLEVBQWxELENBQWtELEVBQUMsRUFDbEYsTUFBTTs7OztRQUFDLFVBQUMsS0FBa0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQTVELENBQTRELEVBQUMsQ0FDNUYsQ0FBQztJQUNSLENBQUM7O2dCQWJELFVBQVU7Ozs7Z0JBTlcsY0FBYzs7SUFvQnBDLDZDQUFDO0NBQUEsQUFkRCxJQWNDO1NBYlksc0NBQXNDOzs7Ozs7SUFFdEMsZ0VBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25zQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9hZ2dyZWdhdGlvbi9zdHJ1Y3R1cmUuYWdncmVnYXRpb25zLWNoYW5nZWQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvblVpRXZlbnRzUmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMpIHtcblx0fVxuXG5cdG9uQWdncmVnYXRpb25zQ2hhbmdlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPERvbWFpbkV2ZW50PiB7XG5cblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudCkgPT4gZXZlbnQgaW5zdGFuY2VvZiBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbnNDaGFuZ2VkRXZlbnQpLFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50KSA9PiBldmVudC5nZXRBZ2dyZWdhdGVJZCgpLnRvU3RyaW5nKCkgPT09IHN0cnVjdHVyZUlkLnRvU3RyaW5nKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cbn1cbiJdfQ==