/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { SearchPhraseSetDomainEvent } from '../domain/set-phrase/search-phrase-set.domain-event';
var SearchEventRepository = /** @class */ (function (_super) {
    tslib_1.__extends(SearchEventRepository, _super);
    function SearchEventRepository(domainEventBus) {
        return _super.call(this, domainEventBus) || this;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    SearchEventRepository.prototype.onSearchPhrase = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.onEvent(structureId, SearchPhraseSetDomainEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.isInitial() === false; })), map((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getPhrase(); })), filter((/**
         * @param {?} phrase
         * @return {?}
         */
        function (phrase) { return phrase !== null; })));
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvY29yZS9hcGkvc2VhcmNoLmV2ZW50LXJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdyRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUlqRztJQUMyQyxpREFBc0Q7SUFFaEcsK0JBQVksY0FBOEI7ZUFDekMsa0JBQU0sY0FBYyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsOENBQWM7Ozs7SUFBZCxVQUFlLFdBQXFDO1FBRW5ELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsMEJBQTBCLENBQUM7YUFDdEQsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLEtBQWlDLElBQUssT0FBQSxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssS0FBSyxFQUEzQixDQUEyQixFQUFDLEVBQzFFLEdBQUc7Ozs7UUFBQyxVQUFDLEtBQWlDLElBQUssT0FBQSxLQUFLLENBQUMsU0FBUyxFQUFFLEVBQWpCLENBQWlCLEVBQUMsRUFDN0QsTUFBTTs7OztRQUFDLFVBQUMsTUFBYyxJQUFLLE9BQUEsTUFBTSxLQUFLLElBQUksRUFBZixDQUFlLEVBQUMsQ0FDM0MsQ0FBQztJQUNSLENBQUM7O2dCQWZELFVBQVU7Ozs7Z0JBUEYsY0FBYzs7SUF1QnZCLDRCQUFDO0NBQUEsQUFoQkQsQ0FDMkMsZUFBZSxHQWV6RDtTQWZZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cywgRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQgfSBmcm9tICcuLi9kb21haW4vc2V0LXBocmFzZS9zZWFyY2gtcGhyYXNlLXNldC5kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vZ3JpZC9jb3JlL2RvbWFpbi1yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWFyY2hFdmVudFJlcG9zaXRvcnkgZXh0ZW5kcyBFdmVudFJlcG9zaXRvcnk8U3RydWN0dXJlUmVhZE1vZGVsUm9vdElkLCBTdHJ1Y3R1cmVJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge1xuXHRcdHN1cGVyKGRvbWFpbkV2ZW50QnVzKTtcblx0fVxuXG5cdG9uU2VhcmNoUGhyYXNlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25FdmVudChzdHJ1Y3R1cmVJZCwgU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoZXZlbnQ6IFNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50KSA9PiBldmVudC5pc0luaXRpYWwoKSA9PT0gZmFsc2UpLFxuXHRcdFx0XHRcdCAgIG1hcCgoZXZlbnQ6IFNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50KSA9PiBldmVudC5nZXRQaHJhc2UoKSksXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChwaHJhc2U6IHN0cmluZykgPT4gcGhyYXNlICE9PSBudWxsKVxuXHRcdFx0XHQgICApO1xuXHR9XG59XG4iXX0=