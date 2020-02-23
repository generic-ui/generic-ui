/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Reactive } from '../../../../../../../common/cdk/reactive';
export class StructureSearchPhraseRepository extends Reactive {
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
        return this.phrase$
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
StructureSearchPhraseRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSearchPhraseRepository.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlYXJjaC1waHJhc2UucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3JlYWQvc2VhcmNoaW5nL3BocmFzZS9zdHJ1Y3R1cmUuc2VhcmNoLXBocmFzZS5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUtwRSxNQUFNLE9BQU8sK0JBQWdDLFNBQVEsUUFBUTtJQU01RDtRQUNDLEtBQUssRUFBRSxDQUFDO1FBTEQsV0FBTSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBRW5DLFlBQU8sR0FBRyxJQUFJLGFBQWEsRUFBdUIsQ0FBQztJQUkzRCxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBYyxFQUFFLFdBQXdCO1FBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsV0FBd0I7UUFFaEMsT0FBTyxJQUFJLENBQUMsT0FBTzthQUNiLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxHQUF3QixFQUFFLEVBQUU7WUFDaEMsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQyxFQUNGLG9CQUFvQixFQUFFLENBQ3RCLENBQUM7SUFDUixDQUFDOzs7WUExQkQsVUFBVTs7Ozs7Ozs7O0lBR1YsaURBQTJDOzs7OztJQUUzQyxrREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5IGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdHByaXZhdGUgcGhyYXNlID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblxuXHRwcml2YXRlIHBocmFzZSQgPSBuZXcgUmVwbGF5U3ViamVjdDxNYXA8c3RyaW5nLCBzdHJpbmc+PigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzZXRQaHJhc2UocGhyYXNlOiBzdHJpbmcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMucGhyYXNlLnNldChzdHJ1Y3R1cmVJZC50b1N0cmluZygpLCBwaHJhc2UpO1xuXHRcdHRoaXMucGhyYXNlJC5uZXh0KHRoaXMucGhyYXNlKTtcblx0fVxuXG5cdG9uUGhyYXNlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5waHJhc2UkXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKG1hcDogTWFwPHN0cmluZywgc3RyaW5nPikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5nZXQoc3RydWN0dXJlSWQudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==