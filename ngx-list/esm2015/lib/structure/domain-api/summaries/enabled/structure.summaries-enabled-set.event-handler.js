/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureSummariesRepository } from './structure.summaries.repository';
export class StructureSummariesEnabledSetEventHandler extends DomainEventHandler {
    /**
     * @param {?} structureSummariesRepository
     */
    constructor(structureSummariesRepository) {
        super();
        this.structureSummariesRepository = structureSummariesRepository;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1lbmFibGVkLXNldC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi1hcGkvc3VtbWFyaWVzL2VuYWJsZWQvc3RydWN0dXJlLnN1bW1hcmllcy1lbmFibGVkLXNldC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBTWhGLE1BQU0sT0FBTyx3Q0FBeUMsU0FBUSxrQkFBa0U7Ozs7SUFFL0gsWUFBb0IsNEJBQTBEO1FBQzdFLEtBQUssRUFBRSxDQUFDO1FBRFcsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtJQUU5RSxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUF3QztRQUU5QyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsbUNBQW1DLENBQUMsRUFBRTtZQUM3RCxJQUFJLENBQUMsNEJBQTRCLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUN4RjtJQUVGLENBQUM7OztZQWJELFVBQVU7Ozs7WUFMRiw0QkFBNEI7Ozs7Ozs7SUFReEIsZ0ZBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNSZXBvc2l0b3J5IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc3VtbWFyaWVzLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzRW5hYmxlZFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zdW1tYXJpZXMvc2V0L3N0cnVjdHVyZS5zdW1tYXJpZXMtZW5hYmxlZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU3VtbWFyaWVzRW5hYmxlZFNldEV2ZW50SGFuZGxlciBleHRlbmRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgU3RydWN0dXJlU3VtbWFyaWVzRW5hYmxlZFNldEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVTdW1tYXJpZXNSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTdW1tYXJpZXNSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU3RydWN0dXJlU3VtbWFyaWVzRW5hYmxlZFNldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU3RydWN0dXJlU3VtbWFyaWVzRW5hYmxlZFNldEV2ZW50JykpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlU3VtbWFyaWVzUmVwb3NpdG9yeS5zZXRFbmFibGVkKGV2ZW50LmlzRW5hYmxlZCgpLCBldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=