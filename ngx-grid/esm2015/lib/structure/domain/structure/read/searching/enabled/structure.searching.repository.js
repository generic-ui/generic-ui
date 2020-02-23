/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Reactive } from '../../../../../../../common/cdk/reactive';
export class StructureSearchingRepository extends Reactive {
    constructor() {
        super();
        this.enabled = new Map();
        this.enabled$ = new ReplaySubject();
    }
    /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    setEnabled(enabled, structureId) {
        this.enabled.set(structureId.toString(), enabled);
        this.enabled$.next(this.enabled);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onSearchingEnabled(structureId) {
        return this.enabled$
            .asObservable()
            .pipe(map((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            return map.get(structureId.toString());
        })), distinctUntilChanged());
    }
}
StructureSearchingRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSearchingRepository.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlYXJjaGluZy5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zZWFyY2hpbmcvZW5hYmxlZC9zdHJ1Y3R1cmUuc2VhcmNoaW5nLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBSXBFLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxRQUFRO0lBTXpEO1FBQ0MsS0FBSyxFQUFFLENBQUM7UUFMRCxZQUFPLEdBQUcsSUFBSSxHQUFHLEVBQW1CLENBQUM7UUFFckMsYUFBUSxHQUFHLElBQUksYUFBYSxFQUF3QixDQUFDO0lBSTdELENBQUM7Ozs7OztJQUVELFVBQVUsQ0FBQyxPQUFnQixFQUFFLFdBQXdCO1FBQ3BELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxXQUF3QjtRQUUxQyxPQUFPLElBQUksQ0FBQyxRQUFRO2FBQ2QsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQXlCLEVBQUUsRUFBRTtZQUNqQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFDLEVBQ0Ysb0JBQW9CLEVBQUUsQ0FDdEIsQ0FBQztJQUNSLENBQUM7OztZQTFCRCxVQUFVOzs7Ozs7Ozs7SUFHViwrQ0FBNkM7Ozs7O0lBRTdDLGdEQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZWFyY2hpbmdSZXBvc2l0b3J5IGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdHByaXZhdGUgZW5hYmxlZCA9IG5ldyBNYXA8c3RyaW5nLCBib29sZWFuPigpO1xuXG5cdHByaXZhdGUgZW5hYmxlZCQgPSBuZXcgUmVwbGF5U3ViamVjdDxNYXA8c3RyaW5nLCBib29sZWFuPj4oKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c2V0RW5hYmxlZChlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQuc2V0KHN0cnVjdHVyZUlkLnRvU3RyaW5nKCksIGVuYWJsZWQpO1xuXHRcdHRoaXMuZW5hYmxlZCQubmV4dCh0aGlzLmVuYWJsZWQpO1xuXHR9XG5cblx0b25TZWFyY2hpbmdFbmFibGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZCRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgobWFwOiBNYXA8c3RyaW5nLCBib29sZWFuPikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5nZXQoc3RydWN0dXJlSWQudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==