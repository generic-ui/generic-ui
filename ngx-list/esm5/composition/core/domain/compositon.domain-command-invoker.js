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
var CompositionDomainCommandInvoker = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionDomainCommandInvoker, _super);
    function CompositionDomainCommandInvoker(compositionDispatcher, compositionGroupRepository) {
        var _this = _super.call(this) || this;
        _this.compositionDispatcher = compositionDispatcher;
        _this.compositionGroupRepository = compositionGroupRepository;
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
        { type: CompositionGroupArchive }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRvbi5kb21haW4tY29tbWFuZC1pbnZva2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb21wb3NpdG9uLmRvbWFpbi1jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUl6RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQztJQUNxRCwyREFBeUI7SUFFN0UseUNBQTZCLHFCQUE0QyxFQUNyRCwwQkFBbUQ7UUFEdkUsWUFFQyxpQkFBTyxTQUNQO1FBSDRCLDJCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDckQsZ0NBQTBCLEdBQTFCLDBCQUEwQixDQUF5Qjs7SUFFdkUsQ0FBQzs7Ozs7SUFFRCxnREFBTTs7OztJQUFOLFVBQU8sYUFBNEI7UUFDbEMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7OztJQUVELG9EQUFVOzs7OztJQUFWLFVBQVcsTUFBMkIsRUFBRSxhQUE0QjtRQUNuRSxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7SUFFRCxtREFBUzs7Ozs7SUFBVCxVQUFVLE9BQVksRUFBRSxhQUE0QjtRQUNuRCwyRkFBMkY7UUFDM0YsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7O0lBRUQsa0RBQVE7Ozs7O0lBQVIsVUFBUyxLQUFhLEVBQUUsYUFBNEI7UUFDbkQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7O0lBRUQsMkRBQWlCOzs7OztJQUFqQixVQUFrQixLQUFhLEVBQUUsYUFBNEI7UUFDNUQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7Ozs7SUFFRCx3REFBYzs7Ozs7SUFBZCxVQUFlLE9BQWdCLEVBQUUsYUFBNEI7UUFDNUQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7O0lBRUQsc0RBQVk7Ozs7O0lBQVosVUFBYSxrQkFBc0MsRUFBRSxhQUE0QjtRQUNoRixJQUFJLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RyxDQUFDOzs7Ozs7SUFFRCx1REFBYTs7Ozs7SUFBYixVQUFjLGtCQUFzQyxFQUFFLGFBQTRCO1FBQ2pGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hHLENBQUM7Ozs7OztJQUVELGtEQUFROzs7OztJQUFSLFVBQVMsa0JBQXNDLEVBQUUsYUFBNEI7UUFDNUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQzs7Ozs7O0lBRUQsbURBQVM7Ozs7O0lBQVQsVUFBVSxrQkFBc0MsRUFBRSxhQUE0QjtRQUM3RSxJQUFJLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDOzs7Ozs7SUFFTyxvREFBVTs7Ozs7SUFBbEIsVUFBbUIsS0FBeUI7UUFDM0MsT0FBTyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDOztnQkFuREQsVUFBVTs7OztnQkFURixxQkFBcUI7Z0JBQ3JCLHVCQUF1Qjs7SUE0RGhDLHNDQUFDO0NBQUEsQUFwREQsQ0FDcUQseUJBQXlCLEdBbUQ3RTtTQW5EWSwrQkFBK0I7Ozs7OztJQUUvQixnRUFBNkQ7Ozs7O0lBQ3RFLHFFQUFvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvc2l0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4vY29tcG9zaXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkdyb3VwQXJjaGl2ZSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2dyb3VwL2NvbXBvc2l0aW9uLWdyb3VwLmFyY2hpdmUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29sdW1uUGFyYW1zIH0gZnJvbSAnLi9jb2x1bW4vc2V0LWNvbHVtbnMvY29sdW1uLnBhcmFtcyc7XG5pbXBvcnQgeyBDb2x1bW5EZWZpbml0aW9uSWQgfSBmcm9tICcuLi9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uLWlkJztcbmltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi4vYXBpL2NvbHVtbi9jb2x1bW4uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uL2FwaS9jb21wb3NpdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25Eb21haW5Db21tYW5kSW52b2tlciBleHRlbmRzIENvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25EaXNwYXRjaGVyOiBDb21wb3NpdGlvbkRpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25Hcm91cFJlcG9zaXRvcnk6IENvbXBvc2l0aW9uR3JvdXBBcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGNyZWF0ZShjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuY3JlYXRlQ29tcG9zaXRpb24oY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRzZXRDb2x1bW5zKHBhcmFtczogQXJyYXk8Q29sdW1uUGFyYW1zPiwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLnNldENvbHVtbnMoY29tcG9zaXRpb25JZCwgcGFyYW1zKTtcblx0fVxuXG5cdHNldEdyb3Vwcyhjb25maWdzOiBhbnksIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHQvLyB0aGlzLmNvbXBvc2l0aW9uR3JvdXBSZXBvc2l0b3J5Lm5leHQoY29tcG9zaXRpb25JZCwgQ29tcG9zaXRpb25Hcm91cFJlcG9zaXRvcnkuZGVmYXVsdCk7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0R3JvdXBzKGNvbXBvc2l0aW9uSWQsIGNvbmZpZ3MpO1xuXHR9XG5cblx0c2V0V2lkdGgod2lkdGg6IG51bWJlciwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLnNldFdpZHRoKGNvbXBvc2l0aW9uSWQsIHdpZHRoKTtcblx0fVxuXG5cdHNldENvbnRhaW5lcldpZHRoKHdpZHRoOiBudW1iZXIsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5zZXRDb250YWluZXJXaWR0aChjb21wb3NpdGlvbklkLCB3aWR0aCk7XG5cdH1cblxuXHRzZXRSZXNpemVXaWR0aChlbmFibGVkOiBib29sZWFuLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0UmVzaXplV2lkdGgoY29tcG9zaXRpb25JZCwgZW5hYmxlZCk7XG5cdH1cblxuXHRlbmFibGVDb2x1bW4oY29sdW1uRGVmaW5pdGlvbklkOiBDb2x1bW5EZWZpbml0aW9uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5zZXRDb2x1bW5FbmFibGVkKGNvbXBvc2l0aW9uSWQsIHRoaXMudG9Db2x1bW5JZChjb2x1bW5EZWZpbml0aW9uSWQpLCB0cnVlKTtcblx0fVxuXG5cdGRpc2FibGVDb2x1bW4oY29sdW1uRGVmaW5pdGlvbklkOiBDb2x1bW5EZWZpbml0aW9uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5zZXRDb2x1bW5FbmFibGVkKGNvbXBvc2l0aW9uSWQsIHRoaXMudG9Db2x1bW5JZChjb2x1bW5EZWZpbml0aW9uSWQpLCBmYWxzZSk7XG5cdH1cblxuXHRtb3ZlTGVmdChjb2x1bW5EZWZpbml0aW9uSWQ6IENvbHVtbkRlZmluaXRpb25JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLm1vdmVMZWZ0KGNvbXBvc2l0aW9uSWQsIHRoaXMudG9Db2x1bW5JZChjb2x1bW5EZWZpbml0aW9uSWQpKTtcblx0fVxuXG5cdG1vdmVSaWdodChjb2x1bW5EZWZpbml0aW9uSWQ6IENvbHVtbkRlZmluaXRpb25JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLm1vdmVSaWdodChjb21wb3NpdGlvbklkLCB0aGlzLnRvQ29sdW1uSWQoY29sdW1uRGVmaW5pdGlvbklkKSk7XG5cdH1cblxuXHRwcml2YXRlIHRvQ29sdW1uSWQoZGVmSWQ6IENvbHVtbkRlZmluaXRpb25JZCk6IENvbHVtbklkIHtcblx0XHRyZXR1cm4gbmV3IENvbHVtbklkKGRlZklkLmdldElkKCkpO1xuXHR9XG59XG4iXX0=