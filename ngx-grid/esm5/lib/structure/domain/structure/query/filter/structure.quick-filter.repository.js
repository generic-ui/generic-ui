/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
var StructureQuickFilterRepository = /** @class */ (function () {
    function StructureQuickFilterRepository() {
        this.enabled = new Map();
        this.enabled$ = new ReplaySubject();
    }
    /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    StructureQuickFilterRepository.prototype.setEnabled = /**
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
    StructureQuickFilterRepository.prototype.selectQuickFilterEnabled = /**
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
    StructureQuickFilterRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureQuickFilterRepository.ctorParameters = function () { return []; };
    return StructureQuickFilterRepository;
}());
export { StructureQuickFilterRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureQuickFilterRepository.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    StructureQuickFilterRepository.prototype.enabled$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnF1aWNrLWZpbHRlci5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvcXVlcnkvZmlsdGVyL3N0cnVjdHVyZS5xdWljay1maWx0ZXIucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUkzRDtJQU9DO1FBSlEsWUFBTyxHQUFHLElBQUksR0FBRyxFQUFtQixDQUFDO1FBRXJDLGFBQVEsR0FBRyxJQUFJLGFBQWEsRUFBd0IsQ0FBQztJQUc3RCxDQUFDOzs7Ozs7SUFFRCxtREFBVTs7Ozs7SUFBVixVQUFXLE9BQWdCLEVBQUUsV0FBd0I7UUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELGlFQUF3Qjs7OztJQUF4QixVQUF5QixXQUF3QjtRQUVoRCxPQUFPLElBQUksQ0FBQyxRQUFRO2FBQ2QsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQXlCO1lBQzdCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQUMsRUFDRixvQkFBb0IsRUFBRSxDQUN0QixDQUFDO0lBQ1IsQ0FBQzs7Z0JBekJELFVBQVU7Ozs7SUEyQlgscUNBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQTFCWSw4QkFBOEI7Ozs7OztJQUUxQyxpREFBNkM7Ozs7O0lBRTdDLGtEQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS1pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVF1aWNrRmlsdGVyUmVwb3NpdG9yeSB7XG5cblx0cHJpdmF0ZSBlbmFibGVkID0gbmV3IE1hcDxzdHJpbmcsIGJvb2xlYW4+KCk7XG5cblx0cHJpdmF0ZSBlbmFibGVkJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIGJvb2xlYW4+PigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0c2V0RW5hYmxlZChlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQuc2V0KHN0cnVjdHVyZUlkLnRvU3RyaW5nKCksIGVuYWJsZWQpO1xuXHRcdHRoaXMuZW5hYmxlZCQubmV4dCh0aGlzLmVuYWJsZWQpO1xuXHR9XG5cblx0c2VsZWN0UXVpY2tGaWx0ZXJFbmFibGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZCRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgobWFwOiBNYXA8c3RyaW5nLCBib29sZWFuPikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5nZXQoc3RydWN0dXJlSWQudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==