/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { CompositionCommandService } from '../../../../composition/ui-api/composition.command-service';
import { CompositionId } from '../../../../composition/domain/composition-id';
import { CompositionDispatcher } from '../../../../composition/domain/command/composition.dispatcher';
import { globalCompositionId } from '../../../../composition/domain/global-composition-id';
import { ColumnId } from '../../../../composition/domain/command/column/column.id';
export class LocalCompositionCommandService extends CompositionCommandService {
    /**
     * @param {?} compositionId
     * @param {?} compositionDispatcher
     */
    constructor(compositionId, compositionDispatcher) {
        super(compositionDispatcher);
        this.compositionId = compositionId;
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    init(compositionId = globalCompositionId) {
        super.init(this.compositionId);
    }
    /**
     * @param {?} params
     * @return {?}
     */
    setColumns(params) {
        super.setColumns(params, this.compositionId);
    }
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    setWidth(width, compositionId = globalCompositionId) {
        super.setWidth(width, this.compositionId);
    }
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    setContainerWidth(width, compositionId = globalCompositionId) {
        super.setContainerWidth(width, this.compositionId);
    }
    /**
     * @param {?} enabled
     * @param {?=} compositionId
     * @return {?}
     */
    setResizeWidth(enabled, compositionId = globalCompositionId) {
        super.setResizeWidth(enabled, this.compositionId);
    }
    /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    enableColumn(columnId, compositionId = globalCompositionId) {
        super.enableColumn(columnId, this.compositionId);
    }
    /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    disableColumn(columnId, compositionId = globalCompositionId) {
        super.disableColumn(columnId, this.compositionId);
    }
    /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    moveLeft(columnId, compositionId = globalCompositionId) {
        super.moveLeft(columnId, this.compositionId);
    }
    /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    moveRight(columnId, compositionId = globalCompositionId) {
        super.moveRight(columnId, this.compositionId);
    }
}
LocalCompositionCommandService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalCompositionCommandService.ctorParameters = () => [
    { type: CompositionId },
    { type: CompositionDispatcher }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CompositionId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalCompositionCommandService.prototype, "init", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Array]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalCompositionCommandService.prototype, "setColumns", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, CompositionId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalCompositionCommandService.prototype, "setWidth", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, CompositionId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalCompositionCommandService.prototype, "setContainerWidth", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Boolean, CompositionId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalCompositionCommandService.prototype, "setResizeWidth", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ColumnId, CompositionId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalCompositionCommandService.prototype, "enableColumn", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ColumnId, CompositionId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalCompositionCommandService.prototype, "disableColumn", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ColumnId, CompositionId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalCompositionCommandService.prototype, "moveLeft", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ColumnId, CompositionId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalCompositionCommandService.prototype, "moveRight", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalCompositionCommandService.prototype.compositionId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtY29tcG9zaXRpb24tY29tbWFuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2xvY2FsL2NvbXBvc2l0aW9uL2xvY2FsLWNvbXBvc2l0aW9uLWNvbW1hbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN0RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUUzRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seURBQXlELENBQUM7QUFJbkYsTUFBTSxPQUFPLDhCQUErQixTQUFRLHlCQUF5Qjs7Ozs7SUFFNUUsWUFBNkIsYUFBNEIsRUFDdEQscUJBQTRDO1FBQzlDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRkQsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFHekQsQ0FBQzs7Ozs7SUFHRCxJQUFJLENBQUMsZ0JBQStCLG1CQUFtQjtRQUN0RCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUdELFVBQVUsQ0FBQyxNQUEyQjtRQUNyQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7O0lBR0QsUUFBUSxDQUFDLEtBQWEsRUFBRSxnQkFBK0IsbUJBQW1CO1FBQ3pFLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFHRCxpQkFBaUIsQ0FBQyxLQUFhLEVBQUUsZ0JBQStCLG1CQUFtQjtRQUNsRixLQUFLLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7Ozs7SUFHRCxjQUFjLENBQUMsT0FBZ0IsRUFBRSxnQkFBK0IsbUJBQW1CO1FBQ2xGLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7SUFHRCxZQUFZLENBQUMsUUFBa0IsRUFBRSxnQkFBK0IsbUJBQW1CO1FBQ2xGLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7SUFHRCxhQUFhLENBQUMsUUFBa0IsRUFBRSxnQkFBK0IsbUJBQW1CO1FBQ25GLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7SUFHRCxRQUFRLENBQUMsUUFBa0IsRUFBRSxnQkFBK0IsbUJBQW1CO1FBQzlFLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFHRCxTQUFTLENBQUMsUUFBa0IsRUFBRSxnQkFBK0IsbUJBQW1CO1FBQy9FLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7WUFuREQsVUFBVTs7OztZQVBGLGFBQWE7WUFDYixxQkFBcUI7O0FBZTdCO0lBREMsUUFBUTs7NkNBQ1csYUFBYTs7MERBRWhDO0FBR0Q7SUFEQyxRQUFROzs2Q0FDVSxLQUFLOztnRUFFdkI7QUFHRDtJQURDLFFBQVE7O3FEQUM4QixhQUFhOzs4REFFbkQ7QUFHRDtJQURDLFFBQVE7O3FEQUN1QyxhQUFhOzt1RUFFNUQ7QUFHRDtJQURDLFFBQVE7O3NEQUN1QyxhQUFhOztvRUFFNUQ7QUFHRDtJQURDLFFBQVE7OzZDQUNjLFFBQVEsRUFBaUIsYUFBYTs7a0VBRTVEO0FBR0Q7SUFEQyxRQUFROzs2Q0FDZSxRQUFRLEVBQWlCLGFBQWE7O21FQUU3RDtBQUdEO0lBREMsUUFBUTs7NkNBQ1UsUUFBUSxFQUFpQixhQUFhOzs4REFFeEQ7QUFHRDtJQURDLFFBQVE7OzZDQUNXLFFBQVEsRUFBaUIsYUFBYTs7K0RBRXpEOzs7Ozs7SUFoRFcsdURBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi91aS1hcGkvY29tcG9zaXRpb24uY29tbWFuZC1zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29tcG9zaXRpb24taWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbW1hbmQvY29tcG9zaXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBnbG9iYWxDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2dsb2JhbC1jb21wb3NpdGlvbi1pZCc7XG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC9jb2x1bW4vc2V0LWNvbHVtbnMvY29sdW1uLnBhcmFtcyc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9jb2x1bW4uaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbENvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2UgZXh0ZW5kcyBDb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdGNvbXBvc2l0aW9uRGlzcGF0Y2hlcjogQ29tcG9zaXRpb25EaXNwYXRjaGVyKSB7XG5cdFx0c3VwZXIoY29tcG9zaXRpb25EaXNwYXRjaGVyKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRpbml0KGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0c3VwZXIuaW5pdCh0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldENvbHVtbnMocGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+KTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0Q29sdW1ucyhwYXJhbXMsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0V2lkdGgod2lkdGg6IG51bWJlciwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRXaWR0aCh3aWR0aCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRDb250YWluZXJXaWR0aCh3aWR0aDogbnVtYmVyLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gZ2xvYmFsQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHN1cGVyLnNldENvbnRhaW5lcldpZHRoKHdpZHRoLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFJlc2l6ZVdpZHRoKGVuYWJsZWQ6IGJvb2xlYW4sIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0UmVzaXplV2lkdGgoZW5hYmxlZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRlbmFibGVDb2x1bW4oY29sdW1uSWQ6IENvbHVtbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gZ2xvYmFsQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHN1cGVyLmVuYWJsZUNvbHVtbihjb2x1bW5JZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRkaXNhYmxlQ29sdW1uKGNvbHVtbklkOiBDb2x1bW5JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHRzdXBlci5kaXNhYmxlQ29sdW1uKGNvbHVtbklkLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG1vdmVMZWZ0KGNvbHVtbklkOiBDb2x1bW5JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHRzdXBlci5tb3ZlTGVmdChjb2x1bW5JZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRtb3ZlUmlnaHQoY29sdW1uSWQ6IENvbHVtbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gZ2xvYmFsQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHN1cGVyLm1vdmVSaWdodChjb2x1bW5JZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG59XG4iXX0=