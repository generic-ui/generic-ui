/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { StructureSummariesChangedEvent } from '../domain/structure.summaries-changed.event';
var StructureSummariesEventRepository = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSummariesEventRepository, _super);
    function StructureSummariesEventRepository(domainEventBus) {
        return _super.call(this, domainEventBus) || this;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureSummariesEventRepository.prototype.onSummariesChanged = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.onEvent(structureId, StructureSummariesChangedEvent);
    };
    StructureSummariesEventRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSummariesEventRepository.ctorParameters = function () { return [
        { type: DomainEventBus }
    ]; };
    return StructureSummariesEventRepository;
}(EventRepository));
export { StructureSummariesEventRepository };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXN1bW1hcmllcy5ldmVudC1yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc3VtbWFyaWVzL2NvcmUvYXBpL3N0cnVjdHVyZS1zdW1tYXJpZXMuZXZlbnQtcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFlLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdsRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUk3RjtJQUN1RCw2REFBc0Q7SUFFNUcsMkNBQVksY0FBOEI7ZUFDekMsa0JBQU0sY0FBYyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsOERBQWtCOzs7O0lBQWxCLFVBQW1CLFdBQXFDO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsOEJBQThCLENBQUMsQ0FBQztJQUNsRSxDQUFDOztnQkFURCxVQUFVOzs7O2dCQVBXLGNBQWM7O0lBaUJwQyx3Q0FBQztDQUFBLEFBVkQsQ0FDdUQsZUFBZSxHQVNyRTtTQVRZLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzLCBFdmVudFJlcG9zaXRvcnkgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi9kb21haW4vc3RydWN0dXJlLnN1bW1hcmllcy1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uL2dyaWQvY29yZS9hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU3VtbWFyaWVzRXZlbnRSZXBvc2l0b3J5IGV4dGVuZHMgRXZlbnRSZXBvc2l0b3J5PFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCwgU3RydWN0dXJlSWQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMpIHtcblx0XHRzdXBlcihkb21haW5FdmVudEJ1cyk7XG5cdH1cblxuXHRvblN1bW1hcmllc0NoYW5nZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCk6IE9ic2VydmFibGU8RG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cdFx0cmV0dXJuIHRoaXMub25FdmVudChzdHJ1Y3R1cmVJZCwgU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEV2ZW50KTtcblx0fVxufVxuIl19