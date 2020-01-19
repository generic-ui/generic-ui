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
import { CompositionChangeSortStatusCommand } from './column/sort/composition-change-sort-status.command';
import { CompositionSetColumnEnabledCommand } from './column/set-enabled/composition.set-column-enabled.command';
export class CompositionDispatcher {
    /**
     * @param {?} commandDispatcher
     */
    constructor(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    init(compositionId) {
        this.commandDispatcher.dispatch(new InitCompositionCommand(compositionId));
    }
    /**
     * @param {?} compositionId
     * @param {?} params
     * @return {?}
     */
    setColumns(compositionId, params) {
        this.commandDispatcher.dispatch(new SetColumnsCommand(compositionId, params));
    }
    /**
     * @param {?} compositionId
     * @param {?} width
     * @return {?}
     */
    setWidth(compositionId, width) {
        this.commandDispatcher.dispatch(new SetCompositionWidthCommand(compositionId, width));
    }
    /**
     * @param {?} compositionId
     * @param {?} width
     * @return {?}
     */
    setContainerWidth(compositionId, width) {
        this.commandDispatcher.dispatch(new SetCompositionContainerWidthCommand(compositionId, width));
    }
    /**
     * @param {?} compositionId
     * @param {?} enabled
     * @return {?}
     */
    setResizeWidth(compositionId, enabled) {
        this.commandDispatcher.dispatch(new SetCompositionResizeWidthCommand(compositionId, enabled));
    }
    /**
     * @param {?} compositionId
     * @param {?} params
     * @return {?}
     */
    changeSort(compositionId, params) {
        this.commandDispatcher.dispatch(new CompositionChangeSortStatusCommand(compositionId, params));
    }
    /**
     * @param {?} compositionId
     * @param {?} columnId
     * @param {?} enabled
     * @return {?}
     */
    setColumnEnabled(compositionId, columnId, enabled) {
        this.commandDispatcher.dispatch(new CompositionSetColumnEnabledCommand(compositionId, columnId, enabled));
    }
}
CompositionDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionDispatcher.ctorParameters = () => [
    { type: CommandDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionDispatcher.prototype.commandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC9jb21wb3NpdGlvbi5kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3ZELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQzFILE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBRTdHLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRTFHLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBSWpILE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFFakMsWUFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDeEQsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsYUFBNEI7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Ozs7O0lBRUQsVUFBVSxDQUFDLGFBQTRCLEVBQUUsTUFBMkI7UUFDbkUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxhQUE0QixFQUFFLEtBQWE7UUFDbkQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLDBCQUEwQixDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFDLGFBQTRCLEVBQUUsS0FBYTtRQUM1RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksbUNBQW1DLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDaEcsQ0FBQzs7Ozs7O0lBRUQsY0FBYyxDQUFDLGFBQTRCLEVBQUUsT0FBZ0I7UUFDNUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLGdDQUFnQyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQy9GLENBQUM7Ozs7OztJQUVELFVBQVUsQ0FBQyxhQUE0QixFQUFFLE1BQStCO1FBQ3ZFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxrQ0FBa0MsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDOzs7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsYUFBNEIsRUFBRSxRQUFrQixFQUFFLE9BQWdCO1FBQ2xGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxrQ0FBa0MsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDM0csQ0FBQzs7O1lBaENELFVBQVU7Ozs7WUFmRixpQkFBaUI7Ozs7Ozs7SUFrQmIsa0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi9jb21wb3NpdGlvbi1pZCc7XG5pbXBvcnQgeyBJbml0Q29tcG9zaXRpb25Db21tYW5kIH0gZnJvbSAnLi9pbml0L2luaXQtY29tcG9zaXRpb24uY29tbWFuZCc7XG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuL2NvbHVtbi9zZXQtY29sdW1ucy9jb2x1bW4ucGFyYW1zJztcbmltcG9ydCB7IFNldENvbHVtbnNDb21tYW5kIH0gZnJvbSAnLi9jb2x1bW4vc2V0LWNvbHVtbnMvc2V0LWNvbHVtbnMuY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRDb21wb3NpdGlvbldpZHRoQ29tbWFuZCB9IGZyb20gJy4vd2lkdGgvc2V0LXdpZHRoL3NldC1jb21wb3NpdGlvbi13aWR0aC5jb21tYW5kJztcbmltcG9ydCB7IFNldENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDb21tYW5kIH0gZnJvbSAnLi93aWR0aC9zZXQtY29udGFpbmVyLXdpZHRoL3NldC1jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGguY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRDb21wb3NpdGlvblJlc2l6ZVdpZHRoQ29tbWFuZCB9IGZyb20gJy4vd2lkdGgvcmVzaXplLXdpZHRoL3NldC1jb21wb3NpdGlvbi1yZXNpemUtd2lkdGguY29tbWFuZCc7XG5pbXBvcnQgeyBDaGFuZ2VTb3J0UGFyYW1zIH0gZnJvbSAnLi9jb2x1bW4vc29ydC9jaGFuZ2Utc29ydC5wYXJhbXMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQ29tbWFuZCB9IGZyb20gJy4vY29sdW1uL3NvcnQvY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuL2NvbHVtbi9jb2x1bW4uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25TZXRDb2x1bW5FbmFibGVkQ29tbWFuZCB9IGZyb20gJy4vY29sdW1uL3NldC1lbmFibGVkL2NvbXBvc2l0aW9uLnNldC1jb2x1bW4tZW5hYmxlZC5jb21tYW5kJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25EaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0aW5pdChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgSW5pdENvbXBvc2l0aW9uQ29tbWFuZChjb21wb3NpdGlvbklkKSk7XG5cdH1cblxuXHRzZXRDb2x1bW5zKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIHBhcmFtczogQXJyYXk8Q29sdW1uUGFyYW1zPik6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldENvbHVtbnNDb21tYW5kKGNvbXBvc2l0aW9uSWQsIHBhcmFtcykpO1xuXHR9XG5cblx0c2V0V2lkdGgoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCwgd2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldENvbXBvc2l0aW9uV2lkdGhDb21tYW5kKGNvbXBvc2l0aW9uSWQsIHdpZHRoKSk7XG5cdH1cblxuXHRzZXRDb250YWluZXJXaWR0aChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLCB3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0Q29tcG9zaXRpb25Db250YWluZXJXaWR0aENvbW1hbmQoY29tcG9zaXRpb25JZCwgd2lkdGgpKTtcblx0fVxuXG5cdHNldFJlc2l6ZVdpZHRoKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRDb21wb3NpdGlvblJlc2l6ZVdpZHRoQ29tbWFuZChjb21wb3NpdGlvbklkLCBlbmFibGVkKSk7XG5cdH1cblxuXHRjaGFuZ2VTb3J0KGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIHBhcmFtczogQXJyYXk8Q2hhbmdlU29ydFBhcmFtcz4pOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNDb21tYW5kKGNvbXBvc2l0aW9uSWQsIHBhcmFtcykpO1xuXHR9XG5cblx0c2V0Q29sdW1uRW5hYmxlZChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLCBjb2x1bW5JZDogQ29sdW1uSWQsIGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBDb21wb3NpdGlvblNldENvbHVtbkVuYWJsZWRDb21tYW5kKGNvbXBvc2l0aW9uSWQsIGNvbHVtbklkLCBlbmFibGVkKSk7XG5cdH1cblxufVxuIl19