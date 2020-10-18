/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Reactive } from '../../../../../common/cdk/reactive';
var SearchPhraseRepository = /** @class */ (function (_super) {
    tslib_1.__extends(SearchPhraseRepository, _super);
    function SearchPhraseRepository() {
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
    SearchPhraseRepository.prototype.setPhrase = /**
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
    SearchPhraseRepository.prototype.onPhrase = /**
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
    SearchPhraseRepository.prototype.observePhrases = /**
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
    SearchPhraseRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SearchPhraseRepository.ctorParameters = function () { return []; };
    return SearchPhraseRepository;
}(Reactive));
export { SearchPhraseRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchPhraseRepository.prototype.phrase;
    /**
     * @type {?}
     * @private
     */
    SearchPhraseRepository.prototype.phrase$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBocmFzZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc2VhcmNoL2NvcmUvYXBpL3BocmFzZS9zZWFyY2gtcGhyYXNlLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUk5RDtJQUM0QyxrREFBUTtJQU1uRDtRQUFBLFlBQ0MsaUJBQU8sU0FDUDtRQU5PLFlBQU0sR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUVuQyxhQUFPLEdBQUcsSUFBSSxhQUFhLEVBQXVCLENBQUM7O0lBSTNELENBQUM7Ozs7OztJQUVELDBDQUFTOzs7OztJQUFULFVBQVUsTUFBYyxFQUFFLFdBQXdCO1FBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCx5Q0FBUTs7OztJQUFSLFVBQVMsV0FBd0I7UUFFaEMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQzthQUNqQyxJQUFJLENBQ0osb0JBQW9CLEVBQUUsQ0FDdEIsQ0FBQztJQUNSLENBQUM7Ozs7OztJQUVPLCtDQUFjOzs7OztJQUF0QixVQUF1QixXQUF3QjtRQUM5QyxPQUFPLElBQUksQ0FBQyxPQUFPO2FBQ2IsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQXdCO1lBQzVCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7Z0JBaENELFVBQVU7Ozs7SUFrQ1gsNkJBQUM7Q0FBQSxBQWxDRCxDQUM0QyxRQUFRLEdBaUNuRDtTQWpDWSxzQkFBc0I7Ozs7OztJQUVsQyx3Q0FBMkM7Ozs7O0lBRTNDLHlDQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9yZWFjdGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlYXJjaFBocmFzZVJlcG9zaXRvcnkgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0cHJpdmF0ZSBwaHJhc2UgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXG5cdHByaXZhdGUgcGhyYXNlJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIHN0cmluZz4+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHNldFBocmFzZShwaHJhc2U6IHN0cmluZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5waHJhc2Uuc2V0KHN0cnVjdHVyZUlkLnRvU3RyaW5nKCksIHBocmFzZSk7XG5cdFx0dGhpcy5waHJhc2UkLm5leHQodGhpcy5waHJhc2UpO1xuXHR9XG5cblx0b25QaHJhc2Uoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcblxuXHRcdHJldHVybiB0aGlzLm9ic2VydmVQaHJhc2VzKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcml2YXRlIG9ic2VydmVQaHJhc2VzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIHRoaXMucGhyYXNlJFxuXHRcdFx0XHQgICAuYXNPYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChtYXA6IE1hcDxzdHJpbmcsIHN0cmluZz4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBtYXAuZ2V0KHN0cnVjdHVyZUlkLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19