/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
export class StructureSummariesUiEventsRepository {
    /**
     * @param {?} domainEventBus
     */
    constructor(domainEventBus) {
        this.domainEventBus = domainEventBus;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onSummariesChanged(structureId) {
        return this.domainEventBus
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.ofMessageType('StructureSummariesChangedEvent'))), filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getAggregateId().toString() === structureId.toString())));
    }
}
StructureSummariesUiEventsRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSummariesUiEventsRepository.ctorParameters = () => [
    { type: DomainEventBus }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesUiEventsRepository.prototype.domainEventBus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXN1bW1hcmllcy51aS1ldmVudHMtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4tYXBpL3N1bW1hcmllcy9zdHJ1Y3R1cmUtc3VtbWFyaWVzLnVpLWV2ZW50cy1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QyxPQUFPLEVBQWUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFPakUsTUFBTSxPQUFPLG9DQUFvQzs7OztJQUVoRCxZQUE2QixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDM0QsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxXQUF3QjtRQUUxQyxPQUFPLElBQUksQ0FBQyxjQUFjO2FBQ3BCLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsQ0FBQyxLQUErQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGdDQUFnQyxDQUFDLEVBQUMsRUFDbEcsTUFBTTs7OztRQUFDLENBQUMsS0FBK0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBQyxDQUN6RyxDQUFDO0lBQ1IsQ0FBQzs7O1lBYkQsVUFBVTs7OztZQU5XLGNBQWM7Ozs7Ozs7SUFTdkIsOERBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zdW1tYXJpZXMvc3RydWN0dXJlLnN1bW1hcmllcy1jaGFuZ2VkLmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU3VtbWFyaWVzVWlFdmVudHNSZXBvc2l0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge1xuXHR9XG5cblx0b25TdW1tYXJpZXNDaGFuZ2VkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8RG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4pID0+IGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1N0cnVjdHVyZVN1bW1hcmllc0NoYW5nZWRFdmVudCcpKSxcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4pID0+IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkudG9TdHJpbmcoKSA9PT0gc3RydWN0dXJlSWQudG9TdHJpbmcoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxufVxuIl19