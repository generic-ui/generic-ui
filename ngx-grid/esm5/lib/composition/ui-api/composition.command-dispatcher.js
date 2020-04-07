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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uY29tbWFuZC1kaXNwYXRjaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vdWktYXBpL2NvbXBvc2l0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUV6RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFJdEQ7SUFHQyxzQ0FBb0IscUJBQTRDO1FBQTVDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7SUFDaEUsQ0FBQzs7Ozs7SUFFRCx3REFBaUI7Ozs7SUFBakIsVUFBa0IsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDbkUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7OztJQUVELGlEQUFVOzs7OztJQUFWLFVBQVcsTUFBMkIsRUFBRSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUN6RixJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7SUFFRCwrQ0FBUTs7Ozs7SUFBUixVQUFTLEtBQWEsRUFBRSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUN6RSxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7SUFFRCx3REFBaUI7Ozs7O0lBQWpCLFVBQWtCLEtBQWEsRUFBRSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUNsRixJQUFJLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7OztJQUVELHFEQUFjOzs7OztJQUFkLFVBQWUsT0FBZ0IsRUFBRSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUNsRixJQUFJLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7SUFFRCxtREFBWTs7Ozs7SUFBWixVQUFhLGtCQUFzQyxFQUFFLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQ3RHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7Ozs7OztJQUVELG9EQUFhOzs7OztJQUFiLFVBQWMsa0JBQXNDLEVBQUUsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDdkcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEcsQ0FBQzs7Ozs7O0lBRUQsK0NBQVE7Ozs7O0lBQVIsVUFBUyxrQkFBc0MsRUFBRSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUNsRyxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUN6RixDQUFDOzs7Ozs7SUFFRCxnREFBUzs7Ozs7SUFBVCxVQUFVLGtCQUFzQyxFQUFFLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQ25HLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7Ozs7OztJQUVPLGlEQUFVOzs7OztJQUFsQixVQUFtQixLQUF5QjtRQUMzQyxPQUFPLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O2dCQTVDRCxVQUFVOzs7O2dCQVJGLHFCQUFxQjs7SUFxRDlCLG1DQUFDO0NBQUEsQUE3Q0QsSUE2Q0M7U0E1Q1ksNEJBQTRCOzs7Ozs7SUFFNUIsNkRBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkRpc3BhdGNoZXIgfSBmcm9tICcuLi9kb21haW4vY29tcG9zaXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vZG9tYWluL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IGNvbXBvc2l0aW9uR2xvYmFsSWQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuLi9kb21haW4vY29sdW1uL3NldC1jb2x1bW5zL2NvbHVtbi5wYXJhbXMnO1xuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuLi9kb21haW4vY29sdW1uL2NvbHVtbi5pZCc7XG5pbXBvcnQgeyBDb2x1bW5EZWZpbml0aW9uSWQgfSBmcm9tICcuLi9yZWFkL2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24taWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvc2l0aW9uRGlzcGF0Y2hlcjogQ29tcG9zaXRpb25EaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRjcmVhdGVDb21wb3NpdGlvbihjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLmNyZWF0ZUNvbXBvc2l0aW9uKGNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0c2V0Q29sdW1ucyhwYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz4sIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0Q29sdW1ucyhjb21wb3NpdGlvbklkLCBwYXJhbXMpO1xuXHR9XG5cblx0c2V0V2lkdGgod2lkdGg6IG51bWJlciwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5zZXRXaWR0aChjb21wb3NpdGlvbklkLCB3aWR0aCk7XG5cdH1cblxuXHRzZXRDb250YWluZXJXaWR0aCh3aWR0aDogbnVtYmVyLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLnNldENvbnRhaW5lcldpZHRoKGNvbXBvc2l0aW9uSWQsIHdpZHRoKTtcblx0fVxuXG5cdHNldFJlc2l6ZVdpZHRoKGVuYWJsZWQ6IGJvb2xlYW4sIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0UmVzaXplV2lkdGgoY29tcG9zaXRpb25JZCwgZW5hYmxlZCk7XG5cdH1cblxuXHRlbmFibGVDb2x1bW4oY29sdW1uRGVmaW5pdGlvbklkOiBDb2x1bW5EZWZpbml0aW9uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0Q29sdW1uRW5hYmxlZChjb21wb3NpdGlvbklkLCB0aGlzLnRvQ29sdW1uSWQoY29sdW1uRGVmaW5pdGlvbklkKSwgdHJ1ZSk7XG5cdH1cblxuXHRkaXNhYmxlQ29sdW1uKGNvbHVtbkRlZmluaXRpb25JZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLnNldENvbHVtbkVuYWJsZWQoY29tcG9zaXRpb25JZCwgdGhpcy50b0NvbHVtbklkKGNvbHVtbkRlZmluaXRpb25JZCksIGZhbHNlKTtcblx0fVxuXG5cdG1vdmVMZWZ0KGNvbHVtbkRlZmluaXRpb25JZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLm1vdmVMZWZ0KGNvbXBvc2l0aW9uSWQsIHRoaXMudG9Db2x1bW5JZChjb2x1bW5EZWZpbml0aW9uSWQpKTtcblx0fVxuXG5cdG1vdmVSaWdodChjb2x1bW5EZWZpbml0aW9uSWQ6IENvbHVtbkRlZmluaXRpb25JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5tb3ZlUmlnaHQoY29tcG9zaXRpb25JZCwgdGhpcy50b0NvbHVtbklkKGNvbHVtbkRlZmluaXRpb25JZCkpO1xuXHR9XG5cblx0cHJpdmF0ZSB0b0NvbHVtbklkKGRlZklkOiBDb2x1bW5EZWZpbml0aW9uSWQpOiBDb2x1bW5JZCB7XG5cdFx0cmV0dXJuIG5ldyBDb2x1bW5JZChkZWZJZC5nZXRJZCgpKTtcblx0fVxufVxuIl19