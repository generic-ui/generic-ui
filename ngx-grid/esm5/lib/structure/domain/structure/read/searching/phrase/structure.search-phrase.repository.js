/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Reactive } from '../../../../../../../common/cdk/reactive';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlYXJjaC1waHJhc2UucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3JlYWQvc2VhcmNoaW5nL3BocmFzZS9zdHJ1Y3R1cmUuc2VhcmNoLXBocmFzZS5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFJcEU7SUFDcUQsMkRBQVE7SUFNNUQ7UUFBQSxZQUNDLGlCQUFPLFNBQ1A7UUFOTyxZQUFNLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFFbkMsYUFBTyxHQUFHLElBQUksYUFBYSxFQUF1QixDQUFDOztJQUkzRCxDQUFDOzs7Ozs7SUFFRCxtREFBUzs7Ozs7SUFBVCxVQUFVLE1BQWMsRUFBRSxXQUF3QjtRQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsa0RBQVE7Ozs7SUFBUixVQUFTLFdBQXdCO1FBRWhDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7YUFDakMsSUFBSSxDQUNKLG9CQUFvQixFQUFFLENBQ3RCLENBQUM7SUFDUixDQUFDOzs7Ozs7SUFFTyx3REFBYzs7Ozs7SUFBdEIsVUFBdUIsV0FBd0I7UUFDOUMsT0FBTyxJQUFJLENBQUMsT0FBTzthQUNiLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsVUFBQyxHQUF3QjtZQUM1QixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7O2dCQWhDRCxVQUFVOzs7O0lBa0NYLHNDQUFDO0NBQUEsQUFsQ0QsQ0FDcUQsUUFBUSxHQWlDNUQ7U0FqQ1ksK0JBQStCOzs7Ozs7SUFFM0MsaURBQTJDOzs7OztJQUUzQyxrREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5IGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdHByaXZhdGUgcGhyYXNlID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblxuXHRwcml2YXRlIHBocmFzZSQgPSBuZXcgUmVwbGF5U3ViamVjdDxNYXA8c3RyaW5nLCBzdHJpbmc+PigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzZXRQaHJhc2UocGhyYXNlOiBzdHJpbmcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMucGhyYXNlLnNldChzdHJ1Y3R1cmVJZC50b1N0cmluZygpLCBwaHJhc2UpO1xuXHRcdHRoaXMucGhyYXNlJC5uZXh0KHRoaXMucGhyYXNlKTtcblx0fVxuXG5cdG9uUGhyYXNlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vYnNlcnZlUGhyYXNlcyhzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJpdmF0ZSBvYnNlcnZlUGhyYXNlcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuXHRcdHJldHVybiB0aGlzLnBocmFzZSRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgobWFwOiBNYXA8c3RyaW5nLCBzdHJpbmc+KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gbWFwLmdldChzdHJ1Y3R1cmVJZC50b1N0cmluZygpKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==