/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { StructureSummariesChangedEvent } from '../domain/structure.summaries-changed.event';
var StructureSummariesUiEventsRepository = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSummariesUiEventsRepository, _super);
    function StructureSummariesUiEventsRepository(domainEventBus) {
        return _super.call(this, domainEventBus) || this;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureSummariesUiEventsRepository.prototype.onSummariesChanged = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.onEvent(structureId, StructureSummariesChangedEvent);
    };
    StructureSummariesUiEventsRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSummariesUiEventsRepository.ctorParameters = function () { return [
        { type: DomainEventBus }
    ]; };
    return StructureSummariesUiEventsRepository;
}(EventRepository));
export { StructureSummariesUiEventsRepository };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXN1bW1hcmllcy51aS1ldmVudHMtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3N1bW1hcmllcy9jb3JlL2FwaS9zdHJ1Y3R1cmUtc3VtbWFyaWVzLnVpLWV2ZW50cy1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQWUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR2xGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBSTdGO0lBQzBELGdFQUFzRDtJQUUvRyw4Q0FBWSxjQUE4QjtlQUN6QyxrQkFBTSxjQUFjLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxpRUFBa0I7Ozs7SUFBbEIsVUFBbUIsV0FBcUM7UUFDdkQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7O2dCQVRELFVBQVU7Ozs7Z0JBUFcsY0FBYzs7SUFpQnBDLDJDQUFDO0NBQUEsQUFWRCxDQUMwRCxlQUFlLEdBU3hFO1NBVFksb0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMsIEV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc0NoYW5nZWRFdmVudCB9IGZyb20gJy4uL2RvbWFpbi9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vZ3JpZC9jb3JlL2FwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTdW1tYXJpZXNVaUV2ZW50c1JlcG9zaXRvcnkgZXh0ZW5kcyBFdmVudFJlcG9zaXRvcnk8U3RydWN0dXJlUmVhZE1vZGVsUm9vdElkLCBTdHJ1Y3R1cmVJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge1xuXHRcdHN1cGVyKGRvbWFpbkV2ZW50QnVzKTtcblx0fVxuXG5cdG9uU3VtbWFyaWVzQ2hhbmdlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlUmVhZE1vZGVsUm9vdElkKTogT2JzZXJ2YWJsZTxEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblx0XHRyZXR1cm4gdGhpcy5vbkV2ZW50KHN0cnVjdHVyZUlkLCBTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkRXZlbnQpO1xuXHR9XG59XG4iXX0=