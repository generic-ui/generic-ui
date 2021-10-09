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
var SearchEventRepository = /** @class */ (function (_super) {
    tslib_1.__extends(SearchEventRepository, _super);
    function SearchEventRepository(domainEventBus) {
        return _super.call(this, domainEventBus) || this;
    }
    SearchEventRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SearchEventRepository.ctorParameters = function () { return [
        { type: DomainEventBus }
    ]; };
    return SearchEventRepository;
}(EventRepository));
export { SearchEventRepository };
if (false) {
    /**
     * @abstract
     * @param {?} structureId
     * @return {?}
     */
    SearchEventRepository.prototype.onSearchPhrase = function (structureId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvY29yZS9hcGkvc2VhcmNoLmV2ZW50LXJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFvQixNQUFNLG9CQUFvQixDQUFDOzs7O0FBTXZGO0lBQ29ELGlEQUFzRDtJQUV6RywrQkFBc0IsY0FBOEI7ZUFDbkQsa0JBQU0sY0FBYyxDQUFDO0lBQ3RCLENBQUM7O2dCQUxELFVBQVU7Ozs7Z0JBTkYsY0FBYzs7SUFjdkIsNEJBQUM7Q0FBQSxBQVJELENBQ29ELGVBQWUsR0FPbEU7U0FQcUIscUJBQXFCOzs7Ozs7O0lBTTFDLDRFQUF5RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMsIEV2ZW50UmVwb3NpdG9yeSwgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uL2dyaWQvY29yZS9hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2VhcmNoRXZlbnRSZXBvc2l0b3J5IGV4dGVuZHMgRXZlbnRSZXBvc2l0b3J5PFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCwgU3RydWN0dXJlSWQ+IHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzKSB7XG5cdFx0c3VwZXIoZG9tYWluRXZlbnRCdXMpO1xuXHR9XG5cblx0YWJzdHJhY3Qgb25TZWFyY2hQaHJhc2Uoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCk6IEhlcm1lc09ic2VydmFibGU8c3RyaW5nPjtcbn1cbiJdfQ==