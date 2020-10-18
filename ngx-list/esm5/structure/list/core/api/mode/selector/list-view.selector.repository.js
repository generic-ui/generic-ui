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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LnNlbGVjdG9yLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2NvcmUvYXBpL21vZGUvc2VsZWN0b3IvbGlzdC12aWV3LnNlbGVjdG9yLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUs5QztJQUNnRCxzREFBUTtJQU12RDtRQUFBLFlBQ0MsaUJBQU8sU0FDUDtRQU5PLHFCQUFlLEdBQUcsSUFBSSxHQUFHLEVBQW1CLENBQUM7UUFFN0Msc0JBQWdCLEdBQUcsSUFBSSxhQUFhLEVBQXdCLENBQUM7O0lBSXJFLENBQUM7Ozs7OztJQUVELDRDQUFPOzs7OztJQUFQLFVBQVEsZUFBd0IsRUFBRSxVQUFzQjtRQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUVELHVDQUFFOzs7O0lBQUYsVUFBRyxVQUFzQjtRQUV4QixPQUFPLElBQUksQ0FBQyxnQkFBZ0I7YUFDdEIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFDaEIsR0FBRzs7OztRQUFDLFVBQUMsR0FBeUI7WUFDN0IsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxFQUNGLG9CQUFvQixFQUFFLENBQ3RCLENBQUM7SUFDUixDQUFDOzs7Ozs7O0lBRU8seUNBQUk7Ozs7OztJQUFaLFVBQWEsT0FBZ0IsRUFBRSxVQUFzQjtRQUNwRCxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Z0JBL0JELFVBQVU7Ozs7SUFpQ1gsaUNBQUM7Q0FBQSxBQWpDRCxDQUNnRCxRQUFRLEdBZ0N2RDtTQWhDWSwwQkFBMEI7Ozs7OztJQUV0QyxxREFBcUQ7Ozs7O0lBRXJELHNEQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uLy4uL2xpc3Qtdmlldy5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3U2VsZWN0b3JSZXBvc2l0b3J5IGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdHByaXZhdGUgc2VsZWN0b3JFbmFibGVkID0gbmV3IE1hcDxzdHJpbmcsIGJvb2xlYW4+KCk7XG5cblx0cHJpdmF0ZSBzZWxlY3RvckVuYWJsZWQkID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgYm9vbGVhbj4+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHNldE1vZGUoc2VsZWN0b3JFbmFibGVkOiBib29sZWFuLCBsaXN0Vmlld0lkOiBMaXN0Vmlld0lkKTogdm9pZCB7XG5cdFx0dGhpcy5uZXh0KHNlbGVjdG9yRW5hYmxlZCwgbGlzdFZpZXdJZCk7XG5cdH1cblxuXHRvbihsaXN0Vmlld0lkOiBMaXN0Vmlld0lkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RvckVuYWJsZWQkXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICB0aGlzLnRha2VVbnRpbCgpLFxuXHRcdFx0XHRcdCAgIG1hcCgobWFwOiBNYXA8c3RyaW5nLCBib29sZWFuPikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5nZXQobGlzdFZpZXdJZC50b1N0cmluZygpKTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcml2YXRlIG5leHQoZW5hYmxlZDogYm9vbGVhbiwgbGlzdFZpZXdJZDogTGlzdFZpZXdJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0b3JFbmFibGVkLnNldChsaXN0Vmlld0lkLnRvU3RyaW5nKCksIGVuYWJsZWQpO1xuXHRcdHRoaXMuc2VsZWN0b3JFbmFibGVkJC5uZXh0KHRoaXMuc2VsZWN0b3JFbmFibGVkKTtcblx0fVxuXG59XG4iXX0=