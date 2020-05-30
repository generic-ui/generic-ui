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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LW1vZGUtc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2RvbWFpbi1hcGkvbW9kZS9saXN0LXZpZXctbW9kZS1zZXQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUlqRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUdsRjtJQUdDLHFDQUFvQixzQkFBOEM7UUFBOUMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtJQUNsRSxDQUFDOzs7O0lBRUQsOENBQVE7OztJQUFSO1FBQ0MsT0FBTyxvQkFBb0IsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELDRDQUFNOzs7O0lBQU4sVUFBTyxLQUEyQjtRQUVqQyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUM5RTtJQUVGLENBQUM7O2dCQWhCRCxVQUFVOzs7O2dCQUxGLHNCQUFzQjs7SUF1Qi9CLGtDQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FqQlksMkJBQTJCOzs7Ozs7SUFFM0IsNkRBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld01vZGVSZXBvc2l0b3J5IH0gZnJvbSAnLi9saXN0LXZpZXcubW9kZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IExpc3RWaWV3SWQgfSBmcm9tICcuLi8uLi9kb21haW4vbGlzdC12aWV3LmlkJztcbmltcG9ydCB7IExpc3RWaWV3TW9kZVNldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUtc2V0LmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdNb2RlU2V0RXZlbnRIYW5kbGVyIGltcGxlbWVudHMgRG9tYWluRXZlbnRIYW5kbGVyPExpc3RWaWV3SWQsIExpc3RWaWV3TW9kZVNldEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBsaXN0Vmlld01vZGVSZXBvc2l0b3J5OiBMaXN0Vmlld01vZGVSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBUeXBlPExpc3RWaWV3TW9kZVNldEV2ZW50PiB7XG5cdFx0cmV0dXJuIExpc3RWaWV3TW9kZVNldEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBMaXN0Vmlld01vZGVTZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ0xpc3RWaWV3TW9kZVNldEV2ZW50JykpIHtcblx0XHRcdHRoaXMubGlzdFZpZXdNb2RlUmVwb3NpdG9yeS5zZXRNb2RlKGV2ZW50LmdldFRoZW1lKCksIGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==