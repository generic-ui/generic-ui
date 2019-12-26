/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureSearchingRepository } from '../../../domain/structure/read/searching/structure.searching.repository';
export class StructureSearchReadModelRepository {
    /**
     * @param {?} structureSearchingRepository
     */
    constructor(structureSearchingRepository) {
        this.structureSearchingRepository = structureSearchingRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onSearchEnabled(structureId) {
        return this.structureSearchingRepository.selectSearchingEnabled(structureId);
    }
}
StructureSearchReadModelRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSearchReadModelRepository.ctorParameters = () => [
    { type: StructureSearchingRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSearchReadModelRepository.prototype.structureSearchingRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXNlYXJjaC5yZWFkLW1vZGVsLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWktYXBpL3N0cnVjdHVyZS9zZWFyY2gvc3RydWN0dXJlLXNlYXJjaC5yZWFkLW1vZGVsLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFLdkgsTUFBTSxPQUFPLGtDQUFrQzs7OztJQUU5QyxZQUFvQiw0QkFBMEQ7UUFBMUQsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtJQUFHLENBQUM7Ozs7O0lBRWxGLGVBQWUsQ0FBQyxXQUF3QjtRQUN2QyxPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7WUFQRCxVQUFVOzs7O1lBSkYsNEJBQTRCOzs7Ozs7O0lBT3hCLDBFQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoaW5nUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zZWFyY2hpbmcvc3RydWN0dXJlLnNlYXJjaGluZy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNlYXJjaFJlYWRNb2RlbFJlcG9zaXRvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlU2VhcmNoaW5nUmVwb3NpdG9yeTogU3RydWN0dXJlU2VhcmNoaW5nUmVwb3NpdG9yeSkge31cblxuXHRvblNlYXJjaEVuYWJsZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlU2VhcmNoaW5nUmVwb3NpdG9yeS5zZWxlY3RTZWFyY2hpbmdFbmFibGVkKHN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=