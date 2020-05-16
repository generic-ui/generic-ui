/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { CompositionCommandDispatcher } from '../../../../composition/domain-api/composition.command-dispatcher';
import { CompositionId } from '../../../../composition/domain/composition.id';
import { CompositionDispatcher } from '../../../../composition/domain/composition.dispatcher';
import { compositionGlobalId } from '../../../../composition/domain-api/composition.global-id';
import { ColumnDefinitionId } from '../../../../composition/domain-api/read/definition/column-definition-id';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtY29tcG9zaXRpb24uY29tbWFuZC1kaXNwYXRjaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2ZlYXR1cmUvbG9jYWwvY29tcG9zaXRpb24vbG9jYWwtY29tcG9zaXRpb24uY29tbWFuZC1kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDakgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBRS9GLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBRzdHO0lBQ3VELDZEQUE0QjtJQUVsRiwyQ0FBNkIsYUFBNEIsRUFDdEQscUJBQTRDO1FBRC9DLFlBRUMsa0JBQU0scUJBQXFCLENBQUMsU0FDNUI7UUFINEIsbUJBQWEsR0FBYixhQUFhLENBQWU7O0lBR3pELENBQUM7Ozs7O0lBR0QsNkRBQWlCOzs7O0lBQWpCLFVBQWtCLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQ25FLGlCQUFNLGlCQUFpQixZQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7OztJQUdELHNEQUFVOzs7O0lBQVYsVUFBVyxNQUEyQjtRQUNyQyxpQkFBTSxVQUFVLFlBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFHRCxvREFBUTs7Ozs7SUFBUixVQUFTLEtBQWEsRUFBRSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUN6RSxpQkFBTSxRQUFRLFlBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFHRCw2REFBaUI7Ozs7O0lBQWpCLFVBQWtCLEtBQWEsRUFBRSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUNsRixpQkFBTSxpQkFBaUIsWUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7OztJQUdELDBEQUFjOzs7OztJQUFkLFVBQWUsT0FBZ0IsRUFBRSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUNsRixpQkFBTSxjQUFjLFlBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7SUFHRCx3REFBWTs7Ozs7SUFBWixVQUFhLFdBQStCLEVBQUUsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDL0YsaUJBQU0sWUFBWSxZQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7O0lBR0QseURBQWE7Ozs7O0lBQWIsVUFBYyxXQUErQixFQUFFLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQ2hHLGlCQUFNLGFBQWEsWUFBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7OztJQUdELG9EQUFROzs7OztJQUFSLFVBQVMsV0FBK0IsRUFBRSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUMzRixpQkFBTSxRQUFRLFlBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7Ozs7SUFHRCxxREFBUzs7Ozs7SUFBVCxVQUFVLFdBQStCLEVBQUUsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDNUYsaUJBQU0sU0FBUyxZQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Z0JBbkRELFVBQVU7Ozs7Z0JBUEYsYUFBYTtnQkFDYixxQkFBcUI7O0lBZTdCO1FBREMsUUFBUTs7aURBQ3dCLGFBQWE7OzhFQUU3QztJQUdEO1FBREMsUUFBUTs7aURBQ1UsS0FBSzs7dUVBRXZCO0lBR0Q7UUFEQyxRQUFROzt5REFDOEIsYUFBYTs7cUVBRW5EO0lBR0Q7UUFEQyxRQUFROzt5REFDdUMsYUFBYTs7OEVBRTVEO0lBR0Q7UUFEQyxRQUFROzswREFDdUMsYUFBYTs7MkVBRTVEO0lBR0Q7UUFEQyxRQUFROztpREFDaUIsa0JBQWtCLEVBQWlCLGFBQWE7O3lFQUV6RTtJQUdEO1FBREMsUUFBUTs7aURBQ2tCLGtCQUFrQixFQUFpQixhQUFhOzswRUFFMUU7SUFHRDtRQURDLFFBQVE7O2lEQUNhLGtCQUFrQixFQUFpQixhQUFhOztxRUFFckU7SUFHRDtRQURDLFFBQVE7O2lEQUNjLGtCQUFrQixFQUFpQixhQUFhOztzRUFFdEU7SUFFRix3Q0FBQztDQUFBLEFBckRELENBQ3VELDRCQUE0QixHQW9EbEY7U0FwRFksaUNBQWlDOzs7Ozs7SUFFakMsMERBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4tYXBpL2NvbXBvc2l0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi5kaXNwYXRjaGVyJztcbmltcG9ydCB7IGNvbXBvc2l0aW9uR2xvYmFsSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4tYXBpL2NvbXBvc2l0aW9uLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3NldC1jb2x1bW5zL2NvbHVtbi5wYXJhbXMnO1xuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24taWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbENvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIgZXh0ZW5kcyBDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdGNvbXBvc2l0aW9uRGlzcGF0Y2hlcjogQ29tcG9zaXRpb25EaXNwYXRjaGVyKSB7XG5cdFx0c3VwZXIoY29tcG9zaXRpb25EaXNwYXRjaGVyKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRjcmVhdGVDb21wb3NpdGlvbihjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLmNyZWF0ZUNvbXBvc2l0aW9uKHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0Q29sdW1ucyhwYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz4pOiB2b2lkIHtcblx0XHRzdXBlci5zZXRDb2x1bW5zKHBhcmFtcywgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRXaWR0aCh3aWR0aDogbnVtYmVyLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLnNldFdpZHRoKHdpZHRoLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldENvbnRhaW5lcldpZHRoKHdpZHRoOiBudW1iZXIsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0Q29udGFpbmVyV2lkdGgod2lkdGgsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0UmVzaXplV2lkdGgoZW5hYmxlZDogYm9vbGVhbiwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRSZXNpemVXaWR0aChlbmFibGVkLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGVuYWJsZUNvbHVtbihjb2x1bW5EZWZJZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLmVuYWJsZUNvbHVtbihjb2x1bW5EZWZJZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRkaXNhYmxlQ29sdW1uKGNvbHVtbkRlZklkOiBDb2x1bW5EZWZpbml0aW9uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0c3VwZXIuZGlzYWJsZUNvbHVtbihjb2x1bW5EZWZJZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRtb3ZlTGVmdChjb2x1bW5EZWZJZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLm1vdmVMZWZ0KGNvbHVtbkRlZklkLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG1vdmVSaWdodChjb2x1bW5EZWZJZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLm1vdmVSaWdodChjb2x1bW5EZWZJZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG59XG4iXX0=