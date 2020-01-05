/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
var StructurePreparedItemsRepository = /** @class */ (function () {
    function StructurePreparedItemsRepository() {
        this.origin = new Map();
        this.origin$ = new ReplaySubject();
    }
    /**
     * @param {?} origin
     * @param {?} structureId
     * @return {?}
     */
    StructurePreparedItemsRepository.prototype.setItems = /**
     * @param {?} origin
     * @param {?} structureId
     * @return {?}
     */
    function (origin, structureId) {
        this.origin.set(structureId.toString(), origin);
        this.origin$.next(this.origin);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructurePreparedItemsRepository.prototype.onPreparedItems = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.origin$
            .asObservable()
            .pipe(map((/**
         * @param {?} map
         * @return {?}
         */
        function (map) {
            return map.get(structureId.toString());
        })), distinctUntilChanged());
    };
    StructurePreparedItemsRepository.decorators = [
        { type: Injectable }
    ];
    return StructurePreparedItemsRepository;
}());
export { StructurePreparedItemsRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePreparedItemsRepository.prototype.origin;
    /**
     * @type {?}
     * @private
     */
    StructurePreparedItemsRepository.prototype.origin$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9yZWFkL3ByZXBhcmVkL3N0cnVjdHVyZS5wcmVwYXJlZC1pdGVtcy5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTTNEO0lBQUE7UUFHUyxXQUFNLEdBQUcsSUFBSSxHQUFHLEVBQXNCLENBQUM7UUFFdkMsWUFBTyxHQUFHLElBQUksYUFBYSxFQUEyQixDQUFDO0lBa0JoRSxDQUFDOzs7Ozs7SUFoQkEsbURBQVE7Ozs7O0lBQVIsVUFBUyxNQUErQixFQUFFLFdBQXdCO1FBQ2pFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCwwREFBZTs7OztJQUFmLFVBQWdCLFdBQXdCO1FBRXZDLE9BQU8sSUFBSSxDQUFDLE9BQU87YUFDYixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUMsR0FBNEI7WUFDaEMsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQyxFQUNGLG9CQUFvQixFQUFFLENBQ3RCLENBQUM7SUFDUixDQUFDOztnQkF0QkQsVUFBVTs7SUF1QlgsdUNBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQXRCWSxnQ0FBZ0M7Ozs7OztJQUU1QyxrREFBK0M7Ozs7O0lBRS9DLG1EQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlcGxheVN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9jb21tYW5kL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeSB7XG5cblx0cHJpdmF0ZSBvcmlnaW4gPSBuZXcgTWFwPHN0cmluZywgQXJyYXk8YW55Pj4oKTtcblxuXHRwcml2YXRlIG9yaWdpbiQgPSBuZXcgUmVwbGF5U3ViamVjdDxNYXA8c3RyaW5nLCBBcnJheTxhbnk+Pj4oKTtcblxuXHRzZXRJdGVtcyhvcmlnaW46IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLm9yaWdpbi5zZXQoc3RydWN0dXJlSWQudG9TdHJpbmcoKSwgb3JpZ2luKTtcblx0XHR0aGlzLm9yaWdpbiQubmV4dCh0aGlzLm9yaWdpbik7XG5cdH1cblxuXHRvblByZXBhcmVkSXRlbXMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxBcnJheTxPcmlnaW5JdGVtRW50aXR5Pj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub3JpZ2luJFxuXHRcdFx0XHQgICAuYXNPYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChtYXA6IE1hcDxzdHJpbmcsIEFycmF5PGFueT4+KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gbWFwLmdldChzdHJ1Y3R1cmVJZC50b1N0cmluZygpKTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG5cdFx0XHRcdCAgICk7XG5cdH1cbn1cbiJdfQ==