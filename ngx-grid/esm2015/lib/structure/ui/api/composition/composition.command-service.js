/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CompositionDispatcher } from '../../../domain/composition/command/composition.dispatcher';
import { globalCompositionId } from '../../../domain/composition/global-composition-id';
export class CompositionCommandService {
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
    init(compositionId = globalCompositionId) {
        this.compositionDispatcher.init(compositionId);
    }
    /**
     * @param {?} params
     * @param {?=} compositionId
     * @return {?}
     */
    setColumns(params, compositionId = globalCompositionId) {
        this.compositionDispatcher.setColumns(compositionId, params);
    }
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    setWidth(width, compositionId = globalCompositionId) {
        this.compositionDispatcher.setWidth(compositionId, width);
    }
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    setContainerWidth(width, compositionId = globalCompositionId) {
        this.compositionDispatcher.setContainerWidth(compositionId, width);
    }
    /**
     * @param {?} enabled
     * @param {?=} compositionId
     * @return {?}
     */
    setResizeWidth(enabled, compositionId = globalCompositionId) {
        this.compositionDispatcher.setResizeWidth(compositionId, enabled);
    }
}
CompositionCommandService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionCommandService.ctorParameters = () => [
    { type: CompositionDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionCommandService.prototype.compositionDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uY29tbWFuZC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2FwaS9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi5jb21tYW5kLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFFbkcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFNeEYsTUFBTSxPQUFPLHlCQUF5Qjs7OztJQUVyQyxZQUFvQixxQkFBNEM7UUFBNUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUNoRSxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxnQkFBK0IsbUJBQW1CO1FBQ3RELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7O0lBRUQsVUFBVSxDQUFDLE1BQTJCLEVBQUUsZ0JBQStCLG1CQUFtQjtRQUN6RixJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBYSxFQUFFLGdCQUErQixtQkFBbUI7UUFDekUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsS0FBYSxFQUFFLGdCQUErQixtQkFBbUI7UUFDbEYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7Ozs7SUFFRCxjQUFjLENBQUMsT0FBZ0IsRUFBRSxnQkFBK0IsbUJBQW1CO1FBQ2xGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25FLENBQUM7OztZQXhCRCxVQUFVOzs7O1lBUEYscUJBQXFCOzs7Ozs7O0lBVWpCLDBEQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvY29tcG9zaXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbXBvc2l0aW9uLWlkJztcbmltcG9ydCB7IGdsb2JhbENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vZ2xvYmFsLWNvbXBvc2l0aW9uLWlkJztcbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbHVtbi9zZXQtY29sdW1ucy9jb2x1bW4ucGFyYW1zJztcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvc2l0aW9uRGlzcGF0Y2hlcjogQ29tcG9zaXRpb25EaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRpbml0KGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuaW5pdChjb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdHNldENvbHVtbnMocGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+LCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gZ2xvYmFsQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLnNldENvbHVtbnMoY29tcG9zaXRpb25JZCwgcGFyYW1zKTtcblx0fVxuXG5cdHNldFdpZHRoKHdpZHRoOiBudW1iZXIsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0V2lkdGgoY29tcG9zaXRpb25JZCwgd2lkdGgpO1xuXHR9XG5cblx0c2V0Q29udGFpbmVyV2lkdGgod2lkdGg6IG51bWJlciwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5zZXRDb250YWluZXJXaWR0aChjb21wb3NpdGlvbklkLCB3aWR0aCk7XG5cdH1cblxuXHRzZXRSZXNpemVXaWR0aChlbmFibGVkOiBib29sZWFuLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gZ2xvYmFsQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLnNldFJlc2l6ZVdpZHRoKGNvbXBvc2l0aW9uSWQsIGVuYWJsZWQpO1xuXHR9XG5cbn1cbiJdfQ==