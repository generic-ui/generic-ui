/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Reactive } from '../../../../../../common/cdk/reactive';
var StructureSearchPhraseRepository = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSearchPhraseRepository, _super);
    function StructureSearchPhraseRepository() {
        var _this = _super.call(this) || this;
        _this.phrase = new Map();
        _this.phrase$ = new ReplaySubject();
        return _this;
    }
    /**
     * @param {?} phrase
     * @param {?} structureId
     * @return {?}
     */
    StructureSearchPhraseRepository.prototype.setPhrase = /**
     * @param {?} phrase
     * @param {?} structureId
     * @return {?}
     */
    function (phrase, structureId) {
        this.phrase.set(structureId.toString(), phrase);
        this.phrase$.next(this.phrase);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureSearchPhraseRepository.prototype.onPhrase = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.observePhrases(structureId)
            .pipe(distinctUntilChanged());
    };
    /**
     * @private
     * @param {?} structureId
     * @return {?}
     */
    StructureSearchPhraseRepository.prototype.observePhrases = /**
     * @private
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.phrase$
            .asObservable()
            .pipe(map((/**
         * @param {?} map
         * @return {?}
         */
        function (map) {
            return map.get(structureId.toString());
        })));
    };
    StructureSearchPhraseRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSearchPhraseRepository.ctorParameters = function () { return []; };
    return StructureSearchPhraseRepository;
}(Reactive));
export { StructureSearchPhraseRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSearchPhraseRepository.prototype.phrase;
    /**
     * @type {?}
     * @private
     */
    StructureSearchPhraseRepository.prototype.phrase$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlYXJjaC1waHJhc2UucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9yZWFkL3N0cnVjdHVyZS9zZWFyY2hpbmcvcGhyYXNlL3N0cnVjdHVyZS5zZWFyY2gtcGhyYXNlLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUlqRTtJQUNxRCwyREFBUTtJQU01RDtRQUFBLFlBQ0MsaUJBQU8sU0FDUDtRQU5PLFlBQU0sR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUVuQyxhQUFPLEdBQUcsSUFBSSxhQUFhLEVBQXVCLENBQUM7O0lBSTNELENBQUM7Ozs7OztJQUVELG1EQUFTOzs7OztJQUFULFVBQVUsTUFBYyxFQUFFLFdBQXdCO1FBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxrREFBUTs7OztJQUFSLFVBQVMsV0FBd0I7UUFFaEMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQzthQUNqQyxJQUFJLENBQ0osb0JBQW9CLEVBQUUsQ0FDdEIsQ0FBQztJQUNSLENBQUM7Ozs7OztJQUVPLHdEQUFjOzs7OztJQUF0QixVQUF1QixXQUF3QjtRQUM5QyxPQUFPLElBQUksQ0FBQyxPQUFPO2FBQ2IsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQXdCO1lBQzVCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7Z0JBaENELFVBQVU7Ozs7SUFrQ1gsc0NBQUM7Q0FBQSxBQWxDRCxDQUNxRCxRQUFRLEdBaUM1RDtTQWpDWSwrQkFBK0I7Ozs7OztJQUUzQyxpREFBMkM7Ozs7O0lBRTNDLGtEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9yZWFjdGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5IGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdHByaXZhdGUgcGhyYXNlID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblxuXHRwcml2YXRlIHBocmFzZSQgPSBuZXcgUmVwbGF5U3ViamVjdDxNYXA8c3RyaW5nLCBzdHJpbmc+PigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzZXRQaHJhc2UocGhyYXNlOiBzdHJpbmcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMucGhyYXNlLnNldChzdHJ1Y3R1cmVJZC50b1N0cmluZygpLCBwaHJhc2UpO1xuXHRcdHRoaXMucGhyYXNlJC5uZXh0KHRoaXMucGhyYXNlKTtcblx0fVxuXG5cdG9uUGhyYXNlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vYnNlcnZlUGhyYXNlcyhzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJpdmF0ZSBvYnNlcnZlUGhyYXNlcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuXHRcdHJldHVybiB0aGlzLnBocmFzZSRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgobWFwOiBNYXA8c3RyaW5nLCBzdHJpbmc+KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gbWFwLmdldChzdHJ1Y3R1cmVJZC50b1N0cmluZygpKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==