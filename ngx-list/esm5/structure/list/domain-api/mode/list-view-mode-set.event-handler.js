/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { ListViewModeRepository } from './list-view.mode.repository';
var ListViewModeSetEventHandler = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewModeSetEventHandler, _super);
    function ListViewModeSetEventHandler(listViewModeRepository) {
        var _this = _super.call(this) || this;
        _this.listViewModeRepository = listViewModeRepository;
        return _this;
    }
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
}(DomainEventHandler));
export { ListViewModeSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewModeSetEventHandler.prototype.listViewModeRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LW1vZGUtc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2RvbWFpbi1hcGkvbW9kZS9saXN0LXZpZXctbW9kZS1zZXQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFLckU7SUFDaUQsdURBQW9EO0lBRXBHLHFDQUFvQixzQkFBOEM7UUFBbEUsWUFDQyxpQkFBTyxTQUNQO1FBRm1CLDRCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7O0lBRWxFLENBQUM7Ozs7O0lBRUQsNENBQU07Ozs7SUFBTixVQUFPLEtBQTJCO1FBRWpDLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQzlFO0lBRUYsQ0FBQzs7Z0JBYkQsVUFBVTs7OztnQkFMRixzQkFBc0I7O0lBb0IvQixrQ0FBQztDQUFBLEFBZkQsQ0FDaUQsa0JBQWtCLEdBY2xFO1NBZFksMkJBQTJCOzs7Ozs7SUFFM0IsNkRBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld01vZGVSZXBvc2l0b3J5IH0gZnJvbSAnLi9saXN0LXZpZXcubW9kZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IExpc3RWaWV3SWQgfSBmcm9tICcuLi8uLi9kb21haW4vbGlzdC12aWV3LmlkJztcbmltcG9ydCB7IExpc3RWaWV3TW9kZVNldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUtc2V0LmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdNb2RlU2V0RXZlbnRIYW5kbGVyIGV4dGVuZHMgRG9tYWluRXZlbnRIYW5kbGVyPExpc3RWaWV3SWQsIExpc3RWaWV3TW9kZVNldEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBsaXN0Vmlld01vZGVSZXBvc2l0b3J5OiBMaXN0Vmlld01vZGVSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogTGlzdFZpZXdNb2RlU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdMaXN0Vmlld01vZGVTZXRFdmVudCcpKSB7XG5cdFx0XHR0aGlzLmxpc3RWaWV3TW9kZVJlcG9zaXRvcnkuc2V0TW9kZShldmVudC5nZXRUaGVtZSgpLCBldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=