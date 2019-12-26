/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { CompositionReadModelService } from '../../../ui-api/composition/composition-read-model.service';
import { CompositionId } from '../../../domain/composition/composition-id';
import { CompositionRepository } from '../../../domain/composition/read/composition.repository';
import { globalCompositionId } from '../../../domain/composition/global-composition-id';
export class LocalCompositionReadModelService extends CompositionReadModelService {
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
    onHeaderColumns() {
        return super.onHeaderColumns(this.compositionId);
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
    onWidthForEachColumn() {
        return super.onWidthForEachColumn(this.compositionId);
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
    onContainerWidth(compositionId = globalCompositionId) {
        return super.onContainerWidth(this.compositionId);
    }
    /**
     * @return {?}
     */
    onResizeWidth() {
        return super.onResizeWidth(this.compositionId);
    }
}
LocalCompositionReadModelService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalCompositionReadModelService.ctorParameters = () => [
    { type: CompositionId },
    { type: CompositionRepository }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalCompositionReadModelService.prototype, "onHeaderColumns", null);
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
], LocalCompositionReadModelService.prototype, "onWidthForEachColumn", null);
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
], LocalCompositionReadModelService.prototype, "onResizeWidth", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalCompositionReadModelService.prototype.compositionId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtY29tcG9zaXRpb24tcmVhZC1tb2RlbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2xvY2FsL2NvbXBvc2l0aW9uL2xvY2FsLWNvbXBvc2l0aW9uLXJlYWQtbW9kZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDekcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBR2hHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBS3hGLE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSwyQkFBMkI7Ozs7O0lBRWhGLFlBQTZCLGFBQTRCLEVBQ3RELHFCQUE0QztRQUM5QyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUZELGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBR3pELENBQUM7Ozs7SUFHRCxlQUFlO1FBQ2QsT0FBTyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBR0QsaUJBQWlCO1FBQ2hCLE9BQU8sS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBR0Qsb0JBQW9CO1FBQ25CLE9BQU8sS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBR0QsT0FBTztRQUNOLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFHRCxnQkFBZ0IsQ0FBQyxnQkFBK0IsbUJBQW1CO1FBQ2xFLE9BQU8sS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBR0QsYUFBYTtRQUNaLE9BQU8sS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7O1lBcENELFVBQVU7Ozs7WUFSRixhQUFhO1lBQ2IscUJBQXFCOztBQWdCN0I7SUFEQyxRQUFROzs7NENBQ1UsVUFBVTt1RUFFNUI7QUFHRDtJQURDLFFBQVE7Ozs0Q0FDWSxVQUFVO3lFQUU5QjtBQUdEO0lBREMsUUFBUTs7OzRDQUNlLFVBQVU7NEVBRWpDO0FBR0Q7SUFEQyxRQUFROzs7NENBQ0UsVUFBVTsrREFFcEI7QUFHRDtJQURDLFFBQVE7OzZDQUN1QixhQUFhOzRDQUF5QixVQUFVO3dFQUUvRTtBQUdEO0lBREMsUUFBUTs7OzRDQUNRLFVBQVU7cUVBRTFCOzs7Ozs7SUFqQ1cseURBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi1pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vcmVhZC9jb21wb3NpdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBnbG9iYWxDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2dsb2JhbC1jb21wb3NpdGlvbi1pZCc7XG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxDb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2UgZXh0ZW5kcyBDb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0Y29tcG9zaXRpb25SZXBvc2l0b3J5OiBDb21wb3NpdGlvblJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcihjb21wb3NpdGlvblJlcG9zaXRvcnkpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uSGVhZGVyQ29sdW1ucygpOiBPYnNlcnZhYmxlPEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0Pj4ge1xuXHRcdHJldHVybiBzdXBlci5vbkhlYWRlckNvbHVtbnModGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblRlbXBsYXRlQ29sdW1ucygpOiBPYnNlcnZhYmxlPEFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj4+IHtcblx0XHRyZXR1cm4gc3VwZXIub25UZW1wbGF0ZUNvbHVtbnModGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbldpZHRoRm9yRWFjaENvbHVtbigpOiBPYnNlcnZhYmxlPEFycmF5PG51bWJlcj4+IHtcblx0XHRyZXR1cm4gc3VwZXIub25XaWR0aEZvckVhY2hDb2x1bW4odGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbldpZHRoKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uV2lkdGgodGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbkNvbnRhaW5lcldpZHRoKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIub25Db250YWluZXJXaWR0aCh0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uUmVzaXplV2lkdGgoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uUmVzaXplV2lkdGgodGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG59XG4iXX0=