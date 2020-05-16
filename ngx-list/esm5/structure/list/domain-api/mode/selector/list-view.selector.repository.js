/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Reactive } from '@generic-ui/hermes';
var ListViewSelectorRepository = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewSelectorRepository, _super);
    function ListViewSelectorRepository() {
        var _this = _super.call(this) || this;
        _this.selectorEnabled = new Map();
        _this.selectorEnabled$ = new ReplaySubject();
        return _this;
    }
    /**
     * @param {?} selectorEnabled
     * @param {?} listViewId
     * @return {?}
     */
    ListViewSelectorRepository.prototype.setMode = /**
     * @param {?} selectorEnabled
     * @param {?} listViewId
     * @return {?}
     */
    function (selectorEnabled, listViewId) {
        this.next(selectorEnabled, listViewId);
    };
    /**
     * @param {?} listViewId
     * @return {?}
     */
    ListViewSelectorRepository.prototype.on = /**
     * @param {?} listViewId
     * @return {?}
     */
    function (listViewId) {
        return this.selectorEnabled$
            .asObservable()
            .pipe(this.takeUntil(), map((/**
         * @param {?} map
         * @return {?}
         */
        function (map) {
            return map.get(listViewId.toString());
        })), distinctUntilChanged());
    };
    /**
     * @private
     * @param {?} enabled
     * @param {?} listViewId
     * @return {?}
     */
    ListViewSelectorRepository.prototype.next = /**
     * @private
     * @param {?} enabled
     * @param {?} listViewId
     * @return {?}
     */
    function (enabled, listViewId) {
        this.selectorEnabled.set(listViewId.toString(), enabled);
        this.selectorEnabled$.next(this.selectorEnabled);
    };
    ListViewSelectorRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ListViewSelectorRepository.ctorParameters = function () { return []; };
    return ListViewSelectorRepository;
}(Reactive));
export { ListViewSelectorRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewSelectorRepository.prototype.selectorEnabled;
    /**
     * @type {?}
     * @private
     */
    ListViewSelectorRepository.prototype.selectorEnabled$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LnNlbGVjdG9yLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2RvbWFpbi1hcGkvbW9kZS9zZWxlY3Rvci9saXN0LXZpZXcuc2VsZWN0b3IucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSzlDO0lBQ2dELHNEQUFRO0lBTXZEO1FBQUEsWUFDQyxpQkFBTyxTQUNQO1FBTk8scUJBQWUsR0FBRyxJQUFJLEdBQUcsRUFBbUIsQ0FBQztRQUU3QyxzQkFBZ0IsR0FBRyxJQUFJLGFBQWEsRUFBd0IsQ0FBQzs7SUFJckUsQ0FBQzs7Ozs7O0lBRUQsNENBQU87Ozs7O0lBQVAsVUFBUSxlQUF3QixFQUFFLFVBQXNCO1FBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRUQsdUNBQUU7Ozs7SUFBRixVQUFHLFVBQXNCO1FBRXhCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQjthQUN0QixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUNoQixHQUFHOzs7O1FBQUMsVUFBQyxHQUF5QjtZQUM3QixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxFQUFDLEVBQ0Ysb0JBQW9CLEVBQUUsQ0FDdEIsQ0FBQztJQUNSLENBQUM7Ozs7Ozs7SUFFTyx5Q0FBSTs7Ozs7O0lBQVosVUFBYSxPQUFnQixFQUFFLFVBQXNCO1FBQ3BELElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDOztnQkEvQkQsVUFBVTs7OztJQWlDWCxpQ0FBQztDQUFBLEFBakNELENBQ2dELFFBQVEsR0FnQ3ZEO1NBaENZLDBCQUEwQjs7Ozs7O0lBRXRDLHFEQUFxRDs7Ozs7SUFFckQsc0RBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0lkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2xpc3Qtdmlldy5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3U2VsZWN0b3JSZXBvc2l0b3J5IGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdHByaXZhdGUgc2VsZWN0b3JFbmFibGVkID0gbmV3IE1hcDxzdHJpbmcsIGJvb2xlYW4+KCk7XG5cblx0cHJpdmF0ZSBzZWxlY3RvckVuYWJsZWQkID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgYm9vbGVhbj4+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHNldE1vZGUoc2VsZWN0b3JFbmFibGVkOiBib29sZWFuLCBsaXN0Vmlld0lkOiBMaXN0Vmlld0lkKTogdm9pZCB7XG5cdFx0dGhpcy5uZXh0KHNlbGVjdG9yRW5hYmxlZCwgbGlzdFZpZXdJZCk7XG5cdH1cblxuXHRvbihsaXN0Vmlld0lkOiBMaXN0Vmlld0lkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RvckVuYWJsZWQkXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICB0aGlzLnRha2VVbnRpbCgpLFxuXHRcdFx0XHRcdCAgIG1hcCgobWFwOiBNYXA8c3RyaW5nLCBib29sZWFuPikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5nZXQobGlzdFZpZXdJZC50b1N0cmluZygpKTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcml2YXRlIG5leHQoZW5hYmxlZDogYm9vbGVhbiwgbGlzdFZpZXdJZDogTGlzdFZpZXdJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0b3JFbmFibGVkLnNldChsaXN0Vmlld0lkLnRvU3RyaW5nKCksIGVuYWJsZWQpO1xuXHRcdHRoaXMuc2VsZWN0b3JFbmFibGVkJC5uZXh0KHRoaXMuc2VsZWN0b3JFbmFibGVkKTtcblx0fVxuXG59XG4iXX0=