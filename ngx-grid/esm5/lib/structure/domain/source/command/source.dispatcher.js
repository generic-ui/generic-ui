/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { SourceSetLoadingCommand } from './loading/source-set-loading.command';
import { SetOriginCommand } from './origin/set-origin/set-origin.command';
import { StructureEditSourceItemCommand } from './origin/edit/structure.edit-source-item.command';
var SourceDispatcher = /** @class */ (function () {
    function SourceDispatcher(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    SourceDispatcher.prototype.setLoading = /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    function (structureId, enabled) {
        this.commandDispatcher.dispatch(new SourceSetLoadingCommand(structureId, enabled));
    };
    /**
     * @param {?} structureId
     * @param {?} items
     * @return {?}
     */
    SourceDispatcher.prototype.setOrigin = /**
     * @param {?} structureId
     * @param {?} items
     * @return {?}
     */
    function (structureId, items) {
        this.commandDispatcher.dispatch(new SetOriginCommand(structureId, items));
    };
    /**
     * @param {?} structureId
     * @param {?} params
     * @return {?}
     */
    SourceDispatcher.prototype.editItem = /**
     * @param {?} structureId
     * @param {?} params
     * @return {?}
     */
    function (structureId, params) {
        this.commandDispatcher.dispatch(new StructureEditSourceItemCommand(structureId, params));
    };
    SourceDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SourceDispatcher.ctorParameters = function () { return [
        { type: CommandDispatcher }
    ]; };
    return SourceDispatcher;
}());
export { SourceDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceDispatcher.prototype.commandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9jb21tYW5kL3NvdXJjZS5kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3ZELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRTFFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBR2xHO0lBR0MsMEJBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3hELENBQUM7Ozs7OztJQUVELHFDQUFVOzs7OztJQUFWLFVBQVcsV0FBd0IsRUFBRSxPQUFnQjtRQUNwRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksdUJBQXVCLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDcEYsQ0FBQzs7Ozs7O0lBRUQsb0NBQVM7Ozs7O0lBQVQsVUFBVSxXQUF3QixFQUFFLEtBQWlCO1FBQ3BELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7Ozs7SUFFRCxtQ0FBUTs7Ozs7SUFBUixVQUFTLFdBQXdCLEVBQUUsTUFBcUM7UUFDdkUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLDhCQUE4QixDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7O2dCQWhCRCxVQUFVOzs7O2dCQVRGLGlCQUFpQjs7SUEyQjFCLHVCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FqQlksZ0JBQWdCOzs7Ozs7SUFFaEIsNkNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFNvdXJjZVNldExvYWRpbmdDb21tYW5kIH0gZnJvbSAnLi9sb2FkaW5nL3NvdXJjZS1zZXQtbG9hZGluZy5jb21tYW5kJztcbmltcG9ydCB7IFNldE9yaWdpbkNvbW1hbmQgfSBmcm9tICcuL29yaWdpbi9zZXQtb3JpZ2luL3NldC1vcmlnaW4uY29tbWFuZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyB9IGZyb20gJy4vb3JpZ2luL2VkaXQvc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0ucGFyYW1zJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtQ29tbWFuZCB9IGZyb20gJy4vb3JpZ2luL2VkaXQvc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0uY29tbWFuZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNvdXJjZURpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRzZXRMb2FkaW5nKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCwgZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNvdXJjZVNldExvYWRpbmdDb21tYW5kKHN0cnVjdHVyZUlkLCBlbmFibGVkKSk7XG5cdH1cblxuXHRzZXRPcmlnaW4oc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLCBpdGVtczogQXJyYXk8YW55Pik6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldE9yaWdpbkNvbW1hbmQoc3RydWN0dXJlSWQsIGl0ZW1zKSk7XG5cdH1cblxuXHRlZGl0SXRlbShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsIHBhcmFtczogU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbUNvbW1hbmQoc3RydWN0dXJlSWQsIHBhcmFtcykpO1xuXHR9XG5cbn1cbiJdfQ==