/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Reactive } from '../../../../../common/cdk/reactive/reactive';
export class SearchPhraseRepository extends Reactive {
    constructor() {
        super();
        this.phrase = new Map();
        this.phrase$ = new ReplaySubject();
    }
    /**
     * @param {?} phrase
     * @param {?} structureId
     * @return {?}
     */
    setPhrase(phrase, structureId) {
        this.phrase.set(structureId.toString(), phrase);
        this.phrase$.next(this.phrase);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onPhrase(structureId) {
        return this.observePhrases(structureId)
            .pipe(distinctUntilChanged());
    }
    /**
     * @private
     * @param {?} structureId
     * @return {?}
     */
    observePhrases(structureId) {
        return this.phrase$
            .asObservable()
            .pipe(map((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            return map.get(structureId.toString());
        })));
    }
}
SearchPhraseRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SearchPhraseRepository.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBocmFzZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc2VhcmNoL2NvcmUvYXBpL3BocmFzZS9zZWFyY2gtcGhyYXNlLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBS3ZFLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxRQUFRO0lBTW5EO1FBQ0MsS0FBSyxFQUFFLENBQUM7UUFMRCxXQUFNLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFFbkMsWUFBTyxHQUFHLElBQUksYUFBYSxFQUF1QixDQUFDO0lBSTNELENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxNQUFjLEVBQUUsV0FBd0I7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxXQUF3QjtRQUVoQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO2FBQ2pDLElBQUksQ0FDSixvQkFBb0IsRUFBRSxDQUN0QixDQUFDO0lBQ1IsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLFdBQXdCO1FBQzlDLE9BQU8sSUFBSSxDQUFDLE9BQU87YUFDYixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osR0FBRzs7OztRQUFDLENBQUMsR0FBd0IsRUFBRSxFQUFFO1lBQ2hDLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7O1lBaENELFVBQVU7Ozs7Ozs7OztJQUdWLHdDQUEyQzs7Ozs7SUFFM0MseUNBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlL3JlYWN0aXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VhcmNoUGhyYXNlUmVwb3NpdG9yeSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRwcml2YXRlIHBocmFzZSA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cblx0cHJpdmF0ZSBwaHJhc2UkID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgc3RyaW5nPj4oKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c2V0UGhyYXNlKHBocmFzZTogc3RyaW5nLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBocmFzZS5zZXQoc3RydWN0dXJlSWQudG9TdHJpbmcoKSwgcGhyYXNlKTtcblx0XHR0aGlzLnBocmFzZSQubmV4dCh0aGlzLnBocmFzZSk7XG5cdH1cblxuXHRvblBocmFzZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub2JzZXJ2ZVBocmFzZXMoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByaXZhdGUgb2JzZXJ2ZVBocmFzZXMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gdGhpcy5waHJhc2UkXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKG1hcDogTWFwPHN0cmluZywgc3RyaW5nPikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5nZXQoc3RydWN0dXJlSWQudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=