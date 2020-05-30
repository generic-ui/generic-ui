/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FieldUiArchive } from './field.ui-archive';
export class FieldUiRepository {
    /**
     * @param {?} structureFieldUiArchive
     */
    constructor(structureFieldUiArchive) {
        this.structureFieldUiArchive = structureFieldUiArchive;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onFields(structureId) {
        return this.structureFieldUiArchive.on(structureId);
    }
}
FieldUiRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FieldUiRepository.ctorParameters = () => [
    { type: FieldUiArchive }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldUiRepository.prototype.structureFieldUiArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQudWktcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2RvbWFpbi1hcGkvcmVhZC9maWVsZC51aS1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU1wRCxNQUFNLE9BQU8saUJBQWlCOzs7O0lBRTdCLFlBQW9CLHVCQUF1QztRQUF2Qyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQWdCO0lBQzNELENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLFdBQXdCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7WUFSRCxVQUFVOzs7O1lBTEYsY0FBYzs7Ozs7OztJQVFWLG9EQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRmllbGRVaUFyY2hpdmUgfSBmcm9tICcuL2ZpZWxkLnVpLWFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmllbGRVaU1vZGVsIH0gZnJvbSAnLi9maWVsZC51aS1tb2RlbCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpZWxkVWlSZXBvc2l0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUZpZWxkVWlBcmNoaXZlOiBGaWVsZFVpQXJjaGl2ZSkge1xuXHR9XG5cblx0b25GaWVsZHMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxBcnJheTxGaWVsZFVpTW9kZWw+PiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRmllbGRVaUFyY2hpdmUub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==