/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { ListViewModeSetEvent } from '../domain/mode/list-view-mode-set.event';
var ListViewEventRepository = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewEventRepository, _super);
    function ListViewEventRepository(domainEventBus) {
        return _super.call(this, domainEventBus) || this;
    }
    /**
     * @param {?} listViewReadModelRootId
     * @return {?}
     */
    ListViewEventRepository.prototype.onModeChange = /**
     * @param {?} listViewReadModelRootId
     * @return {?}
     */
    function (listViewReadModelRootId) {
        return this.onEvent(listViewReadModelRootId, ListViewModeSetEvent);
    };
    ListViewEventRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ListViewEventRepository.ctorParameters = function () { return [
        { type: DomainEventBus }
    ]; };
    return ListViewEventRepository;
}(EventRepository));
export { ListViewEventRepository };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2RvbWFpbi1hcGkvbGlzdC12aWV3LmV2ZW50LXJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFL0U7SUFDNkMsbURBQW9EO0lBRWhHLGlDQUFZLGNBQThCO2VBQ3pDLGtCQUFNLGNBQWMsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELDhDQUFZOzs7O0lBQVosVUFBYSx1QkFBZ0Q7UUFFNUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFFcEUsQ0FBQzs7Z0JBWEQsVUFBVTs7OztnQkFORixjQUFjOztJQW9CdkIsOEJBQUM7Q0FBQSxBQWRELENBQzZDLGVBQWUsR0FhM0Q7U0FiWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzLCBFdmVudFJlcG9zaXRvcnkgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0lkIH0gZnJvbSAnLi4vZG9tYWluL2xpc3Qtdmlldy5pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4vcmVhZC9saXN0LXZpZXcucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IExpc3RWaWV3TW9kZVNldEV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUtc2V0LmV2ZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3RXZlbnRSZXBvc2l0b3J5IGV4dGVuZHMgRXZlbnRSZXBvc2l0b3J5PExpc3RWaWV3UmVhZE1vZGVsUm9vdElkLCBMaXN0Vmlld0lkPiB7XG5cblx0Y29uc3RydWN0b3IoZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzKSB7XG5cdFx0c3VwZXIoZG9tYWluRXZlbnRCdXMpO1xuXHR9XG5cblx0b25Nb2RlQ2hhbmdlKGxpc3RWaWV3UmVhZE1vZGVsUm9vdElkOiBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCkge1xuXG5cdFx0cmV0dXJuIHRoaXMub25FdmVudChsaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCwgTGlzdFZpZXdNb2RlU2V0RXZlbnQpO1xuXG5cdH1cblxuXG59XG4iXX0=