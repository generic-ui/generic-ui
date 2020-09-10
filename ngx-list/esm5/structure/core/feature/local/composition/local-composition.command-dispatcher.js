/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { CompositionCommandInvoker } from '../../../../../composition/domain-api/composition.command-invoker';
import { CompositionId } from '../../../../../composition/domain/composition.id';
import { CompositionDispatcher } from '../../../../../composition/domain/composition.dispatcher';
import { compositionGlobalId } from '../../../../../composition/domain-api/composition.global-id';
import { ColumnDefinitionId } from '../../../../../composition/domain-api/read/definition/column-definition-id';
var LocalCompositionCommandDispatcher = /** @class */ (function (_super) {
    tslib_1.__extends(LocalCompositionCommandDispatcher, _super);
    function LocalCompositionCommandDispatcher(compositionId, compositionDispatcher) {
        var _this = _super.call(this, compositionDispatcher) || this;
        _this.compositionId = compositionId;
        return _this;
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    LocalCompositionCommandDispatcher.prototype.createComposition = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = compositionGlobalId; }
        _super.prototype.createComposition.call(this, this.compositionId);
    };
    /**
     * @param {?} params
     * @return {?}
     */
    LocalCompositionCommandDispatcher.prototype.setColumns = /**
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
    LocalCompositionCommandDispatcher.prototype.setWidth = /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    function (width, compositionId) {
        if (compositionId === void 0) { compositionId = compositionGlobalId; }
        _super.prototype.setWidth.call(this, width, this.compositionId);
    };
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    LocalCompositionCommandDispatcher.prototype.setContainerWidth = /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    function (width, compositionId) {
        if (compositionId === void 0) { compositionId = compositionGlobalId; }
        _super.prototype.setContainerWidth.call(this, width, this.compositionId);
    };
    /**
     * @param {?} enabled
     * @param {?=} compositionId
     * @return {?}
     */
    LocalCompositionCommandDispatcher.prototype.setResizeWidth = /**
     * @param {?} enabled
     * @param {?=} compositionId
     * @return {?}
     */
    function (enabled, compositionId) {
        if (compositionId === void 0) { compositionId = compositionGlobalId; }
        _super.prototype.setResizeWidth.call(this, enabled, this.compositionId);
    };
    /**
     * @param {?} columnDefId
     * @param {?=} compositionId
     * @return {?}
     */
    LocalCompositionCommandDispatcher.prototype.enableColumn = /**
     * @param {?} columnDefId
     * @param {?=} compositionId
     * @return {?}
     */
    function (columnDefId, compositionId) {
        if (compositionId === void 0) { compositionId = compositionGlobalId; }
        _super.prototype.enableColumn.call(this, columnDefId, this.compositionId);
    };
    /**
     * @param {?} columnDefId
     * @param {?=} compositionId
     * @return {?}
     */
    LocalCompositionCommandDispatcher.prototype.disableColumn = /**
     * @param {?} columnDefId
     * @param {?=} compositionId
     * @return {?}
     */
    function (columnDefId, compositionId) {
        if (compositionId === void 0) { compositionId = compositionGlobalId; }
        _super.prototype.disableColumn.call(this, columnDefId, this.compositionId);
    };
    /**
     * @param {?} columnDefId
     * @param {?=} compositionId
     * @return {?}
     */
    LocalCompositionCommandDispatcher.prototype.moveLeft = /**
     * @param {?} columnDefId
     * @param {?=} compositionId
     * @return {?}
     */
    function (columnDefId, compositionId) {
        if (compositionId === void 0) { compositionId = compositionGlobalId; }
        _super.prototype.moveLeft.call(this, columnDefId, this.compositionId);
    };
    /**
     * @param {?} columnDefId
     * @param {?=} compositionId
     * @return {?}
     */
    LocalCompositionCommandDispatcher.prototype.moveRight = /**
     * @param {?} columnDefId
     * @param {?=} compositionId
     * @return {?}
     */
    function (columnDefId, compositionId) {
        if (compositionId === void 0) { compositionId = compositionGlobalId; }
        _super.prototype.moveRight.call(this, columnDefId, this.compositionId);
    };
    LocalCompositionCommandDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalCompositionCommandDispatcher.ctorParameters = function () { return [
        { type: CompositionId },
        { type: CompositionDispatcher }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [CompositionId]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalCompositionCommandDispatcher.prototype, "createComposition", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Array]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalCompositionCommandDispatcher.prototype, "setColumns", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number, CompositionId]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalCompositionCommandDispatcher.prototype, "setWidth", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number, CompositionId]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalCompositionCommandDispatcher.prototype, "setContainerWidth", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Boolean, CompositionId]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalCompositionCommandDispatcher.prototype, "setResizeWidth", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [ColumnDefinitionId, CompositionId]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalCompositionCommandDispatcher.prototype, "enableColumn", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [ColumnDefinitionId, CompositionId]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalCompositionCommandDispatcher.prototype, "disableColumn", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [ColumnDefinitionId, CompositionId]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalCompositionCommandDispatcher.prototype, "moveLeft", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [ColumnDefinitionId, CompositionId]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalCompositionCommandDispatcher.prototype, "moveRight", null);
    return LocalCompositionCommandDispatcher;
}(CompositionCommandInvoker));
export { LocalCompositionCommandDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalCompositionCommandDispatcher.prototype.compositionId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtY29tcG9zaXRpb24uY29tbWFuZC1kaXNwYXRjaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9mZWF0dXJlL2xvY2FsL2NvbXBvc2l0aW9uL2xvY2FsLWNvbXBvc2l0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNqRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUVsRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUdoSDtJQUN1RCw2REFBeUI7SUFFL0UsMkNBQTZCLGFBQTRCLEVBQ3RELHFCQUE0QztRQUQvQyxZQUVDLGtCQUFNLHFCQUFxQixDQUFDLFNBQzVCO1FBSDRCLG1CQUFhLEdBQWIsYUFBYSxDQUFlOztJQUd6RCxDQUFDOzs7OztJQUdELDZEQUFpQjs7OztJQUFqQixVQUFrQixhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUNuRSxpQkFBTSxpQkFBaUIsWUFBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFHRCxzREFBVTs7OztJQUFWLFVBQVcsTUFBMkI7UUFDckMsaUJBQU0sVUFBVSxZQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7O0lBR0Qsb0RBQVE7Ozs7O0lBQVIsVUFBUyxLQUFhLEVBQUUsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDekUsaUJBQU0sUUFBUSxZQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7O0lBR0QsNkRBQWlCOzs7OztJQUFqQixVQUFrQixLQUFhLEVBQUUsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDbEYsaUJBQU0saUJBQWlCLFlBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7Ozs7SUFHRCwwREFBYzs7Ozs7SUFBZCxVQUFlLE9BQWdCLEVBQUUsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDbEYsaUJBQU0sY0FBYyxZQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7O0lBR0Qsd0RBQVk7Ozs7O0lBQVosVUFBYSxXQUErQixFQUFFLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQy9GLGlCQUFNLFlBQVksWUFBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7OztJQUdELHlEQUFhOzs7OztJQUFiLFVBQWMsV0FBK0IsRUFBRSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUNoRyxpQkFBTSxhQUFhLFlBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7Ozs7SUFHRCxvREFBUTs7Ozs7SUFBUixVQUFTLFdBQStCLEVBQUUsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDM0YsaUJBQU0sUUFBUSxZQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7O0lBR0QscURBQVM7Ozs7O0lBQVQsVUFBVSxXQUErQixFQUFFLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQzVGLGlCQUFNLFNBQVMsWUFBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7O2dCQW5ERCxVQUFVOzs7O2dCQVBGLGFBQWE7Z0JBQ2IscUJBQXFCOztJQWU3QjtRQURDLFFBQVE7O2lEQUN3QixhQUFhOzs4RUFFN0M7SUFHRDtRQURDLFFBQVE7O2lEQUNVLEtBQUs7O3VFQUV2QjtJQUdEO1FBREMsUUFBUTs7eURBQzhCLGFBQWE7O3FFQUVuRDtJQUdEO1FBREMsUUFBUTs7eURBQ3VDLGFBQWE7OzhFQUU1RDtJQUdEO1FBREMsUUFBUTs7MERBQ3VDLGFBQWE7OzJFQUU1RDtJQUdEO1FBREMsUUFBUTs7aURBQ2lCLGtCQUFrQixFQUFpQixhQUFhOzt5RUFFekU7SUFHRDtRQURDLFFBQVE7O2lEQUNrQixrQkFBa0IsRUFBaUIsYUFBYTs7MEVBRTFFO0lBR0Q7UUFEQyxRQUFROztpREFDYSxrQkFBa0IsRUFBaUIsYUFBYTs7cUVBRXJFO0lBR0Q7UUFEQyxRQUFROztpREFDYyxrQkFBa0IsRUFBaUIsYUFBYTs7c0VBRXRFO0lBRUYsd0NBQUM7Q0FBQSxBQXJERCxDQUN1RCx5QkFBeUIsR0FvRC9FO1NBcERZLGlDQUFpQzs7Ozs7O0lBRWpDLDBEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluLWFwaS9jb21wb3NpdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkRpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29tcG9zaXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBjb21wb3NpdGlvbkdsb2JhbElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluLWFwaS9jb21wb3NpdGlvbi5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgQ29sdW1uUGFyYW1zIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9zZXQtY29sdW1ucy9jb2x1bW4ucGFyYW1zJztcbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uLWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyIGV4dGVuZHMgQ29tcG9zaXRpb25Db21tYW5kSW52b2tlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRjb21wb3NpdGlvbkRpc3BhdGNoZXI6IENvbXBvc2l0aW9uRGlzcGF0Y2hlcikge1xuXHRcdHN1cGVyKGNvbXBvc2l0aW9uRGlzcGF0Y2hlcik7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0Y3JlYXRlQ29tcG9zaXRpb24oY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5jcmVhdGVDb21wb3NpdGlvbih0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldENvbHVtbnMocGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+KTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0Q29sdW1ucyhwYXJhbXMsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0V2lkdGgod2lkdGg6IG51bWJlciwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRXaWR0aCh3aWR0aCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRDb250YWluZXJXaWR0aCh3aWR0aDogbnVtYmVyLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLnNldENvbnRhaW5lcldpZHRoKHdpZHRoLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFJlc2l6ZVdpZHRoKGVuYWJsZWQ6IGJvb2xlYW4sIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0UmVzaXplV2lkdGgoZW5hYmxlZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRlbmFibGVDb2x1bW4oY29sdW1uRGVmSWQ6IENvbHVtbkRlZmluaXRpb25JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5lbmFibGVDb2x1bW4oY29sdW1uRGVmSWQsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0ZGlzYWJsZUNvbHVtbihjb2x1bW5EZWZJZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLmRpc2FibGVDb2x1bW4oY29sdW1uRGVmSWQsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0bW92ZUxlZnQoY29sdW1uRGVmSWQ6IENvbHVtbkRlZmluaXRpb25JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5tb3ZlTGVmdChjb2x1bW5EZWZJZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRtb3ZlUmlnaHQoY29sdW1uRGVmSWQ6IENvbHVtbkRlZmluaXRpb25JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5tb3ZlUmlnaHQoY29sdW1uRGVmSWQsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxufVxuIl19