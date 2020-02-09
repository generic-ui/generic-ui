/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { CompositionReadModelService } from '../../../../composition/ui-api/composition-read-model.service';
import { CompositionId } from '../../../../composition/domain/composition-id';
import { CompositionRepository } from '../../../../composition/domain/read/composition.repository';
import { globalCompositionId } from '../../../../composition/domain/global-composition-id';
import { FieldId } from '../../../domain/structure/command/field/data-type/field.id';
var LocalCompositionReadModelService = /** @class */ (function (_super) {
    tslib_1.__extends(LocalCompositionReadModelService, _super);
    function LocalCompositionReadModelService(compositionId, compositionRepository) {
        var _this = _super.call(this, compositionRepository) || this;
        _this.compositionId = compositionId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalCompositionReadModelService.prototype.onWidth = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onWidth.call(this, this.compositionId);
    };
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    LocalCompositionReadModelService.prototype.onContainerWidth = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        return _super.prototype.onContainerWidth.call(this, this.compositionId);
    };
    /**
     * @return {?}
     */
    LocalCompositionReadModelService.prototype.onWidthForEachColumn = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onWidthForEachColumn.call(this, this.compositionId);
    };
    /**
     * @return {?}
     */
    LocalCompositionReadModelService.prototype.onHeaderColumns = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onHeaderColumns.call(this, this.compositionId);
    };
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    LocalCompositionReadModelService.prototype.onAllColumns = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        return _super.prototype.onAllColumns.call(this, this.compositionId);
    };
    /**
     * @param {?} fieldId
     * @return {?}
     */
    LocalCompositionReadModelService.prototype.onSortOrder = /**
     * @param {?} fieldId
     * @return {?}
     */
    function (fieldId) {
        return _super.prototype.onSortOrder.call(this, fieldId, this.compositionId);
    };
    /**
     * @return {?}
     */
    LocalCompositionReadModelService.prototype.onTemplateColumns = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onTemplateColumns.call(this, this.compositionId);
    };
    /**
     * @return {?}
     */
    LocalCompositionReadModelService.prototype.onResizeWidth = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onResizeWidth.call(this, this.compositionId);
    };
    LocalCompositionReadModelService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalCompositionReadModelService.ctorParameters = function () { return [
        { type: CompositionId },
        { type: CompositionRepository }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalCompositionReadModelService.prototype, "onWidth", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [CompositionId]),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalCompositionReadModelService.prototype, "onContainerWidth", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalCompositionReadModelService.prototype, "onWidthForEachColumn", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalCompositionReadModelService.prototype, "onHeaderColumns", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [CompositionId]),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalCompositionReadModelService.prototype, "onAllColumns", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [FieldId]),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalCompositionReadModelService.prototype, "onSortOrder", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalCompositionReadModelService.prototype, "onTemplateColumns", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalCompositionReadModelService.prototype, "onResizeWidth", null);
    return LocalCompositionReadModelService;
}(CompositionReadModelService));
export { LocalCompositionReadModelService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalCompositionReadModelService.prototype.compositionId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtY29tcG9zaXRpb24tcmVhZC1tb2RlbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2xvY2FsL2NvbXBvc2l0aW9uL2xvY2FsLWNvbXBvc2l0aW9uLXJlYWQtbW9kZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDNUcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBR25HLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUlyRjtJQUNzRCw0REFBMkI7SUFFaEYsMENBQTZCLGFBQTRCLEVBQ3RELHFCQUE0QztRQUQvQyxZQUVDLGtCQUFNLHFCQUFxQixDQUFDLFNBQzVCO1FBSDRCLG1CQUFhLEdBQWIsYUFBYSxDQUFlOztJQUd6RCxDQUFDOzs7O0lBR0Qsa0RBQU87OztJQUFQO1FBQ0MsT0FBTyxpQkFBTSxPQUFPLFlBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBR0QsMkRBQWdCOzs7O0lBQWhCLFVBQWlCLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQ2xFLE9BQU8saUJBQU0sZ0JBQWdCLFlBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFHRCwrREFBb0I7OztJQUFwQjtRQUNDLE9BQU8saUJBQU0sb0JBQW9CLFlBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFHRCwwREFBZTs7O0lBQWY7UUFDQyxPQUFPLGlCQUFNLGVBQWUsWUFBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFHRCx1REFBWTs7OztJQUFaLFVBQWEsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDOUQsT0FBTyxpQkFBTSxZQUFZLFlBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBR0Qsc0RBQVc7Ozs7SUFBWCxVQUFZLE9BQWdCO1FBQzNCLE9BQU8saUJBQU0sV0FBVyxZQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUdELDREQUFpQjs7O0lBQWpCO1FBQ0MsT0FBTyxpQkFBTSxpQkFBaUIsWUFBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUdELHdEQUFhOzs7SUFBYjtRQUNDLE9BQU8saUJBQU0sYUFBYSxZQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDOztnQkE5Q0QsVUFBVTs7OztnQkFURixhQUFhO2dCQUNiLHFCQUFxQjs7SUFpQjdCO1FBREMsUUFBUTs7O2dEQUNFLFVBQVU7bUVBRXBCO0lBR0Q7UUFEQyxRQUFROztpREFDdUIsYUFBYTtnREFBeUIsVUFBVTs0RUFFL0U7SUFHRDtRQURDLFFBQVE7OztnREFDZSxVQUFVO2dGQUVqQztJQUdEO1FBREMsUUFBUTs7O2dEQUNVLFVBQVU7MkVBRTVCO0lBR0Q7UUFEQyxRQUFROztpREFDbUIsYUFBYTtnREFBeUIsVUFBVTt3RUFFM0U7SUFHRDtRQURDLFFBQVE7O2lEQUNZLE9BQU87Z0RBQUcsVUFBVTt1RUFFeEM7SUFHRDtRQURDLFFBQVE7OztnREFDWSxVQUFVOzZFQUU5QjtJQUdEO1FBREMsUUFBUTs7O2dEQUNRLFVBQVU7eUVBRTFCO0lBRUYsdUNBQUM7Q0FBQSxBQWhERCxDQUNzRCwyQkFBMkIsR0ErQ2hGO1NBL0NZLGdDQUFnQzs7Ozs7O0lBRWhDLHlEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi91aS1hcGkvY29tcG9zaXRpb24tcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29tcG9zaXRpb24taWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL3JlYWQvY29tcG9zaXRpb24ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgZ2xvYmFsQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9nbG9iYWwtY29tcG9zaXRpb24taWQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgU29ydFN0YXR1cyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9zb3J0L3NvcnQtc3RhdHVzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxDb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2UgZXh0ZW5kcyBDb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0Y29tcG9zaXRpb25SZXBvc2l0b3J5OiBDb21wb3NpdGlvblJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcihjb21wb3NpdGlvblJlcG9zaXRvcnkpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uV2lkdGgoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIub25XaWR0aCh0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uQ29udGFpbmVyV2lkdGgoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiBzdXBlci5vbkNvbnRhaW5lcldpZHRoKHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25XaWR0aEZvckVhY2hDb2x1bW4oKTogT2JzZXJ2YWJsZTxBcnJheTxudW1iZXI+PiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uV2lkdGhGb3JFYWNoQ29sdW1uKHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25IZWFkZXJDb2x1bW5zKCk6IE9ic2VydmFibGU8QXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+PiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uSGVhZGVyQ29sdW1ucyh0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uQWxsQ29sdW1ucyhjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gZ2xvYmFsQ29tcG9zaXRpb25JZCk6IE9ic2VydmFibGU8QXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+PiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uQWxsQ29sdW1ucyh0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uU29ydE9yZGVyKGZpZWxkSWQ6IEZpZWxkSWQpOiBPYnNlcnZhYmxlPFNvcnRTdGF0dXM+IHtcblx0XHRyZXR1cm4gc3VwZXIub25Tb3J0T3JkZXIoZmllbGRJZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblRlbXBsYXRlQ29sdW1ucygpOiBPYnNlcnZhYmxlPEFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj4+IHtcblx0XHRyZXR1cm4gc3VwZXIub25UZW1wbGF0ZUNvbHVtbnModGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblJlc2l6ZVdpZHRoKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiBzdXBlci5vblJlc2l6ZVdpZHRoKHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxufVxuIl19