/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SummariesEnabledArchive } from './summaries-enabled-archive.service';
import { StructureSummariesEnabledSetEvent } from '../set/structure.summaries-enabled-set.event';
var StructureSummariesEnabledSetEventHandler = /** @class */ (function () {
    function StructureSummariesEnabledSetEventHandler(summariesEnabledArchive) {
        this.summariesEnabledArchive = summariesEnabledArchive;
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
            this.summariesEnabledArchive.next(event.getAggregateId(), event.isEnabled());
        }
    };
    StructureSummariesEnabledSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSummariesEnabledSetEventHandler.ctorParameters = function () { return [
        { type: SummariesEnabledArchive }
    ]; };
    return StructureSummariesEnabledSetEventHandler;
}());
export { StructureSummariesEnabledSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesEnabledSetEventHandler.prototype.summariesEnabledArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1lbmFibGVkLXNldC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc3VtbWFyaWVzL2NvcmUvZG9tYWluL2VuYWJsZWQvc3RydWN0dXJlLnN1bW1hcmllcy1lbmFibGVkLXNldC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBSWpHO0lBR0Msa0RBQTZCLHVCQUFnRDtRQUFoRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0lBQzdFLENBQUM7Ozs7SUFFRCwyREFBUTs7O0lBQVI7UUFDQyxPQUFPLGlDQUFpQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBRUQseURBQU07Ozs7SUFBTixVQUFPLEtBQXdDO1FBRTlDLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxtQ0FBbUMsQ0FBQyxFQUFFO1lBQzdELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQzdFO0lBQ0YsQ0FBQzs7Z0JBZkQsVUFBVTs7OztnQkFMRix1QkFBdUI7O0lBc0JoQywrQ0FBQztDQUFBLEFBakJELElBaUJDO1NBaEJZLHdDQUF3Qzs7Ozs7O0lBRXhDLDJFQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdW1tYXJpZXNFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4vc3VtbWFyaWVzLWVuYWJsZWQtYXJjaGl2ZS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc0VuYWJsZWRTZXRFdmVudCB9IGZyb20gJy4uL3NldC9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWVuYWJsZWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU3VtbWFyaWVzRW5hYmxlZFNldEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgU3RydWN0dXJlU3VtbWFyaWVzRW5hYmxlZFNldEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdW1tYXJpZXNFbmFibGVkQXJjaGl2ZTogU3VtbWFyaWVzRW5hYmxlZEFyY2hpdmUpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxTdHJ1Y3R1cmVTdW1tYXJpZXNFbmFibGVkU2V0RXZlbnQ+IHtcblx0XHRyZXR1cm4gU3RydWN0dXJlU3VtbWFyaWVzRW5hYmxlZFNldEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBTdHJ1Y3R1cmVTdW1tYXJpZXNFbmFibGVkU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdTdHJ1Y3R1cmVTdW1tYXJpZXNFbmFibGVkU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy5zdW1tYXJpZXNFbmFibGVkQXJjaGl2ZS5uZXh0KGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIGV2ZW50LmlzRW5hYmxlZCgpKTtcblx0XHR9XG5cdH1cblxufVxuIl19