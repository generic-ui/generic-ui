/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Reactive } from '../../../../common/cdk/reactive';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBocmFzZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc2VhcmNoL2RvbWFpbi1hcGkvcGhyYXNlL3NlYXJjaC1waHJhc2UucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSTNEO0lBQzRDLGtEQUFRO0lBTW5EO1FBQUEsWUFDQyxpQkFBTyxTQUNQO1FBTk8sWUFBTSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBRW5DLGFBQU8sR0FBRyxJQUFJLGFBQWEsRUFBdUIsQ0FBQzs7SUFJM0QsQ0FBQzs7Ozs7O0lBRUQsMENBQVM7Ozs7O0lBQVQsVUFBVSxNQUFjLEVBQUUsV0FBd0I7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELHlDQUFROzs7O0lBQVIsVUFBUyxXQUF3QjtRQUVoQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO2FBQ2pDLElBQUksQ0FDSixvQkFBb0IsRUFBRSxDQUN0QixDQUFDO0lBQ1IsQ0FBQzs7Ozs7O0lBRU8sK0NBQWM7Ozs7O0lBQXRCLFVBQXVCLFdBQXdCO1FBQzlDLE9BQU8sSUFBSSxDQUFDLE9BQU87YUFDYixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUMsR0FBd0I7WUFDNUIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOztnQkFoQ0QsVUFBVTs7OztJQWtDWCw2QkFBQztDQUFBLEFBbENELENBQzRDLFFBQVEsR0FpQ25EO1NBakNZLHNCQUFzQjs7Ozs7O0lBRWxDLHdDQUEyQzs7Ozs7SUFFM0MseUNBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VhcmNoUGhyYXNlUmVwb3NpdG9yeSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRwcml2YXRlIHBocmFzZSA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cblx0cHJpdmF0ZSBwaHJhc2UkID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgc3RyaW5nPj4oKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c2V0UGhyYXNlKHBocmFzZTogc3RyaW5nLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBocmFzZS5zZXQoc3RydWN0dXJlSWQudG9TdHJpbmcoKSwgcGhyYXNlKTtcblx0XHR0aGlzLnBocmFzZSQubmV4dCh0aGlzLnBocmFzZSk7XG5cdH1cblxuXHRvblBocmFzZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub2JzZXJ2ZVBocmFzZXMoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByaXZhdGUgb2JzZXJ2ZVBocmFzZXMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gdGhpcy5waHJhc2UkXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKG1hcDogTWFwPHN0cmluZywgc3RyaW5nPikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5nZXQoc3RydWN0dXJlSWQudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=