/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { VerticalFormationRepository } from './vertical-formation.repository';
import { structureGlobalId } from '../../../core/api/structure.global-id';
import { VerticalFormationScrollBarPositionRepository } from '../domain-read/scroll-bar/vertical-formation.scroll-bar-position.repository';
var StructureVerticalFormationWarehouse = /** @class */ (function () {
    function StructureVerticalFormationWarehouse(verticalFormationRepository, positionRepository) {
        this.verticalFormationRepository = verticalFormationRepository;
        this.positionRepository = positionRepository;
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
    /**
     * @param {?=} structureId
     * @return {?}
     */
    StructureVerticalFormationWarehouse.prototype.onScrollBarPosition = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.positionRepository.on(structureId);
    };
    StructureVerticalFormationWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureVerticalFormationWarehouse.ctorParameters = function () { return [
        { type: VerticalFormationRepository },
        { type: VerticalFormationScrollBarPositionRepository }
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
    /**
     * @type {?}
     * @private
     */
    StructureVerticalFormationWarehouse.prototype.positionRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9hcGkvc3RydWN0dXJlLXZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFFLDRDQUE0QyxFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFHM0k7SUFHQyw2Q0FBNkIsMkJBQXdELEVBQ2pFLGtCQUFnRTtRQUR2RCxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO1FBQ2pFLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBOEM7SUFDcEYsQ0FBQzs7Ozs7SUFFRCxxRUFBdUI7Ozs7SUFBdkIsVUFBd0IsV0FBd0I7UUFDL0MsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUMsdUJBQXVCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7Ozs7SUFFRCx5REFBVzs7OztJQUFYLFVBQVksV0FBd0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBRUQsK0RBQWlCOzs7O0lBQWpCLFVBQWtCLFdBQXdCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7O0lBRUQseURBQVc7Ozs7SUFBWCxVQUFZLFdBQXdCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7OztJQUVELGlFQUFtQjs7OztJQUFuQixVQUFvQixXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUMvRCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Z0JBekJELFVBQVU7Ozs7Z0JBTkYsMkJBQTJCO2dCQUczQiw0Q0FBNEM7O0lBOEJyRCwwQ0FBQztDQUFBLEFBM0JELElBMkJDO1NBMUJZLG1DQUFtQzs7Ozs7O0lBRW5DLDBFQUF5RTs7Ozs7SUFDbEYsaUVBQWlGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblNjcm9sbEJhclBvc2l0aW9uUmVwb3NpdG9yeSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3Njcm9sbC1iYXIvdmVydGljYWwtZm9ybWF0aW9uLnNjcm9sbC1iYXItcG9zaXRpb24ucmVwb3NpdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeTogVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBvc2l0aW9uUmVwb3NpdG9yeTogVmVydGljYWxGb3JtYXRpb25TY3JvbGxCYXJQb3NpdGlvblJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdG9uVmVydGljYWxTY3JvbGxFbmFibGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeS5vblZlcnRpY2FsU2Nyb2xsRW5hYmxlZChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvblJvd0hlaWdodChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeS5vblJvd0hlaWdodChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvbkNvbnRhaW5lckhlaWdodChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeS5vbkNvbnRhaW5lckhlaWdodChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvblRvcE1hcmdpbihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeS5vblRvcE1hcmdpbihzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvblNjcm9sbEJhclBvc2l0aW9uKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5wb3NpdGlvblJlcG9zaXRvcnkub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==