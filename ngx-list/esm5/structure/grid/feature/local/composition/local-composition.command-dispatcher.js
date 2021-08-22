/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { CompositionId } from '../../../../../composition/core/domain/composition.id';
import { CompositionDispatcher } from '../../../../../composition/core/domain/composition.dispatcher';
import { compositionGlobalId } from '../../../../../composition/core/api/composition.global-id';
import { ColumnDefinitionId } from '../../../../../composition/core/domain-read/definition/column-definition-id';
import { CompositionGroupRepository } from '../../../../../composition/core/domain-read/group/composition.group.repository';
import { CompositionDomainCommandInvoker } from '../../../../../composition/core/domain/compositon.domain-command-invoker';
var LocalCompositionCommandDispatcher = /** @class */ (function (_super) {
    tslib_1.__extends(LocalCompositionCommandDispatcher, _super);
    function LocalCompositionCommandDispatcher(compositionId, compositionDispatcher, compositionGroupRepository) {
        var _this = _super.call(this, compositionDispatcher, compositionGroupRepository) || this;
        _this.compositionId = compositionId;
        return _this;
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    LocalCompositionCommandDispatcher.prototype.create = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = compositionGlobalId; }
        _super.prototype.create.call(this, this.compositionId);
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
     * @param {?} configs
     * @param {?=} compositionId
     * @return {?}
     */
    LocalCompositionCommandDispatcher.prototype.setGroups = /**
     * @param {?} configs
     * @param {?=} compositionId
     * @return {?}
     */
    function (configs, compositionId) {
        if (compositionId === void 0) { compositionId = compositionGlobalId; }
        _super.prototype.setGroups.call(this, configs, this.compositionId);
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
        { type: CompositionDispatcher },
        { type: CompositionGroupRepository }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [CompositionId]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalCompositionCommandDispatcher.prototype, "create", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Array]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalCompositionCommandDispatcher.prototype, "setColumns", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, CompositionId]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalCompositionCommandDispatcher.prototype, "setGroups", null);
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
}(CompositionDomainCommandInvoker));
export { LocalCompositionCommandDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalCompositionCommandDispatcher.prototype.compositionId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtY29tcG9zaXRpb24uY29tbWFuZC1kaXNwYXRjaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2xvY2FsL2NvbXBvc2l0aW9uL2xvY2FsLWNvbXBvc2l0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUN0RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN0RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUVoRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnRkFBZ0YsQ0FBQztBQUM1SCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUczSDtJQUN1RCw2REFBK0I7SUFFckYsMkNBQTZCLGFBQTRCLEVBQ3RELHFCQUE0QyxFQUM1QywwQkFBc0Q7UUFGekQsWUFHQyxrQkFBTSxxQkFBcUIsRUFBRSwwQkFBMEIsQ0FBQyxTQUN4RDtRQUo0QixtQkFBYSxHQUFiLGFBQWEsQ0FBZTs7SUFJekQsQ0FBQzs7Ozs7SUFHRCxrREFBTTs7OztJQUFOLFVBQU8sYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDeEQsaUJBQU0sTUFBTSxZQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUdELHNEQUFVOzs7O0lBQVYsVUFBVyxNQUEyQjtRQUNyQyxpQkFBTSxVQUFVLFlBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFHRCxxREFBUzs7Ozs7SUFBVCxVQUFVLE9BQVksRUFBRSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUN6RSxpQkFBTSxTQUFTLFlBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFHRCxvREFBUTs7Ozs7SUFBUixVQUFTLEtBQWEsRUFBRSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUN6RSxpQkFBTSxRQUFRLFlBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFHRCw2REFBaUI7Ozs7O0lBQWpCLFVBQWtCLEtBQWEsRUFBRSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUNsRixpQkFBTSxpQkFBaUIsWUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7OztJQUdELDBEQUFjOzs7OztJQUFkLFVBQWUsT0FBZ0IsRUFBRSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUNsRixpQkFBTSxjQUFjLFlBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7SUFHRCx3REFBWTs7Ozs7SUFBWixVQUFhLFdBQStCLEVBQUUsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDL0YsaUJBQU0sWUFBWSxZQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7O0lBR0QseURBQWE7Ozs7O0lBQWIsVUFBYyxXQUErQixFQUFFLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQ2hHLGlCQUFNLGFBQWEsWUFBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7OztJQUdELG9EQUFROzs7OztJQUFSLFVBQVMsV0FBK0IsRUFBRSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUMzRixpQkFBTSxRQUFRLFlBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7Ozs7SUFHRCxxREFBUzs7Ozs7SUFBVCxVQUFVLFdBQStCLEVBQUUsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDNUYsaUJBQU0sU0FBUyxZQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Z0JBekRELFVBQVU7Ozs7Z0JBVEYsYUFBYTtnQkFDYixxQkFBcUI7Z0JBSXJCLDBCQUEwQjs7SUFjbEM7UUFEQyxRQUFROztpREFDYSxhQUFhOzttRUFFbEM7SUFHRDtRQURDLFFBQVE7O2lEQUNVLEtBQUs7O3VFQUV2QjtJQUdEO1FBREMsUUFBUTs7eURBQzhCLGFBQWE7O3NFQUVuRDtJQUdEO1FBREMsUUFBUTs7eURBQzhCLGFBQWE7O3FFQUVuRDtJQUdEO1FBREMsUUFBUTs7eURBQ3VDLGFBQWE7OzhFQUU1RDtJQUdEO1FBREMsUUFBUTs7MERBQ3VDLGFBQWE7OzJFQUU1RDtJQUdEO1FBREMsUUFBUTs7aURBQ2lCLGtCQUFrQixFQUFpQixhQUFhOzt5RUFFekU7SUFHRDtRQURDLFFBQVE7O2lEQUNrQixrQkFBa0IsRUFBaUIsYUFBYTs7MEVBRTFFO0lBR0Q7UUFEQyxRQUFROztpREFDYSxrQkFBa0IsRUFBaUIsYUFBYTs7cUVBRXJFO0lBR0Q7UUFEQyxRQUFROztpREFDYyxrQkFBa0IsRUFBaUIsYUFBYTs7c0VBRXRFO0lBRUYsd0NBQUM7Q0FBQSxBQTNERCxDQUN1RCwrQkFBK0IsR0EwRHJGO1NBMURZLGlDQUFpQzs7Ozs7O0lBRWpDLDBEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbXBvc2l0aW9uLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgY29tcG9zaXRpb25HbG9iYWxJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vc2V0LWNvbHVtbnMvY29sdW1uLnBhcmFtcyc7XG5pbXBvcnQgeyBDb2x1bW5EZWZpbml0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24taWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Hcm91cFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2dyb3VwL2NvbXBvc2l0aW9uLmdyb3VwLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Eb21haW5Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbXBvc2l0b24uZG9tYWluLWNvbW1hbmQtaW52b2tlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsQ29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlciBleHRlbmRzIENvbXBvc2l0aW9uRG9tYWluQ29tbWFuZEludm9rZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0Y29tcG9zaXRpb25EaXNwYXRjaGVyOiBDb21wb3NpdGlvbkRpc3BhdGNoZXIsXG5cdFx0XHRcdGNvbXBvc2l0aW9uR3JvdXBSZXBvc2l0b3J5OiBDb21wb3NpdGlvbkdyb3VwUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKGNvbXBvc2l0aW9uRGlzcGF0Y2hlciwgY29tcG9zaXRpb25Hcm91cFJlcG9zaXRvcnkpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGNyZWF0ZShjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLmNyZWF0ZSh0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldENvbHVtbnMocGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+KTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0Q29sdW1ucyhwYXJhbXMsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0R3JvdXBzKGNvbmZpZ3M6IGFueSwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRHcm91cHMoY29uZmlncywgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRXaWR0aCh3aWR0aDogbnVtYmVyLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLnNldFdpZHRoKHdpZHRoLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldENvbnRhaW5lcldpZHRoKHdpZHRoOiBudW1iZXIsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0Q29udGFpbmVyV2lkdGgod2lkdGgsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0UmVzaXplV2lkdGgoZW5hYmxlZDogYm9vbGVhbiwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRSZXNpemVXaWR0aChlbmFibGVkLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGVuYWJsZUNvbHVtbihjb2x1bW5EZWZJZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLmVuYWJsZUNvbHVtbihjb2x1bW5EZWZJZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRkaXNhYmxlQ29sdW1uKGNvbHVtbkRlZklkOiBDb2x1bW5EZWZpbml0aW9uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0c3VwZXIuZGlzYWJsZUNvbHVtbihjb2x1bW5EZWZJZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRtb3ZlTGVmdChjb2x1bW5EZWZJZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLm1vdmVMZWZ0KGNvbHVtbkRlZklkLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG1vdmVSaWdodChjb2x1bW5EZWZJZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLm1vdmVSaWdodChjb2x1bW5EZWZJZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG59XG4iXX0=