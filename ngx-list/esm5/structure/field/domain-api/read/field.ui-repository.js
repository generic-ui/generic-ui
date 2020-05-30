/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FieldUiArchive } from './field.ui-archive';
var FieldUiRepository = /** @class */ (function () {
    function FieldUiRepository(structureFieldUiArchive) {
        this.structureFieldUiArchive = structureFieldUiArchive;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    FieldUiRepository.prototype.onFields = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureFieldUiArchive.on(structureId);
    };
    FieldUiRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FieldUiRepository.ctorParameters = function () { return [
        { type: FieldUiArchive }
    ]; };
    return FieldUiRepository;
}());
export { FieldUiRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldUiRepository.prototype.structureFieldUiArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQudWktcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2RvbWFpbi1hcGkvcmVhZC9maWVsZC51aS1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUtwRDtJQUdDLDJCQUFvQix1QkFBdUM7UUFBdkMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUFnQjtJQUMzRCxDQUFDOzs7OztJQUVELG9DQUFROzs7O0lBQVIsVUFBUyxXQUF3QjtRQUNoQyxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBUkQsVUFBVTs7OztnQkFMRixjQUFjOztJQWV2Qix3QkFBQztDQUFBLEFBVkQsSUFVQztTQVRZLGlCQUFpQjs7Ozs7O0lBRWpCLG9EQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRmllbGRVaUFyY2hpdmUgfSBmcm9tICcuL2ZpZWxkLnVpLWFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmllbGRVaU1vZGVsIH0gZnJvbSAnLi9maWVsZC51aS1tb2RlbCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpZWxkVWlSZXBvc2l0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUZpZWxkVWlBcmNoaXZlOiBGaWVsZFVpQXJjaGl2ZSkge1xuXHR9XG5cblx0b25GaWVsZHMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxBcnJheTxGaWVsZFVpTW9kZWw+PiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRmllbGRVaUFyY2hpdmUub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==