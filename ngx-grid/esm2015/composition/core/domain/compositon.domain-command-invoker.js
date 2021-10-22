/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CompositionDispatcher } from './composition.dispatcher';
import { CompositionGroupArchive } from '../domain-read/group/composition-group.archive';
import { ColumnId } from '../api/column/column.id';
import { CompositionCommandInvoker } from '../api/composition.command-invoker';
import { Injectable } from '@angular/core';
import { ColumnHighlightArchive } from './highlight/column-highlight.archive';
export class CompositionDomainCommandInvoker extends CompositionCommandInvoker {
    /**
     * @param {?} compositionDispatcher
     * @param {?} compositionGroupRepository
     * @param {?} columnHighlightArchive
     */
    constructor(compositionDispatcher, compositionGroupRepository, columnHighlightArchive) {
        super();
        this.compositionDispatcher = compositionDispatcher;
        this.compositionGroupRepository = compositionGroupRepository;
        this.columnHighlightArchive = columnHighlightArchive;
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
     * @param {?} columnDefinitionId
     * @param {?} compositionId
     * @return {?}
     */
    highlightColumn(columnDefinitionId, compositionId) {
        this.columnHighlightArchive.toggle(compositionId, new ColumnId(columnDefinitionId.getId()));
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
    { type: CompositionGroupArchive },
    { type: ColumnHighlightArchive }
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
    /**
     * @type {?}
     * @private
     */
    CompositionDomainCommandInvoker.prototype.columnHighlightArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRvbi5kb21haW4tY29tbWFuZC1pbnZva2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb21wb3NpdG9uLmRvbWFpbi1jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBSXpGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRzlFLE1BQU0sT0FBTywrQkFBZ0MsU0FBUSx5QkFBeUI7Ozs7OztJQUU3RSxZQUE2QixxQkFBNEMsRUFDckQsMEJBQW1ELEVBQ25ELHNCQUE4QztRQUNqRSxLQUFLLEVBQUUsQ0FBQztRQUhvQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQ3JELCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBeUI7UUFDbkQsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtJQUVsRSxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxhQUE0QjtRQUNsQyxJQUFJLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7O0lBRUQsVUFBVSxDQUFDLE1BQTJCLEVBQUUsYUFBNEI7UUFDbkUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLE9BQVksRUFBRSxhQUE0QjtRQUNuRCwyRkFBMkY7UUFDM0YsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWEsRUFBRSxhQUE0QjtRQUNuRCxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxLQUFhLEVBQUUsYUFBNEI7UUFDNUQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7Ozs7SUFFRCxjQUFjLENBQUMsT0FBZ0IsRUFBRSxhQUE0QjtRQUM1RCxJQUFJLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7SUFFRCxZQUFZLENBQUMsa0JBQXNDLEVBQUUsYUFBNEI7UUFDaEYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkcsQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUFDLGtCQUFzQyxFQUFFLGFBQTRCO1FBQ2pGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hHLENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxrQkFBc0MsRUFBRSxhQUE0QjtRQUM1RSxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUN6RixDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsa0JBQXNDLEVBQUUsYUFBNEI7UUFDN0UsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7Ozs7O0lBRUQsZUFBZSxDQUFDLGtCQUFzQyxFQUFFLGFBQTRCO1FBQ25GLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLElBQUksUUFBUSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUM1RixDQUFDOzs7Ozs7SUFFTyxVQUFVLENBQUMsS0FBeUI7UUFDM0MsT0FBTyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7WUF4REQsVUFBVTs7OztZQVZGLHFCQUFxQjtZQUNyQix1QkFBdUI7WUFPdkIsc0JBQXNCOzs7Ozs7O0lBS2xCLGdFQUE2RDs7Ozs7SUFDdEUscUVBQW9FOzs7OztJQUNwRSxpRUFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb3NpdGlvbkRpc3BhdGNoZXIgfSBmcm9tICcuL2NvbXBvc2l0aW9uLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Hcm91cEFyY2hpdmUgfSBmcm9tICcuLi9kb21haW4tcmVhZC9ncm91cC9jb21wb3NpdGlvbi1ncm91cC5hcmNoaXZlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi9hcGkvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29sdW1uUGFyYW1zIH0gZnJvbSAnLi9jb2x1bW4vc2V0LWNvbHVtbnMvY29sdW1uLnBhcmFtcyc7XG5pbXBvcnQgeyBDb2x1bW5EZWZpbml0aW9uSWQgfSBmcm9tICcuLi9hcGkvY29sdW1uL2NvbHVtbi1kZWZpbml0aW9uLWlkJztcbmltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi4vYXBpL2NvbHVtbi9jb2x1bW4uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uL2FwaS9jb21wb3NpdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sdW1uSGlnaGxpZ2h0QXJjaGl2ZSB9IGZyb20gJy4vaGlnaGxpZ2h0L2NvbHVtbi1oaWdobGlnaHQuYXJjaGl2ZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkRvbWFpbkNvbW1hbmRJbnZva2VyIGV4dGVuZHMgQ29tcG9zaXRpb25Db21tYW5kSW52b2tlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkRpc3BhdGNoZXI6IENvbXBvc2l0aW9uRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkdyb3VwUmVwb3NpdG9yeTogQ29tcG9zaXRpb25Hcm91cEFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uSGlnaGxpZ2h0QXJjaGl2ZTogQ29sdW1uSGlnaGxpZ2h0QXJjaGl2ZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRjcmVhdGUoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLmNyZWF0ZUNvbXBvc2l0aW9uKGNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0c2V0Q29sdW1ucyhwYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz4sIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5zZXRDb2x1bW5zKGNvbXBvc2l0aW9uSWQsIHBhcmFtcyk7XG5cdH1cblxuXHRzZXRHcm91cHMoY29uZmlnczogYW55LCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0Ly8gdGhpcy5jb21wb3NpdGlvbkdyb3VwUmVwb3NpdG9yeS5uZXh0KGNvbXBvc2l0aW9uSWQsIENvbXBvc2l0aW9uR3JvdXBSZXBvc2l0b3J5LmRlZmF1bHQpO1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLnNldEdyb3Vwcyhjb21wb3NpdGlvbklkLCBjb25maWdzKTtcblx0fVxuXG5cdHNldFdpZHRoKHdpZHRoOiBudW1iZXIsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5zZXRXaWR0aChjb21wb3NpdGlvbklkLCB3aWR0aCk7XG5cdH1cblxuXHRzZXRDb250YWluZXJXaWR0aCh3aWR0aDogbnVtYmVyLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0Q29udGFpbmVyV2lkdGgoY29tcG9zaXRpb25JZCwgd2lkdGgpO1xuXHR9XG5cblx0c2V0UmVzaXplV2lkdGgoZW5hYmxlZDogYm9vbGVhbiwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLnNldFJlc2l6ZVdpZHRoKGNvbXBvc2l0aW9uSWQsIGVuYWJsZWQpO1xuXHR9XG5cblx0ZW5hYmxlQ29sdW1uKGNvbHVtbkRlZmluaXRpb25JZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0Q29sdW1uRW5hYmxlZChjb21wb3NpdGlvbklkLCB0aGlzLnRvQ29sdW1uSWQoY29sdW1uRGVmaW5pdGlvbklkKSwgdHJ1ZSk7XG5cdH1cblxuXHRkaXNhYmxlQ29sdW1uKGNvbHVtbkRlZmluaXRpb25JZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0Q29sdW1uRW5hYmxlZChjb21wb3NpdGlvbklkLCB0aGlzLnRvQ29sdW1uSWQoY29sdW1uRGVmaW5pdGlvbklkKSwgZmFsc2UpO1xuXHR9XG5cblx0bW92ZUxlZnQoY29sdW1uRGVmaW5pdGlvbklkOiBDb2x1bW5EZWZpbml0aW9uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5tb3ZlTGVmdChjb21wb3NpdGlvbklkLCB0aGlzLnRvQ29sdW1uSWQoY29sdW1uRGVmaW5pdGlvbklkKSk7XG5cdH1cblxuXHRtb3ZlUmlnaHQoY29sdW1uRGVmaW5pdGlvbklkOiBDb2x1bW5EZWZpbml0aW9uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5tb3ZlUmlnaHQoY29tcG9zaXRpb25JZCwgdGhpcy50b0NvbHVtbklkKGNvbHVtbkRlZmluaXRpb25JZCkpO1xuXHR9XG5cblx0aGlnaGxpZ2h0Q29sdW1uKGNvbHVtbkRlZmluaXRpb25JZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb2x1bW5IaWdobGlnaHRBcmNoaXZlLnRvZ2dsZShjb21wb3NpdGlvbklkLCBuZXcgQ29sdW1uSWQoY29sdW1uRGVmaW5pdGlvbklkLmdldElkKCkpKVxuXHR9XG5cblx0cHJpdmF0ZSB0b0NvbHVtbklkKGRlZklkOiBDb2x1bW5EZWZpbml0aW9uSWQpOiBDb2x1bW5JZCB7XG5cdFx0cmV0dXJuIG5ldyBDb2x1bW5JZChkZWZJZC5nZXRJZCgpKTtcblx0fVxufVxuIl19