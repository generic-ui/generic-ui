/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { InitCompositionCommand } from './init/init-composition.command';
import { SetColumnsCommand } from './column/set-columns/set-columns.command';
import { SetCompositionWidthCommand } from './width/set-width/set-composition-width.command';
import { SetCompositionContainerWidthCommand } from './width/set-container-width/set-composition-container-width.command';
import { SetCompositionResizeWidthCommand } from './width/resize-width/set-composition-resize-width.command';
import { CompositionChangeSortStatusCommand } from './sort/composition-change-sort-status.command';
var CompositionDispatcher = /** @class */ (function () {
    function CompositionDispatcher(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    CompositionDispatcher.prototype.init = /**
     * @param {?} compositionId
     * @return {?}
     */
    function (compositionId) {
        this.commandDispatcher.dispatch(new InitCompositionCommand(compositionId));
    };
    /**
     * @param {?} compositionId
     * @param {?} params
     * @return {?}
     */
    CompositionDispatcher.prototype.setColumns = /**
     * @param {?} compositionId
     * @param {?} params
     * @return {?}
     */
    function (compositionId, params) {
        this.commandDispatcher.dispatch(new SetColumnsCommand(compositionId, params));
    };
    /**
     * @param {?} compositionId
     * @param {?} width
     * @return {?}
     */
    CompositionDispatcher.prototype.setWidth = /**
     * @param {?} compositionId
     * @param {?} width
     * @return {?}
     */
    function (compositionId, width) {
        this.commandDispatcher.dispatch(new SetCompositionWidthCommand(compositionId, width));
    };
    /**
     * @param {?} compositionId
     * @param {?} width
     * @return {?}
     */
    CompositionDispatcher.prototype.setContainerWidth = /**
     * @param {?} compositionId
     * @param {?} width
     * @return {?}
     */
    function (compositionId, width) {
        this.commandDispatcher.dispatch(new SetCompositionContainerWidthCommand(compositionId, width));
    };
    /**
     * @param {?} compositionId
     * @param {?} enabled
     * @return {?}
     */
    CompositionDispatcher.prototype.setResizeWidth = /**
     * @param {?} compositionId
     * @param {?} enabled
     * @return {?}
     */
    function (compositionId, enabled) {
        this.commandDispatcher.dispatch(new SetCompositionResizeWidthCommand(compositionId, enabled));
    };
    /**
     * @param {?} compositionId
     * @param {?} params
     * @return {?}
     */
    CompositionDispatcher.prototype.changeSort = /**
     * @param {?} compositionId
     * @param {?} params
     * @return {?}
     */
    function (compositionId, params) {
        this.commandDispatcher.dispatch(new CompositionChangeSortStatusCommand(compositionId, params));
    };
    CompositionDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionDispatcher.ctorParameters = function () { return [
        { type: CommandDispatcher }
    ]; };
    return CompositionDispatcher;
}());
export { CompositionDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionDispatcher.prototype.commandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC9jb21wb3NpdGlvbi5kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3ZELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQzFILE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBRTdHLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBR25HO0lBR0MsK0JBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3hELENBQUM7Ozs7O0lBRUQsb0NBQUk7Ozs7SUFBSixVQUFLLGFBQTRCO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7Ozs7OztJQUVELDBDQUFVOzs7OztJQUFWLFVBQVcsYUFBNEIsRUFBRSxNQUEyQjtRQUNuRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksaUJBQWlCLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQzs7Ozs7O0lBRUQsd0NBQVE7Ozs7O0lBQVIsVUFBUyxhQUE0QixFQUFFLEtBQWE7UUFDbkQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLDBCQUEwQixDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7Ozs7OztJQUVELGlEQUFpQjs7Ozs7SUFBakIsVUFBa0IsYUFBNEIsRUFBRSxLQUFhO1FBQzVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxtQ0FBbUMsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDOzs7Ozs7SUFFRCw4Q0FBYzs7Ozs7SUFBZCxVQUFlLGFBQTRCLEVBQUUsT0FBZ0I7UUFDNUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLGdDQUFnQyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQy9GLENBQUM7Ozs7OztJQUVELDBDQUFVOzs7OztJQUFWLFVBQVcsYUFBNEIsRUFBRSxNQUErQjtRQUN2RSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksa0NBQWtDLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDaEcsQ0FBQzs7Z0JBNUJELFVBQVU7Ozs7Z0JBYkYsaUJBQWlCOztJQTJDMUIsNEJBQUM7Q0FBQSxBQTlCRCxJQThCQztTQTdCWSxxQkFBcUI7Ozs7OztJQUVyQixrREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uL2NvbXBvc2l0aW9uLWlkJztcbmltcG9ydCB7IEluaXRDb21wb3NpdGlvbkNvbW1hbmQgfSBmcm9tICcuL2luaXQvaW5pdC1jb21wb3NpdGlvbi5jb21tYW5kJztcbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4vY29sdW1uL3NldC1jb2x1bW5zL2NvbHVtbi5wYXJhbXMnO1xuaW1wb3J0IHsgU2V0Q29sdW1uc0NvbW1hbmQgfSBmcm9tICcuL2NvbHVtbi9zZXQtY29sdW1ucy9zZXQtY29sdW1ucy5jb21tYW5kJztcbmltcG9ydCB7IFNldENvbXBvc2l0aW9uV2lkdGhDb21tYW5kIH0gZnJvbSAnLi93aWR0aC9zZXQtd2lkdGgvc2V0LWNvbXBvc2l0aW9uLXdpZHRoLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2V0Q29tcG9zaXRpb25Db250YWluZXJXaWR0aENvbW1hbmQgfSBmcm9tICcuL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvc2V0LWNvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC5jb21tYW5kJztcbmltcG9ydCB7IFNldENvbXBvc2l0aW9uUmVzaXplV2lkdGhDb21tYW5kIH0gZnJvbSAnLi93aWR0aC9yZXNpemUtd2lkdGgvc2V0LWNvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC5jb21tYW5kJztcbmltcG9ydCB7IENoYW5nZVNvcnRQYXJhbXMgfSBmcm9tICcuL3NvcnQvY2hhbmdlLXNvcnQucGFyYW1zJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0NvbW1hbmQgfSBmcm9tICcuL3NvcnQvY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmNvbW1hbmQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkRpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRpbml0KGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBJbml0Q29tcG9zaXRpb25Db21tYW5kKGNvbXBvc2l0aW9uSWQpKTtcblx0fVxuXG5cdHNldENvbHVtbnMoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCwgcGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+KTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0Q29sdW1uc0NvbW1hbmQoY29tcG9zaXRpb25JZCwgcGFyYW1zKSk7XG5cdH1cblxuXHRzZXRXaWR0aChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLCB3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0Q29tcG9zaXRpb25XaWR0aENvbW1hbmQoY29tcG9zaXRpb25JZCwgd2lkdGgpKTtcblx0fVxuXG5cdHNldENvbnRhaW5lcldpZHRoKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ29tbWFuZChjb21wb3NpdGlvbklkLCB3aWR0aCkpO1xuXHR9XG5cblx0c2V0UmVzaXplV2lkdGgoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCwgZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldENvbXBvc2l0aW9uUmVzaXplV2lkdGhDb21tYW5kKGNvbXBvc2l0aW9uSWQsIGVuYWJsZWQpKTtcblx0fVxuXG5cdGNoYW5nZVNvcnQoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCwgcGFyYW1zOiBBcnJheTxDaGFuZ2VTb3J0UGFyYW1zPik6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0NvbW1hbmQoY29tcG9zaXRpb25JZCwgcGFyYW1zKSk7XG5cdH1cblxufVxuIl19