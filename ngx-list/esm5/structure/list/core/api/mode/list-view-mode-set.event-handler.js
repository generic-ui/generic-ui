/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ListViewModeArchive } from './list-view.mode.archive';
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
            this.listViewModeRepository.next(event.getAggregateId(), event.getTheme());
        }
    };
    ListViewModeSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ListViewModeSetEventHandler.ctorParameters = function () { return [
        { type: ListViewModeArchive }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LW1vZGUtc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2NvcmUvYXBpL21vZGUvbGlzdC12aWV3LW1vZGUtc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFHbEY7SUFHQyxxQ0FBb0Isc0JBQTJDO1FBQTNDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBcUI7SUFDL0QsQ0FBQzs7OztJQUVELDhDQUFROzs7SUFBUjtRQUNDLE9BQU8sb0JBQW9CLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCw0Q0FBTTs7OztJQUFOLFVBQU8sS0FBMkI7UUFFakMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDM0U7SUFFRixDQUFDOztnQkFoQkQsVUFBVTs7OztnQkFMRixtQkFBbUI7O0lBdUI1QixrQ0FBQztDQUFBLEFBbEJELElBa0JDO1NBakJZLDJCQUEyQjs7Ozs7O0lBRTNCLDZEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld01vZGVBcmNoaXZlIH0gZnJvbSAnLi9saXN0LXZpZXcubW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IExpc3RWaWV3SWQgfSBmcm9tICcuLi8uLi9kb21haW4vbGlzdC12aWV3LmlkJztcbmltcG9ydCB7IExpc3RWaWV3TW9kZVNldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUtc2V0LmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdNb2RlU2V0RXZlbnRIYW5kbGVyIGltcGxlbWVudHMgRG9tYWluRXZlbnRIYW5kbGVyPExpc3RWaWV3SWQsIExpc3RWaWV3TW9kZVNldEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBsaXN0Vmlld01vZGVSZXBvc2l0b3J5OiBMaXN0Vmlld01vZGVBcmNoaXZlKSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8TGlzdFZpZXdNb2RlU2V0RXZlbnQ+IHtcblx0XHRyZXR1cm4gTGlzdFZpZXdNb2RlU2V0RXZlbnQ7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IExpc3RWaWV3TW9kZVNldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnTGlzdFZpZXdNb2RlU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy5saXN0Vmlld01vZGVSZXBvc2l0b3J5Lm5leHQoZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgZXZlbnQuZ2V0VGhlbWUoKSk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19