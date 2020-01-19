/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { CompositionCommandService } from '../../../ui-api/composition/composition.command-service';
import { CompositionId } from '../../../domain/composition/composition-id';
import { CompositionDispatcher } from '../../../domain/composition/command/composition.dispatcher';
import { globalCompositionId } from '../../../domain/composition/global-composition-id';
import { ColumnId } from '../../../domain/composition/command/column/column.id';
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalCompositionCommandService.prototype.compositionId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtY29tcG9zaXRpb24tY29tbWFuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2xvY2FsL2NvbXBvc2l0aW9uL2xvY2FsLWNvbXBvc2l0aW9uLWNvbW1hbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMzRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUV4RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFJaEYsTUFBTSxPQUFPLDhCQUErQixTQUFRLHlCQUF5Qjs7Ozs7SUFFNUUsWUFBNkIsYUFBNEIsRUFDdEQscUJBQTRDO1FBQzlDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRkQsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFHekQsQ0FBQzs7Ozs7SUFHRCxJQUFJLENBQUMsZ0JBQStCLG1CQUFtQjtRQUN0RCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUdELFVBQVUsQ0FBQyxNQUEyQjtRQUNyQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7O0lBR0QsUUFBUSxDQUFDLEtBQWEsRUFBRSxnQkFBK0IsbUJBQW1CO1FBQ3pFLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFHRCxpQkFBaUIsQ0FBQyxLQUFhLEVBQUUsZ0JBQStCLG1CQUFtQjtRQUNsRixLQUFLLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7Ozs7SUFHRCxjQUFjLENBQUMsT0FBZ0IsRUFBRSxnQkFBK0IsbUJBQW1CO1FBQ2xGLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7SUFHRCxZQUFZLENBQUMsUUFBa0IsRUFBRSxnQkFBK0IsbUJBQW1CO1FBQ2xGLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7SUFHRCxhQUFhLENBQUMsUUFBa0IsRUFBRSxnQkFBK0IsbUJBQW1CO1FBQ25GLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7WUF6Q0QsVUFBVTs7OztZQVBGLGFBQWE7WUFDYixxQkFBcUI7O0FBZTdCO0lBREMsUUFBUTs7NkNBQ1csYUFBYTs7MERBRWhDO0FBR0Q7SUFEQyxRQUFROzs2Q0FDVSxLQUFLOztnRUFFdkI7QUFHRDtJQURDLFFBQVE7O3FEQUM4QixhQUFhOzs4REFFbkQ7QUFHRDtJQURDLFFBQVE7O3FEQUN1QyxhQUFhOzt1RUFFNUQ7QUFHRDtJQURDLFFBQVE7O3NEQUN1QyxhQUFhOztvRUFFNUQ7QUFHRDtJQURDLFFBQVE7OzZDQUNjLFFBQVEsRUFBaUIsYUFBYTs7a0VBRTVEO0FBR0Q7SUFEQyxRQUFROzs2Q0FDZSxRQUFRLEVBQWlCLGFBQWE7O21FQUU3RDs7Ozs7O0lBdENXLHVEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL2NvbXBvc2l0aW9uL2NvbXBvc2l0aW9uLmNvbW1hbmQtc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbXBvc2l0aW9uLWlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbXBvc2l0aW9uLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgZ2xvYmFsQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9nbG9iYWwtY29tcG9zaXRpb24taWQnO1xuaW1wb3J0IHsgQ29sdW1uUGFyYW1zIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvY29sdW1uL3NldC1jb2x1bW5zL2NvbHVtbi5wYXJhbXMnO1xuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC9jb2x1bW4vY29sdW1uLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxDb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlIGV4dGVuZHMgQ29tcG9zaXRpb25Db21tYW5kU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRjb21wb3NpdGlvbkRpc3BhdGNoZXI6IENvbXBvc2l0aW9uRGlzcGF0Y2hlcikge1xuXHRcdHN1cGVyKGNvbXBvc2l0aW9uRGlzcGF0Y2hlcik7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0aW5pdChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gZ2xvYmFsQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHN1cGVyLmluaXQodGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRDb2x1bW5zKHBhcmFtczogQXJyYXk8Q29sdW1uUGFyYW1zPik6IHZvaWQge1xuXHRcdHN1cGVyLnNldENvbHVtbnMocGFyYW1zLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFdpZHRoKHdpZHRoOiBudW1iZXIsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0V2lkdGgod2lkdGgsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0Q29udGFpbmVyV2lkdGgod2lkdGg6IG51bWJlciwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRDb250YWluZXJXaWR0aCh3aWR0aCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRSZXNpemVXaWR0aChlbmFibGVkOiBib29sZWFuLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gZ2xvYmFsQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHN1cGVyLnNldFJlc2l6ZVdpZHRoKGVuYWJsZWQsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0ZW5hYmxlQ29sdW1uKGNvbHVtbklkOiBDb2x1bW5JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHRzdXBlci5lbmFibGVDb2x1bW4oY29sdW1uSWQsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0ZGlzYWJsZUNvbHVtbihjb2x1bW5JZDogQ29sdW1uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0c3VwZXIuZGlzYWJsZUNvbHVtbihjb2x1bW5JZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG59XG4iXX0=