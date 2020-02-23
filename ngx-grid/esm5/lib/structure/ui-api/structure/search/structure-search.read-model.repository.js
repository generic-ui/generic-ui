/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureSearchingRepository } from '../../../domain/structure/read/searching/enabled/structure.searching.repository';
var StructureSearchReadModelRepository = /** @class */ (function () {
    function StructureSearchReadModelRepository(structureSearchingRepository) {
        this.structureSearchingRepository = structureSearchingRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureSearchReadModelRepository.prototype.onSearchEnabled = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureSearchingRepository.onSearchingEnabled(structureId);
    };
    StructureSearchReadModelRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSearchReadModelRepository.ctorParameters = function () { return [
        { type: StructureSearchingRepository }
    ]; };
    return StructureSearchReadModelRepository;
}());
export { StructureSearchReadModelRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSearchReadModelRepository.prototype.structureSearchingRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXNlYXJjaC5yZWFkLW1vZGVsLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWktYXBpL3N0cnVjdHVyZS9zZWFyY2gvc3RydWN0dXJlLXNlYXJjaC5yZWFkLW1vZGVsLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFJL0g7SUFHQyw0Q0FBb0IsNEJBQTBEO1FBQTFELGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7SUFDOUUsQ0FBQzs7Ozs7SUFFRCw0REFBZTs7OztJQUFmLFVBQWdCLFdBQXdCO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFFLENBQUM7O2dCQVJELFVBQVU7Ozs7Z0JBSkYsNEJBQTRCOztJQWNyQyx5Q0FBQztDQUFBLEFBVkQsSUFVQztTQVRZLGtDQUFrQzs7Ozs7O0lBRWxDLDBFQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoaW5nUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zZWFyY2hpbmcvZW5hYmxlZC9zdHJ1Y3R1cmUuc2VhcmNoaW5nLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU2VhcmNoUmVhZE1vZGVsUmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVTZWFyY2hpbmdSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTZWFyY2hpbmdSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvblNlYXJjaEVuYWJsZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlU2VhcmNoaW5nUmVwb3NpdG9yeS5vblNlYXJjaGluZ0VuYWJsZWQoc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==