/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureSummariesRepository } from './structure.summaries.repository';
import { StructureSummariesEnabledSetEvent } from '../../../domain/summaries/set/structure.summaries-enabled-set.event';
export class StructureSummariesEnabledSetEventHandler {
    /**
     * @param {?} structureSummariesRepository
     */
    constructor(structureSummariesRepository) {
        this.structureSummariesRepository = structureSummariesRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return StructureSummariesEnabledSetEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('StructureSummariesEnabledSetEvent')) {
            this.structureSummariesRepository.setEnabled(event.isEnabled(), event.getAggregateId());
        }
    }
}
StructureSummariesEnabledSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSummariesEnabledSetEventHandler.ctorParameters = () => [
    { type: StructureSummariesRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesEnabledSetEventHandler.prototype.structureSummariesRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1lbmFibGVkLXNldC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9kb21haW4tYXBpL3N1bW1hcmllcy9lbmFibGVkL3N0cnVjdHVyZS5zdW1tYXJpZXMtZW5hYmxlZC1zZXQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUt4SCxNQUFNLE9BQU8sd0NBQXdDOzs7O0lBRXBELFlBQW9CLDRCQUEwRDtRQUExRCxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO0lBQzlFLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsT0FBTyxpQ0FBaUMsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUF3QztRQUU5QyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsbUNBQW1DLENBQUMsRUFBRTtZQUM3RCxJQUFJLENBQUMsNEJBQTRCLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUN4RjtJQUVGLENBQUM7OztZQWhCRCxVQUFVOzs7O1lBTEYsNEJBQTRCOzs7Ozs7O0lBUXhCLGdGQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNSZXBvc2l0b3J5IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc3VtbWFyaWVzLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzRW5hYmxlZFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N1bW1hcmllcy9zZXQvc3RydWN0dXJlLnN1bW1hcmllcy1lbmFibGVkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTdW1tYXJpZXNFbmFibGVkU2V0RXZlbnRIYW5kbGVyIGltcGxlbWVudHMgRG9tYWluRXZlbnRIYW5kbGVyPFN0cnVjdHVyZUlkLCBTdHJ1Y3R1cmVTdW1tYXJpZXNFbmFibGVkU2V0RXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVN1bW1hcmllc1JlcG9zaXRvcnk6IFN0cnVjdHVyZVN1bW1hcmllc1JlcG9zaXRvcnkpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxTdHJ1Y3R1cmVTdW1tYXJpZXNFbmFibGVkU2V0RXZlbnQ+IHtcblx0XHRyZXR1cm4gU3RydWN0dXJlU3VtbWFyaWVzRW5hYmxlZFNldEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBTdHJ1Y3R1cmVTdW1tYXJpZXNFbmFibGVkU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdTdHJ1Y3R1cmVTdW1tYXJpZXNFbmFibGVkU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVTdW1tYXJpZXNSZXBvc2l0b3J5LnNldEVuYWJsZWQoZXZlbnQuaXNFbmFibGVkKCksIGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==