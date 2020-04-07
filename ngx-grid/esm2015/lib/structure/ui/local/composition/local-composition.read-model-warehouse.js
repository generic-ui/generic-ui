/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { CompositionReadModelWarehouse } from '../../../../composition/ui-api/composition.read-model-warehouse';
import { CompositionId } from '../../../../composition/domain/composition.id';
import { CompositionReadModelRootRepository } from '../../../../composition/read/composition.read-model-root-repository';
import { compositionGlobalId } from '../../../../composition/ui-api/composition.global-id';
import { FieldId } from '../../../domain/structure/field/data-type/field.id';
export class LocalCompositionReadModelWarehouse extends CompositionReadModelWarehouse {
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
LocalCompositionReadModelWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalCompositionReadModelWarehouse.ctorParameters = () => [
    { type: CompositionId },
    { type: CompositionReadModelRootRepository }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalCompositionReadModelWarehouse.prototype, "onWidth", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CompositionId]),
    tslib_1.__metadata("design:returntype", Observable)
], LocalCompositionReadModelWarehouse.prototype, "onContainerWidth", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalCompositionReadModelWarehouse.prototype, "onWidthForEachColumn", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalCompositionReadModelWarehouse.prototype, "onHeaderColumns", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CompositionId]),
    tslib_1.__metadata("design:returntype", Observable)
], LocalCompositionReadModelWarehouse.prototype, "onAllColumns", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [FieldId]),
    tslib_1.__metadata("design:returntype", Observable)
], LocalCompositionReadModelWarehouse.prototype, "onSortOrder", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalCompositionReadModelWarehouse.prototype, "onTemplateColumns", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalCompositionReadModelWarehouse.prototype, "onResizeWidth", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalCompositionReadModelWarehouse.prototype.compositionId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtY29tcG9zaXRpb24ucmVhZC1tb2RlbC13YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvbG9jYWwvY29tcG9zaXRpb24vbG9jYWwtY29tcG9zaXRpb24ucmVhZC1tb2RlbC13YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ2hILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUd6SCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFLN0UsTUFBTSxPQUFPLGtDQUFtQyxTQUFRLDZCQUE2Qjs7Ozs7SUFFcEYsWUFBNkIsYUFBNEIsRUFDdEQscUJBQXlEO1FBQzNELEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRkQsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFHekQsQ0FBQzs7OztJQUdELE9BQU87UUFDTixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBR0QsZ0JBQWdCLENBQUMsZ0JBQStCLG1CQUFtQjtRQUNsRSxPQUFPLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUdELG9CQUFvQjtRQUNuQixPQUFPLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUdELGVBQWU7UUFDZCxPQUFPLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBR0QsWUFBWSxDQUFDLGdCQUErQixtQkFBbUI7UUFDOUQsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUdELFdBQVcsQ0FBQyxPQUFnQjtRQUMzQixPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBR0QsaUJBQWlCO1FBQ2hCLE9BQU8sS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBR0QsYUFBYTtRQUNaLE9BQU8sS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7O1lBOUNELFVBQVU7Ozs7WUFURixhQUFhO1lBQ2Isa0NBQWtDOztBQWlCMUM7SUFEQyxRQUFROzs7NENBQ0UsVUFBVTtpRUFFcEI7QUFHRDtJQURDLFFBQVE7OzZDQUN1QixhQUFhOzRDQUF5QixVQUFVOzBFQUUvRTtBQUdEO0lBREMsUUFBUTs7OzRDQUNlLFVBQVU7OEVBRWpDO0FBR0Q7SUFEQyxRQUFROzs7NENBQ1UsVUFBVTt5RUFFNUI7QUFHRDtJQURDLFFBQVE7OzZDQUNtQixhQUFhOzRDQUF5QixVQUFVO3NFQUUzRTtBQUdEO0lBREMsUUFBUTs7NkNBQ1ksT0FBTzs0Q0FBRyxVQUFVO3FFQUV4QztBQUdEO0lBREMsUUFBUTs7OzRDQUNZLFVBQVU7MkVBRTlCO0FBR0Q7SUFEQyxRQUFROzs7NENBQ1EsVUFBVTt1RUFFMUI7Ozs7OztJQTNDVywyREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi91aS1hcGkvY29tcG9zaXRpb24ucmVhZC1tb2RlbC13YXJlaG91c2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vcmVhZC9jb21wb3NpdGlvbi5yZWFkLW1vZGVsLXJvb3QtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IGNvbXBvc2l0aW9uR2xvYmFsSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi91aS1hcGkvY29tcG9zaXRpb24uZ2xvYmFsLWlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3NvcnQvc29ydC1vcmRlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsQ29tcG9zaXRpb25SZWFkTW9kZWxXYXJlaG91c2UgZXh0ZW5kcyBDb21wb3NpdGlvblJlYWRNb2RlbFdhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRjb21wb3NpdGlvblJlcG9zaXRvcnk6IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdFJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcihjb21wb3NpdGlvblJlcG9zaXRvcnkpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uV2lkdGgoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIub25XaWR0aCh0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uQ29udGFpbmVyV2lkdGgoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiBzdXBlci5vbkNvbnRhaW5lcldpZHRoKHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25XaWR0aEZvckVhY2hDb2x1bW4oKTogT2JzZXJ2YWJsZTxBcnJheTxudW1iZXI+PiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uV2lkdGhGb3JFYWNoQ29sdW1uKHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25IZWFkZXJDb2x1bW5zKCk6IE9ic2VydmFibGU8QXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+PiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uSGVhZGVyQ29sdW1ucyh0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uQWxsQ29sdW1ucyhjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IE9ic2VydmFibGU8QXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+PiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uQWxsQ29sdW1ucyh0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uU29ydE9yZGVyKGZpZWxkSWQ6IEZpZWxkSWQpOiBPYnNlcnZhYmxlPFNvcnRPcmRlcj4ge1xuXHRcdHJldHVybiBzdXBlci5vblNvcnRPcmRlcihmaWVsZElkLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uVGVtcGxhdGVDb2x1bW5zKCk6IE9ic2VydmFibGU8QXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPj4ge1xuXHRcdHJldHVybiBzdXBlci5vblRlbXBsYXRlQ29sdW1ucyh0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uUmVzaXplV2lkdGgoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uUmVzaXplV2lkdGgodGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG59XG4iXX0=