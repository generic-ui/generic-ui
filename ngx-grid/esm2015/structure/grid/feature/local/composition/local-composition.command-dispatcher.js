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
export class LocalCompositionCommandDispatcher extends CompositionDomainCommandInvoker {
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
    create(compositionId = compositionGlobalId) {
        super.create(this.compositionId);
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalCompositionCommandDispatcher.prototype.compositionId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtY29tcG9zaXRpb24uY29tbWFuZC1kaXNwYXRjaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2xvY2FsL2NvbXBvc2l0aW9uL2xvY2FsLWNvbXBvc2l0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUN0RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN0RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUVoRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnRkFBZ0YsQ0FBQztBQUM1SCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUkzSCxNQUFNLE9BQU8saUNBQWtDLFNBQVEsK0JBQStCOzs7Ozs7SUFFckYsWUFBNkIsYUFBNEIsRUFDdEQscUJBQTRDLEVBQzVDLDBCQUFzRDtRQUN4RCxLQUFLLENBQUMscUJBQXFCLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztRQUg3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUl6RCxDQUFDOzs7OztJQUdELE1BQU0sQ0FBQyxnQkFBK0IsbUJBQW1CO1FBQ3hELEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBR0QsVUFBVSxDQUFDLE1BQTJCO1FBQ3JDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFHRCxTQUFTLENBQUMsT0FBWSxFQUFFLGdCQUErQixtQkFBbUI7UUFDekUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7OztJQUdELFFBQVEsQ0FBQyxLQUFhLEVBQUUsZ0JBQStCLG1CQUFtQjtRQUN6RSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7O0lBR0QsaUJBQWlCLENBQUMsS0FBYSxFQUFFLGdCQUErQixtQkFBbUI7UUFDbEYsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7O0lBR0QsY0FBYyxDQUFDLE9BQWdCLEVBQUUsZ0JBQStCLG1CQUFtQjtRQUNsRixLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7O0lBR0QsWUFBWSxDQUFDLFdBQStCLEVBQUUsZ0JBQStCLG1CQUFtQjtRQUMvRixLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7O0lBR0QsYUFBYSxDQUFDLFdBQStCLEVBQUUsZ0JBQStCLG1CQUFtQjtRQUNoRyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7O0lBR0QsUUFBUSxDQUFDLFdBQStCLEVBQUUsZ0JBQStCLG1CQUFtQjtRQUMzRixLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7O0lBR0QsU0FBUyxDQUFDLFdBQStCLEVBQUUsZ0JBQStCLG1CQUFtQjtRQUM1RixLQUFLLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7O1lBekRELFVBQVU7Ozs7WUFURixhQUFhO1lBQ2IscUJBQXFCO1lBSXJCLDBCQUEwQjs7QUFjbEM7SUFEQyxRQUFROzs2Q0FDYSxhQUFhOzsrREFFbEM7QUFHRDtJQURDLFFBQVE7OzZDQUNVLEtBQUs7O21FQUV2QjtBQUdEO0lBREMsUUFBUTs7cURBQzhCLGFBQWE7O2tFQUVuRDtBQUdEO0lBREMsUUFBUTs7cURBQzhCLGFBQWE7O2lFQUVuRDtBQUdEO0lBREMsUUFBUTs7cURBQ3VDLGFBQWE7OzBFQUU1RDtBQUdEO0lBREMsUUFBUTs7c0RBQ3VDLGFBQWE7O3VFQUU1RDtBQUdEO0lBREMsUUFBUTs7NkNBQ2lCLGtCQUFrQixFQUFpQixhQUFhOztxRUFFekU7QUFHRDtJQURDLFFBQVE7OzZDQUNrQixrQkFBa0IsRUFBaUIsYUFBYTs7c0VBRTFFO0FBR0Q7SUFEQyxRQUFROzs2Q0FDYSxrQkFBa0IsRUFBaUIsYUFBYTs7aUVBRXJFO0FBR0Q7SUFEQyxRQUFROzs2Q0FDYyxrQkFBa0IsRUFBaUIsYUFBYTs7a0VBRXRFOzs7Ozs7SUF0RFcsMERBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29tcG9zaXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBjb21wb3NpdGlvbkdsb2JhbElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uZ2xvYmFsLWlkJztcbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9zZXQtY29sdW1ucy9jb2x1bW4ucGFyYW1zJztcbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbi1pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkdyb3VwUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZ3JvdXAvY29tcG9zaXRpb24uZ3JvdXAucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkRvbWFpbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29tcG9zaXRvbi5kb21haW4tY29tbWFuZC1pbnZva2VyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyIGV4dGVuZHMgQ29tcG9zaXRpb25Eb21haW5Db21tYW5kSW52b2tlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRjb21wb3NpdGlvbkRpc3BhdGNoZXI6IENvbXBvc2l0aW9uRGlzcGF0Y2hlcixcblx0XHRcdFx0Y29tcG9zaXRpb25Hcm91cFJlcG9zaXRvcnk6IENvbXBvc2l0aW9uR3JvdXBSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoY29tcG9zaXRpb25EaXNwYXRjaGVyLCBjb21wb3NpdGlvbkdyb3VwUmVwb3NpdG9yeSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0Y3JlYXRlKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0c3VwZXIuY3JlYXRlKHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0Q29sdW1ucyhwYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz4pOiB2b2lkIHtcblx0XHRzdXBlci5zZXRDb2x1bW5zKHBhcmFtcywgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRHcm91cHMoY29uZmlnczogYW55LCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLnNldEdyb3Vwcyhjb25maWdzLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFdpZHRoKHdpZHRoOiBudW1iZXIsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0V2lkdGgod2lkdGgsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0Q29udGFpbmVyV2lkdGgod2lkdGg6IG51bWJlciwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRDb250YWluZXJXaWR0aCh3aWR0aCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRSZXNpemVXaWR0aChlbmFibGVkOiBib29sZWFuLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLnNldFJlc2l6ZVdpZHRoKGVuYWJsZWQsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0ZW5hYmxlQ29sdW1uKGNvbHVtbkRlZklkOiBDb2x1bW5EZWZpbml0aW9uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0c3VwZXIuZW5hYmxlQ29sdW1uKGNvbHVtbkRlZklkLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGRpc2FibGVDb2x1bW4oY29sdW1uRGVmSWQ6IENvbHVtbkRlZmluaXRpb25JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5kaXNhYmxlQ29sdW1uKGNvbHVtbkRlZklkLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG1vdmVMZWZ0KGNvbHVtbkRlZklkOiBDb2x1bW5EZWZpbml0aW9uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0c3VwZXIubW92ZUxlZnQoY29sdW1uRGVmSWQsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0bW92ZVJpZ2h0KGNvbHVtbkRlZklkOiBDb2x1bW5EZWZpbml0aW9uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0c3VwZXIubW92ZVJpZ2h0KGNvbHVtbkRlZklkLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cbn1cbiJdfQ==