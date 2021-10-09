/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CompositionDispatcher } from './composition.dispatcher';
import { CompositionGroupArchive } from '../domain-read/group/composition-group.archive';
import { ColumnId } from '../api/column/column.id';
import { CompositionCommandInvoker } from '../api/composition.command-invoker';
import { Injectable } from '@angular/core';
export class CompositionDomainCommandInvoker extends CompositionCommandInvoker {
    /**
     * @param {?} compositionDispatcher
     * @param {?} compositionGroupRepository
     */
    constructor(compositionDispatcher, compositionGroupRepository) {
        super();
        this.compositionDispatcher = compositionDispatcher;
        this.compositionGroupRepository = compositionGroupRepository;
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    create(compositionId) {
        this.compositionDispatcher.createComposition(compositionId);
    }
    /**
     * @param {?} params
     * @param {?} compositionId
     * @return {?}
     */
    setColumns(params, compositionId) {
        this.compositionDispatcher.setColumns(compositionId, params);
    }
    /**
     * @param {?} configs
     * @param {?} compositionId
     * @return {?}
     */
    setGroups(configs, compositionId) {
        // this.compositionGroupRepository.next(compositionId, CompositionGroupRepository.default);
        this.compositionDispatcher.setGroups(compositionId, configs);
    }
    /**
     * @param {?} width
     * @param {?} compositionId
     * @return {?}
     */
    setWidth(width, compositionId) {
        this.compositionDispatcher.setWidth(compositionId, width);
    }
    /**
     * @param {?} width
     * @param {?} compositionId
     * @return {?}
     */
    setContainerWidth(width, compositionId) {
        this.compositionDispatcher.setContainerWidth(compositionId, width);
    }
    /**
     * @param {?} enabled
     * @param {?} compositionId
     * @return {?}
     */
    setResizeWidth(enabled, compositionId) {
        this.compositionDispatcher.setResizeWidth(compositionId, enabled);
    }
    /**
     * @param {?} columnDefinitionId
     * @param {?} compositionId
     * @return {?}
     */
    enableColumn(columnDefinitionId, compositionId) {
        this.compositionDispatcher.setColumnEnabled(compositionId, this.toColumnId(columnDefinitionId), true);
    }
    /**
     * @param {?} columnDefinitionId
     * @param {?} compositionId
     * @return {?}
     */
    disableColumn(columnDefinitionId, compositionId) {
        this.compositionDispatcher.setColumnEnabled(compositionId, this.toColumnId(columnDefinitionId), false);
    }
    /**
     * @param {?} columnDefinitionId
     * @param {?} compositionId
     * @return {?}
     */
    moveLeft(columnDefinitionId, compositionId) {
        this.compositionDispatcher.moveLeft(compositionId, this.toColumnId(columnDefinitionId));
    }
    /**
     * @param {?} columnDefinitionId
     * @param {?} compositionId
     * @return {?}
     */
    moveRight(columnDefinitionId, compositionId) {
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
CompositionDomainCommandInvoker.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionDomainCommandInvoker.ctorParameters = () => [
    { type: CompositionDispatcher },
    { type: CompositionGroupArchive }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionDomainCommandInvoker.prototype.compositionDispatcher;
    /**
     * @type {?}
     * @private
     */
    CompositionDomainCommandInvoker.prototype.compositionGroupRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRvbi5kb21haW4tY29tbWFuZC1pbnZva2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb21wb3NpdG9uLmRvbWFpbi1jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBSXpGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE1BQU0sT0FBTywrQkFBZ0MsU0FBUSx5QkFBeUI7Ozs7O0lBRTdFLFlBQTZCLHFCQUE0QyxFQUNyRCwwQkFBbUQ7UUFDdEUsS0FBSyxFQUFFLENBQUM7UUFGb0IsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUNyRCwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQXlCO0lBRXZFLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLGFBQTRCO1FBQ2xDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7SUFFRCxVQUFVLENBQUMsTUFBMkIsRUFBRSxhQUE0QjtRQUNuRSxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsT0FBWSxFQUFFLGFBQTRCO1FBQ25ELDJGQUEyRjtRQUMzRixJQUFJLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBYSxFQUFFLGFBQTRCO1FBQ25ELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFDLEtBQWEsRUFBRSxhQUE0QjtRQUM1RCxJQUFJLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7OztJQUVELGNBQWMsQ0FBQyxPQUFnQixFQUFFLGFBQTRCO1FBQzVELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7OztJQUVELFlBQVksQ0FBQyxrQkFBc0MsRUFBRSxhQUE0QjtRQUNoRixJQUFJLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RyxDQUFDOzs7Ozs7SUFFRCxhQUFhLENBQUMsa0JBQXNDLEVBQUUsYUFBNEI7UUFDakYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEcsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLGtCQUFzQyxFQUFFLGFBQTRCO1FBQzVFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxrQkFBc0MsRUFBRSxhQUE0QjtRQUM3RSxJQUFJLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDOzs7Ozs7SUFFTyxVQUFVLENBQUMsS0FBeUI7UUFDM0MsT0FBTyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7WUFuREQsVUFBVTs7OztZQVRGLHFCQUFxQjtZQUNyQix1QkFBdUI7Ozs7Ozs7SUFXbkIsZ0VBQTZEOzs7OztJQUN0RSxxRUFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb3NpdGlvbkRpc3BhdGNoZXIgfSBmcm9tICcuL2NvbXBvc2l0aW9uLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Hcm91cEFyY2hpdmUgfSBmcm9tICcuLi9kb21haW4tcmVhZC9ncm91cC9jb21wb3NpdGlvbi1ncm91cC5hcmNoaXZlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4vY29sdW1uL3NldC1jb2x1bW5zL2NvbHVtbi5wYXJhbXMnO1xuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbklkIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbi1pZCc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4uL2FwaS9jb2x1bW4vY29sdW1uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi9hcGkvY29tcG9zaXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uRG9tYWluQ29tbWFuZEludm9rZXIgZXh0ZW5kcyBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uRGlzcGF0Y2hlcjogQ29tcG9zaXRpb25EaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uR3JvdXBSZXBvc2l0b3J5OiBDb21wb3NpdGlvbkdyb3VwQXJjaGl2ZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRjcmVhdGUoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLmNyZWF0ZUNvbXBvc2l0aW9uKGNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0c2V0Q29sdW1ucyhwYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz4sIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5zZXRDb2x1bW5zKGNvbXBvc2l0aW9uSWQsIHBhcmFtcyk7XG5cdH1cblxuXHRzZXRHcm91cHMoY29uZmlnczogYW55LCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0Ly8gdGhpcy5jb21wb3NpdGlvbkdyb3VwUmVwb3NpdG9yeS5uZXh0KGNvbXBvc2l0aW9uSWQsIENvbXBvc2l0aW9uR3JvdXBSZXBvc2l0b3J5LmRlZmF1bHQpO1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLnNldEdyb3Vwcyhjb21wb3NpdGlvbklkLCBjb25maWdzKTtcblx0fVxuXG5cdHNldFdpZHRoKHdpZHRoOiBudW1iZXIsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5zZXRXaWR0aChjb21wb3NpdGlvbklkLCB3aWR0aCk7XG5cdH1cblxuXHRzZXRDb250YWluZXJXaWR0aCh3aWR0aDogbnVtYmVyLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0Q29udGFpbmVyV2lkdGgoY29tcG9zaXRpb25JZCwgd2lkdGgpO1xuXHR9XG5cblx0c2V0UmVzaXplV2lkdGgoZW5hYmxlZDogYm9vbGVhbiwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLnNldFJlc2l6ZVdpZHRoKGNvbXBvc2l0aW9uSWQsIGVuYWJsZWQpO1xuXHR9XG5cblx0ZW5hYmxlQ29sdW1uKGNvbHVtbkRlZmluaXRpb25JZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0Q29sdW1uRW5hYmxlZChjb21wb3NpdGlvbklkLCB0aGlzLnRvQ29sdW1uSWQoY29sdW1uRGVmaW5pdGlvbklkKSwgdHJ1ZSk7XG5cdH1cblxuXHRkaXNhYmxlQ29sdW1uKGNvbHVtbkRlZmluaXRpb25JZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0Q29sdW1uRW5hYmxlZChjb21wb3NpdGlvbklkLCB0aGlzLnRvQ29sdW1uSWQoY29sdW1uRGVmaW5pdGlvbklkKSwgZmFsc2UpO1xuXHR9XG5cblx0bW92ZUxlZnQoY29sdW1uRGVmaW5pdGlvbklkOiBDb2x1bW5EZWZpbml0aW9uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5tb3ZlTGVmdChjb21wb3NpdGlvbklkLCB0aGlzLnRvQ29sdW1uSWQoY29sdW1uRGVmaW5pdGlvbklkKSk7XG5cdH1cblxuXHRtb3ZlUmlnaHQoY29sdW1uRGVmaW5pdGlvbklkOiBDb2x1bW5EZWZpbml0aW9uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5tb3ZlUmlnaHQoY29tcG9zaXRpb25JZCwgdGhpcy50b0NvbHVtbklkKGNvbHVtbkRlZmluaXRpb25JZCkpO1xuXHR9XG5cblx0cHJpdmF0ZSB0b0NvbHVtbklkKGRlZklkOiBDb2x1bW5EZWZpbml0aW9uSWQpOiBDb2x1bW5JZCB7XG5cdFx0cmV0dXJuIG5ldyBDb2x1bW5JZChkZWZJZC5nZXRJZCgpKTtcblx0fVxufVxuIl19