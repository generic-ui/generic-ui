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
export class LocalCompositionCommandDispatcher extends CompositionCommandInvoker {
    /**
     * @param {?} compositionId
     * @param {?} compositionDispatcher
     * @param {?} compositionGroupRepository
     */
    constructor(compositionId, compositionDispatcher, compositionGroupRepository) {
        super(compositionDispatcher, compositionGroupRepository);
        this.compositionId = compositionId;
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    createComposition(compositionId = compositionGlobalId) {
        super.createComposition(this.compositionId);
    }
    /**
     * @param {?} params
     * @return {?}
     */
    setColumns(params) {
        super.setColumns(params, this.compositionId);
    }
    /**
     * @param {?} configs
     * @param {?=} compositionId
     * @return {?}
     */
    setGroups(configs, compositionId = compositionGlobalId) {
        super.setGroups(configs, this.compositionId);
    }
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    setWidth(width, compositionId = compositionGlobalId) {
        super.setWidth(width, this.compositionId);
    }
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    setContainerWidth(width, compositionId = compositionGlobalId) {
        super.setContainerWidth(width, this.compositionId);
    }
    /**
     * @param {?} enabled
     * @param {?=} compositionId
     * @return {?}
     */
    setResizeWidth(enabled, compositionId = compositionGlobalId) {
        super.setResizeWidth(enabled, this.compositionId);
    }
    /**
     * @param {?} columnDefId
     * @param {?=} compositionId
     * @return {?}
     */
    enableColumn(columnDefId, compositionId = compositionGlobalId) {
        super.enableColumn(columnDefId, this.compositionId);
    }
    /**
     * @param {?} columnDefId
     * @param {?=} compositionId
     * @return {?}
     */
    disableColumn(columnDefId, compositionId = compositionGlobalId) {
        super.disableColumn(columnDefId, this.compositionId);
    }
    /**
     * @param {?} columnDefId
     * @param {?=} compositionId
     * @return {?}
     */
    moveLeft(columnDefId, compositionId = compositionGlobalId) {
        super.moveLeft(columnDefId, this.compositionId);
    }
    /**
     * @param {?} columnDefId
     * @param {?=} compositionId
     * @return {?}
     */
    moveRight(columnDefId, compositionId = compositionGlobalId) {
        super.moveRight(columnDefId, this.compositionId);
    }
}
LocalCompositionCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalCompositionCommandDispatcher.ctorParameters = () => [
    { type: CompositionId },
    { type: CompositionDispatcher },
    { type: CompositionGroupRepository }
];
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalCompositionCommandDispatcher.prototype.compositionId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtY29tcG9zaXRpb24uY29tbWFuZC1kaXNwYXRjaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2xvY2FsL2NvbXBvc2l0aW9uL2xvY2FsLWNvbXBvc2l0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNuRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN0RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUVoRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnRkFBZ0YsQ0FBQztBQUk1SCxNQUFNLE9BQU8saUNBQWtDLFNBQVEseUJBQXlCOzs7Ozs7SUFFL0UsWUFBNkIsYUFBNEIsRUFDdEQscUJBQTRDLEVBQzVDLDBCQUFzRDtRQUN4RCxLQUFLLENBQUMscUJBQXFCLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztRQUg3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUl6RCxDQUFDOzs7OztJQUdELGlCQUFpQixDQUFDLGdCQUErQixtQkFBbUI7UUFDbkUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7OztJQUdELFVBQVUsQ0FBQyxNQUEyQjtRQUNyQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7O0lBR0QsU0FBUyxDQUFDLE9BQVksRUFBRSxnQkFBK0IsbUJBQW1CO1FBQ3pFLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFHRCxRQUFRLENBQUMsS0FBYSxFQUFFLGdCQUErQixtQkFBbUI7UUFDekUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7OztJQUdELGlCQUFpQixDQUFDLEtBQWEsRUFBRSxnQkFBK0IsbUJBQW1CO1FBQ2xGLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7OztJQUdELGNBQWMsQ0FBQyxPQUFnQixFQUFFLGdCQUErQixtQkFBbUI7UUFDbEYsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7OztJQUdELFlBQVksQ0FBQyxXQUErQixFQUFFLGdCQUErQixtQkFBbUI7UUFDL0YsS0FBSyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7OztJQUdELGFBQWEsQ0FBQyxXQUErQixFQUFFLGdCQUErQixtQkFBbUI7UUFDaEcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7OztJQUdELFFBQVEsQ0FBQyxXQUErQixFQUFFLGdCQUErQixtQkFBbUI7UUFDM0YsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7OztJQUdELFNBQVMsQ0FBQyxXQUErQixFQUFFLGdCQUErQixtQkFBbUI7UUFDNUYsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7OztZQXpERCxVQUFVOzs7O1lBUkYsYUFBYTtZQUNiLHFCQUFxQjtZQUlyQiwwQkFBMEI7O0FBYWxDO0lBREMsUUFBUTs7NkNBQ3dCLGFBQWE7OzBFQUU3QztBQUdEO0lBREMsUUFBUTs7NkNBQ1UsS0FBSzs7bUVBRXZCO0FBR0Q7SUFEQyxRQUFROztxREFDOEIsYUFBYTs7a0VBRW5EO0FBR0Q7SUFEQyxRQUFROztxREFDOEIsYUFBYTs7aUVBRW5EO0FBR0Q7SUFEQyxRQUFROztxREFDdUMsYUFBYTs7MEVBRTVEO0FBR0Q7SUFEQyxRQUFROztzREFDdUMsYUFBYTs7dUVBRTVEO0FBR0Q7SUFEQyxRQUFROzs2Q0FDaUIsa0JBQWtCLEVBQWlCLGFBQWE7O3FFQUV6RTtBQUdEO0lBREMsUUFBUTs7NkNBQ2tCLGtCQUFrQixFQUFpQixhQUFhOztzRUFFMUU7QUFHRDtJQURDLFFBQVE7OzZDQUNhLGtCQUFrQixFQUFpQixhQUFhOztpRUFFckU7QUFHRDtJQURDLFFBQVE7OzZDQUNjLGtCQUFrQixFQUFpQixhQUFhOztrRUFFdEU7Ozs7OztJQXREVywwREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29tcG9zaXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBjb21wb3NpdGlvbkdsb2JhbElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uZ2xvYmFsLWlkJztcbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9zZXQtY29sdW1ucy9jb2x1bW4ucGFyYW1zJztcbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbi1pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkdyb3VwUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZ3JvdXAvY29tcG9zaXRpb24uZ3JvdXAucmVwb3NpdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsQ29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlciBleHRlbmRzIENvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0Y29tcG9zaXRpb25EaXNwYXRjaGVyOiBDb21wb3NpdGlvbkRpc3BhdGNoZXIsXG5cdFx0XHRcdGNvbXBvc2l0aW9uR3JvdXBSZXBvc2l0b3J5OiBDb21wb3NpdGlvbkdyb3VwUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKGNvbXBvc2l0aW9uRGlzcGF0Y2hlciwgY29tcG9zaXRpb25Hcm91cFJlcG9zaXRvcnkpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGNyZWF0ZUNvbXBvc2l0aW9uKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0c3VwZXIuY3JlYXRlQ29tcG9zaXRpb24odGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRDb2x1bW5zKHBhcmFtczogQXJyYXk8Q29sdW1uUGFyYW1zPik6IHZvaWQge1xuXHRcdHN1cGVyLnNldENvbHVtbnMocGFyYW1zLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldEdyb3Vwcyhjb25maWdzOiBhbnksIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0R3JvdXBzKGNvbmZpZ3MsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0V2lkdGgod2lkdGg6IG51bWJlciwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRXaWR0aCh3aWR0aCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRDb250YWluZXJXaWR0aCh3aWR0aDogbnVtYmVyLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLnNldENvbnRhaW5lcldpZHRoKHdpZHRoLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFJlc2l6ZVdpZHRoKGVuYWJsZWQ6IGJvb2xlYW4sIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0UmVzaXplV2lkdGgoZW5hYmxlZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRlbmFibGVDb2x1bW4oY29sdW1uRGVmSWQ6IENvbHVtbkRlZmluaXRpb25JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5lbmFibGVDb2x1bW4oY29sdW1uRGVmSWQsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0ZGlzYWJsZUNvbHVtbihjb2x1bW5EZWZJZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLmRpc2FibGVDb2x1bW4oY29sdW1uRGVmSWQsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0bW92ZUxlZnQoY29sdW1uRGVmSWQ6IENvbHVtbkRlZmluaXRpb25JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5tb3ZlTGVmdChjb2x1bW5EZWZJZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRtb3ZlUmlnaHQoY29sdW1uRGVmSWQ6IENvbHVtbkRlZmluaXRpb25JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5tb3ZlUmlnaHQoY29sdW1uRGVmSWQsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxufVxuIl19