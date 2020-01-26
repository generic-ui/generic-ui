/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CompositionDispatcher } from '../domain/command/composition.dispatcher';
import { globalCompositionId } from '../domain/global-composition-id';
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
    /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    moveLeft(columnId, compositionId = globalCompositionId) {
        this.compositionDispatcher.moveLeft(compositionId, columnId);
    }
    /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    moveRight(columnId, compositionId = globalCompositionId) {
        this.compositionDispatcher.moveRight(compositionId, columnId);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uY29tbWFuZC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vdWktYXBpL2NvbXBvc2l0aW9uLmNvbW1hbmQtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUVqRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQU90RSxNQUFNLE9BQU8seUJBQXlCOzs7O0lBRXJDLFlBQW9CLHFCQUE0QztRQUE1QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQ2hFLENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLGdCQUErQixtQkFBbUI7UUFDdEQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7Ozs7SUFFRCxVQUFVLENBQUMsTUFBMkIsRUFBRSxnQkFBK0IsbUJBQW1CO1FBQ3pGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxLQUFhLEVBQUUsZ0JBQStCLG1CQUFtQjtRQUN6RSxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxLQUFhLEVBQUUsZ0JBQStCLG1CQUFtQjtRQUNsRixJQUFJLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7OztJQUVELGNBQWMsQ0FBQyxPQUFnQixFQUFFLGdCQUErQixtQkFBbUI7UUFDbEYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7O0lBRUQsWUFBWSxDQUFDLFFBQWtCLEVBQUUsZ0JBQStCLG1CQUFtQjtRQUNsRixJQUFJLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7Ozs7SUFFRCxhQUFhLENBQUMsUUFBa0IsRUFBRSxnQkFBK0IsbUJBQW1CO1FBQ25GLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxRQUFrQixFQUFFLGdCQUErQixtQkFBbUI7UUFDOUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLFFBQWtCLEVBQUUsZ0JBQStCLG1CQUFtQjtRQUMvRSxJQUFJLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7WUF4Q0QsVUFBVTs7OztZQVJGLHFCQUFxQjs7Ozs7OztJQVdqQiwwREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbXBvc2l0aW9uLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uL2RvbWFpbi9jb21wb3NpdGlvbi1pZCc7XG5pbXBvcnQgeyBnbG9iYWxDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vZG9tYWluL2dsb2JhbC1jb21wb3NpdGlvbi1pZCc7XG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb2x1bW4vc2V0LWNvbHVtbnMvY29sdW1uLnBhcmFtcyc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9jb2x1bW4uaWQnO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9zaXRpb25EaXNwYXRjaGVyOiBDb21wb3NpdGlvbkRpc3BhdGNoZXIpIHtcblx0fVxuXG5cdGluaXQoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5pbml0KGNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0c2V0Q29sdW1ucyhwYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz4sIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0Q29sdW1ucyhjb21wb3NpdGlvbklkLCBwYXJhbXMpO1xuXHR9XG5cblx0c2V0V2lkdGgod2lkdGg6IG51bWJlciwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5zZXRXaWR0aChjb21wb3NpdGlvbklkLCB3aWR0aCk7XG5cdH1cblxuXHRzZXRDb250YWluZXJXaWR0aCh3aWR0aDogbnVtYmVyLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gZ2xvYmFsQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLnNldENvbnRhaW5lcldpZHRoKGNvbXBvc2l0aW9uSWQsIHdpZHRoKTtcblx0fVxuXG5cdHNldFJlc2l6ZVdpZHRoKGVuYWJsZWQ6IGJvb2xlYW4sIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0UmVzaXplV2lkdGgoY29tcG9zaXRpb25JZCwgZW5hYmxlZCk7XG5cdH1cblxuXHRlbmFibGVDb2x1bW4oY29sdW1uSWQ6IENvbHVtbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gZ2xvYmFsQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLnNldENvbHVtbkVuYWJsZWQoY29tcG9zaXRpb25JZCwgY29sdW1uSWQsIHRydWUpO1xuXHR9XG5cblx0ZGlzYWJsZUNvbHVtbihjb2x1bW5JZDogQ29sdW1uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0Q29sdW1uRW5hYmxlZChjb21wb3NpdGlvbklkLCBjb2x1bW5JZCwgZmFsc2UpO1xuXHR9XG5cblx0bW92ZUxlZnQoY29sdW1uSWQ6IENvbHVtbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gZ2xvYmFsQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLm1vdmVMZWZ0KGNvbXBvc2l0aW9uSWQsIGNvbHVtbklkKTtcblx0fVxuXG5cdG1vdmVSaWdodChjb2x1bW5JZDogQ29sdW1uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIubW92ZVJpZ2h0KGNvbXBvc2l0aW9uSWQsIGNvbHVtbklkKTtcblx0fVxuXG59XG4iXX0=