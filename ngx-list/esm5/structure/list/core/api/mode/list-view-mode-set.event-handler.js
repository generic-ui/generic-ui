/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ListViewModeRepository } from './list-view.mode.repository';
import { ListViewModeSetEvent } from '../../domain/mode/list-view-mode-set.event';
var ListViewModeSetEventHandler = /** @class */ (function () {
    function ListViewModeSetEventHandler(listViewModeRepository) {
        this.listViewModeRepository = listViewModeRepository;
    }
    /**
     * @return {?}
     */
    ListViewModeSetEventHandler.prototype.forEvent = /**
     * @return {?}
     */
    function () {
        return ListViewModeSetEvent;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ListViewModeSetEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.ofMessageType('ListViewModeSetEvent')) {
            this.listViewModeRepository.setMode(event.getTheme(), event.getAggregateId());
        }
    };
    ListViewModeSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ListViewModeSetEventHandler.ctorParameters = function () { return [
        { type: ListViewModeRepository }
    ]; };
    return ListViewModeSetEventHandler;
}());
export { ListViewModeSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewModeSetEventHandler.prototype.listViewModeRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LW1vZGUtc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2NvcmUvYXBpL21vZGUvbGlzdC12aWV3LW1vZGUtc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFHbEY7SUFHQyxxQ0FBb0Isc0JBQThDO1FBQTlDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7SUFDbEUsQ0FBQzs7OztJQUVELDhDQUFROzs7SUFBUjtRQUNDLE9BQU8sb0JBQW9CLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCw0Q0FBTTs7OztJQUFOLFVBQU8sS0FBMkI7UUFFakMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDOUU7SUFFRixDQUFDOztnQkFoQkQsVUFBVTs7OztnQkFMRixzQkFBc0I7O0lBdUIvQixrQ0FBQztDQUFBLEFBbEJELElBa0JDO1NBakJZLDJCQUEyQjs7Ozs7O0lBRTNCLDZEQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld01vZGVSZXBvc2l0b3J5IH0gZnJvbSAnLi9saXN0LXZpZXcubW9kZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IExpc3RWaWV3SWQgfSBmcm9tICcuLi9saXN0LXZpZXcuaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vbW9kZS9saXN0LXZpZXctbW9kZS1zZXQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld01vZGVTZXRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8TGlzdFZpZXdJZCwgTGlzdFZpZXdNb2RlU2V0RXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGxpc3RWaWV3TW9kZVJlcG9zaXRvcnk6IExpc3RWaWV3TW9kZVJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxMaXN0Vmlld01vZGVTZXRFdmVudD4ge1xuXHRcdHJldHVybiBMaXN0Vmlld01vZGVTZXRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogTGlzdFZpZXdNb2RlU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdMaXN0Vmlld01vZGVTZXRFdmVudCcpKSB7XG5cdFx0XHR0aGlzLmxpc3RWaWV3TW9kZVJlcG9zaXRvcnkuc2V0TW9kZShldmVudC5nZXRUaGVtZSgpLCBldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=