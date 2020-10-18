/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { CompositionCommandInvoker } from '../../../../../composition/core/api/composition.command-invoker';
import { CompositionId } from '../../../../../composition/core/api/composition.id';
import { CompositionDispatcher } from '../../../../../composition/core/domain/composition.dispatcher';
import { compositionGlobalId } from '../../../../../composition/core/api/composition.global-id';
import { ColumnDefinitionId } from '../../../../../composition/core/domain-read/definition/column-definition-id';
import { CompositionGroupRepository } from '../../../../../composition/core/domain-read/group/composition.group.repository';
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
}(CompositionCommandInvoker));
export { LocalCompositionCommandDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalCompositionCommandDispatcher.prototype.compositionId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtY29tcG9zaXRpb24uY29tbWFuZC1kaXNwYXRjaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2xvY2FsL2NvbXBvc2l0aW9uL2xvY2FsLWNvbXBvc2l0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNuRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN0RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUVoRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnRkFBZ0YsQ0FBQztBQUc1SDtJQUN1RCw2REFBeUI7SUFFL0UsMkNBQTZCLGFBQTRCLEVBQ3RELHFCQUE0QyxFQUM1QywwQkFBc0Q7UUFGekQsWUFHQyxrQkFBTSxxQkFBcUIsRUFBRSwwQkFBMEIsQ0FBQyxTQUN4RDtRQUo0QixtQkFBYSxHQUFiLGFBQWEsQ0FBZTs7SUFJekQsQ0FBQzs7Ozs7SUFHRCw2REFBaUI7Ozs7SUFBakIsVUFBa0IsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDbkUsaUJBQU0saUJBQWlCLFlBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBR0Qsc0RBQVU7Ozs7SUFBVixVQUFXLE1BQTJCO1FBQ3JDLGlCQUFNLFVBQVUsWUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7OztJQUdELHFEQUFTOzs7OztJQUFULFVBQVUsT0FBWSxFQUFFLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQ3pFLGlCQUFNLFNBQVMsWUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7OztJQUdELG9EQUFROzs7OztJQUFSLFVBQVMsS0FBYSxFQUFFLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQ3pFLGlCQUFNLFFBQVEsWUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7OztJQUdELDZEQUFpQjs7Ozs7SUFBakIsVUFBa0IsS0FBYSxFQUFFLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQ2xGLGlCQUFNLGlCQUFpQixZQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7O0lBR0QsMERBQWM7Ozs7O0lBQWQsVUFBZSxPQUFnQixFQUFFLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQ2xGLGlCQUFNLGNBQWMsWUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7OztJQUdELHdEQUFZOzs7OztJQUFaLFVBQWEsV0FBK0IsRUFBRSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUMvRixpQkFBTSxZQUFZLFlBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7Ozs7SUFHRCx5REFBYTs7Ozs7SUFBYixVQUFjLFdBQStCLEVBQUUsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDaEcsaUJBQU0sYUFBYSxZQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7O0lBR0Qsb0RBQVE7Ozs7O0lBQVIsVUFBUyxXQUErQixFQUFFLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQzNGLGlCQUFNLFFBQVEsWUFBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7OztJQUdELHFEQUFTOzs7OztJQUFULFVBQVUsV0FBK0IsRUFBRSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUM1RixpQkFBTSxTQUFTLFlBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsRCxDQUFDOztnQkF6REQsVUFBVTs7OztnQkFSRixhQUFhO2dCQUNiLHFCQUFxQjtnQkFJckIsMEJBQTBCOztJQWFsQztRQURDLFFBQVE7O2lEQUN3QixhQUFhOzs4RUFFN0M7SUFHRDtRQURDLFFBQVE7O2lEQUNVLEtBQUs7O3VFQUV2QjtJQUdEO1FBREMsUUFBUTs7eURBQzhCLGFBQWE7O3NFQUVuRDtJQUdEO1FBREMsUUFBUTs7eURBQzhCLGFBQWE7O3FFQUVuRDtJQUdEO1FBREMsUUFBUTs7eURBQ3VDLGFBQWE7OzhFQUU1RDtJQUdEO1FBREMsUUFBUTs7MERBQ3VDLGFBQWE7OzJFQUU1RDtJQUdEO1FBREMsUUFBUTs7aURBQ2lCLGtCQUFrQixFQUFpQixhQUFhOzt5RUFFekU7SUFHRDtRQURDLFFBQVE7O2lEQUNrQixrQkFBa0IsRUFBaUIsYUFBYTs7MEVBRTFFO0lBR0Q7UUFEQyxRQUFROztpREFDYSxrQkFBa0IsRUFBaUIsYUFBYTs7cUVBRXJFO0lBR0Q7UUFEQyxRQUFROztpREFDYyxrQkFBa0IsRUFBaUIsYUFBYTs7c0VBRXRFO0lBRUYsd0NBQUM7Q0FBQSxBQTNERCxDQUN1RCx5QkFBeUIsR0EwRC9FO1NBMURZLGlDQUFpQzs7Ozs7O0lBRWpDLDBEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkRpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb21wb3NpdGlvbi5kaXNwYXRjaGVyJztcbmltcG9ydCB7IGNvbXBvc2l0aW9uR2xvYmFsSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgQ29sdW1uUGFyYW1zIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL3NldC1jb2x1bW5zL2NvbHVtbi5wYXJhbXMnO1xuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uLWlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uR3JvdXBSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9ncm91cC9jb21wb3NpdGlvbi5ncm91cC5yZXBvc2l0b3J5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyIGV4dGVuZHMgQ29tcG9zaXRpb25Db21tYW5kSW52b2tlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRjb21wb3NpdGlvbkRpc3BhdGNoZXI6IENvbXBvc2l0aW9uRGlzcGF0Y2hlcixcblx0XHRcdFx0Y29tcG9zaXRpb25Hcm91cFJlcG9zaXRvcnk6IENvbXBvc2l0aW9uR3JvdXBSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoY29tcG9zaXRpb25EaXNwYXRjaGVyLCBjb21wb3NpdGlvbkdyb3VwUmVwb3NpdG9yeSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0Y3JlYXRlQ29tcG9zaXRpb24oY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5jcmVhdGVDb21wb3NpdGlvbih0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldENvbHVtbnMocGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+KTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0Q29sdW1ucyhwYXJhbXMsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0R3JvdXBzKGNvbmZpZ3M6IGFueSwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRHcm91cHMoY29uZmlncywgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRXaWR0aCh3aWR0aDogbnVtYmVyLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLnNldFdpZHRoKHdpZHRoLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldENvbnRhaW5lcldpZHRoKHdpZHRoOiBudW1iZXIsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0Q29udGFpbmVyV2lkdGgod2lkdGgsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0UmVzaXplV2lkdGgoZW5hYmxlZDogYm9vbGVhbiwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRSZXNpemVXaWR0aChlbmFibGVkLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGVuYWJsZUNvbHVtbihjb2x1bW5EZWZJZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLmVuYWJsZUNvbHVtbihjb2x1bW5EZWZJZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRkaXNhYmxlQ29sdW1uKGNvbHVtbkRlZklkOiBDb2x1bW5EZWZpbml0aW9uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0c3VwZXIuZGlzYWJsZUNvbHVtbihjb2x1bW5EZWZJZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRtb3ZlTGVmdChjb2x1bW5EZWZJZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLm1vdmVMZWZ0KGNvbHVtbkRlZklkLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG1vdmVSaWdodChjb2x1bW5EZWZJZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLm1vdmVSaWdodChjb2x1bW5EZWZJZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG59XG4iXX0=