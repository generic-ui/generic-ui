/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ListViewDispatcher } from '../domain/list-view.dispatcher';
import { listViewGlobalId } from './read/list-view.global-id';
var ListViewCommandInvoker = /** @class */ (function () {
    function ListViewCommandInvoker(listViewDispatcher) {
        this.listViewDispatcher = listViewDispatcher;
    }
    /**
     * @param {?=} listViewReadModelRootId
     * @return {?}
     */
    ListViewCommandInvoker.prototype.create = /**
     * @param {?=} listViewReadModelRootId
     * @return {?}
     */
    function (listViewReadModelRootId) {
        if (listViewReadModelRootId === void 0) { listViewReadModelRootId = listViewGlobalId; }
        this.listViewDispatcher.create(listViewReadModelRootId.toAggregateId());
    };
    /**
     * @param {?} mode
     * @param {?=} listViewReadModelRootId
     * @return {?}
     */
    ListViewCommandInvoker.prototype.setMode = /**
     * @param {?} mode
     * @param {?=} listViewReadModelRootId
     * @return {?}
     */
    function (mode, listViewReadModelRootId) {
        if (listViewReadModelRootId === void 0) { listViewReadModelRootId = listViewGlobalId; }
        this.listViewDispatcher.setMode(mode, listViewReadModelRootId.toAggregateId());
    };
    /**
     * @param {?} enabled
     * @param {?=} listViewReadModelRootId
     * @return {?}
     */
    ListViewCommandInvoker.prototype.toggleSelector = /**
     * @param {?} enabled
     * @param {?=} listViewReadModelRootId
     * @return {?}
     */
    function (enabled, listViewReadModelRootId) {
        if (listViewReadModelRootId === void 0) { listViewReadModelRootId = listViewGlobalId; }
        this.listViewDispatcher.toggleSelector(enabled, listViewReadModelRootId.toAggregateId());
    };
    ListViewCommandInvoker.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ListViewCommandInvoker.ctorParameters = function () { return [
        { type: ListViewDispatcher }
    ]; };
    return ListViewCommandInvoker;
}());
export { ListViewCommandInvoker };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewCommandInvoker.prototype.listViewDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZG9tYWluLWFwaS9saXN0LXZpZXcuY29tbWFuZC1pbnZva2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBSzlEO0lBR0MsZ0NBQTZCLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQ25FLENBQUM7Ozs7O0lBRUQsdUNBQU07Ozs7SUFBTixVQUFPLHVCQUFtRTtRQUFuRSx3Q0FBQSxFQUFBLDBDQUFtRTtRQUN6RSxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Ozs7O0lBRUQsd0NBQU87Ozs7O0lBQVAsVUFBUSxJQUFrQixFQUFFLHVCQUFtRTtRQUFuRSx3Q0FBQSxFQUFBLDBDQUFtRTtRQUM5RixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSx1QkFBdUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7Ozs7OztJQUVELCtDQUFjOzs7OztJQUFkLFVBQWUsT0FBZ0IsRUFBRSx1QkFBbUU7UUFBbkUsd0NBQUEsRUFBQSwwQ0FBbUU7UUFDbkcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsdUJBQXVCLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUMxRixDQUFDOztnQkFoQkQsVUFBVTs7OztnQkFORixrQkFBa0I7O0lBd0IzQiw2QkFBQztDQUFBLEFBbEJELElBa0JDO1NBakJZLHNCQUFzQjs7Ozs7O0lBRXRCLG9EQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEludm9rZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0Rpc3BhdGNoZXIgfSBmcm9tICcuLi9kb21haW4vbGlzdC12aWV3LmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgbGlzdFZpZXdHbG9iYWxJZCB9IGZyb20gJy4vcmVhZC9saXN0LXZpZXcuZ2xvYmFsLWlkJztcbmltcG9ydCB7IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi9yZWFkL2xpc3Qtdmlldy5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlIH0gZnJvbSAnLi4vZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0NvbW1hbmRJbnZva2VyIGltcGxlbWVudHMgQ29tbWFuZEludm9rZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgbGlzdFZpZXdEaXNwYXRjaGVyOiBMaXN0Vmlld0Rpc3BhdGNoZXIpIHtcblx0fVxuXG5cdGNyZWF0ZShsaXN0Vmlld1JlYWRNb2RlbFJvb3RJZDogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQgPSBsaXN0Vmlld0dsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5saXN0Vmlld0Rpc3BhdGNoZXIuY3JlYXRlKGxpc3RWaWV3UmVhZE1vZGVsUm9vdElkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRzZXRNb2RlKG1vZGU6IExpc3RWaWV3TW9kZSwgbGlzdFZpZXdSZWFkTW9kZWxSb290SWQ6IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkID0gbGlzdFZpZXdHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMubGlzdFZpZXdEaXNwYXRjaGVyLnNldE1vZGUobW9kZSwgbGlzdFZpZXdSZWFkTW9kZWxSb290SWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG5cdHRvZ2dsZVNlbGVjdG9yKGVuYWJsZWQ6IGJvb2xlYW4sIGxpc3RWaWV3UmVhZE1vZGVsUm9vdElkOiBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCA9IGxpc3RWaWV3R2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmxpc3RWaWV3RGlzcGF0Y2hlci50b2dnbGVTZWxlY3RvcihlbmFibGVkLCBsaXN0Vmlld1JlYWRNb2RlbFJvb3RJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cbn1cbiJdfQ==