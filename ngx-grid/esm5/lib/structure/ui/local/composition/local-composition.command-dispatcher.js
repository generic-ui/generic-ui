/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { CompositionCommandDispatcher } from '../../../../composition/ui-api/composition.command-dispatcher';
import { CompositionId } from '../../../../composition/domain/composition.id';
import { CompositionDispatcher } from '../../../../composition/domain/composition.dispatcher';
import { compositionGlobalId } from '../../../../composition/ui-api/composition.global-id';
import { ColumnDefinitionId } from '../../../../composition/read/definition/column-definition-id';
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
}(CompositionCommandDispatcher));
export { LocalCompositionCommandDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalCompositionCommandDispatcher.prototype.compositionId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtY29tcG9zaXRpb24uY29tbWFuZC1kaXNwYXRjaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2xvY2FsL2NvbXBvc2l0aW9uL2xvY2FsLWNvbXBvc2l0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQzdHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUUzRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUdsRztJQUN1RCw2REFBNEI7SUFFbEYsMkNBQTZCLGFBQTRCLEVBQ3RELHFCQUE0QztRQUQvQyxZQUVDLGtCQUFNLHFCQUFxQixDQUFDLFNBQzVCO1FBSDRCLG1CQUFhLEdBQWIsYUFBYSxDQUFlOztJQUd6RCxDQUFDOzs7OztJQUdELDZEQUFpQjs7OztJQUFqQixVQUFrQixhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUNuRSxpQkFBTSxpQkFBaUIsWUFBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFHRCxzREFBVTs7OztJQUFWLFVBQVcsTUFBMkI7UUFDckMsaUJBQU0sVUFBVSxZQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7O0lBR0Qsb0RBQVE7Ozs7O0lBQVIsVUFBUyxLQUFhLEVBQUUsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDekUsaUJBQU0sUUFBUSxZQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7O0lBR0QsNkRBQWlCOzs7OztJQUFqQixVQUFrQixLQUFhLEVBQUUsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDbEYsaUJBQU0saUJBQWlCLFlBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7Ozs7SUFHRCwwREFBYzs7Ozs7SUFBZCxVQUFlLE9BQWdCLEVBQUUsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDbEYsaUJBQU0sY0FBYyxZQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7O0lBR0Qsd0RBQVk7Ozs7O0lBQVosVUFBYSxXQUErQixFQUFFLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQy9GLGlCQUFNLFlBQVksWUFBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7OztJQUdELHlEQUFhOzs7OztJQUFiLFVBQWMsV0FBK0IsRUFBRSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUNoRyxpQkFBTSxhQUFhLFlBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7Ozs7SUFHRCxvREFBUTs7Ozs7SUFBUixVQUFTLFdBQStCLEVBQUUsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDM0YsaUJBQU0sUUFBUSxZQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7O0lBR0QscURBQVM7Ozs7O0lBQVQsVUFBVSxXQUErQixFQUFFLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQzVGLGlCQUFNLFNBQVMsWUFBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7O2dCQW5ERCxVQUFVOzs7O2dCQVBGLGFBQWE7Z0JBQ2IscUJBQXFCOztJQWU3QjtRQURDLFFBQVE7O2lEQUN3QixhQUFhOzs4RUFFN0M7SUFHRDtRQURDLFFBQVE7O2lEQUNVLEtBQUs7O3VFQUV2QjtJQUdEO1FBREMsUUFBUTs7eURBQzhCLGFBQWE7O3FFQUVuRDtJQUdEO1FBREMsUUFBUTs7eURBQ3VDLGFBQWE7OzhFQUU1RDtJQUdEO1FBREMsUUFBUTs7MERBQ3VDLGFBQWE7OzJFQUU1RDtJQUdEO1FBREMsUUFBUTs7aURBQ2lCLGtCQUFrQixFQUFpQixhQUFhOzt5RUFFekU7SUFHRDtRQURDLFFBQVE7O2lEQUNrQixrQkFBa0IsRUFBaUIsYUFBYTs7MEVBRTFFO0lBR0Q7UUFEQyxRQUFROztpREFDYSxrQkFBa0IsRUFBaUIsYUFBYTs7cUVBRXJFO0lBR0Q7UUFEQyxRQUFROztpREFDYyxrQkFBa0IsRUFBaUIsYUFBYTs7c0VBRXRFO0lBRUYsd0NBQUM7Q0FBQSxBQXJERCxDQUN1RCw0QkFBNEIsR0FvRGxGO1NBcERZLGlDQUFpQzs7Ozs7O0lBRWpDLDBEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vdWktYXBpL2NvbXBvc2l0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi5kaXNwYXRjaGVyJztcbmltcG9ydCB7IGNvbXBvc2l0aW9uR2xvYmFsSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi91aS1hcGkvY29tcG9zaXRpb24uZ2xvYmFsLWlkJztcbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vc2V0LWNvbHVtbnMvY29sdW1uLnBhcmFtcyc7XG5pbXBvcnQgeyBDb2x1bW5EZWZpbml0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9yZWFkL2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24taWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbENvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIgZXh0ZW5kcyBDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdGNvbXBvc2l0aW9uRGlzcGF0Y2hlcjogQ29tcG9zaXRpb25EaXNwYXRjaGVyKSB7XG5cdFx0c3VwZXIoY29tcG9zaXRpb25EaXNwYXRjaGVyKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRjcmVhdGVDb21wb3NpdGlvbihjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLmNyZWF0ZUNvbXBvc2l0aW9uKHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0Q29sdW1ucyhwYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz4pOiB2b2lkIHtcblx0XHRzdXBlci5zZXRDb2x1bW5zKHBhcmFtcywgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRXaWR0aCh3aWR0aDogbnVtYmVyLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLnNldFdpZHRoKHdpZHRoLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldENvbnRhaW5lcldpZHRoKHdpZHRoOiBudW1iZXIsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0Q29udGFpbmVyV2lkdGgod2lkdGgsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0UmVzaXplV2lkdGgoZW5hYmxlZDogYm9vbGVhbiwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRSZXNpemVXaWR0aChlbmFibGVkLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGVuYWJsZUNvbHVtbihjb2x1bW5EZWZJZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLmVuYWJsZUNvbHVtbihjb2x1bW5EZWZJZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRkaXNhYmxlQ29sdW1uKGNvbHVtbkRlZklkOiBDb2x1bW5EZWZpbml0aW9uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0c3VwZXIuZGlzYWJsZUNvbHVtbihjb2x1bW5EZWZJZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRtb3ZlTGVmdChjb2x1bW5EZWZJZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLm1vdmVMZWZ0KGNvbHVtbkRlZklkLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG1vdmVSaWdodChjb2x1bW5EZWZJZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLm1vdmVSaWdodChjb2x1bW5EZWZJZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG59XG4iXX0=