/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { SummariesManager } from '../summaries.manager';
import { AggregateArchive } from '@generic-ui/hermes';
var SummariesEnabledArchive = /** @class */ (function (_super) {
    tslib_1.__extends(SummariesEnabledArchive, _super);
    function SummariesEnabledArchive() {
        return _super.call(this, SummariesManager.DEFAULT_ENABLED) || this;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    SummariesEnabledArchive.prototype.init = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        this.next(structureId, SummariesManager.DEFAULT_ENABLED);
    };
    SummariesEnabledArchive.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SummariesEnabledArchive.ctorParameters = function () { return []; };
    return SummariesEnabledArchive;
}(AggregateArchive));
export { SummariesEnabledArchive };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLWVuYWJsZWQtYXJjaGl2ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc3VtbWFyaWVzL2NvcmUvZG9tYWluL2VuYWJsZWQvc3VtbWFyaWVzLWVuYWJsZWQtYXJjaGl2ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUl0RDtJQUM2QyxtREFBeUI7SUFFckU7ZUFDQyxrQkFBTSxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFRCxzQ0FBSTs7OztJQUFKLFVBQUssV0FBd0I7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Z0JBVEQsVUFBVTs7OztJQVdYLDhCQUFDO0NBQUEsQUFYRCxDQUM2QyxnQkFBZ0IsR0FVNUQ7U0FWWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNNYW5hZ2VyIH0gZnJvbSAnLi4vc3VtbWFyaWVzLm1hbmFnZXInO1xuaW1wb3J0IHsgQWdncmVnYXRlQXJjaGl2ZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN1bW1hcmllc0VuYWJsZWRBcmNoaXZlIGV4dGVuZHMgQWdncmVnYXRlQXJjaGl2ZTxib29sZWFuPiB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoU3VtbWFyaWVzTWFuYWdlci5ERUZBVUxUX0VOQUJMRUQpO1xuXHR9XG5cblx0aW5pdChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLm5leHQoc3RydWN0dXJlSWQsIFN1bW1hcmllc01hbmFnZXIuREVGQVVMVF9FTkFCTEVEKTtcblx0fVxuXG59XG4iXX0=