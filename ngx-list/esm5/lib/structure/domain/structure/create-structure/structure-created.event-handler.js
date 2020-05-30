/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureSummariesRepository } from '../../../domain-api/summaries/enabled/structure.summaries.repository';
import { StructureCreatedEvent } from './structure-created.event';
var StructureCreatedEventHandler = /** @class */ (function () {
    function StructureCreatedEventHandler(structureSummariesRepository) {
        this.structureSummariesRepository = structureSummariesRepository;
    }
    /**
     * @return {?}
     */
    StructureCreatedEventHandler.prototype.forEvent = /**
     * @return {?}
     */
    function () {
        return StructureCreatedEvent;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StructureCreatedEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.ofMessageType('StructureCreatedEvent')) {
            /** @type {?} */
            var structureId = event.getAggregateId();
            this.structureSummariesRepository.init(structureId);
        }
    };
    StructureCreatedEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureCreatedEventHandler.ctorParameters = function () { return [
        { type: StructureSummariesRepository }
    ]; };
    return StructureCreatedEventHandler;
}());
export { StructureCreatedEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureCreatedEventHandler.prototype.structureSummariesRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NyZWF0ZS1zdHJ1Y3R1cmUvc3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUlqRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUNwSCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUlsRTtJQUdDLHNDQUFvQiw0QkFBMEQ7UUFBMUQsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtJQUM5RSxDQUFDOzs7O0lBRUQsK0NBQVE7OztJQUFSO1FBQ0MsT0FBTyxxQkFBcUIsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELDZDQUFNOzs7O0lBQU4sVUFBTyxLQUE0QjtRQUVsQyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsRUFBRTs7Z0JBRTNDLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxFQUFFO1lBRTFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FFcEQ7SUFFRixDQUFDOztnQkFwQkQsVUFBVTs7OztnQkFMRiw0QkFBNEI7O0lBMkJyQyxtQ0FBQztDQUFBLEFBdEJELElBc0JDO1NBckJZLDRCQUE0Qjs7Ozs7O0lBRTVCLG9FQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvc3VtbWFyaWVzL2VuYWJsZWQvc3RydWN0dXJlLnN1bW1hcmllcy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUNyZWF0ZWRFdmVudCB9IGZyb20gJy4vc3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDcmVhdGVkRXZlbnRIYW5kbGVyIGltcGxlbWVudHMgRG9tYWluRXZlbnRIYW5kbGVyPFN0cnVjdHVyZUlkLCBTdHJ1Y3R1cmVDcmVhdGVkRXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVN1bW1hcmllc1JlcG9zaXRvcnk6IFN0cnVjdHVyZVN1bW1hcmllc1JlcG9zaXRvcnkpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IFR5cGU8U3RydWN0dXJlQ3JlYXRlZEV2ZW50PiB7XG5cdFx0cmV0dXJuIFN0cnVjdHVyZUNyZWF0ZWRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU3RydWN0dXJlQ3JlYXRlZEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU3RydWN0dXJlQ3JlYXRlZEV2ZW50JykpIHtcblxuXHRcdFx0Y29uc3Qgc3RydWN0dXJlSWQgPSBldmVudC5nZXRBZ2dyZWdhdGVJZCgpO1xuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVN1bW1hcmllc1JlcG9zaXRvcnkuaW5pdChzdHJ1Y3R1cmVJZCk7XG5cblx0XHR9XG5cblx0fVxuXG59XG4iXX0=