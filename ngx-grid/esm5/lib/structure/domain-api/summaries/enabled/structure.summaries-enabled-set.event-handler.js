/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureSummariesRepository } from './structure.summaries.repository';
import { StructureSummariesEnabledSetEvent } from '../../../domain/structure/summaries/set/structure.summaries-enabled-set.event';
var StructureSummariesEnabledSetEventHandler = /** @class */ (function () {
    function StructureSummariesEnabledSetEventHandler(structureSummariesRepository) {
        this.structureSummariesRepository = structureSummariesRepository;
    }
    /**
     * @return {?}
     */
    StructureSummariesEnabledSetEventHandler.prototype.forEvent = /**
     * @return {?}
     */
    function () {
        return StructureSummariesEnabledSetEvent;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StructureSummariesEnabledSetEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.ofMessageType('StructureSummariesEnabledSetEvent')) {
            this.structureSummariesRepository.setEnabled(event.isEnabled(), event.getAggregateId());
        }
    };
    StructureSummariesEnabledSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSummariesEnabledSetEventHandler.ctorParameters = function () { return [
        { type: StructureSummariesRepository }
    ]; };
    return StructureSummariesEnabledSetEventHandler;
}());
export { StructureSummariesEnabledSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesEnabledSetEventHandler.prototype.structureSummariesRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1lbmFibGVkLXNldC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi1hcGkvc3VtbWFyaWVzL2VuYWJsZWQvc3RydWN0dXJlLnN1bW1hcmllcy1lbmFibGVkLXNldC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBSWpELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLCtFQUErRSxDQUFDO0FBSWxJO0lBR0Msa0RBQW9CLDRCQUEwRDtRQUExRCxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO0lBQzlFLENBQUM7Ozs7SUFFRCwyREFBUTs7O0lBQVI7UUFDQyxPQUFPLGlDQUFpQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBRUQseURBQU07Ozs7SUFBTixVQUFPLEtBQXdDO1FBRTlDLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxtQ0FBbUMsQ0FBQyxFQUFFO1lBQzdELElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxFQUFFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQ3hGO0lBRUYsQ0FBQzs7Z0JBaEJELFVBQVU7Ozs7Z0JBTEYsNEJBQTRCOztJQXVCckMsK0NBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWpCWSx3Q0FBd0M7Ozs7OztJQUV4QyxnRkFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc1JlcG9zaXRvcnkgfSBmcm9tICcuL3N0cnVjdHVyZS5zdW1tYXJpZXMucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNFbmFibGVkU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3N1bW1hcmllcy9zZXQvc3RydWN0dXJlLnN1bW1hcmllcy1lbmFibGVkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTdW1tYXJpZXNFbmFibGVkU2V0RXZlbnRIYW5kbGVyIGltcGxlbWVudHMgRG9tYWluRXZlbnRIYW5kbGVyPFN0cnVjdHVyZUlkLCBTdHJ1Y3R1cmVTdW1tYXJpZXNFbmFibGVkU2V0RXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVN1bW1hcmllc1JlcG9zaXRvcnk6IFN0cnVjdHVyZVN1bW1hcmllc1JlcG9zaXRvcnkpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IFR5cGU8U3RydWN0dXJlU3VtbWFyaWVzRW5hYmxlZFNldEV2ZW50PiB7XG5cdFx0cmV0dXJuIFN0cnVjdHVyZVN1bW1hcmllc0VuYWJsZWRTZXRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU3RydWN0dXJlU3VtbWFyaWVzRW5hYmxlZFNldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU3RydWN0dXJlU3VtbWFyaWVzRW5hYmxlZFNldEV2ZW50JykpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlU3VtbWFyaWVzUmVwb3NpdG9yeS5zZXRFbmFibGVkKGV2ZW50LmlzRW5hYmxlZCgpLCBldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=