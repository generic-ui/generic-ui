/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CompositionDispatcher } from '../domain/composition.dispatcher';
import { compositionGlobalId } from './composition.global-id';
import { ColumnId } from './column/column.id';
import { CompositionGroupRepository } from '../domain-read/group/composition.group.repository';
export class CompositionCommandInvoker {
    /**
     * @param {?} compositionDispatcher
     * @param {?} compositionGroupRepository
     */
    constructor(compositionDispatcher, compositionGroupRepository) {
        this.compositionDispatcher = compositionDispatcher;
        this.compositionGroupRepository = compositionGroupRepository;
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
     * @param {?} configs
     * @param {?=} compositionId
     * @return {?}
     */
    setGroups(configs, compositionId = compositionGlobalId) {
        // this.compositionGroupRepository.next(compositionId, CompositionGroupRepository.default);
        this.compositionDispatcher.setGroups(compositionId, configs);
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
CompositionCommandInvoker.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionCommandInvoker.ctorParameters = () => [
    { type: CompositionDispatcher },
    { type: CompositionGroupRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionCommandInvoker.prototype.compositionDispatcher;
    /**
     * @type {?}
     * @private
     */
    CompositionCommandInvoker.prototype.compositionGroupRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uY29tbWFuZC1pbnZva2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBSS9GLE1BQU0sT0FBTyx5QkFBeUI7Ozs7O0lBRXJDLFlBQTZCLHFCQUE0QyxFQUNyRCwwQkFBc0Q7UUFEN0MsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUNyRCwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO0lBQzFFLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsZ0JBQStCLG1CQUFtQjtRQUNuRSxJQUFJLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7O0lBRUQsVUFBVSxDQUFDLE1BQTJCLEVBQUUsZ0JBQStCLG1CQUFtQjtRQUN6RixJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsT0FBWSxFQUFFLGdCQUErQixtQkFBbUI7UUFDekUsMkZBQTJGO1FBQzNGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxLQUFhLEVBQUUsZ0JBQStCLG1CQUFtQjtRQUN6RSxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxLQUFhLEVBQUUsZ0JBQStCLG1CQUFtQjtRQUNsRixJQUFJLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7OztJQUVELGNBQWMsQ0FBQyxPQUFnQixFQUFFLGdCQUErQixtQkFBbUI7UUFDbEYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7O0lBRUQsWUFBWSxDQUFDLGtCQUFzQyxFQUFFLGdCQUErQixtQkFBbUI7UUFDdEcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkcsQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUFDLGtCQUFzQyxFQUFFLGdCQUErQixtQkFBbUI7UUFDdkcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEcsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLGtCQUFzQyxFQUFFLGdCQUErQixtQkFBbUI7UUFDbEcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLGtCQUFzQyxFQUFFLGdCQUErQixtQkFBbUI7UUFDbkcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7Ozs7O0lBRU8sVUFBVSxDQUFDLEtBQXlCO1FBQzNDLE9BQU8sSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7O1lBbERELFVBQVU7Ozs7WUFURixxQkFBcUI7WUFNckIsMEJBQTBCOzs7Ozs7O0lBTXRCLDBEQUE2RDs7Ozs7SUFDdEUsK0RBQXVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSW52b2tlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4uL2RvbWFpbi9jb21wb3NpdGlvbi5kaXNwYXRjaGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IGNvbXBvc2l0aW9uR2xvYmFsSWQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuLi9kb21haW4vY29sdW1uL3NldC1jb2x1bW5zL2NvbHVtbi5wYXJhbXMnO1xuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuL2NvbHVtbi9jb2x1bW4uaWQnO1xuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbklkIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbi1pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkdyb3VwUmVwb3NpdG9yeSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2dyb3VwL2NvbXBvc2l0aW9uLmdyb3VwLnJlcG9zaXRvcnknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyIGltcGxlbWVudHMgQ29tbWFuZEludm9rZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25EaXNwYXRjaGVyOiBDb21wb3NpdGlvbkRpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25Hcm91cFJlcG9zaXRvcnk6IENvbXBvc2l0aW9uR3JvdXBSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRjcmVhdGVDb21wb3NpdGlvbihjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLmNyZWF0ZUNvbXBvc2l0aW9uKGNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0c2V0Q29sdW1ucyhwYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz4sIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0Q29sdW1ucyhjb21wb3NpdGlvbklkLCBwYXJhbXMpO1xuXHR9XG5cblx0c2V0R3JvdXBzKGNvbmZpZ3M6IGFueSwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHQvLyB0aGlzLmNvbXBvc2l0aW9uR3JvdXBSZXBvc2l0b3J5Lm5leHQoY29tcG9zaXRpb25JZCwgQ29tcG9zaXRpb25Hcm91cFJlcG9zaXRvcnkuZGVmYXVsdCk7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0R3JvdXBzKGNvbXBvc2l0aW9uSWQsIGNvbmZpZ3MpO1xuXHR9XG5cblx0c2V0V2lkdGgod2lkdGg6IG51bWJlciwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5zZXRXaWR0aChjb21wb3NpdGlvbklkLCB3aWR0aCk7XG5cdH1cblxuXHRzZXRDb250YWluZXJXaWR0aCh3aWR0aDogbnVtYmVyLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLnNldENvbnRhaW5lcldpZHRoKGNvbXBvc2l0aW9uSWQsIHdpZHRoKTtcblx0fVxuXG5cdHNldFJlc2l6ZVdpZHRoKGVuYWJsZWQ6IGJvb2xlYW4sIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0UmVzaXplV2lkdGgoY29tcG9zaXRpb25JZCwgZW5hYmxlZCk7XG5cdH1cblxuXHRlbmFibGVDb2x1bW4oY29sdW1uRGVmaW5pdGlvbklkOiBDb2x1bW5EZWZpbml0aW9uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0Q29sdW1uRW5hYmxlZChjb21wb3NpdGlvbklkLCB0aGlzLnRvQ29sdW1uSWQoY29sdW1uRGVmaW5pdGlvbklkKSwgdHJ1ZSk7XG5cdH1cblxuXHRkaXNhYmxlQ29sdW1uKGNvbHVtbkRlZmluaXRpb25JZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLnNldENvbHVtbkVuYWJsZWQoY29tcG9zaXRpb25JZCwgdGhpcy50b0NvbHVtbklkKGNvbHVtbkRlZmluaXRpb25JZCksIGZhbHNlKTtcblx0fVxuXG5cdG1vdmVMZWZ0KGNvbHVtbkRlZmluaXRpb25JZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLm1vdmVMZWZ0KGNvbXBvc2l0aW9uSWQsIHRoaXMudG9Db2x1bW5JZChjb2x1bW5EZWZpbml0aW9uSWQpKTtcblx0fVxuXG5cdG1vdmVSaWdodChjb2x1bW5EZWZpbml0aW9uSWQ6IENvbHVtbkRlZmluaXRpb25JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5tb3ZlUmlnaHQoY29tcG9zaXRpb25JZCwgdGhpcy50b0NvbHVtbklkKGNvbHVtbkRlZmluaXRpb25JZCkpO1xuXHR9XG5cblx0cHJpdmF0ZSB0b0NvbHVtbklkKGRlZklkOiBDb2x1bW5EZWZpbml0aW9uSWQpOiBDb2x1bW5JZCB7XG5cdFx0cmV0dXJuIG5ldyBDb2x1bW5JZChkZWZJZC5nZXRJZCgpKTtcblx0fVxufVxuIl19