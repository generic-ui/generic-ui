/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SummariesEnabledArchive } from './summaries-enabled-archive.service';
import { StructureSummariesEnabledSetEvent } from '../set/structure.summaries-enabled-set.event';
export class StructureSummariesEnabledSetEventHandler {
    /**
     * @param {?} summariesEnabledArchive
     */
    constructor(summariesEnabledArchive) {
        this.summariesEnabledArchive = summariesEnabledArchive;
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
            this.summariesEnabledArchive.next(event.getAggregateId(), event.isEnabled());
        }
    }
}
StructureSummariesEnabledSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSummariesEnabledSetEventHandler.ctorParameters = () => [
    { type: SummariesEnabledArchive }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesEnabledSetEventHandler.prototype.summariesEnabledArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1lbmFibGVkLXNldC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc3VtbWFyaWVzL2NvcmUvZG9tYWluL2VuYWJsZWQvc3RydWN0dXJlLnN1bW1hcmllcy1lbmFibGVkLXNldC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBS2pHLE1BQU0sT0FBTyx3Q0FBd0M7Ozs7SUFFcEQsWUFBNkIsdUJBQWdEO1FBQWhELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7SUFDN0UsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLGlDQUFpQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQXdDO1FBRTlDLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxtQ0FBbUMsQ0FBQyxFQUFFO1lBQzdELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQzdFO0lBQ0YsQ0FBQzs7O1lBZkQsVUFBVTs7OztZQUxGLHVCQUF1Qjs7Ozs7OztJQVFuQiwyRUFBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3VtbWFyaWVzRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuL3N1bW1hcmllcy1lbmFibGVkLWFyY2hpdmUuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNFbmFibGVkU2V0RXZlbnQgfSBmcm9tICcuLi9zZXQvc3RydWN0dXJlLnN1bW1hcmllcy1lbmFibGVkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVN1bW1hcmllc0VuYWJsZWRTZXRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIFN0cnVjdHVyZVN1bW1hcmllc0VuYWJsZWRTZXRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3VtbWFyaWVzRW5hYmxlZEFyY2hpdmU6IFN1bW1hcmllc0VuYWJsZWRBcmNoaXZlKSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8U3RydWN0dXJlU3VtbWFyaWVzRW5hYmxlZFNldEV2ZW50PiB7XG5cdFx0cmV0dXJuIFN0cnVjdHVyZVN1bW1hcmllc0VuYWJsZWRTZXRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU3RydWN0dXJlU3VtbWFyaWVzRW5hYmxlZFNldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU3RydWN0dXJlU3VtbWFyaWVzRW5hYmxlZFNldEV2ZW50JykpIHtcblx0XHRcdHRoaXMuc3VtbWFyaWVzRW5hYmxlZEFyY2hpdmUubmV4dChldmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBldmVudC5pc0VuYWJsZWQoKSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==