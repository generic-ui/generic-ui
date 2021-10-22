/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CompositionDispatcher } from './composition.dispatcher';
import { CompositionGroupArchive } from '../domain-read/group/composition-group.archive';
import { ColumnId } from '../api/column/column.id';
import { CompositionCommandInvoker } from '../api/composition.command-invoker';
import { Injectable } from '@angular/core';
import { ColumnHighlightArchive } from './highlight/column-highlight.archive';
var CompositionDomainCommandInvoker = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionDomainCommandInvoker, _super);
    function CompositionDomainCommandInvoker(compositionDispatcher, compositionGroupRepository, columnHighlightArchive) {
        var _this = _super.call(this) || this;
        _this.compositionDispatcher = compositionDispatcher;
        _this.compositionGroupRepository = compositionGroupRepository;
        _this.columnHighlightArchive = columnHighlightArchive;
        return _this;
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    CompositionDomainCommandInvoker.prototype.create = /**
     * @param {?} compositionId
     * @return {?}
     */
    function (compositionId) {
        this.compositionDispatcher.createComposition(compositionId);
    };
    /**
     * @param {?} params
     * @param {?} compositionId
     * @return {?}
     */
    CompositionDomainCommandInvoker.prototype.setColumns = /**
     * @param {?} params
     * @param {?} compositionId
     * @return {?}
     */
    function (params, compositionId) {
        this.compositionDispatcher.setColumns(compositionId, params);
    };
    /**
     * @param {?} configs
     * @param {?} compositionId
     * @return {?}
     */
    CompositionDomainCommandInvoker.prototype.setGroups = /**
     * @param {?} configs
     * @param {?} compositionId
     * @return {?}
     */
    function (configs, compositionId) {
        // this.compositionGroupRepository.next(compositionId, CompositionGroupRepository.default);
        this.compositionDispatcher.setGroups(compositionId, configs);
    };
    /**
     * @param {?} width
     * @param {?} compositionId
     * @return {?}
     */
    CompositionDomainCommandInvoker.prototype.setWidth = /**
     * @param {?} width
     * @param {?} compositionId
     * @return {?}
     */
    function (width, compositionId) {
        this.compositionDispatcher.setWidth(compositionId, width);
    };
    /**
     * @param {?} width
     * @param {?} compositionId
     * @return {?}
     */
    CompositionDomainCommandInvoker.prototype.setContainerWidth = /**
     * @param {?} width
     * @param {?} compositionId
     * @return {?}
     */
    function (width, compositionId) {
        this.compositionDispatcher.setContainerWidth(compositionId, width);
    };
    /**
     * @param {?} enabled
     * @param {?} compositionId
     * @return {?}
     */
    CompositionDomainCommandInvoker.prototype.setResizeWidth = /**
     * @param {?} enabled
     * @param {?} compositionId
     * @return {?}
     */
    function (enabled, compositionId) {
        this.compositionDispatcher.setResizeWidth(compositionId, enabled);
    };
    /**
     * @param {?} columnDefinitionId
     * @param {?} compositionId
     * @return {?}
     */
    CompositionDomainCommandInvoker.prototype.enableColumn = /**
     * @param {?} columnDefinitionId
     * @param {?} compositionId
     * @return {?}
     */
    function (columnDefinitionId, compositionId) {
        this.compositionDispatcher.setColumnEnabled(compositionId, this.toColumnId(columnDefinitionId), true);
    };
    /**
     * @param {?} columnDefinitionId
     * @param {?} compositionId
     * @return {?}
     */
    CompositionDomainCommandInvoker.prototype.disableColumn = /**
     * @param {?} columnDefinitionId
     * @param {?} compositionId
     * @return {?}
     */
    function (columnDefinitionId, compositionId) {
        this.compositionDispatcher.setColumnEnabled(compositionId, this.toColumnId(columnDefinitionId), false);
    };
    /**
     * @param {?} columnDefinitionId
     * @param {?} compositionId
     * @return {?}
     */
    CompositionDomainCommandInvoker.prototype.moveLeft = /**
     * @param {?} columnDefinitionId
     * @param {?} compositionId
     * @return {?}
     */
    function (columnDefinitionId, compositionId) {
        this.compositionDispatcher.moveLeft(compositionId, this.toColumnId(columnDefinitionId));
    };
    /**
     * @param {?} columnDefinitionId
     * @param {?} compositionId
     * @return {?}
     */
    CompositionDomainCommandInvoker.prototype.moveRight = /**
     * @param {?} columnDefinitionId
     * @param {?} compositionId
     * @return {?}
     */
    function (columnDefinitionId, compositionId) {
        this.compositionDispatcher.moveRight(compositionId, this.toColumnId(columnDefinitionId));
    };
    /**
     * @param {?} columnDefinitionId
     * @param {?} compositionId
     * @return {?}
     */
    CompositionDomainCommandInvoker.prototype.highlightColumn = /**
     * @param {?} columnDefinitionId
     * @param {?} compositionId
     * @return {?}
     */
    function (columnDefinitionId, compositionId) {
        this.columnHighlightArchive.toggle(compositionId, new ColumnId(columnDefinitionId.getId()));
    };
    /**
     * @private
     * @param {?} defId
     * @return {?}
     */
    CompositionDomainCommandInvoker.prototype.toColumnId = /**
     * @private
     * @param {?} defId
     * @return {?}
     */
    function (defId) {
        return new ColumnId(defId.getId());
    };
    CompositionDomainCommandInvoker.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionDomainCommandInvoker.ctorParameters = function () { return [
        { type: CompositionDispatcher },
        { type: CompositionGroupArchive },
        { type: ColumnHighlightArchive }
    ]; };
    return CompositionDomainCommandInvoker;
}(CompositionCommandInvoker));
export { CompositionDomainCommandInvoker };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRvbi5kb21haW4tY29tbWFuZC1pbnZva2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb21wb3NpdG9uLmRvbWFpbi1jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUl6RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUU5RTtJQUNxRCwyREFBeUI7SUFFN0UseUNBQTZCLHFCQUE0QyxFQUNyRCwwQkFBbUQsRUFDbkQsc0JBQThDO1FBRmxFLFlBR0MsaUJBQU8sU0FDUDtRQUo0QiwyQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQ3JELGdDQUEwQixHQUExQiwwQkFBMEIsQ0FBeUI7UUFDbkQsNEJBQXNCLEdBQXRCLHNCQUFzQixDQUF3Qjs7SUFFbEUsQ0FBQzs7Ozs7SUFFRCxnREFBTTs7OztJQUFOLFVBQU8sYUFBNEI7UUFDbEMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7OztJQUVELG9EQUFVOzs7OztJQUFWLFVBQVcsTUFBMkIsRUFBRSxhQUE0QjtRQUNuRSxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7SUFFRCxtREFBUzs7Ozs7SUFBVCxVQUFVLE9BQVksRUFBRSxhQUE0QjtRQUNuRCwyRkFBMkY7UUFDM0YsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7O0lBRUQsa0RBQVE7Ozs7O0lBQVIsVUFBUyxLQUFhLEVBQUUsYUFBNEI7UUFDbkQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7O0lBRUQsMkRBQWlCOzs7OztJQUFqQixVQUFrQixLQUFhLEVBQUUsYUFBNEI7UUFDNUQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7Ozs7SUFFRCx3REFBYzs7Ozs7SUFBZCxVQUFlLE9BQWdCLEVBQUUsYUFBNEI7UUFDNUQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7O0lBRUQsc0RBQVk7Ozs7O0lBQVosVUFBYSxrQkFBc0MsRUFBRSxhQUE0QjtRQUNoRixJQUFJLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RyxDQUFDOzs7Ozs7SUFFRCx1REFBYTs7Ozs7SUFBYixVQUFjLGtCQUFzQyxFQUFFLGFBQTRCO1FBQ2pGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hHLENBQUM7Ozs7OztJQUVELGtEQUFROzs7OztJQUFSLFVBQVMsa0JBQXNDLEVBQUUsYUFBNEI7UUFDNUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQzs7Ozs7O0lBRUQsbURBQVM7Ozs7O0lBQVQsVUFBVSxrQkFBc0MsRUFBRSxhQUE0QjtRQUM3RSxJQUFJLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDOzs7Ozs7SUFFRCx5REFBZTs7Ozs7SUFBZixVQUFnQixrQkFBc0MsRUFBRSxhQUE0QjtRQUNuRixJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxJQUFJLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDNUYsQ0FBQzs7Ozs7O0lBRU8sb0RBQVU7Ozs7O0lBQWxCLFVBQW1CLEtBQXlCO1FBQzNDLE9BQU8sSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Z0JBeERELFVBQVU7Ozs7Z0JBVkYscUJBQXFCO2dCQUNyQix1QkFBdUI7Z0JBT3ZCLHNCQUFzQjs7SUEyRC9CLHNDQUFDO0NBQUEsQUF6REQsQ0FDcUQseUJBQXlCLEdBd0Q3RTtTQXhEWSwrQkFBK0I7Ozs7OztJQUUvQixnRUFBNkQ7Ozs7O0lBQ3RFLHFFQUFvRTs7Ozs7SUFDcEUsaUVBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9zaXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5kaXNwYXRjaGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uR3JvdXBBcmNoaXZlIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvZ3JvdXAvY29tcG9zaXRpb24tZ3JvdXAuYXJjaGl2ZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vYXBpL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4vY29sdW1uL3NldC1jb2x1bW5zL2NvbHVtbi5wYXJhbXMnO1xuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbklkIH0gZnJvbSAnLi4vYXBpL2NvbHVtbi9jb2x1bW4tZGVmaW5pdGlvbi1pZCc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4uL2FwaS9jb2x1bW4vY29sdW1uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi9hcGkvY29tcG9zaXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbHVtbkhpZ2hsaWdodEFyY2hpdmUgfSBmcm9tICcuL2hpZ2hsaWdodC9jb2x1bW4taGlnaGxpZ2h0LmFyY2hpdmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25Eb21haW5Db21tYW5kSW52b2tlciBleHRlbmRzIENvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25EaXNwYXRjaGVyOiBDb21wb3NpdGlvbkRpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25Hcm91cFJlcG9zaXRvcnk6IENvbXBvc2l0aW9uR3JvdXBBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkhpZ2hsaWdodEFyY2hpdmU6IENvbHVtbkhpZ2hsaWdodEFyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Y3JlYXRlKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5jcmVhdGVDb21wb3NpdGlvbihjb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdHNldENvbHVtbnMocGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+LCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0Q29sdW1ucyhjb21wb3NpdGlvbklkLCBwYXJhbXMpO1xuXHR9XG5cblx0c2V0R3JvdXBzKGNvbmZpZ3M6IGFueSwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdC8vIHRoaXMuY29tcG9zaXRpb25Hcm91cFJlcG9zaXRvcnkubmV4dChjb21wb3NpdGlvbklkLCBDb21wb3NpdGlvbkdyb3VwUmVwb3NpdG9yeS5kZWZhdWx0KTtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5zZXRHcm91cHMoY29tcG9zaXRpb25JZCwgY29uZmlncyk7XG5cdH1cblxuXHRzZXRXaWR0aCh3aWR0aDogbnVtYmVyLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0V2lkdGgoY29tcG9zaXRpb25JZCwgd2lkdGgpO1xuXHR9XG5cblx0c2V0Q29udGFpbmVyV2lkdGgod2lkdGg6IG51bWJlciwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLnNldENvbnRhaW5lcldpZHRoKGNvbXBvc2l0aW9uSWQsIHdpZHRoKTtcblx0fVxuXG5cdHNldFJlc2l6ZVdpZHRoKGVuYWJsZWQ6IGJvb2xlYW4sIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5zZXRSZXNpemVXaWR0aChjb21wb3NpdGlvbklkLCBlbmFibGVkKTtcblx0fVxuXG5cdGVuYWJsZUNvbHVtbihjb2x1bW5EZWZpbml0aW9uSWQ6IENvbHVtbkRlZmluaXRpb25JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLnNldENvbHVtbkVuYWJsZWQoY29tcG9zaXRpb25JZCwgdGhpcy50b0NvbHVtbklkKGNvbHVtbkRlZmluaXRpb25JZCksIHRydWUpO1xuXHR9XG5cblx0ZGlzYWJsZUNvbHVtbihjb2x1bW5EZWZpbml0aW9uSWQ6IENvbHVtbkRlZmluaXRpb25JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLnNldENvbHVtbkVuYWJsZWQoY29tcG9zaXRpb25JZCwgdGhpcy50b0NvbHVtbklkKGNvbHVtbkRlZmluaXRpb25JZCksIGZhbHNlKTtcblx0fVxuXG5cdG1vdmVMZWZ0KGNvbHVtbkRlZmluaXRpb25JZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIubW92ZUxlZnQoY29tcG9zaXRpb25JZCwgdGhpcy50b0NvbHVtbklkKGNvbHVtbkRlZmluaXRpb25JZCkpO1xuXHR9XG5cblx0bW92ZVJpZ2h0KGNvbHVtbkRlZmluaXRpb25JZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIubW92ZVJpZ2h0KGNvbXBvc2l0aW9uSWQsIHRoaXMudG9Db2x1bW5JZChjb2x1bW5EZWZpbml0aW9uSWQpKTtcblx0fVxuXG5cdGhpZ2hsaWdodENvbHVtbihjb2x1bW5EZWZpbml0aW9uSWQ6IENvbHVtbkRlZmluaXRpb25JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHRoaXMuY29sdW1uSGlnaGxpZ2h0QXJjaGl2ZS50b2dnbGUoY29tcG9zaXRpb25JZCwgbmV3IENvbHVtbklkKGNvbHVtbkRlZmluaXRpb25JZC5nZXRJZCgpKSlcblx0fVxuXG5cdHByaXZhdGUgdG9Db2x1bW5JZChkZWZJZDogQ29sdW1uRGVmaW5pdGlvbklkKTogQ29sdW1uSWQge1xuXHRcdHJldHVybiBuZXcgQ29sdW1uSWQoZGVmSWQuZ2V0SWQoKSk7XG5cdH1cbn1cbiJdfQ==