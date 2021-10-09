/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainEventBus } from '@generic-ui/hermes';
import { StructureSummariesChangedEvent } from '../domain/structure.summaries-changed.event';
import { SummariesEventRepository } from '../api/summaries.event-repository';
import { Injectable } from '@angular/core';
var SummariesDomainEventRepository = /** @class */ (function (_super) {
    tslib_1.__extends(SummariesDomainEventRepository, _super);
    function SummariesDomainEventRepository(domainEventBus) {
        return _super.call(this, domainEventBus) || this;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    SummariesDomainEventRepository.prototype.onSummariesChanged = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.onEvent(structureId, StructureSummariesChangedEvent);
    };
    SummariesDomainEventRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SummariesDomainEventRepository.ctorParameters = function () { return [
        { type: DomainEventBus }
    ]; };
    return SummariesDomainEventRepository;
}(SummariesEventRepository));
export { SummariesDomainEventRepository };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmRvbWFpbi1ldmVudC1yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc3VtbWFyaWVzL2NvcmUvZG9tYWluLXJlYWQvc3VtbWFyaWVzLmRvbWFpbi1ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFlLGNBQWMsRUFBb0IsTUFBTSxvQkFBb0IsQ0FBQztBQUduRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM3RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDO0lBQ29ELDBEQUF3QjtJQUUzRSx3Q0FBWSxjQUE4QjtlQUN6QyxrQkFBTSxjQUFjLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCwyREFBa0I7Ozs7SUFBbEIsVUFBbUIsV0FBcUM7UUFDdkQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7O2dCQVRELFVBQVU7Ozs7Z0JBUlcsY0FBYzs7SUFrQnBDLHFDQUFDO0NBQUEsQUFWRCxDQUNvRCx3QkFBd0IsR0FTM0U7U0FUWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMsIEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vZ3JpZC9jb3JlL2FwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL3N0cnVjdHVyZS5zdW1tYXJpZXMtY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBTdW1tYXJpZXNFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi9hcGkvc3VtbWFyaWVzLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdW1tYXJpZXNEb21haW5FdmVudFJlcG9zaXRvcnkgZXh0ZW5kcyBTdW1tYXJpZXNFdmVudFJlcG9zaXRvcnkge1xuXG5cdGNvbnN0cnVjdG9yKGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge1xuXHRcdHN1cGVyKGRvbWFpbkV2ZW50QnVzKTtcblx0fVxuXG5cdG9uU3VtbWFyaWVzQ2hhbmdlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlUmVhZE1vZGVsUm9vdElkKTogSGVybWVzT2JzZXJ2YWJsZTxEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblx0XHRyZXR1cm4gdGhpcy5vbkV2ZW50KHN0cnVjdHVyZUlkLCBTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkRXZlbnQpO1xuXHR9XG59XG4iXX0=