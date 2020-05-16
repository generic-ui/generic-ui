/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Reactive } from '../../../../../common/cdk/reactive';
var StructureSearchingRepository = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSearchingRepository, _super);
    function StructureSearchingRepository() {
        var _this = _super.call(this) || this;
        _this.enabled = new Map();
        _this.enabled$ = new ReplaySubject();
        return _this;
    }
    /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    StructureSearchingRepository.prototype.setEnabled = /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        this.enabled.set(structureId.toString(), enabled);
        this.enabled$.next(this.enabled);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureSearchingRepository.prototype.onSearchingEnabled = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.enabled$
            .asObservable()
            .pipe(map((/**
         * @param {?} map
         * @return {?}
         */
        function (map) {
            return map.get(structureId.toString());
        })), distinctUntilChanged());
    };
    StructureSearchingRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSearchingRepository.ctorParameters = function () { return []; };
    return StructureSearchingRepository;
}(Reactive));
export { StructureSearchingRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSearchingRepository.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    StructureSearchingRepository.prototype.enabled$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlYXJjaGluZy5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi1hcGkvc2VhcmNoL2VuYWJsZWQvc3RydWN0dXJlLnNlYXJjaGluZy5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUczRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHOUQ7SUFDa0Qsd0RBQVE7SUFNekQ7UUFBQSxZQUNDLGlCQUFPLFNBQ1A7UUFOTyxhQUFPLEdBQUcsSUFBSSxHQUFHLEVBQW1CLENBQUM7UUFFckMsY0FBUSxHQUFHLElBQUksYUFBYSxFQUF3QixDQUFDOztJQUk3RCxDQUFDOzs7Ozs7SUFFRCxpREFBVTs7Ozs7SUFBVixVQUFXLE9BQWdCLEVBQUUsV0FBd0I7UUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELHlEQUFrQjs7OztJQUFsQixVQUFtQixXQUF3QjtRQUUxQyxPQUFPLElBQUksQ0FBQyxRQUFRO2FBQ2QsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQXlCO1lBQzdCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQUMsRUFDRixvQkFBb0IsRUFBRSxDQUN0QixDQUFDO0lBQ1IsQ0FBQzs7Z0JBMUJELFVBQVU7Ozs7SUE0QlgsbUNBQUM7Q0FBQSxBQTVCRCxDQUNrRCxRQUFRLEdBMkJ6RDtTQTNCWSw0QkFBNEI7Ozs7OztJQUV4QywrQ0FBNkM7Ozs7O0lBRTdDLGdEQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZWFyY2hpbmdSZXBvc2l0b3J5IGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdHByaXZhdGUgZW5hYmxlZCA9IG5ldyBNYXA8c3RyaW5nLCBib29sZWFuPigpO1xuXG5cdHByaXZhdGUgZW5hYmxlZCQgPSBuZXcgUmVwbGF5U3ViamVjdDxNYXA8c3RyaW5nLCBib29sZWFuPj4oKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c2V0RW5hYmxlZChlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQuc2V0KHN0cnVjdHVyZUlkLnRvU3RyaW5nKCksIGVuYWJsZWQpO1xuXHRcdHRoaXMuZW5hYmxlZCQubmV4dCh0aGlzLmVuYWJsZWQpO1xuXHR9XG5cblx0b25TZWFyY2hpbmdFbmFibGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZCRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgobWFwOiBNYXA8c3RyaW5nLCBib29sZWFuPikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5nZXQoc3RydWN0dXJlSWQudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==