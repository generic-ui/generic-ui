/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SearchingRepository } from './enabled/searching.repository';
import { structureGlobalId } from '../../../lib/structure/domain-api/structure.global-id';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NlYXJjaC9kb21haW4tYXBpL3NlYXJjaC53YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDMUYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFHM0U7SUFHQyx5QkFBNkIsNEJBQWlELEVBQzFELHNCQUE4QztRQURyQyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQXFCO1FBQzFELDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7SUFDbEUsQ0FBQzs7Ozs7SUFFRCx5Q0FBZTs7OztJQUFmLFVBQWdCLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQzNELE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFFLENBQUM7Ozs7O0lBRUQsa0NBQVE7Ozs7SUFBUixVQUFTLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxRCxDQUFDOztnQkFiRCxVQUFVOzs7O2dCQU5GLG1CQUFtQjtnQkFHbkIsc0JBQXNCOztJQWtCL0Isc0JBQUM7Q0FBQSxBQWZELElBZUM7U0FkWSxlQUFlOzs7Ozs7SUFFZix1REFBa0U7Ozs7O0lBQzNFLGlEQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU2VhcmNoaW5nUmVwb3NpdG9yeSB9IGZyb20gJy4vZW5hYmxlZC9zZWFyY2hpbmcucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFNlYXJjaFBocmFzZVJlcG9zaXRvcnkgfSBmcm9tICcuL3BocmFzZS9zZWFyY2gtcGhyYXNlLnJlcG9zaXRvcnknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWFyY2hXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU2VhcmNoaW5nUmVwb3NpdG9yeTogU2VhcmNoaW5nUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hQaHJhc2VSZXBvc2l0b3J5OiBTZWFyY2hQaHJhc2VSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvblNlYXJjaEVuYWJsZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVTZWFyY2hpbmdSZXBvc2l0b3J5Lm9uU2VhcmNoaW5nRW5hYmxlZChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvblBocmFzZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2VhcmNoUGhyYXNlUmVwb3NpdG9yeS5vblBocmFzZShzdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19