/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Reactive } from '../../../../../common/cdk/reactive';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlYXJjaC1waHJhc2UucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4tYXBpL3NlYXJjaC9waHJhc2Uvc3RydWN0dXJlLnNlYXJjaC1waHJhc2UucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBSTlEO0lBQ3FELDJEQUFRO0lBTTVEO1FBQUEsWUFDQyxpQkFBTyxTQUNQO1FBTk8sWUFBTSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBRW5DLGFBQU8sR0FBRyxJQUFJLGFBQWEsRUFBdUIsQ0FBQzs7SUFJM0QsQ0FBQzs7Ozs7O0lBRUQsbURBQVM7Ozs7O0lBQVQsVUFBVSxNQUFjLEVBQUUsV0FBd0I7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELGtEQUFROzs7O0lBQVIsVUFBUyxXQUF3QjtRQUVoQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO2FBQ2pDLElBQUksQ0FDSixvQkFBb0IsRUFBRSxDQUN0QixDQUFDO0lBQ1IsQ0FBQzs7Ozs7O0lBRU8sd0RBQWM7Ozs7O0lBQXRCLFVBQXVCLFdBQXdCO1FBQzlDLE9BQU8sSUFBSSxDQUFDLE9BQU87YUFDYixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUMsR0FBd0I7WUFDNUIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOztnQkFoQ0QsVUFBVTs7OztJQWtDWCxzQ0FBQztDQUFBLEFBbENELENBQ3FELFFBQVEsR0FpQzVEO1NBakNZLCtCQUErQjs7Ozs7O0lBRTNDLGlEQUEyQzs7Ozs7SUFFM0Msa0RBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnkgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0cHJpdmF0ZSBwaHJhc2UgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXG5cdHByaXZhdGUgcGhyYXNlJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIHN0cmluZz4+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHNldFBocmFzZShwaHJhc2U6IHN0cmluZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5waHJhc2Uuc2V0KHN0cnVjdHVyZUlkLnRvU3RyaW5nKCksIHBocmFzZSk7XG5cdFx0dGhpcy5waHJhc2UkLm5leHQodGhpcy5waHJhc2UpO1xuXHR9XG5cblx0b25QaHJhc2Uoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcblxuXHRcdHJldHVybiB0aGlzLm9ic2VydmVQaHJhc2VzKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcml2YXRlIG9ic2VydmVQaHJhc2VzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIHRoaXMucGhyYXNlJFxuXHRcdFx0XHQgICAuYXNPYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChtYXA6IE1hcDxzdHJpbmcsIHN0cmluZz4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBtYXAuZ2V0KHN0cnVjdHVyZUlkLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19