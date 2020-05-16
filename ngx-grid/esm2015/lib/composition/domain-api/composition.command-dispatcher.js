/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CompositionDispatcher } from '../domain/composition.dispatcher';
import { compositionGlobalId } from './composition.global-id';
import { ColumnId } from '../domain/column/column.id';
export class CompositionCommandDispatcher {
    /**
     * @param {?} compositionDispatcher
     */
    constructor(compositionDispatcher) {
        this.compositionDispatcher = compositionDispatcher;
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    createComposition(compositionId = compositionGlobalId) {
        this.compositionDispatcher.createComposition(compositionId);
    }
    /**
     * @param {?} params
     * @param {?=} compositionId
     * @return {?}
     */
    setColumns(params, compositionId = compositionGlobalId) {
        this.compositionDispatcher.setColumns(compositionId, params);
    }
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    setWidth(width, compositionId = compositionGlobalId) {
        this.compositionDispatcher.setWidth(compositionId, width);
    }
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    setContainerWidth(width, compositionId = compositionGlobalId) {
        this.compositionDispatcher.setContainerWidth(compositionId, width);
    }
    /**
     * @param {?} enabled
     * @param {?=} compositionId
     * @return {?}
     */
    setResizeWidth(enabled, compositionId = compositionGlobalId) {
        this.compositionDispatcher.setResizeWidth(compositionId, enabled);
    }
    /**
     * @param {?} columnDefinitionId
     * @param {?=} compositionId
     * @return {?}
     */
    enableColumn(columnDefinitionId, compositionId = compositionGlobalId) {
        this.compositionDispatcher.setColumnEnabled(compositionId, this.toColumnId(columnDefinitionId), true);
    }
    /**
     * @param {?} columnDefinitionId
     * @param {?=} compositionId
     * @return {?}
     */
    disableColumn(columnDefinitionId, compositionId = compositionGlobalId) {
        this.compositionDispatcher.setColumnEnabled(compositionId, this.toColumnId(columnDefinitionId), false);
    }
    /**
     * @param {?} columnDefinitionId
     * @param {?=} compositionId
     * @return {?}
     */
    moveLeft(columnDefinitionId, compositionId = compositionGlobalId) {
        this.compositionDispatcher.moveLeft(compositionId, this.toColumnId(columnDefinitionId));
    }
    /**
     * @param {?} columnDefinitionId
     * @param {?=} compositionId
     * @return {?}
     */
    moveRight(columnDefinitionId, compositionId = compositionGlobalId) {
        this.compositionDispatcher.moveRight(compositionId, this.toColumnId(columnDefinitionId));
    }
    /**
     * @private
     * @param {?} defId
     * @return {?}
     */
    toColumnId(defId) {
        return new ColumnId(defId.getId());
    }
}
CompositionCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionCommandDispatcher.ctorParameters = () => [
    { type: CompositionDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionCommandDispatcher.prototype.compositionDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uY29tbWFuZC1kaXNwYXRjaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluLWFwaS9jb21wb3NpdGlvbi5jb21tYW5kLWRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBS3RELE1BQU0sT0FBTyw0QkFBNEI7Ozs7SUFFeEMsWUFBb0IscUJBQTRDO1FBQTVDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7SUFDaEUsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxnQkFBK0IsbUJBQW1CO1FBQ25FLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7SUFFRCxVQUFVLENBQUMsTUFBMkIsRUFBRSxnQkFBK0IsbUJBQW1CO1FBQ3pGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxLQUFhLEVBQUUsZ0JBQStCLG1CQUFtQjtRQUN6RSxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxLQUFhLEVBQUUsZ0JBQStCLG1CQUFtQjtRQUNsRixJQUFJLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7OztJQUVELGNBQWMsQ0FBQyxPQUFnQixFQUFFLGdCQUErQixtQkFBbUI7UUFDbEYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7O0lBRUQsWUFBWSxDQUFDLGtCQUFzQyxFQUFFLGdCQUErQixtQkFBbUI7UUFDdEcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkcsQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUFDLGtCQUFzQyxFQUFFLGdCQUErQixtQkFBbUI7UUFDdkcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEcsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLGtCQUFzQyxFQUFFLGdCQUErQixtQkFBbUI7UUFDbEcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLGtCQUFzQyxFQUFFLGdCQUErQixtQkFBbUI7UUFDbkcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7Ozs7O0lBRU8sVUFBVSxDQUFDLEtBQXlCO1FBQzNDLE9BQU8sSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7O1lBNUNELFVBQVU7Ozs7WUFSRixxQkFBcUI7Ozs7Ozs7SUFXakIsNkRBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkRpc3BhdGNoZXIgfSBmcm9tICcuLi9kb21haW4vY29tcG9zaXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vZG9tYWluL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IGNvbXBvc2l0aW9uR2xvYmFsSWQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuLi9kb21haW4vY29sdW1uL3NldC1jb2x1bW5zL2NvbHVtbi5wYXJhbXMnO1xuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuLi9kb21haW4vY29sdW1uL2NvbHVtbi5pZCc7XG5pbXBvcnQgeyBDb2x1bW5EZWZpbml0aW9uSWQgfSBmcm9tICcuL3JlYWQvZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbi1pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9zaXRpb25EaXNwYXRjaGVyOiBDb21wb3NpdGlvbkRpc3BhdGNoZXIpIHtcblx0fVxuXG5cdGNyZWF0ZUNvbXBvc2l0aW9uKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuY3JlYXRlQ29tcG9zaXRpb24oY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRzZXRDb2x1bW5zKHBhcmFtczogQXJyYXk8Q29sdW1uUGFyYW1zPiwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5zZXRDb2x1bW5zKGNvbXBvc2l0aW9uSWQsIHBhcmFtcyk7XG5cdH1cblxuXHRzZXRXaWR0aCh3aWR0aDogbnVtYmVyLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLnNldFdpZHRoKGNvbXBvc2l0aW9uSWQsIHdpZHRoKTtcblx0fVxuXG5cdHNldENvbnRhaW5lcldpZHRoKHdpZHRoOiBudW1iZXIsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0Q29udGFpbmVyV2lkdGgoY29tcG9zaXRpb25JZCwgd2lkdGgpO1xuXHR9XG5cblx0c2V0UmVzaXplV2lkdGgoZW5hYmxlZDogYm9vbGVhbiwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5zZXRSZXNpemVXaWR0aChjb21wb3NpdGlvbklkLCBlbmFibGVkKTtcblx0fVxuXG5cdGVuYWJsZUNvbHVtbihjb2x1bW5EZWZpbml0aW9uSWQ6IENvbHVtbkRlZmluaXRpb25JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5zZXRDb2x1bW5FbmFibGVkKGNvbXBvc2l0aW9uSWQsIHRoaXMudG9Db2x1bW5JZChjb2x1bW5EZWZpbml0aW9uSWQpLCB0cnVlKTtcblx0fVxuXG5cdGRpc2FibGVDb2x1bW4oY29sdW1uRGVmaW5pdGlvbklkOiBDb2x1bW5EZWZpbml0aW9uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0Q29sdW1uRW5hYmxlZChjb21wb3NpdGlvbklkLCB0aGlzLnRvQ29sdW1uSWQoY29sdW1uRGVmaW5pdGlvbklkKSwgZmFsc2UpO1xuXHR9XG5cblx0bW92ZUxlZnQoY29sdW1uRGVmaW5pdGlvbklkOiBDb2x1bW5EZWZpbml0aW9uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIubW92ZUxlZnQoY29tcG9zaXRpb25JZCwgdGhpcy50b0NvbHVtbklkKGNvbHVtbkRlZmluaXRpb25JZCkpO1xuXHR9XG5cblx0bW92ZVJpZ2h0KGNvbHVtbkRlZmluaXRpb25JZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLm1vdmVSaWdodChjb21wb3NpdGlvbklkLCB0aGlzLnRvQ29sdW1uSWQoY29sdW1uRGVmaW5pdGlvbklkKSk7XG5cdH1cblxuXHRwcml2YXRlIHRvQ29sdW1uSWQoZGVmSWQ6IENvbHVtbkRlZmluaXRpb25JZCk6IENvbHVtbklkIHtcblx0XHRyZXR1cm4gbmV3IENvbHVtbklkKGRlZklkLmdldElkKCkpO1xuXHR9XG59XG4iXX0=