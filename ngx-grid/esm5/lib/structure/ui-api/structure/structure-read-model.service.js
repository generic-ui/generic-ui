/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { StructureRepository } from '../../domain/structure/read/structure.repository';
import { globalStructureId } from '../../domain/global-structure-id';
import { VerticalFormationRepository } from '../../domain/structure/read/vertical-formation/vertical-formation.repository';
var StructureReadModelService = /** @class */ (function () {
    function StructureReadModelService(structureRepository, verticalFormationRepository) {
        this.structureRepository = structureRepository;
        this.verticalFormationRepository = verticalFormationRepository;
    }
    /**
     * @param {?=} aggregateId
     * @return {?}
     */
    StructureReadModelService.prototype.onStructure = /**
     * @param {?=} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        if (aggregateId === void 0) { aggregateId = globalStructureId; }
        return this.structureRepository.onStructure(aggregateId);
    };
    /**
     * @param {?=} aggregateId
     * @return {?}
     */
    StructureReadModelService.prototype.onVerticalScrollEnabled = /**
     * @param {?=} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        if (aggregateId === void 0) { aggregateId = globalStructureId; }
        return this.structureRepository
            .onStructure(aggregateId)
            .pipe(map((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) { return structure.isVerticalScrollEnabled(); })), distinctUntilChanged());
    };
    /**
     * @param {?=} aggregateId
     * @return {?}
     */
    StructureReadModelService.prototype.onRowHeight = /**
     * @param {?=} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        if (aggregateId === void 0) { aggregateId = globalStructureId; }
        return this.verticalFormationRepository.onRowHeight(aggregateId);
    };
    StructureReadModelService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureReadModelService.ctorParameters = function () { return [
        { type: StructureRepository },
        { type: VerticalFormationRepository }
    ]; };
    return StructureReadModelService;
}());
export { StructureReadModelService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureReadModelService.prototype.structureRepository;
    /**
     * @type {?}
     * @private
     */
    StructureReadModelService.prototype.verticalFormationRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXJlYWQtbW9kZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS1yZWFkLW1vZGVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBRzNIO0lBR0MsbUNBQW9CLG1CQUF3QyxFQUNqRCwyQkFBd0Q7UUFEL0Msd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUNqRCxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO0lBQ25FLENBQUM7Ozs7O0lBRUQsK0NBQVc7Ozs7SUFBWCxVQUFZLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7OztJQUVELDJEQUF1Qjs7OztJQUF2QixVQUF3QixXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUNuRSxPQUFPLElBQUksQ0FBQyxtQkFBbUI7YUFDekIsV0FBVyxDQUFDLFdBQVcsQ0FBQzthQUN4QixJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUMsU0FBb0IsSUFBSyxPQUFBLFNBQVMsQ0FBQyx1QkFBdUIsRUFBRSxFQUFuQyxDQUFtQyxFQUFDLEVBQ2xFLG9CQUFvQixFQUFFLENBQ3RCLENBQUM7SUFDUixDQUFDOzs7OztJQUVELCtDQUFXOzs7O0lBQVgsVUFBWSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUN2RCxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Z0JBdEJELFVBQVU7Ozs7Z0JBTkYsbUJBQW1CO2dCQUduQiwyQkFBMkI7O0lBMkJwQyxnQ0FBQztDQUFBLEFBeEJELElBd0JDO1NBdkJZLHlCQUF5Qjs7Ozs7O0lBRXpCLHdEQUFnRDs7Ozs7SUFDekQsZ0VBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL3N0cnVjdHVyZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IGdsb2JhbFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2dsb2JhbC1zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL3N0cnVjdHVyZSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3JlYWQvdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZXBvc2l0b3J5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUmVhZE1vZGVsU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeTogVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvblN0cnVjdHVyZShhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8U3RydWN0dXJlPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUmVwb3NpdG9yeS5vblN0cnVjdHVyZShhZ2dyZWdhdGVJZCk7XG5cdH1cblxuXHRvblZlcnRpY2FsU2Nyb2xsRW5hYmxlZChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uU3RydWN0dXJlKGFnZ3JlZ2F0ZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKHN0cnVjdHVyZTogU3RydWN0dXJlKSA9PiBzdHJ1Y3R1cmUuaXNWZXJ0aWNhbFNjcm9sbEVuYWJsZWQoKSksXG5cdFx0XHRcdFx0ICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Sb3dIZWlnaHQoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeS5vblJvd0hlaWdodChhZ2dyZWdhdGVJZCk7XG5cdH1cblxufVxuIl19