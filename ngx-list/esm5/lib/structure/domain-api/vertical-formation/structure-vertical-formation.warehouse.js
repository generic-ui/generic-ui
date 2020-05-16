/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { VerticalFormationRepository } from './vertical-formation.repository';
var StructureVerticalFormationWarehouse = /** @class */ (function () {
    function StructureVerticalFormationWarehouse(verticalFormationRepository) {
        this.verticalFormationRepository = verticalFormationRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureVerticalFormationWarehouse.prototype.onVerticalScrollEnabled = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.verticalFormationRepository.onVerticalScrollEnabled(structureId);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureVerticalFormationWarehouse.prototype.onRowHeight = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.verticalFormationRepository.onRowHeight(structureId);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureVerticalFormationWarehouse.prototype.onContainerHeight = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.verticalFormationRepository.onContainerHeight(structureId);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureVerticalFormationWarehouse.prototype.onTopMargin = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.verticalFormationRepository.onTopMargin(structureId);
    };
    StructureVerticalFormationWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureVerticalFormationWarehouse.ctorParameters = function () { return [
        { type: VerticalFormationRepository }
    ]; };
    return StructureVerticalFormationWarehouse;
}());
export { StructureVerticalFormationWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureVerticalFormationWarehouse.prototype.verticalFormationRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS92ZXJ0aWNhbC1mb3JtYXRpb24vc3RydWN0dXJlLXZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFJOUU7SUFHQyw2Q0FBb0IsMkJBQXdEO1FBQXhELGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7SUFDNUUsQ0FBQzs7Ozs7SUFFRCxxRUFBdUI7Ozs7SUFBdkIsVUFBd0IsV0FBd0I7UUFDL0MsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUMsdUJBQXVCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7Ozs7SUFFRCx5REFBVzs7OztJQUFYLFVBQVksV0FBd0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBRUQsK0RBQWlCOzs7O0lBQWpCLFVBQWtCLFdBQXdCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7O0lBRUQseURBQVc7Ozs7SUFBWCxVQUFZLFdBQXdCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRSxDQUFDOztnQkFwQkQsVUFBVTs7OztnQkFKRiwyQkFBMkI7O0lBeUJwQywwQ0FBQztDQUFBLEFBckJELElBcUJDO1NBcEJZLG1DQUFtQzs7Ozs7O0lBRW5DLDBFQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSB2ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnk6IFZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0b25WZXJ0aWNhbFNjcm9sbEVuYWJsZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5Lm9uVmVydGljYWxTY3JvbGxFbmFibGVkKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG9uUm93SGVpZ2h0KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5Lm9uUm93SGVpZ2h0KHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG9uQ29udGFpbmVySGVpZ2h0KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5Lm9uQ29udGFpbmVySGVpZ2h0KHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG9uVG9wTWFyZ2luKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5Lm9uVG9wTWFyZ2luKHN0cnVjdHVyZUlkKTtcblx0fVxufVxuIl19