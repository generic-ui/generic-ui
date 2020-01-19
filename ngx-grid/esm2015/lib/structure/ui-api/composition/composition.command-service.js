/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CompositionDispatcher } from '../../domain/composition/command/composition.dispatcher';
import { globalCompositionId } from '../../domain/composition/global-composition-id';
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
    /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    enableColumn(columnId, compositionId = globalCompositionId) {
        this.compositionDispatcher.setColumnEnabled(compositionId, columnId, true);
    }
    /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    disableColumn(columnId, compositionId = globalCompositionId) {
        this.compositionDispatcher.setColumnEnabled(compositionId, columnId, false);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uY29tbWFuZC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpLWFwaS9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi5jb21tYW5kLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFFaEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFPckYsTUFBTSxPQUFPLHlCQUF5Qjs7OztJQUVyQyxZQUFvQixxQkFBNEM7UUFBNUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUNoRSxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxnQkFBK0IsbUJBQW1CO1FBQ3RELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7O0lBRUQsVUFBVSxDQUFDLE1BQTJCLEVBQUUsZ0JBQStCLG1CQUFtQjtRQUN6RixJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBYSxFQUFFLGdCQUErQixtQkFBbUI7UUFDekUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsS0FBYSxFQUFFLGdCQUErQixtQkFBbUI7UUFDbEYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7Ozs7SUFFRCxjQUFjLENBQUMsT0FBZ0IsRUFBRSxnQkFBK0IsbUJBQW1CO1FBQ2xGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7OztJQUVELFlBQVksQ0FBQyxRQUFrQixFQUFFLGdCQUErQixtQkFBbUI7UUFDbEYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUFDLFFBQWtCLEVBQUUsZ0JBQStCLG1CQUFtQjtRQUNuRixJQUFJLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3RSxDQUFDOzs7WUFoQ0QsVUFBVTs7OztZQVJGLHFCQUFxQjs7Ozs7OztJQVdqQiwwREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbXBvc2l0aW9uLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi1pZCc7XG5pbXBvcnQgeyBnbG9iYWxDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2dsb2JhbC1jb21wb3NpdGlvbi1pZCc7XG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC9jb2x1bW4vc2V0LWNvbHVtbnMvY29sdW1uLnBhcmFtcyc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbHVtbi9jb2x1bW4uaWQnO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9zaXRpb25EaXNwYXRjaGVyOiBDb21wb3NpdGlvbkRpc3BhdGNoZXIpIHtcblx0fVxuXG5cdGluaXQoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5pbml0KGNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0c2V0Q29sdW1ucyhwYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz4sIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0Q29sdW1ucyhjb21wb3NpdGlvbklkLCBwYXJhbXMpO1xuXHR9XG5cblx0c2V0V2lkdGgod2lkdGg6IG51bWJlciwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5zZXRXaWR0aChjb21wb3NpdGlvbklkLCB3aWR0aCk7XG5cdH1cblxuXHRzZXRDb250YWluZXJXaWR0aCh3aWR0aDogbnVtYmVyLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gZ2xvYmFsQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLnNldENvbnRhaW5lcldpZHRoKGNvbXBvc2l0aW9uSWQsIHdpZHRoKTtcblx0fVxuXG5cdHNldFJlc2l6ZVdpZHRoKGVuYWJsZWQ6IGJvb2xlYW4sIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0UmVzaXplV2lkdGgoY29tcG9zaXRpb25JZCwgZW5hYmxlZCk7XG5cdH1cblxuXHRlbmFibGVDb2x1bW4oY29sdW1uSWQ6IENvbHVtbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gZ2xvYmFsQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLnNldENvbHVtbkVuYWJsZWQoY29tcG9zaXRpb25JZCwgY29sdW1uSWQsIHRydWUpO1xuXHR9XG5cblx0ZGlzYWJsZUNvbHVtbihjb2x1bW5JZDogQ29sdW1uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0Q29sdW1uRW5hYmxlZChjb21wb3NpdGlvbklkLCBjb2x1bW5JZCwgZmFsc2UpO1xuXHR9XG5cbn1cbiJdfQ==