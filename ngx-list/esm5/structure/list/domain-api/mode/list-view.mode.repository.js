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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3Lm1vZGUucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZG9tYWluLWFwaS9tb2RlL2xpc3Qtdmlldy5tb2RlLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUszRDtJQUM0QyxrREFBUTtJQU1uRDtRQUFBLFlBQ0MsaUJBQU8sU0FDUDtRQU5PLFVBQUksR0FBRyxJQUFJLEdBQUcsRUFBd0IsQ0FBQztRQUV2QyxXQUFLLEdBQUcsSUFBSSxhQUFhLEVBQTZCLENBQUM7O0lBSS9ELENBQUM7Ozs7OztJQUVELHdDQUFPOzs7OztJQUFQLFVBQVEsSUFBa0IsRUFBRSxVQUFzQjtRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELG1DQUFFOzs7O0lBQUYsVUFBRyxVQUFzQjtRQUV4QixPQUFPLElBQUksQ0FBQyxLQUFLO2FBQ1gsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFDaEIsR0FBRzs7OztRQUFDLFVBQUMsR0FBOEI7WUFDbEMsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxFQUNGLG9CQUFvQixFQUFFLENBQ3RCLENBQUM7SUFDUixDQUFDOzs7Ozs7O0lBRU8scUNBQUk7Ozs7OztJQUFaLFVBQWEsSUFBa0IsRUFBRSxVQUFzQjtRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7O2dCQS9CRCxVQUFVOzs7O0lBaUNYLDZCQUFDO0NBQUEsQUFqQ0QsQ0FDNEMsUUFBUSxHQWdDbkQ7U0FoQ1ksc0JBQXNCOzs7Ozs7SUFFbEMsc0NBQStDOzs7OztJQUUvQyx1Q0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9saXN0LXZpZXcuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld01vZGVSZXBvc2l0b3J5IGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdHByaXZhdGUgbW9kZSA9IG5ldyBNYXA8c3RyaW5nLCBMaXN0Vmlld01vZGU+KCk7XG5cblx0cHJpdmF0ZSBtb2RlJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIExpc3RWaWV3TW9kZT4+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHNldE1vZGUobW9kZTogTGlzdFZpZXdNb2RlLCBsaXN0Vmlld0lkOiBMaXN0Vmlld0lkKTogdm9pZCB7XG5cdFx0dGhpcy5uZXh0KG1vZGUsIGxpc3RWaWV3SWQpO1xuXHR9XG5cblx0b24obGlzdFZpZXdJZDogTGlzdFZpZXdJZCk6IE9ic2VydmFibGU8TGlzdFZpZXdNb2RlPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5tb2RlJFxuXHRcdFx0XHQgICAuYXNPYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgdGhpcy50YWtlVW50aWwoKSxcblx0XHRcdFx0XHQgICBtYXAoKG1hcDogTWFwPHN0cmluZywgTGlzdFZpZXdNb2RlPikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5nZXQobGlzdFZpZXdJZC50b1N0cmluZygpKTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcml2YXRlIG5leHQobW9kZTogTGlzdFZpZXdNb2RlLCBsaXN0Vmlld0lkOiBMaXN0Vmlld0lkKTogdm9pZCB7XG5cdFx0dGhpcy5tb2RlLnNldChsaXN0Vmlld0lkLnRvU3RyaW5nKCksIG1vZGUpO1xuXHRcdHRoaXMubW9kZSQubmV4dCh0aGlzLm1vZGUpO1xuXHR9XG5cbn1cbiJdfQ==