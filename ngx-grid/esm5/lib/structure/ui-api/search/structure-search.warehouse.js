/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureSearchingRepository } from '../../read/structure/searching/enabled/structure.searching.repository';
import { structureGlobalId } from '../structure.global-id';
var StructureSearchWarehouse = /** @class */ (function () {
    function StructureSearchWarehouse(structureSearchingRepository) {
        this.structureSearchingRepository = structureSearchingRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    StructureSearchWarehouse.prototype.onSearchEnabled = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.structureSearchingRepository.onSearchingEnabled(structureId);
    };
    StructureSearchWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSearchWarehouse.ctorParameters = function () { return [
        { type: StructureSearchingRepository }
    ]; };
    return StructureSearchWarehouse;
}());
export { StructureSearchWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSearchWarehouse.prototype.structureSearchingRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXNlYXJjaC53YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWktYXBpL3NlYXJjaC9zdHJ1Y3R1cmUtc2VhcmNoLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUVySCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUczRDtJQUdDLGtDQUFvQiw0QkFBMEQ7UUFBMUQsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtJQUM5RSxDQUFDOzs7OztJQUVELGtEQUFlOzs7O0lBQWYsVUFBZ0IsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDM0QsT0FBTyxJQUFJLENBQUMsNEJBQTRCLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUUsQ0FBQzs7Z0JBUkQsVUFBVTs7OztnQkFMRiw0QkFBNEI7O0lBZXJDLCtCQUFDO0NBQUEsQUFWRCxJQVVDO1NBVFksd0JBQXdCOzs7Ozs7SUFFeEIsZ0VBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hpbmdSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vcmVhZC9zdHJ1Y3R1cmUvc2VhcmNoaW5nL2VuYWJsZWQvc3RydWN0dXJlLnNlYXJjaGluZy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZWFyY2hXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlU2VhcmNoaW5nUmVwb3NpdG9yeTogU3RydWN0dXJlU2VhcmNoaW5nUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0b25TZWFyY2hFbmFibGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlU2VhcmNoaW5nUmVwb3NpdG9yeS5vblNlYXJjaGluZ0VuYWJsZWQoc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==