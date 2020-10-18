/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { CompositionWarehouse } from '../../../../../composition/core/api/composition.warehouse';
import { CompositionId } from '../../../../../composition/core/api/composition.id';
import { CompositionReadModelRootRepository } from '../../../../../composition/core/domain-read/composition.read-model-root-repository';
import { compositionGlobalId } from '../../../../../composition/core/api/composition.global-id';
import { FieldId } from '../../../../field/core/domain/field/field.id';
import { CompositionGroupRepository } from '../../../../../composition/core/domain-read/group/composition.group.repository';
var LocalCompositionWarehouse = /** @class */ (function (_super) {
    tslib_1.__extends(LocalCompositionWarehouse, _super);
    function LocalCompositionWarehouse(compositionId, compositionRepository, compositionGroupRepository) {
        var _this = _super.call(this, compositionRepository, compositionGroupRepository) || this;
        _this.compositionId = compositionId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalCompositionWarehouse.prototype.onWidth = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onWidth.call(this, this.compositionId);
    };
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    LocalCompositionWarehouse.prototype.onContainerWidth = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = compositionGlobalId; }
        return _super.prototype.onContainerWidth.call(this, this.compositionId);
    };
    /**
     * @return {?}
     */
    LocalCompositionWarehouse.prototype.onWidthForEachColumn = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onWidthForEachColumn.call(this, this.compositionId);
    };
    /**
     * @return {?}
     */
    LocalCompositionWarehouse.prototype.onHeaderColumns = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onHeaderColumns.call(this, this.compositionId);
    };
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    LocalCompositionWarehouse.prototype.onAllColumns = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = compositionGlobalId; }
        return _super.prototype.onAllColumns.call(this, this.compositionId);
    };
    /**
     * @param {?} fieldId
     * @return {?}
     */
    LocalCompositionWarehouse.prototype.onSortOrder = /**
     * @param {?} fieldId
     * @return {?}
     */
    function (fieldId) {
        return _super.prototype.onSortOrder.call(this, fieldId, this.compositionId);
    };
    /**
     * @return {?}
     */
    LocalCompositionWarehouse.prototype.onTemplateColumns = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onTemplateColumns.call(this, this.compositionId);
    };
    /**
     * @return {?}
     */
    LocalCompositionWarehouse.prototype.onResizeWidth = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onResizeWidth.call(this, this.compositionId);
    };
    LocalCompositionWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalCompositionWarehouse.ctorParameters = function () { return [
        { type: CompositionId },
        { type: CompositionReadModelRootRepository },
        { type: CompositionGroupRepository }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalCompositionWarehouse.prototype, "onWidth", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [CompositionId]),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalCompositionWarehouse.prototype, "onContainerWidth", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalCompositionWarehouse.prototype, "onWidthForEachColumn", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalCompositionWarehouse.prototype, "onHeaderColumns", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [CompositionId]),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalCompositionWarehouse.prototype, "onAllColumns", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [FieldId]),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalCompositionWarehouse.prototype, "onSortOrder", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalCompositionWarehouse.prototype, "onTemplateColumns", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalCompositionWarehouse.prototype, "onResizeWidth", null);
    return LocalCompositionWarehouse;
}(CompositionWarehouse));
export { LocalCompositionWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalCompositionWarehouse.prototype.compositionId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtY29tcG9zaXRpb24ud2FyZWhvdXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2xvY2FsL2NvbXBvc2l0aW9uL2xvY2FsLWNvbXBvc2l0aW9uLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDakcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLG9GQUFvRixDQUFDO0FBR3hJLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUV2RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnRkFBZ0YsQ0FBQztBQUc1SDtJQUMrQyxxREFBb0I7SUFFbEUsbUNBQTZCLGFBQTRCLEVBQ3RELHFCQUF5RCxFQUN6RCwwQkFBc0Q7UUFGekQsWUFHQyxrQkFBTSxxQkFBcUIsRUFBRSwwQkFBMEIsQ0FBQyxTQUN4RDtRQUo0QixtQkFBYSxHQUFiLGFBQWEsQ0FBZTs7SUFJekQsQ0FBQzs7OztJQUdELDJDQUFPOzs7SUFBUDtRQUNDLE9BQU8saUJBQU0sT0FBTyxZQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUdELG9EQUFnQjs7OztJQUFoQixVQUFpQixhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUNsRSxPQUFPLGlCQUFNLGdCQUFnQixZQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBR0Qsd0RBQW9COzs7SUFBcEI7UUFDQyxPQUFPLGlCQUFNLG9CQUFvQixZQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBR0QsbURBQWU7OztJQUFmO1FBQ0MsT0FBTyxpQkFBTSxlQUFlLFlBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBR0QsZ0RBQVk7Ozs7SUFBWixVQUFhLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQzlELE9BQU8saUJBQU0sWUFBWSxZQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUdELCtDQUFXOzs7O0lBQVgsVUFBWSxPQUFnQjtRQUMzQixPQUFPLGlCQUFNLFdBQVcsWUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFHRCxxREFBaUI7OztJQUFqQjtRQUNDLE9BQU8saUJBQU0saUJBQWlCLFlBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFHRCxpREFBYTs7O0lBQWI7UUFDQyxPQUFPLGlCQUFNLGFBQWEsWUFBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Z0JBL0NELFVBQVU7Ozs7Z0JBVkYsYUFBYTtnQkFDYixrQ0FBa0M7Z0JBTWxDLDBCQUEwQjs7SUFhbEM7UUFEQyxRQUFROzs7Z0RBQ0UsVUFBVTs0REFFcEI7SUFHRDtRQURDLFFBQVE7O2lEQUN1QixhQUFhO2dEQUF5QixVQUFVO3FFQUUvRTtJQUdEO1FBREMsUUFBUTs7O2dEQUNlLFVBQVU7eUVBRWpDO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ1UsVUFBVTtvRUFFNUI7SUFHRDtRQURDLFFBQVE7O2lEQUNtQixhQUFhO2dEQUF5QixVQUFVO2lFQUUzRTtJQUdEO1FBREMsUUFBUTs7aURBQ1ksT0FBTztnREFBRyxVQUFVO2dFQUV4QztJQUdEO1FBREMsUUFBUTs7O2dEQUNZLFVBQVU7c0VBRTlCO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ1EsVUFBVTtrRUFFMUI7SUFFRixnQ0FBQztDQUFBLEFBakRELENBQytDLG9CQUFvQixHQWdEbEU7U0FoRFkseUJBQXlCOzs7Ozs7SUFFekIsa0RBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9jb21wb3NpdGlvbi5yZWFkLW1vZGVsLXJvb3QtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IGNvbXBvc2l0aW9uR2xvYmFsSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IFNvcnRPcmRlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Hcm91cFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2dyb3VwL2NvbXBvc2l0aW9uLmdyb3VwLnJlcG9zaXRvcnknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbENvbXBvc2l0aW9uV2FyZWhvdXNlIGV4dGVuZHMgQ29tcG9zaXRpb25XYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0Y29tcG9zaXRpb25SZXBvc2l0b3J5OiBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RSZXBvc2l0b3J5LFxuXHRcdFx0XHRjb21wb3NpdGlvbkdyb3VwUmVwb3NpdG9yeTogQ29tcG9zaXRpb25Hcm91cFJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcihjb21wb3NpdGlvblJlcG9zaXRvcnksIGNvbXBvc2l0aW9uR3JvdXBSZXBvc2l0b3J5KTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbldpZHRoKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uV2lkdGgodGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbkNvbnRhaW5lcldpZHRoKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIub25Db250YWluZXJXaWR0aCh0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uV2lkdGhGb3JFYWNoQ29sdW1uKCk6IE9ic2VydmFibGU8QXJyYXk8bnVtYmVyPj4ge1xuXHRcdHJldHVybiBzdXBlci5vbldpZHRoRm9yRWFjaENvbHVtbih0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uSGVhZGVyQ29sdW1ucygpOiBPYnNlcnZhYmxlPEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0Pj4ge1xuXHRcdHJldHVybiBzdXBlci5vbkhlYWRlckNvbHVtbnModGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbkFsbENvbHVtbnMoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiBPYnNlcnZhYmxlPEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0Pj4ge1xuXHRcdHJldHVybiBzdXBlci5vbkFsbENvbHVtbnModGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblNvcnRPcmRlcihmaWVsZElkOiBGaWVsZElkKTogT2JzZXJ2YWJsZTxTb3J0T3JkZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIub25Tb3J0T3JkZXIoZmllbGRJZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblRlbXBsYXRlQ29sdW1ucygpOiBPYnNlcnZhYmxlPEFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj4+IHtcblx0XHRyZXR1cm4gc3VwZXIub25UZW1wbGF0ZUNvbHVtbnModGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblJlc2l6ZVdpZHRoKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiBzdXBlci5vblJlc2l6ZVdpZHRoKHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxufVxuIl19