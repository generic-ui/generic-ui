/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CompositionDispatcher } from '../domain/composition.dispatcher';
import { compositionGlobalId } from './composition.global-id';
import { ColumnId } from '../domain/column/column.id';
var CompositionCommandDispatcher = /** @class */ (function () {
    function CompositionCommandDispatcher(compositionDispatcher) {
        this.compositionDispatcher = compositionDispatcher;
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandDispatcher.prototype.createComposition = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = compositionGlobalId; }
        this.compositionDispatcher.createComposition(compositionId);
    };
    /**
     * @param {?} params
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandDispatcher.prototype.setColumns = /**
     * @param {?} params
     * @param {?=} compositionId
     * @return {?}
     */
    function (params, compositionId) {
        if (compositionId === void 0) { compositionId = compositionGlobalId; }
        this.compositionDispatcher.setColumns(compositionId, params);
    };
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandDispatcher.prototype.setWidth = /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    function (width, compositionId) {
        if (compositionId === void 0) { compositionId = compositionGlobalId; }
        this.compositionDispatcher.setWidth(compositionId, width);
    };
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandDispatcher.prototype.setContainerWidth = /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    function (width, compositionId) {
        if (compositionId === void 0) { compositionId = compositionGlobalId; }
        this.compositionDispatcher.setContainerWidth(compositionId, width);
    };
    /**
     * @param {?} enabled
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandDispatcher.prototype.setResizeWidth = /**
     * @param {?} enabled
     * @param {?=} compositionId
     * @return {?}
     */
    function (enabled, compositionId) {
        if (compositionId === void 0) { compositionId = compositionGlobalId; }
        this.compositionDispatcher.setResizeWidth(compositionId, enabled);
    };
    /**
     * @param {?} columnDefinitionId
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandDispatcher.prototype.enableColumn = /**
     * @param {?} columnDefinitionId
     * @param {?=} compositionId
     * @return {?}
     */
    function (columnDefinitionId, compositionId) {
        if (compositionId === void 0) { compositionId = compositionGlobalId; }
        this.compositionDispatcher.setColumnEnabled(compositionId, this.toColumnId(columnDefinitionId), true);
    };
    /**
     * @param {?} columnDefinitionId
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandDispatcher.prototype.disableColumn = /**
     * @param {?} columnDefinitionId
     * @param {?=} compositionId
     * @return {?}
     */
    function (columnDefinitionId, compositionId) {
        if (compositionId === void 0) { compositionId = compositionGlobalId; }
        this.compositionDispatcher.setColumnEnabled(compositionId, this.toColumnId(columnDefinitionId), false);
    };
    /**
     * @param {?} columnDefinitionId
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandDispatcher.prototype.moveLeft = /**
     * @param {?} columnDefinitionId
     * @param {?=} compositionId
     * @return {?}
     */
    function (columnDefinitionId, compositionId) {
        if (compositionId === void 0) { compositionId = compositionGlobalId; }
        this.compositionDispatcher.moveLeft(compositionId, this.toColumnId(columnDefinitionId));
    };
    /**
     * @param {?} columnDefinitionId
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandDispatcher.prototype.moveRight = /**
     * @param {?} columnDefinitionId
     * @param {?=} compositionId
     * @return {?}
     */
    function (columnDefinitionId, compositionId) {
        if (compositionId === void 0) { compositionId = compositionGlobalId; }
        this.compositionDispatcher.moveRight(compositionId, this.toColumnId(columnDefinitionId));
    };
    /**
     * @private
     * @param {?} defId
     * @return {?}
     */
    CompositionCommandDispatcher.prototype.toColumnId = /**
     * @private
     * @param {?} defId
     * @return {?}
     */
    function (defId) {
        return new ColumnId(defId.getId());
    };
    CompositionCommandDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionCommandDispatcher.ctorParameters = function () { return [
        { type: CompositionDispatcher }
    ]; };
    return CompositionCommandDispatcher;
}());
export { CompositionCommandDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionCommandDispatcher.prototype.compositionDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uY29tbWFuZC1kaXNwYXRjaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluLWFwaS9jb21wb3NpdGlvbi5jb21tYW5kLWRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBSXREO0lBR0Msc0NBQW9CLHFCQUE0QztRQUE1QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQ2hFLENBQUM7Ozs7O0lBRUQsd0RBQWlCOzs7O0lBQWpCLFVBQWtCLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQ25FLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7SUFFRCxpREFBVTs7Ozs7SUFBVixVQUFXLE1BQTJCLEVBQUUsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDekYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7O0lBRUQsK0NBQVE7Ozs7O0lBQVIsVUFBUyxLQUFhLEVBQUUsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDekUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7O0lBRUQsd0RBQWlCOzs7OztJQUFqQixVQUFrQixLQUFhLEVBQUUsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDbEYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7Ozs7SUFFRCxxREFBYzs7Ozs7SUFBZCxVQUFlLE9BQWdCLEVBQUUsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDbEYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7O0lBRUQsbURBQVk7Ozs7O0lBQVosVUFBYSxrQkFBc0MsRUFBRSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUN0RyxJQUFJLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RyxDQUFDOzs7Ozs7SUFFRCxvREFBYTs7Ozs7SUFBYixVQUFjLGtCQUFzQyxFQUFFLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQ3ZHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hHLENBQUM7Ozs7OztJQUVELCtDQUFROzs7OztJQUFSLFVBQVMsa0JBQXNDLEVBQUUsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDbEcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQzs7Ozs7O0lBRUQsZ0RBQVM7Ozs7O0lBQVQsVUFBVSxrQkFBc0MsRUFBRSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUNuRyxJQUFJLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDOzs7Ozs7SUFFTyxpREFBVTs7Ozs7SUFBbEIsVUFBbUIsS0FBeUI7UUFDM0MsT0FBTyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDOztnQkE1Q0QsVUFBVTs7OztnQkFSRixxQkFBcUI7O0lBcUQ5QixtQ0FBQztDQUFBLEFBN0NELElBNkNDO1NBNUNZLDRCQUE0Qjs7Ozs7O0lBRTVCLDZEQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbXBvc2l0aW9uLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBjb21wb3NpdGlvbkdsb2JhbElkIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgQ29sdW1uUGFyYW1zIH0gZnJvbSAnLi4vZG9tYWluL2NvbHVtbi9zZXQtY29sdW1ucy9jb2x1bW4ucGFyYW1zJztcbmltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi4vZG9tYWluL2NvbHVtbi9jb2x1bW4uaWQnO1xuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbklkIH0gZnJvbSAnLi9yZWFkL2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24taWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvc2l0aW9uRGlzcGF0Y2hlcjogQ29tcG9zaXRpb25EaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRjcmVhdGVDb21wb3NpdGlvbihjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLmNyZWF0ZUNvbXBvc2l0aW9uKGNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0c2V0Q29sdW1ucyhwYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz4sIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0Q29sdW1ucyhjb21wb3NpdGlvbklkLCBwYXJhbXMpO1xuXHR9XG5cblx0c2V0V2lkdGgod2lkdGg6IG51bWJlciwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5zZXRXaWR0aChjb21wb3NpdGlvbklkLCB3aWR0aCk7XG5cdH1cblxuXHRzZXRDb250YWluZXJXaWR0aCh3aWR0aDogbnVtYmVyLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLnNldENvbnRhaW5lcldpZHRoKGNvbXBvc2l0aW9uSWQsIHdpZHRoKTtcblx0fVxuXG5cdHNldFJlc2l6ZVdpZHRoKGVuYWJsZWQ6IGJvb2xlYW4sIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0UmVzaXplV2lkdGgoY29tcG9zaXRpb25JZCwgZW5hYmxlZCk7XG5cdH1cblxuXHRlbmFibGVDb2x1bW4oY29sdW1uRGVmaW5pdGlvbklkOiBDb2x1bW5EZWZpbml0aW9uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0Q29sdW1uRW5hYmxlZChjb21wb3NpdGlvbklkLCB0aGlzLnRvQ29sdW1uSWQoY29sdW1uRGVmaW5pdGlvbklkKSwgdHJ1ZSk7XG5cdH1cblxuXHRkaXNhYmxlQ29sdW1uKGNvbHVtbkRlZmluaXRpb25JZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLnNldENvbHVtbkVuYWJsZWQoY29tcG9zaXRpb25JZCwgdGhpcy50b0NvbHVtbklkKGNvbHVtbkRlZmluaXRpb25JZCksIGZhbHNlKTtcblx0fVxuXG5cdG1vdmVMZWZ0KGNvbHVtbkRlZmluaXRpb25JZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLm1vdmVMZWZ0KGNvbXBvc2l0aW9uSWQsIHRoaXMudG9Db2x1bW5JZChjb2x1bW5EZWZpbml0aW9uSWQpKTtcblx0fVxuXG5cdG1vdmVSaWdodChjb2x1bW5EZWZpbml0aW9uSWQ6IENvbHVtbkRlZmluaXRpb25JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5tb3ZlUmlnaHQoY29tcG9zaXRpb25JZCwgdGhpcy50b0NvbHVtbklkKGNvbHVtbkRlZmluaXRpb25JZCkpO1xuXHR9XG5cblx0cHJpdmF0ZSB0b0NvbHVtbklkKGRlZklkOiBDb2x1bW5EZWZpbml0aW9uSWQpOiBDb2x1bW5JZCB7XG5cdFx0cmV0dXJuIG5ldyBDb2x1bW5JZChkZWZJZC5nZXRJZCgpKTtcblx0fVxufVxuIl19