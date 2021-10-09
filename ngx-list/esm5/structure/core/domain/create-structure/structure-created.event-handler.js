/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SummariesEnabledArchive } from '../../../summaries/core/domain/enabled/summaries-enabled-archive.service';
import { StructureCreatedEvent } from './structure-created.event';
var StructureCreatedEventHandler = /** @class */ (function () {
    function StructureCreatedEventHandler(summariesEnabledArchive) {
        this.summariesEnabledArchive = summariesEnabledArchive;
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
            this.summariesEnabledArchive.init(structureId);
        }
    };
    StructureCreatedEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureCreatedEventHandler.ctorParameters = function () { return [
        { type: SummariesEnabledArchive }
    ]; };
    return StructureCreatedEventHandler;
}());
export { StructureCreatedEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureCreatedEventHandler.prototype.summariesEnabledArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZG9tYWluL2NyZWF0ZS1zdHJ1Y3R1cmUvc3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUNuSCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUlsRTtJQUdDLHNDQUFvQix1QkFBZ0Q7UUFBaEQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtJQUNwRSxDQUFDOzs7O0lBRUQsK0NBQVE7OztJQUFSO1FBQ0MsT0FBTyxxQkFBcUIsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELDZDQUFNOzs7O0lBQU4sVUFBTyxLQUE0QjtRQUVsQyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsRUFBRTs7Z0JBRTNDLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxFQUFFO1lBRTFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDL0M7SUFDRixDQUFDOztnQkFsQkQsVUFBVTs7OztnQkFMRix1QkFBdUI7O0lBeUJoQyxtQ0FBQztDQUFBLEFBcEJELElBb0JDO1NBbkJZLDRCQUE0Qjs7Ozs7O0lBRTVCLCtEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdW1tYXJpZXNFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL3N1bW1hcmllcy9jb3JlL2RvbWFpbi9lbmFibGVkL3N1bW1hcmllcy1lbmFibGVkLWFyY2hpdmUuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDcmVhdGVkRXZlbnQgfSBmcm9tICcuL3N0cnVjdHVyZS1jcmVhdGVkLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vYXBpL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNyZWF0ZWRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIFN0cnVjdHVyZUNyZWF0ZWRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3VtbWFyaWVzRW5hYmxlZEFyY2hpdmU6IFN1bW1hcmllc0VuYWJsZWRBcmNoaXZlKSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8U3RydWN0dXJlQ3JlYXRlZEV2ZW50PiB7XG5cdFx0cmV0dXJuIFN0cnVjdHVyZUNyZWF0ZWRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU3RydWN0dXJlQ3JlYXRlZEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU3RydWN0dXJlQ3JlYXRlZEV2ZW50JykpIHtcblxuXHRcdFx0Y29uc3Qgc3RydWN0dXJlSWQgPSBldmVudC5nZXRBZ2dyZWdhdGVJZCgpO1xuXG5cdFx0XHR0aGlzLnN1bW1hcmllc0VuYWJsZWRBcmNoaXZlLmluaXQoc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=