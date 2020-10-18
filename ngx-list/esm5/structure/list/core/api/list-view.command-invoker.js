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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvY29yZS9hcGkvbGlzdC12aWV3LmNvbW1hbmQtaW52b2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUs5RDtJQUdDLGdDQUE2QixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUNuRSxDQUFDOzs7OztJQUVELHVDQUFNOzs7O0lBQU4sVUFBTyx1QkFBbUU7UUFBbkUsd0NBQUEsRUFBQSwwQ0FBbUU7UUFDekUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7OztJQUVELHdDQUFPOzs7OztJQUFQLFVBQVEsSUFBa0IsRUFBRSx1QkFBbUU7UUFBbkUsd0NBQUEsRUFBQSwwQ0FBbUU7UUFDOUYsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsdUJBQXVCLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNoRixDQUFDOzs7Ozs7SUFFRCwrQ0FBYzs7Ozs7SUFBZCxVQUFlLE9BQWdCLEVBQUUsdUJBQW1FO1FBQW5FLHdDQUFBLEVBQUEsMENBQW1FO1FBQ25HLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLHVCQUF1QixDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7Z0JBaEJELFVBQVU7Ozs7Z0JBTkYsa0JBQWtCOztJQXdCM0IsNkJBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWpCWSxzQkFBc0I7Ozs7OztJQUV0QixvREFBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRJbnZva2VyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdEaXNwYXRjaGVyIH0gZnJvbSAnLi4vZG9tYWluL2xpc3Qtdmlldy5kaXNwYXRjaGVyJztcbmltcG9ydCB7IGxpc3RWaWV3R2xvYmFsSWQgfSBmcm9tICcuL3JlYWQvbGlzdC12aWV3Lmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4vcmVhZC9saXN0LXZpZXcucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4uL2RvbWFpbi9tb2RlL2xpc3Qtdmlldy1tb2RlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdDb21tYW5kSW52b2tlciBpbXBsZW1lbnRzIENvbW1hbmRJbnZva2VyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGxpc3RWaWV3RGlzcGF0Y2hlcjogTGlzdFZpZXdEaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRjcmVhdGUobGlzdFZpZXdSZWFkTW9kZWxSb290SWQ6IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkID0gbGlzdFZpZXdHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMubGlzdFZpZXdEaXNwYXRjaGVyLmNyZWF0ZShsaXN0Vmlld1JlYWRNb2RlbFJvb3RJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0c2V0TW9kZShtb2RlOiBMaXN0Vmlld01vZGUsIGxpc3RWaWV3UmVhZE1vZGVsUm9vdElkOiBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCA9IGxpc3RWaWV3R2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmxpc3RWaWV3RGlzcGF0Y2hlci5zZXRNb2RlKG1vZGUsIGxpc3RWaWV3UmVhZE1vZGVsUm9vdElkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHR0b2dnbGVTZWxlY3RvcihlbmFibGVkOiBib29sZWFuLCBsaXN0Vmlld1JlYWRNb2RlbFJvb3RJZDogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQgPSBsaXN0Vmlld0dsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5saXN0Vmlld0Rpc3BhdGNoZXIudG9nZ2xlU2VsZWN0b3IoZW5hYmxlZCwgbGlzdFZpZXdSZWFkTW9kZWxSb290SWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG59XG4iXX0=