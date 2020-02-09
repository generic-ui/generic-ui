/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CompositionDispatcher } from '../domain/command/composition.dispatcher';
import { globalCompositionId } from '../domain/global-composition-id';
var CompositionCommandService = /** @class */ (function () {
    function CompositionCommandService(compositionDispatcher) {
        this.compositionDispatcher = compositionDispatcher;
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandService.prototype.init = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        this.compositionDispatcher.init(compositionId);
    };
    /**
     * @param {?} params
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandService.prototype.setColumns = /**
     * @param {?} params
     * @param {?=} compositionId
     * @return {?}
     */
    function (params, compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        this.compositionDispatcher.setColumns(compositionId, params);
    };
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandService.prototype.setWidth = /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    function (width, compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        this.compositionDispatcher.setWidth(compositionId, width);
    };
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandService.prototype.setContainerWidth = /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    function (width, compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        this.compositionDispatcher.setContainerWidth(compositionId, width);
    };
    /**
     * @param {?} enabled
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandService.prototype.setResizeWidth = /**
     * @param {?} enabled
     * @param {?=} compositionId
     * @return {?}
     */
    function (enabled, compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        this.compositionDispatcher.setResizeWidth(compositionId, enabled);
    };
    /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandService.prototype.enableColumn = /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    function (columnId, compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        this.compositionDispatcher.setColumnEnabled(compositionId, columnId, true);
    };
    /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandService.prototype.disableColumn = /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    function (columnId, compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        this.compositionDispatcher.setColumnEnabled(compositionId, columnId, false);
    };
    /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandService.prototype.moveLeft = /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    function (columnId, compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        this.compositionDispatcher.moveLeft(compositionId, columnId);
    };
    /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandService.prototype.moveRight = /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    function (columnId, compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        this.compositionDispatcher.moveRight(compositionId, columnId);
    };
    CompositionCommandService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionCommandService.ctorParameters = function () { return [
        { type: CompositionDispatcher }
    ]; };
    return CompositionCommandService;
}());
export { CompositionCommandService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionCommandService.prototype.compositionDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uY29tbWFuZC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vdWktYXBpL2NvbXBvc2l0aW9uLmNvbW1hbmQtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUVqRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUt0RTtJQUdDLG1DQUFvQixxQkFBNEM7UUFBNUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUNoRSxDQUFDOzs7OztJQUVELHdDQUFJOzs7O0lBQUosVUFBSyxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUN0RCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7OztJQUVELDhDQUFVOzs7OztJQUFWLFVBQVcsTUFBMkIsRUFBRSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUN6RixJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7SUFFRCw0Q0FBUTs7Ozs7SUFBUixVQUFTLEtBQWEsRUFBRSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUN6RSxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7SUFFRCxxREFBaUI7Ozs7O0lBQWpCLFVBQWtCLEtBQWEsRUFBRSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUNsRixJQUFJLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7OztJQUVELGtEQUFjOzs7OztJQUFkLFVBQWUsT0FBZ0IsRUFBRSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUNsRixJQUFJLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7SUFFRCxnREFBWTs7Ozs7SUFBWixVQUFhLFFBQWtCLEVBQUUsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDbEYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Ozs7O0lBRUQsaURBQWE7Ozs7O0lBQWIsVUFBYyxRQUFrQixFQUFFLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQ25GLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7OztJQUVELDRDQUFROzs7OztJQUFSLFVBQVMsUUFBa0IsRUFBRSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUM5RSxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7SUFFRCw2Q0FBUzs7Ozs7SUFBVCxVQUFVLFFBQWtCLEVBQUUsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDL0UsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Z0JBeENELFVBQVU7Ozs7Z0JBUEYscUJBQXFCOztJQWlEOUIsZ0NBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQXpDWSx5QkFBeUI7Ozs7OztJQUV6QiwwREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbXBvc2l0aW9uLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uL2RvbWFpbi9jb21wb3NpdGlvbi1pZCc7XG5pbXBvcnQgeyBnbG9iYWxDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vZG9tYWluL2dsb2JhbC1jb21wb3NpdGlvbi1pZCc7XG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb2x1bW4vc2V0LWNvbHVtbnMvY29sdW1uLnBhcmFtcyc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9jb2x1bW4uaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvc2l0aW9uRGlzcGF0Y2hlcjogQ29tcG9zaXRpb25EaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRpbml0KGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuaW5pdChjb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdHNldENvbHVtbnMocGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+LCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gZ2xvYmFsQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLnNldENvbHVtbnMoY29tcG9zaXRpb25JZCwgcGFyYW1zKTtcblx0fVxuXG5cdHNldFdpZHRoKHdpZHRoOiBudW1iZXIsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0V2lkdGgoY29tcG9zaXRpb25JZCwgd2lkdGgpO1xuXHR9XG5cblx0c2V0Q29udGFpbmVyV2lkdGgod2lkdGg6IG51bWJlciwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5zZXRDb250YWluZXJXaWR0aChjb21wb3NpdGlvbklkLCB3aWR0aCk7XG5cdH1cblxuXHRzZXRSZXNpemVXaWR0aChlbmFibGVkOiBib29sZWFuLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gZ2xvYmFsQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLnNldFJlc2l6ZVdpZHRoKGNvbXBvc2l0aW9uSWQsIGVuYWJsZWQpO1xuXHR9XG5cblx0ZW5hYmxlQ29sdW1uKGNvbHVtbklkOiBDb2x1bW5JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5zZXRDb2x1bW5FbmFibGVkKGNvbXBvc2l0aW9uSWQsIGNvbHVtbklkLCB0cnVlKTtcblx0fVxuXG5cdGRpc2FibGVDb2x1bW4oY29sdW1uSWQ6IENvbHVtbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gZ2xvYmFsQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLnNldENvbHVtbkVuYWJsZWQoY29tcG9zaXRpb25JZCwgY29sdW1uSWQsIGZhbHNlKTtcblx0fVxuXG5cdG1vdmVMZWZ0KGNvbHVtbklkOiBDb2x1bW5JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5tb3ZlTGVmdChjb21wb3NpdGlvbklkLCBjb2x1bW5JZCk7XG5cdH1cblxuXHRtb3ZlUmlnaHQoY29sdW1uSWQ6IENvbHVtbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gZ2xvYmFsQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLm1vdmVSaWdodChjb21wb3NpdGlvbklkLCBjb2x1bW5JZCk7XG5cdH1cblxufVxuIl19