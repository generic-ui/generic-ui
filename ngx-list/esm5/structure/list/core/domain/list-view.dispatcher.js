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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2NvcmUvZG9tYWluL2xpc3Qtdmlldy5kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBR2xHO0lBR0MsNEJBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3hELENBQUM7Ozs7O0lBRUQsbUNBQU07Ozs7SUFBTixVQUFPLFVBQXNCO1FBQzVCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7OztJQUVELG9DQUFPOzs7OztJQUFQLFVBQVEsSUFBa0IsRUFBRSxVQUFzQjtRQUNqRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksc0JBQXNCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQzs7Ozs7O0lBRUQsMkNBQWM7Ozs7O0lBQWQsVUFBZSxPQUFnQixFQUFFLFVBQXNCO1FBQ3RELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSw2QkFBNkIsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN6RixDQUFDOztnQkFoQkQsVUFBVTs7OztnQkFURixpQkFBaUI7O0lBMkIxQix5QkFBQztDQUFBLEFBbEJELElBa0JDO1NBakJZLGtCQUFrQjs7Ozs7O0lBRWxCLCtDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0lkIH0gZnJvbSAnLi9saXN0LXZpZXcuaWQnO1xuaW1wb3J0IHsgQ3JlYXRlTGlzdFZpZXdDb21tYW5kIH0gZnJvbSAnLi9jcmVhdGUvY3JlYXRlLWxpc3Qtdmlldy5jb21tYW5kJztcbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4vbW9kZS9saXN0LXZpZXctbW9kZSc7XG5pbXBvcnQgeyBTZXRMaXN0Vmlld01vZGVDb21tYW5kIH0gZnJvbSAnLi9tb2RlL3NldC1saXN0LXZpZXctbW9kZS5jb21tYW5kJztcbmltcG9ydCB7IFRvZ2dsZUxpc3RWaWV3U2VsZWN0b3JDb21tYW5kIH0gZnJvbSAnLi9tb2RlL3NlbGVjdG9yL3RvZ2dsZS1saXN0LXZpZXctc2VsZWN0b3IuY29tbWFuZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3RGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIpIHtcblx0fVxuXG5cdGNyZWF0ZShsaXN0Vmlld0lkOiBMaXN0Vmlld0lkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgQ3JlYXRlTGlzdFZpZXdDb21tYW5kKGxpc3RWaWV3SWQpKTtcblx0fVxuXG5cdHNldE1vZGUobW9kZTogTGlzdFZpZXdNb2RlLCBsaXN0Vmlld0lkOiBMaXN0Vmlld0lkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0TGlzdFZpZXdNb2RlQ29tbWFuZChsaXN0Vmlld0lkLCBtb2RlKSk7XG5cdH1cblxuXHR0b2dnbGVTZWxlY3RvcihlbmFibGVkOiBib29sZWFuLCBsaXN0Vmlld0lkOiBMaXN0Vmlld0lkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgVG9nZ2xlTGlzdFZpZXdTZWxlY3RvckNvbW1hbmQobGlzdFZpZXdJZCwgZW5hYmxlZCkpO1xuXHR9XG5cbn1cbiJdfQ==