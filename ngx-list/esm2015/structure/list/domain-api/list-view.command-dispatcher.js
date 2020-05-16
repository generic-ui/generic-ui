/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ListViewDispatcher } from '../domain/list-view.dispatcher';
import { listViewGlobalId } from './read/list-view.global-id';
export class ListViewCommandDispatcher {
    /**
     * @param {?} listViewDispatcher
     */
    constructor(listViewDispatcher) {
        this.listViewDispatcher = listViewDispatcher;
    }
    /**
     * @param {?=} listViewReadModelRootId
     * @return {?}
     */
    create(listViewReadModelRootId = listViewGlobalId) {
        this.listViewDispatcher.create(listViewReadModelRootId.toAggregateId());
    }
    /**
     * @param {?} mode
     * @param {?=} listViewReadModelRootId
     * @return {?}
     */
    setMode(mode, listViewReadModelRootId = listViewGlobalId) {
        this.listViewDispatcher.setMode(mode, listViewReadModelRootId.toAggregateId());
    }
    /**
     * @param {?} enabled
     * @param {?=} listViewReadModelRootId
     * @return {?}
     */
    toggleSelector(enabled, listViewReadModelRootId = listViewGlobalId) {
        this.listViewDispatcher.toggleSelector(enabled, listViewReadModelRootId.toAggregateId());
    }
}
ListViewCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ListViewCommandDispatcher.ctorParameters = () => [
    { type: ListViewDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewCommandDispatcher.prototype.listViewDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZG9tYWluLWFwaS9saXN0LXZpZXcuY29tbWFuZC1kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBTTlELE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFFckMsWUFBNkIsa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFDbkUsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsMEJBQW1ELGdCQUFnQjtRQUN6RSxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Ozs7O0lBRUQsT0FBTyxDQUFDLElBQWtCLEVBQUUsMEJBQW1ELGdCQUFnQjtRQUM5RixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSx1QkFBdUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7Ozs7OztJQUVELGNBQWMsQ0FBQyxPQUFnQixFQUFFLDBCQUFtRCxnQkFBZ0I7UUFDbkcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsdUJBQXVCLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUMxRixDQUFDOzs7WUFoQkQsVUFBVTs7OztZQU5GLGtCQUFrQjs7Ozs7OztJQVNkLHVEQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTGlzdFZpZXdEaXNwYXRjaGVyIH0gZnJvbSAnLi4vZG9tYWluL2xpc3Qtdmlldy5kaXNwYXRjaGVyJztcbmltcG9ydCB7IGxpc3RWaWV3R2xvYmFsSWQgfSBmcm9tICcuL3JlYWQvbGlzdC12aWV3Lmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4vcmVhZC9saXN0LXZpZXcucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4uL2RvbWFpbi9tb2RlL2xpc3Qtdmlldy1tb2RlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdDb21tYW5kRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBsaXN0Vmlld0Rpc3BhdGNoZXI6IExpc3RWaWV3RGlzcGF0Y2hlcikge1xuXHR9XG5cblx0Y3JlYXRlKGxpc3RWaWV3UmVhZE1vZGVsUm9vdElkOiBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCA9IGxpc3RWaWV3R2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmxpc3RWaWV3RGlzcGF0Y2hlci5jcmVhdGUobGlzdFZpZXdSZWFkTW9kZWxSb290SWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG5cdHNldE1vZGUobW9kZTogTGlzdFZpZXdNb2RlLCBsaXN0Vmlld1JlYWRNb2RlbFJvb3RJZDogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQgPSBsaXN0Vmlld0dsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5saXN0Vmlld0Rpc3BhdGNoZXIuc2V0TW9kZShtb2RlLCBsaXN0Vmlld1JlYWRNb2RlbFJvb3RJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0dG9nZ2xlU2VsZWN0b3IoZW5hYmxlZDogYm9vbGVhbiwgbGlzdFZpZXdSZWFkTW9kZWxSb290SWQ6IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkID0gbGlzdFZpZXdHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMubGlzdFZpZXdEaXNwYXRjaGVyLnRvZ2dsZVNlbGVjdG9yKGVuYWJsZWQsIGxpc3RWaWV3UmVhZE1vZGVsUm9vdElkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxufVxuIl19