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
export class LocalCompositionWarehouse extends CompositionWarehouse {
    /**
     * @param {?} compositionId
     * @param {?} compositionRepository
     * @param {?} compositionGroupRepository
     */
    constructor(compositionId, compositionRepository, compositionGroupRepository) {
        super(compositionRepository, compositionGroupRepository);
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
    { type: CompositionReadModelRootRepository },
    { type: CompositionGroupRepository }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtY29tcG9zaXRpb24ud2FyZWhvdXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2xvY2FsL2NvbXBvc2l0aW9uL2xvY2FsLWNvbXBvc2l0aW9uLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDakcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLG9GQUFvRixDQUFDO0FBR3hJLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUV2RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnRkFBZ0YsQ0FBQztBQUk1SCxNQUFNLE9BQU8seUJBQTBCLFNBQVEsb0JBQW9COzs7Ozs7SUFFbEUsWUFBNkIsYUFBNEIsRUFDdEQscUJBQXlELEVBQ3pELDBCQUFzRDtRQUN4RCxLQUFLLENBQUMscUJBQXFCLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztRQUg3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUl6RCxDQUFDOzs7O0lBR0QsT0FBTztRQUNOLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFHRCxnQkFBZ0IsQ0FBQyxnQkFBK0IsbUJBQW1CO1FBQ2xFLE9BQU8sS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBR0Qsb0JBQW9CO1FBQ25CLE9BQU8sS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBR0QsZUFBZTtRQUNkLE9BQU8sS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFHRCxZQUFZLENBQUMsZ0JBQStCLG1CQUFtQjtRQUM5RCxPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBR0QsV0FBVyxDQUFDLE9BQWdCO1FBQzNCLE9BQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFHRCxpQkFBaUI7UUFDaEIsT0FBTyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFHRCxhQUFhO1FBQ1osT0FBTyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7WUEvQ0QsVUFBVTs7OztZQVZGLGFBQWE7WUFDYixrQ0FBa0M7WUFNbEMsMEJBQTBCOztBQWFsQztJQURDLFFBQVE7Ozs0Q0FDRSxVQUFVO3dEQUVwQjtBQUdEO0lBREMsUUFBUTs7NkNBQ3VCLGFBQWE7NENBQXlCLFVBQVU7aUVBRS9FO0FBR0Q7SUFEQyxRQUFROzs7NENBQ2UsVUFBVTtxRUFFakM7QUFHRDtJQURDLFFBQVE7Ozs0Q0FDVSxVQUFVO2dFQUU1QjtBQUdEO0lBREMsUUFBUTs7NkNBQ21CLGFBQWE7NENBQXlCLFVBQVU7NkRBRTNFO0FBR0Q7SUFEQyxRQUFROzs2Q0FDWSxPQUFPOzRDQUFHLFVBQVU7NERBRXhDO0FBR0Q7SUFEQyxRQUFROzs7NENBQ1ksVUFBVTtrRUFFOUI7QUFHRDtJQURDLFFBQVE7Ozs0Q0FDUSxVQUFVOzhEQUUxQjs7Ozs7O0lBNUNXLGtEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBjb21wb3NpdGlvbkdsb2JhbElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uZ2xvYmFsLWlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vc29ydC9zb3J0LW9yZGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uR3JvdXBSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9ncm91cC9jb21wb3NpdGlvbi5ncm91cC5yZXBvc2l0b3J5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxDb21wb3NpdGlvbldhcmVob3VzZSBleHRlbmRzIENvbXBvc2l0aW9uV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdGNvbXBvc2l0aW9uUmVwb3NpdG9yeTogQ29tcG9zaXRpb25SZWFkTW9kZWxSb290UmVwb3NpdG9yeSxcblx0XHRcdFx0Y29tcG9zaXRpb25Hcm91cFJlcG9zaXRvcnk6IENvbXBvc2l0aW9uR3JvdXBSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoY29tcG9zaXRpb25SZXBvc2l0b3J5LCBjb21wb3NpdGlvbkdyb3VwUmVwb3NpdG9yeSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25XaWR0aCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiBzdXBlci5vbldpZHRoKHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25Db250YWluZXJXaWR0aChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uQ29udGFpbmVyV2lkdGgodGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbldpZHRoRm9yRWFjaENvbHVtbigpOiBPYnNlcnZhYmxlPEFycmF5PG51bWJlcj4+IHtcblx0XHRyZXR1cm4gc3VwZXIub25XaWR0aEZvckVhY2hDb2x1bW4odGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbkhlYWRlckNvbHVtbnMoKTogT2JzZXJ2YWJsZTxBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4+IHtcblx0XHRyZXR1cm4gc3VwZXIub25IZWFkZXJDb2x1bW5zKHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25BbGxDb2x1bW5zKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogT2JzZXJ2YWJsZTxBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4+IHtcblx0XHRyZXR1cm4gc3VwZXIub25BbGxDb2x1bW5zKHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25Tb3J0T3JkZXIoZmllbGRJZDogRmllbGRJZCk6IE9ic2VydmFibGU8U29ydE9yZGVyPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uU29ydE9yZGVyKGZpZWxkSWQsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25UZW1wbGF0ZUNvbHVtbnMoKTogT2JzZXJ2YWJsZTxBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+PiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uVGVtcGxhdGVDb2x1bW5zKHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25SZXNpemVXaWR0aCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gc3VwZXIub25SZXNpemVXaWR0aCh0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cbn1cbiJdfQ==