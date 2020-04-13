/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { CompositionWarehouse } from '../../../../composition/ui-api/composition.warehouse';
import { CompositionId } from '../../../../composition/domain/composition.id';
import { CompositionReadModelRootRepository } from '../../../../composition/read/composition.read-model-root-repository';
import { compositionGlobalId } from '../../../../composition/ui-api/composition.global-id';
import { FieldId } from '../../../domain/structure/field/data-type/field.id';
export class LocalCompositionWarehouse extends CompositionWarehouse {
    /**
     * @param {?} compositionId
     * @param {?} compositionRepository
     */
    constructor(compositionId, compositionRepository) {
        super(compositionRepository);
        this.compositionId = compositionId;
    }
    /**
     * @return {?}
     */
    onWidth() {
        return super.onWidth(this.compositionId);
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    onContainerWidth(compositionId = compositionGlobalId) {
        return super.onContainerWidth(this.compositionId);
    }
    /**
     * @return {?}
     */
    onWidthForEachColumn() {
        return super.onWidthForEachColumn(this.compositionId);
    }
    /**
     * @return {?}
     */
    onHeaderColumns() {
        return super.onHeaderColumns(this.compositionId);
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    onAllColumns(compositionId = compositionGlobalId) {
        return super.onAllColumns(this.compositionId);
    }
    /**
     * @param {?} fieldId
     * @return {?}
     */
    onSortOrder(fieldId) {
        return super.onSortOrder(fieldId, this.compositionId);
    }
    /**
     * @return {?}
     */
    onTemplateColumns() {
        return super.onTemplateColumns(this.compositionId);
    }
    /**
     * @return {?}
     */
    onResizeWidth() {
        return super.onResizeWidth(this.compositionId);
    }
}
LocalCompositionWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalCompositionWarehouse.ctorParameters = () => [
    { type: CompositionId },
    { type: CompositionReadModelRootRepository }
];
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalCompositionWarehouse.prototype.compositionId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtY29tcG9zaXRpb24ud2FyZWhvdXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2xvY2FsL2NvbXBvc2l0aW9uL2xvY2FsLWNvbXBvc2l0aW9uLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDNUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBR3pILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUs3RSxNQUFNLE9BQU8seUJBQTBCLFNBQVEsb0JBQW9COzs7OztJQUVsRSxZQUE2QixhQUE0QixFQUN0RCxxQkFBeUQ7UUFDM0QsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFGRCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUd6RCxDQUFDOzs7O0lBR0QsT0FBTztRQUNOLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFHRCxnQkFBZ0IsQ0FBQyxnQkFBK0IsbUJBQW1CO1FBQ2xFLE9BQU8sS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBR0Qsb0JBQW9CO1FBQ25CLE9BQU8sS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBR0QsZUFBZTtRQUNkLE9BQU8sS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFHRCxZQUFZLENBQUMsZ0JBQStCLG1CQUFtQjtRQUM5RCxPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBR0QsV0FBVyxDQUFDLE9BQWdCO1FBQzNCLE9BQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFHRCxpQkFBaUI7UUFDaEIsT0FBTyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFHRCxhQUFhO1FBQ1osT0FBTyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7WUE5Q0QsVUFBVTs7OztZQVRGLGFBQWE7WUFDYixrQ0FBa0M7O0FBaUIxQztJQURDLFFBQVE7Ozs0Q0FDRSxVQUFVO3dEQUVwQjtBQUdEO0lBREMsUUFBUTs7NkNBQ3VCLGFBQWE7NENBQXlCLFVBQVU7aUVBRS9FO0FBR0Q7SUFEQyxRQUFROzs7NENBQ2UsVUFBVTtxRUFFakM7QUFHRDtJQURDLFFBQVE7Ozs0Q0FDVSxVQUFVO2dFQUU1QjtBQUdEO0lBREMsUUFBUTs7NkNBQ21CLGFBQWE7NENBQXlCLFVBQVU7NkRBRTNFO0FBR0Q7SUFEQyxRQUFROzs2Q0FDWSxPQUFPOzRDQUFHLFVBQVU7NERBRXhDO0FBR0Q7SUFEQyxRQUFROzs7NENBQ1ksVUFBVTtrRUFFOUI7QUFHRDtJQURDLFFBQVE7Ozs0Q0FDUSxVQUFVOzhEQUUxQjs7Ozs7O0lBM0NXLGtEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3VpLWFwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vcmVhZC9jb21wb3NpdGlvbi5yZWFkLW1vZGVsLXJvb3QtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IGNvbXBvc2l0aW9uR2xvYmFsSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi91aS1hcGkvY29tcG9zaXRpb24uZ2xvYmFsLWlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3NvcnQvc29ydC1vcmRlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsQ29tcG9zaXRpb25XYXJlaG91c2UgZXh0ZW5kcyBDb21wb3NpdGlvbldhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRjb21wb3NpdGlvblJlcG9zaXRvcnk6IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdFJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcihjb21wb3NpdGlvblJlcG9zaXRvcnkpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uV2lkdGgoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIub25XaWR0aCh0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uQ29udGFpbmVyV2lkdGgoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiBzdXBlci5vbkNvbnRhaW5lcldpZHRoKHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25XaWR0aEZvckVhY2hDb2x1bW4oKTogT2JzZXJ2YWJsZTxBcnJheTxudW1iZXI+PiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uV2lkdGhGb3JFYWNoQ29sdW1uKHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25IZWFkZXJDb2x1bW5zKCk6IE9ic2VydmFibGU8QXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+PiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uSGVhZGVyQ29sdW1ucyh0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uQWxsQ29sdW1ucyhjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IE9ic2VydmFibGU8QXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+PiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uQWxsQ29sdW1ucyh0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uU29ydE9yZGVyKGZpZWxkSWQ6IEZpZWxkSWQpOiBPYnNlcnZhYmxlPFNvcnRPcmRlcj4ge1xuXHRcdHJldHVybiBzdXBlci5vblNvcnRPcmRlcihmaWVsZElkLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uVGVtcGxhdGVDb2x1bW5zKCk6IE9ic2VydmFibGU8QXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPj4ge1xuXHRcdHJldHVybiBzdXBlci5vblRlbXBsYXRlQ29sdW1ucyh0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uUmVzaXplV2lkdGgoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uUmVzaXplV2lkdGgodGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG59XG4iXX0=