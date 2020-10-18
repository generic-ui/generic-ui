/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { CreateListViewCommand } from './create/create-list-view.command';
import { SetListViewModeCommand } from './mode/set-list-view-mode.command';
import { ToggleListViewSelectorCommand } from './mode/selector/toggle-list-view-selector.command';
var ListViewDispatcher = /** @class */ (function () {
    function ListViewDispatcher(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} listViewId
     * @return {?}
     */
    ListViewDispatcher.prototype.create = /**
     * @param {?} listViewId
     * @return {?}
     */
    function (listViewId) {
        this.commandDispatcher.dispatch(new CreateListViewCommand(listViewId));
    };
    /**
     * @param {?} mode
     * @param {?} listViewId
     * @return {?}
     */
    ListViewDispatcher.prototype.setMode = /**
     * @param {?} mode
     * @param {?} listViewId
     * @return {?}
     */
    function (mode, listViewId) {
        this.commandDispatcher.dispatch(new SetListViewModeCommand(listViewId, mode));
    };
    /**
     * @param {?} enabled
     * @param {?} listViewId
     * @return {?}
     */
    ListViewDispatcher.prototype.toggleSelector = /**
     * @param {?} enabled
     * @param {?} listViewId
     * @return {?}
     */
    function (enabled, listViewId) {
        this.commandDispatcher.dispatch(new ToggleListViewSelectorCommand(listViewId, enabled));
    };
    ListViewDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ListViewDispatcher.ctorParameters = function () { return [
        { type: CommandDispatcher }
    ]; };
    return ListViewDispatcher;
}());
export { ListViewDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewDispatcher.prototype.commandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2NvcmUvZG9tYWluL2xpc3Qtdmlldy5kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBR2xHO0lBR0MsNEJBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3hELENBQUM7Ozs7O0lBRUQsbUNBQU07Ozs7SUFBTixVQUFPLFVBQXNCO1FBQzVCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7OztJQUVELG9DQUFPOzs7OztJQUFQLFVBQVEsSUFBa0IsRUFBRSxVQUFzQjtRQUNqRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksc0JBQXNCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQzs7Ozs7O0lBRUQsMkNBQWM7Ozs7O0lBQWQsVUFBZSxPQUFnQixFQUFFLFVBQXNCO1FBQ3RELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSw2QkFBNkIsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN6RixDQUFDOztnQkFoQkQsVUFBVTs7OztnQkFURixpQkFBaUI7O0lBMkIxQix5QkFBQztDQUFBLEFBbEJELElBa0JDO1NBakJZLGtCQUFrQjs7Ozs7O0lBRWxCLCtDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0lkIH0gZnJvbSAnLi4vYXBpL2xpc3Qtdmlldy5pZCc7XG5pbXBvcnQgeyBDcmVhdGVMaXN0Vmlld0NvbW1hbmQgfSBmcm9tICcuL2NyZWF0ZS9jcmVhdGUtbGlzdC12aWV3LmNvbW1hbmQnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlIH0gZnJvbSAnLi9tb2RlL2xpc3Qtdmlldy1tb2RlJztcbmltcG9ydCB7IFNldExpc3RWaWV3TW9kZUNvbW1hbmQgfSBmcm9tICcuL21vZGUvc2V0LWxpc3Qtdmlldy1tb2RlLmNvbW1hbmQnO1xuaW1wb3J0IHsgVG9nZ2xlTGlzdFZpZXdTZWxlY3RvckNvbW1hbmQgfSBmcm9tICcuL21vZGUvc2VsZWN0b3IvdG9nZ2xlLWxpc3Qtdmlldy1zZWxlY3Rvci5jb21tYW5kJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdEaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0Y3JlYXRlKGxpc3RWaWV3SWQ6IExpc3RWaWV3SWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBDcmVhdGVMaXN0Vmlld0NvbW1hbmQobGlzdFZpZXdJZCkpO1xuXHR9XG5cblx0c2V0TW9kZShtb2RlOiBMaXN0Vmlld01vZGUsIGxpc3RWaWV3SWQ6IExpc3RWaWV3SWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRMaXN0Vmlld01vZGVDb21tYW5kKGxpc3RWaWV3SWQsIG1vZGUpKTtcblx0fVxuXG5cdHRvZ2dsZVNlbGVjdG9yKGVuYWJsZWQ6IGJvb2xlYW4sIGxpc3RWaWV3SWQ6IExpc3RWaWV3SWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBUb2dnbGVMaXN0Vmlld1NlbGVjdG9yQ29tbWFuZChsaXN0Vmlld0lkLCBlbmFibGVkKSk7XG5cdH1cblxufVxuIl19