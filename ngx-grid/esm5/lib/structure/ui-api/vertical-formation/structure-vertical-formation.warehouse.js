/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { VerticalFormationRepository } from '../../read/structure/vertical-formation/vertical-formation.repository';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWktYXBpL3ZlcnRpY2FsLWZvcm1hdGlvbi9zdHJ1Y3R1cmUtdmVydGljYWwtZm9ybWF0aW9uLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUlwSDtJQUdDLDZDQUFvQiwyQkFBd0Q7UUFBeEQsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtJQUM1RSxDQUFDOzs7OztJQUVELHFFQUF1Qjs7OztJQUF2QixVQUF3QixXQUF3QjtRQUMvQyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7OztJQUVELHlEQUFXOzs7O0lBQVgsVUFBWSxXQUF3QjtRQUNuQyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFFRCwrREFBaUI7Ozs7SUFBakIsVUFBa0IsV0FBd0I7UUFDekMsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7SUFFRCx5REFBVzs7OztJQUFYLFVBQVksV0FBd0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7O2dCQXBCRCxVQUFVOzs7O2dCQUpGLDJCQUEyQjs7SUF5QnBDLDBDQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FwQlksbUNBQW1DOzs7Ozs7SUFFbkMsMEVBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9yZWFkL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgdmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5OiBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdG9uVmVydGljYWxTY3JvbGxFbmFibGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeS5vblZlcnRpY2FsU2Nyb2xsRW5hYmxlZChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvblJvd0hlaWdodChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeS5vblJvd0hlaWdodChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvbkNvbnRhaW5lckhlaWdodChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeS5vbkNvbnRhaW5lckhlaWdodChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvblRvcE1hcmdpbihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeS5vblRvcE1hcmdpbihzdHJ1Y3R1cmVJZCk7XG5cdH1cbn1cbiJdfQ==