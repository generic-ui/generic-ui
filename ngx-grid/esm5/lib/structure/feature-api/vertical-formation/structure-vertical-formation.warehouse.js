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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS1hcGkvdmVydGljYWwtZm9ybWF0aW9uL3N0cnVjdHVyZS12ZXJ0aWNhbC1mb3JtYXRpb24ud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSTlFO0lBR0MsNkNBQW9CLDJCQUF3RDtRQUF4RCxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO0lBQzVFLENBQUM7Ozs7O0lBRUQscUVBQXVCOzs7O0lBQXZCLFVBQXdCLFdBQXdCO1FBQy9DLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixDQUFDLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlFLENBQUM7Ozs7O0lBRUQseURBQVc7Ozs7SUFBWCxVQUFZLFdBQXdCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7OztJQUVELCtEQUFpQjs7OztJQUFqQixVQUFrQixXQUF3QjtRQUN6QyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7OztJQUVELHlEQUFXOzs7O0lBQVgsVUFBWSxXQUF3QjtRQUNuQyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Z0JBcEJELFVBQVU7Ozs7Z0JBSkYsMkJBQTJCOztJQXlCcEMsMENBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQXBCWSxtQ0FBbUM7Ozs7OztJQUVuQywwRUFBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgdmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5OiBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdG9uVmVydGljYWxTY3JvbGxFbmFibGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeS5vblZlcnRpY2FsU2Nyb2xsRW5hYmxlZChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvblJvd0hlaWdodChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeS5vblJvd0hlaWdodChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvbkNvbnRhaW5lckhlaWdodChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeS5vbkNvbnRhaW5lckhlaWdodChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvblRvcE1hcmdpbihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeS5vblRvcE1hcmdpbihzdHJ1Y3R1cmVJZCk7XG5cdH1cbn1cbiJdfQ==