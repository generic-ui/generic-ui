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
    createComposition(compositionId = globalCompositionId) {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalCompositionCommandService.prototype.compositionId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtY29tcG9zaXRpb24tY29tbWFuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2xvY2FsL2NvbXBvc2l0aW9uL2xvY2FsLWNvbXBvc2l0aW9uLWNvbW1hbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN0RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUUzRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seURBQXlELENBQUM7QUFJbkYsTUFBTSxPQUFPLDhCQUErQixTQUFRLHlCQUF5Qjs7Ozs7SUFFNUUsWUFBNkIsYUFBNEIsRUFDdEQscUJBQTRDO1FBQzlDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRkQsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFHekQsQ0FBQzs7Ozs7SUFHRCxpQkFBaUIsQ0FBQyxnQkFBK0IsbUJBQW1CO1FBQ25FLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFHRCxVQUFVLENBQUMsTUFBMkI7UUFDckMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7OztJQUdELFFBQVEsQ0FBQyxLQUFhLEVBQUUsZ0JBQStCLG1CQUFtQjtRQUN6RSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7O0lBR0QsaUJBQWlCLENBQUMsS0FBYSxFQUFFLGdCQUErQixtQkFBbUI7UUFDbEYsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7O0lBR0QsY0FBYyxDQUFDLE9BQWdCLEVBQUUsZ0JBQStCLG1CQUFtQjtRQUNsRixLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7O0lBR0QsWUFBWSxDQUFDLFFBQWtCLEVBQUUsZ0JBQStCLG1CQUFtQjtRQUNsRixLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBR0QsYUFBYSxDQUFDLFFBQWtCLEVBQUUsZ0JBQStCLG1CQUFtQjtRQUNuRixLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7O0lBR0QsUUFBUSxDQUFDLFFBQWtCLEVBQUUsZ0JBQStCLG1CQUFtQjtRQUM5RSxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7O0lBR0QsU0FBUyxDQUFDLFFBQWtCLEVBQUUsZ0JBQStCLG1CQUFtQjtRQUMvRSxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7O1lBbkRELFVBQVU7Ozs7WUFQRixhQUFhO1lBQ2IscUJBQXFCOztBQWU3QjtJQURDLFFBQVE7OzZDQUN3QixhQUFhOzt1RUFFN0M7QUFHRDtJQURDLFFBQVE7OzZDQUNVLEtBQUs7O2dFQUV2QjtBQUdEO0lBREMsUUFBUTs7cURBQzhCLGFBQWE7OzhEQUVuRDtBQUdEO0lBREMsUUFBUTs7cURBQ3VDLGFBQWE7O3VFQUU1RDtBQUdEO0lBREMsUUFBUTs7c0RBQ3VDLGFBQWE7O29FQUU1RDtBQUdEO0lBREMsUUFBUTs7NkNBQ2MsUUFBUSxFQUFpQixhQUFhOztrRUFFNUQ7QUFHRDtJQURDLFFBQVE7OzZDQUNlLFFBQVEsRUFBaUIsYUFBYTs7bUVBRTdEO0FBR0Q7SUFEQyxRQUFROzs2Q0FDVSxRQUFRLEVBQWlCLGFBQWE7OzhEQUV4RDtBQUdEO0lBREMsUUFBUTs7NkNBQ1csUUFBUSxFQUFpQixhQUFhOzsrREFFekQ7Ozs7OztJQWhEVyx1REFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3VpLWFwaS9jb21wb3NpdGlvbi5jb21tYW5kLXNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi1pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkRpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC9jb21wb3NpdGlvbi5kaXNwYXRjaGVyJztcbmltcG9ydCB7IGdsb2JhbENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vZ2xvYmFsLWNvbXBvc2l0aW9uLWlkJztcbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9zZXQtY29sdW1ucy9jb2x1bW4ucGFyYW1zJztcbmltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbW1hbmQvY29sdW1uL2NvbHVtbi5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsQ29tcG9zaXRpb25Db21tYW5kU2VydmljZSBleHRlbmRzIENvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0Y29tcG9zaXRpb25EaXNwYXRjaGVyOiBDb21wb3NpdGlvbkRpc3BhdGNoZXIpIHtcblx0XHRzdXBlcihjb21wb3NpdGlvbkRpc3BhdGNoZXIpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGNyZWF0ZUNvbXBvc2l0aW9uKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0c3VwZXIuY3JlYXRlQ29tcG9zaXRpb24odGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRDb2x1bW5zKHBhcmFtczogQXJyYXk8Q29sdW1uUGFyYW1zPik6IHZvaWQge1xuXHRcdHN1cGVyLnNldENvbHVtbnMocGFyYW1zLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFdpZHRoKHdpZHRoOiBudW1iZXIsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0V2lkdGgod2lkdGgsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0Q29udGFpbmVyV2lkdGgod2lkdGg6IG51bWJlciwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRDb250YWluZXJXaWR0aCh3aWR0aCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRSZXNpemVXaWR0aChlbmFibGVkOiBib29sZWFuLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gZ2xvYmFsQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHN1cGVyLnNldFJlc2l6ZVdpZHRoKGVuYWJsZWQsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0ZW5hYmxlQ29sdW1uKGNvbHVtbklkOiBDb2x1bW5JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHRzdXBlci5lbmFibGVDb2x1bW4oY29sdW1uSWQsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0ZGlzYWJsZUNvbHVtbihjb2x1bW5JZDogQ29sdW1uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0c3VwZXIuZGlzYWJsZUNvbHVtbihjb2x1bW5JZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRtb3ZlTGVmdChjb2x1bW5JZDogQ29sdW1uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0c3VwZXIubW92ZUxlZnQoY29sdW1uSWQsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0bW92ZVJpZ2h0KGNvbHVtbklkOiBDb2x1bW5JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHRzdXBlci5tb3ZlUmlnaHQoY29sdW1uSWQsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxufVxuIl19