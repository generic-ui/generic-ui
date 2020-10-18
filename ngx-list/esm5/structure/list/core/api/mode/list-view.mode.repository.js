/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Reactive } from '../../../../../common/cdk/reactive';
var ListViewModeRepository = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewModeRepository, _super);
    function ListViewModeRepository() {
        var _this = _super.call(this) || this;
        _this.mode = new Map();
        _this.mode$ = new ReplaySubject();
        return _this;
    }
    /**
     * @param {?} mode
     * @param {?} listViewId
     * @return {?}
     */
    ListViewModeRepository.prototype.setMode = /**
     * @param {?} mode
     * @param {?} listViewId
     * @return {?}
     */
    function (mode, listViewId) {
        this.next(mode, listViewId);
    };
    /**
     * @param {?} listViewId
     * @return {?}
     */
    ListViewModeRepository.prototype.on = /**
     * @param {?} listViewId
     * @return {?}
     */
    function (listViewId) {
        return this.mode$
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
     * @param {?} mode
     * @param {?} listViewId
     * @return {?}
     */
    ListViewModeRepository.prototype.next = /**
     * @private
     * @param {?} mode
     * @param {?} listViewId
     * @return {?}
     */
    function (mode, listViewId) {
        this.mode.set(listViewId.toString(), mode);
        this.mode$.next(this.mode);
    };
    ListViewModeRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ListViewModeRepository.ctorParameters = function () { return []; };
    return ListViewModeRepository;
}(Reactive));
export { ListViewModeRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewModeRepository.prototype.mode;
    /**
     * @type {?}
     * @private
     */
    ListViewModeRepository.prototype.mode$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3Lm1vZGUucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvY29yZS9hcGkvbW9kZS9saXN0LXZpZXcubW9kZS5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFLOUQ7SUFDNEMsa0RBQVE7SUFNbkQ7UUFBQSxZQUNDLGlCQUFPLFNBQ1A7UUFOTyxVQUFJLEdBQUcsSUFBSSxHQUFHLEVBQXdCLENBQUM7UUFFdkMsV0FBSyxHQUFHLElBQUksYUFBYSxFQUE2QixDQUFDOztJQUkvRCxDQUFDOzs7Ozs7SUFFRCx3Q0FBTzs7Ozs7SUFBUCxVQUFRLElBQWtCLEVBQUUsVUFBc0I7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxtQ0FBRTs7OztJQUFGLFVBQUcsVUFBc0I7UUFFeEIsT0FBTyxJQUFJLENBQUMsS0FBSzthQUNYLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLEVBQ2hCLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQThCO1lBQ2xDLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN2QyxDQUFDLEVBQUMsRUFDRixvQkFBb0IsRUFBRSxDQUN0QixDQUFDO0lBQ1IsQ0FBQzs7Ozs7OztJQUVPLHFDQUFJOzs7Ozs7SUFBWixVQUFhLElBQWtCLEVBQUUsVUFBc0I7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOztnQkEvQkQsVUFBVTs7OztJQWlDWCw2QkFBQztDQUFBLEFBakNELENBQzRDLFFBQVEsR0FnQ25EO1NBaENZLHNCQUFzQjs7Ozs7O0lBRWxDLHNDQUErQzs7Ozs7SUFFL0MsdUNBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlJztcbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9tb2RlL2xpc3Qtdmlldy1tb2RlJztcbmltcG9ydCB7IExpc3RWaWV3SWQgfSBmcm9tICcuLi9saXN0LXZpZXcuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld01vZGVSZXBvc2l0b3J5IGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdHByaXZhdGUgbW9kZSA9IG5ldyBNYXA8c3RyaW5nLCBMaXN0Vmlld01vZGU+KCk7XG5cblx0cHJpdmF0ZSBtb2RlJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIExpc3RWaWV3TW9kZT4+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHNldE1vZGUobW9kZTogTGlzdFZpZXdNb2RlLCBsaXN0Vmlld0lkOiBMaXN0Vmlld0lkKTogdm9pZCB7XG5cdFx0dGhpcy5uZXh0KG1vZGUsIGxpc3RWaWV3SWQpO1xuXHR9XG5cblx0b24obGlzdFZpZXdJZDogTGlzdFZpZXdJZCk6IE9ic2VydmFibGU8TGlzdFZpZXdNb2RlPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5tb2RlJFxuXHRcdFx0XHQgICAuYXNPYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgdGhpcy50YWtlVW50aWwoKSxcblx0XHRcdFx0XHQgICBtYXAoKG1hcDogTWFwPHN0cmluZywgTGlzdFZpZXdNb2RlPikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5nZXQobGlzdFZpZXdJZC50b1N0cmluZygpKTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcml2YXRlIG5leHQobW9kZTogTGlzdFZpZXdNb2RlLCBsaXN0Vmlld0lkOiBMaXN0Vmlld0lkKTogdm9pZCB7XG5cdFx0dGhpcy5tb2RlLnNldChsaXN0Vmlld0lkLnRvU3RyaW5nKCksIG1vZGUpO1xuXHRcdHRoaXMubW9kZSQubmV4dCh0aGlzLm1vZGUpO1xuXHR9XG5cbn1cbiJdfQ==