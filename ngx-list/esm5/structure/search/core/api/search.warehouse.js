/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SearchingRepository } from './enabled/searching.repository';
import { structureGlobalId } from '../../../core/api/structure.global-id';
import { SearchPhraseRepository } from './phrase/search-phrase.repository';
var SearchWarehouse = /** @class */ (function () {
    function SearchWarehouse(structureSearchingRepository, searchPhraseRepository) {
        this.structureSearchingRepository = structureSearchingRepository;
        this.searchPhraseRepository = searchPhraseRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SearchWarehouse.prototype.onSearchEnabled = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.structureSearchingRepository.onSearchingEnabled(structureId);
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SearchWarehouse.prototype.onPhrase = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.searchPhraseRepository.onPhrase(structureId);
    };
    SearchWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SearchWarehouse.ctorParameters = function () { return [
        { type: SearchingRepository },
        { type: SearchPhraseRepository }
    ]; };
    return SearchWarehouse;
}());
export { SearchWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchWarehouse.prototype.structureSearchingRepository;
    /**
     * @type {?}
     * @private
     */
    SearchWarehouse.prototype.searchPhraseRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2gud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRzNFO0lBR0MseUJBQTZCLDRCQUFpRCxFQUMxRCxzQkFBOEM7UUFEckMsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUFxQjtRQUMxRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO0lBQ2xFLENBQUM7Ozs7O0lBRUQseUNBQWU7Ozs7SUFBZixVQUFnQixXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUMzRCxPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs7OztJQUVELGtDQUFROzs7O0lBQVIsVUFBUyxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUNwRCxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Z0JBYkQsVUFBVTs7OztnQkFORixtQkFBbUI7Z0JBR25CLHNCQUFzQjs7SUFrQi9CLHNCQUFDO0NBQUEsQUFmRCxJQWVDO1NBZFksZUFBZTs7Ozs7O0lBRWYsdURBQWtFOzs7OztJQUMzRSxpREFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFdhcmVob3VzZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNlYXJjaGluZ1JlcG9zaXRvcnkgfSBmcm9tICcuL2VuYWJsZWQvc2VhcmNoaW5nLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgc3RydWN0dXJlR2xvYmFsSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFNlYXJjaFBocmFzZVJlcG9zaXRvcnkgfSBmcm9tICcuL3BocmFzZS9zZWFyY2gtcGhyYXNlLnJlcG9zaXRvcnknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWFyY2hXYXJlaG91c2UgaW1wbGVtZW50cyBXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU2VhcmNoaW5nUmVwb3NpdG9yeTogU2VhcmNoaW5nUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hQaHJhc2VSZXBvc2l0b3J5OiBTZWFyY2hQaHJhc2VSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvblNlYXJjaEVuYWJsZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVTZWFyY2hpbmdSZXBvc2l0b3J5Lm9uU2VhcmNoaW5nRW5hYmxlZChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvblBocmFzZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2VhcmNoUGhyYXNlUmVwb3NpdG9yeS5vblBocmFzZShzdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19