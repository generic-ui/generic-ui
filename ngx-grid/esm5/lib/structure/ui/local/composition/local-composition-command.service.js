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
var LocalCompositionCommandService = /** @class */ (function (_super) {
    tslib_1.__extends(LocalCompositionCommandService, _super);
    function LocalCompositionCommandService(compositionId, compositionDispatcher) {
        var _this = _super.call(this, compositionDispatcher) || this;
        _this.compositionId = compositionId;
        return _this;
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    LocalCompositionCommandService.prototype.createComposition = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        _super.prototype.createComposition.call(this, this.compositionId);
    };
    /**
     * @param {?} params
     * @return {?}
     */
    LocalCompositionCommandService.prototype.setColumns = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        _super.prototype.setColumns.call(this, params, this.compositionId);
    };
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    LocalCompositionCommandService.prototype.setWidth = /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    function (width, compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        _super.prototype.setWidth.call(this, width, this.compositionId);
    };
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    LocalCompositionCommandService.prototype.setContainerWidth = /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    function (width, compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        _super.prototype.setContainerWidth.call(this, width, this.compositionId);
    };
    /**
     * @param {?} enabled
     * @param {?=} compositionId
     * @return {?}
     */
    LocalCompositionCommandService.prototype.setResizeWidth = /**
     * @param {?} enabled
     * @param {?=} compositionId
     * @return {?}
     */
    function (enabled, compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        _super.prototype.setResizeWidth.call(this, enabled, this.compositionId);
    };
    /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    LocalCompositionCommandService.prototype.enableColumn = /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    function (columnId, compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        _super.prototype.enableColumn.call(this, columnId, this.compositionId);
    };
    /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    LocalCompositionCommandService.prototype.disableColumn = /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    function (columnId, compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        _super.prototype.disableColumn.call(this, columnId, this.compositionId);
    };
    /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    LocalCompositionCommandService.prototype.moveLeft = /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    function (columnId, compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        _super.prototype.moveLeft.call(this, columnId, this.compositionId);
    };
    /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    LocalCompositionCommandService.prototype.moveRight = /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    function (columnId, compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        _super.prototype.moveRight.call(this, columnId, this.compositionId);
    };
    LocalCompositionCommandService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalCompositionCommandService.ctorParameters = function () { return [
        { type: CompositionId },
        { type: CompositionDispatcher }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [CompositionId]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalCompositionCommandService.prototype, "createComposition", null);
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
    return LocalCompositionCommandService;
}(CompositionCommandService));
export { LocalCompositionCommandService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalCompositionCommandService.prototype.compositionId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtY29tcG9zaXRpb24tY29tbWFuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2xvY2FsL2NvbXBvc2l0aW9uL2xvY2FsLWNvbXBvc2l0aW9uLWNvbW1hbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN0RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUUzRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seURBQXlELENBQUM7QUFHbkY7SUFDb0QsMERBQXlCO0lBRTVFLHdDQUE2QixhQUE0QixFQUN0RCxxQkFBNEM7UUFEL0MsWUFFQyxrQkFBTSxxQkFBcUIsQ0FBQyxTQUM1QjtRQUg0QixtQkFBYSxHQUFiLGFBQWEsQ0FBZTs7SUFHekQsQ0FBQzs7Ozs7SUFHRCwwREFBaUI7Ozs7SUFBakIsVUFBa0IsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDbkUsaUJBQU0saUJBQWlCLFlBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBR0QsbURBQVU7Ozs7SUFBVixVQUFXLE1BQTJCO1FBQ3JDLGlCQUFNLFVBQVUsWUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7OztJQUdELGlEQUFROzs7OztJQUFSLFVBQVMsS0FBYSxFQUFFLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQ3pFLGlCQUFNLFFBQVEsWUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7OztJQUdELDBEQUFpQjs7Ozs7SUFBakIsVUFBa0IsS0FBYSxFQUFFLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQ2xGLGlCQUFNLGlCQUFpQixZQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7O0lBR0QsdURBQWM7Ozs7O0lBQWQsVUFBZSxPQUFnQixFQUFFLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQ2xGLGlCQUFNLGNBQWMsWUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7OztJQUdELHFEQUFZOzs7OztJQUFaLFVBQWEsUUFBa0IsRUFBRSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUNsRixpQkFBTSxZQUFZLFlBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7SUFHRCxzREFBYTs7Ozs7SUFBYixVQUFjLFFBQWtCLEVBQUUsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDbkYsaUJBQU0sYUFBYSxZQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7O0lBR0QsaURBQVE7Ozs7O0lBQVIsVUFBUyxRQUFrQixFQUFFLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQzlFLGlCQUFNLFFBQVEsWUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7OztJQUdELGtEQUFTOzs7OztJQUFULFVBQVUsUUFBa0IsRUFBRSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUMvRSxpQkFBTSxTQUFTLFlBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMvQyxDQUFDOztnQkFuREQsVUFBVTs7OztnQkFQRixhQUFhO2dCQUNiLHFCQUFxQjs7SUFlN0I7UUFEQyxRQUFROztpREFDd0IsYUFBYTs7MkVBRTdDO0lBR0Q7UUFEQyxRQUFROztpREFDVSxLQUFLOztvRUFFdkI7SUFHRDtRQURDLFFBQVE7O3lEQUM4QixhQUFhOztrRUFFbkQ7SUFHRDtRQURDLFFBQVE7O3lEQUN1QyxhQUFhOzsyRUFFNUQ7SUFHRDtRQURDLFFBQVE7OzBEQUN1QyxhQUFhOzt3RUFFNUQ7SUFHRDtRQURDLFFBQVE7O2lEQUNjLFFBQVEsRUFBaUIsYUFBYTs7c0VBRTVEO0lBR0Q7UUFEQyxRQUFROztpREFDZSxRQUFRLEVBQWlCLGFBQWE7O3VFQUU3RDtJQUdEO1FBREMsUUFBUTs7aURBQ1UsUUFBUSxFQUFpQixhQUFhOztrRUFFeEQ7SUFHRDtRQURDLFFBQVE7O2lEQUNXLFFBQVEsRUFBaUIsYUFBYTs7bUVBRXpEO0lBRUYscUNBQUM7Q0FBQSxBQXJERCxDQUNvRCx5QkFBeUIsR0FvRDVFO1NBcERZLDhCQUE4Qjs7Ozs7O0lBRTlCLHVEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vdWktYXBpL2NvbXBvc2l0aW9uLmNvbW1hbmQtc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbXBvc2l0aW9uLWlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21tYW5kL2NvbXBvc2l0aW9uLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgZ2xvYmFsQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9nbG9iYWwtY29tcG9zaXRpb24taWQnO1xuaW1wb3J0IHsgQ29sdW1uUGFyYW1zIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbW1hbmQvY29sdW1uL3NldC1jb2x1bW5zL2NvbHVtbi5wYXJhbXMnO1xuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC9jb2x1bW4vY29sdW1uLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxDb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlIGV4dGVuZHMgQ29tcG9zaXRpb25Db21tYW5kU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRjb21wb3NpdGlvbkRpc3BhdGNoZXI6IENvbXBvc2l0aW9uRGlzcGF0Y2hlcikge1xuXHRcdHN1cGVyKGNvbXBvc2l0aW9uRGlzcGF0Y2hlcik7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0Y3JlYXRlQ29tcG9zaXRpb24oY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHRzdXBlci5jcmVhdGVDb21wb3NpdGlvbih0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldENvbHVtbnMocGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+KTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0Q29sdW1ucyhwYXJhbXMsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0V2lkdGgod2lkdGg6IG51bWJlciwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRXaWR0aCh3aWR0aCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRDb250YWluZXJXaWR0aCh3aWR0aDogbnVtYmVyLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gZ2xvYmFsQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHN1cGVyLnNldENvbnRhaW5lcldpZHRoKHdpZHRoLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFJlc2l6ZVdpZHRoKGVuYWJsZWQ6IGJvb2xlYW4sIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0UmVzaXplV2lkdGgoZW5hYmxlZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRlbmFibGVDb2x1bW4oY29sdW1uSWQ6IENvbHVtbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gZ2xvYmFsQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHN1cGVyLmVuYWJsZUNvbHVtbihjb2x1bW5JZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRkaXNhYmxlQ29sdW1uKGNvbHVtbklkOiBDb2x1bW5JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHRzdXBlci5kaXNhYmxlQ29sdW1uKGNvbHVtbklkLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG1vdmVMZWZ0KGNvbHVtbklkOiBDb2x1bW5JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHRzdXBlci5tb3ZlTGVmdChjb2x1bW5JZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRtb3ZlUmlnaHQoY29sdW1uSWQ6IENvbHVtbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gZ2xvYmFsQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHN1cGVyLm1vdmVSaWdodChjb2x1bW5JZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG59XG4iXX0=