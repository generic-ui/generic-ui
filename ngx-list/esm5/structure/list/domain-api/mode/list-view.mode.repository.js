/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Reactive } from '../../../../common/cdk/reactive';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3Lm1vZGUucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZG9tYWluLWFwaS9tb2RlL2xpc3Qtdmlldy5tb2RlLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQU0zRDtJQUM0QyxrREFBUTtJQU1uRDtRQUFBLFlBQ0MsaUJBQU8sU0FDUDtRQU5PLFVBQUksR0FBRyxJQUFJLEdBQUcsRUFBd0IsQ0FBQztRQUV2QyxXQUFLLEdBQUcsSUFBSSxhQUFhLEVBQTZCLENBQUM7O0lBSS9ELENBQUM7Ozs7OztJQUVELHdDQUFPOzs7OztJQUFQLFVBQVEsSUFBa0IsRUFBRSxVQUFzQjtRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELG1DQUFFOzs7O0lBQUYsVUFBRyxVQUFzQjtRQUV4QixPQUFPLElBQUksQ0FBQyxLQUFLO2FBQ1gsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFDaEIsR0FBRzs7OztRQUFDLFVBQUMsR0FBOEI7WUFDbEMsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxFQUNGLG9CQUFvQixFQUFFLENBQ3RCLENBQUM7SUFDUixDQUFDOzs7Ozs7O0lBRU8scUNBQUk7Ozs7OztJQUFaLFVBQWEsSUFBa0IsRUFBRSxVQUFzQjtRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7O2dCQS9CRCxVQUFVOzs7O0lBaUNYLDZCQUFDO0NBQUEsQUFqQ0QsQ0FDNEMsUUFBUSxHQWdDbkQ7U0FoQ1ksc0JBQXNCOzs7Ozs7SUFFbEMsc0NBQStDOzs7OztJQUUvQyx1Q0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9saXN0LXZpZXcuaWQnO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3TW9kZVJlcG9zaXRvcnkgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0cHJpdmF0ZSBtb2RlID0gbmV3IE1hcDxzdHJpbmcsIExpc3RWaWV3TW9kZT4oKTtcblxuXHRwcml2YXRlIG1vZGUkID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgTGlzdFZpZXdNb2RlPj4oKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c2V0TW9kZShtb2RlOiBMaXN0Vmlld01vZGUsIGxpc3RWaWV3SWQ6IExpc3RWaWV3SWQpOiB2b2lkIHtcblx0XHR0aGlzLm5leHQobW9kZSwgbGlzdFZpZXdJZCk7XG5cdH1cblxuXHRvbihsaXN0Vmlld0lkOiBMaXN0Vmlld0lkKTogT2JzZXJ2YWJsZTxMaXN0Vmlld01vZGU+IHtcblxuXHRcdHJldHVybiB0aGlzLm1vZGUkXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICB0aGlzLnRha2VVbnRpbCgpLFxuXHRcdFx0XHRcdCAgIG1hcCgobWFwOiBNYXA8c3RyaW5nLCBMaXN0Vmlld01vZGU+KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gbWFwLmdldChsaXN0Vmlld0lkLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByaXZhdGUgbmV4dChtb2RlOiBMaXN0Vmlld01vZGUsIGxpc3RWaWV3SWQ6IExpc3RWaWV3SWQpOiB2b2lkIHtcblx0XHR0aGlzLm1vZGUuc2V0KGxpc3RWaWV3SWQudG9TdHJpbmcoKSwgbW9kZSk7XG5cdFx0dGhpcy5tb2RlJC5uZXh0KHRoaXMubW9kZSk7XG5cdH1cblxufVxuIl19