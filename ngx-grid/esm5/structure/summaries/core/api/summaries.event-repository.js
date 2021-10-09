/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
/**
 * @abstract
 */
var SummariesEventRepository = /** @class */ (function (_super) {
    tslib_1.__extends(SummariesEventRepository, _super);
    function SummariesEventRepository(domainEventBus) {
        return _super.call(this, domainEventBus) || this;
    }
    SummariesEventRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SummariesEventRepository.ctorParameters = function () { return [
        { type: DomainEventBus }
    ]; };
    return SummariesEventRepository;
}(EventRepository));
export { SummariesEventRepository };
if (false) {
    /**
     * @abstract
     * @param {?} structureId
     * @return {?}
     */
    SummariesEventRepository.prototype.onSummariesChanged = function (structureId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9hcGkvc3VtbWFyaWVzLmV2ZW50LXJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBZSxjQUFjLEVBQUUsZUFBZSxFQUFvQixNQUFNLG9CQUFvQixDQUFDOzs7O0FBTXBHO0lBQ3VELG9EQUFzRDtJQUU1RyxrQ0FBc0IsY0FBOEI7ZUFDbkQsa0JBQU0sY0FBYyxDQUFDO0lBQ3RCLENBQUM7O2dCQUxELFVBQVU7Ozs7Z0JBTlcsY0FBYzs7SUFjcEMsK0JBQUM7Q0FBQSxBQVJELENBQ3VELGVBQWUsR0FPckU7U0FQcUIsd0JBQXdCOzs7Ozs7O0lBTTdDLG1GQUErRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzLCBFdmVudFJlcG9zaXRvcnksIEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi9ncmlkL2NvcmUvYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN1bW1hcmllc0V2ZW50UmVwb3NpdG9yeSBleHRlbmRzIEV2ZW50UmVwb3NpdG9yeTxTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQsIFN0cnVjdHVyZUlkPiB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge1xuXHRcdHN1cGVyKGRvbWFpbkV2ZW50QnVzKTtcblx0fVxuXG5cdGFic3RyYWN0IG9uU3VtbWFyaWVzQ2hhbmdlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlUmVhZE1vZGVsUm9vdElkKTogSGVybWVzT2JzZXJ2YWJsZTxEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4+O1xufVxuIl19