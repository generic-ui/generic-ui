/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureFieldUiArchive } from './structure.field.ui-archive';
var StructureFieldUiRepository = /** @class */ (function () {
    function StructureFieldUiRepository(structureFieldUiArchive) {
        this.structureFieldUiArchive = structureFieldUiArchive;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureFieldUiRepository.prototype.onFields = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureFieldUiArchive.when(structureId);
    };
    StructureFieldUiRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureFieldUiRepository.ctorParameters = function () { return [
        { type: StructureFieldUiArchive }
    ]; };
    return StructureFieldUiRepository;
}());
export { StructureFieldUiRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFieldUiRepository.prototype.structureFieldUiArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpZWxkLnVpLXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS1hcGkvZmllbGQvc3RydWN0dXJlLmZpZWxkLnVpLXJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFLdkU7SUFHQyxvQ0FBb0IsdUJBQWdEO1FBQWhELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7SUFDcEUsQ0FBQzs7Ozs7SUFFRCw2Q0FBUTs7OztJQUFSLFVBQVMsV0FBd0I7UUFDaEMsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7O2dCQVJELFVBQVU7Ozs7Z0JBTEYsdUJBQXVCOztJQWVoQyxpQ0FBQztDQUFBLEFBVkQsSUFVQztTQVRZLDBCQUEwQjs7Ozs7O0lBRTFCLDZEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlRmllbGRVaUFyY2hpdmUgfSBmcm9tICcuL3N0cnVjdHVyZS5maWVsZC51aS1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWVsZFVpTW9kZWwgfSBmcm9tICcuL3N0cnVjdHVyZS5maWVsZC51aS1tb2RlbCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUZpZWxkVWlSZXBvc2l0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUZpZWxkVWlBcmNoaXZlOiBTdHJ1Y3R1cmVGaWVsZFVpQXJjaGl2ZSkge1xuXHR9XG5cblx0b25GaWVsZHMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxBcnJheTxTdHJ1Y3R1cmVGaWVsZFVpTW9kZWw+PiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRmllbGRVaUFyY2hpdmUud2hlbihzdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19