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
import { CompositionMoveLeftColumnCommand } from './column/move/left/composition.move-left-column.command';
import { CompositionMoveRightColumnCommand } from './column/move/right/composition.move-right-column.command';
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
    /**
     * @param {?} compositionId
     * @param {?} columnId
     * @return {?}
     */
    moveLeft(compositionId, columnId) {
        this.commandDispatcher.dispatch(new CompositionMoveLeftColumnCommand(compositionId, columnId));
    }
    /**
     * @param {?} compositionId
     * @param {?} columnId
     * @return {?}
     */
    moveRight(compositionId, columnId) {
        this.commandDispatcher.dispatch(new CompositionMoveRightColumnCommand(compositionId, columnId));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21tYW5kL2NvbXBvc2l0aW9uLmRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDN0YsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDMUgsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFFN0csT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFMUcsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDakgsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDM0csT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFJOUcsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUVqQyxZQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUN4RCxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxhQUE0QjtRQUNoQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksc0JBQXNCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7Ozs7SUFFRCxVQUFVLENBQUMsYUFBNEIsRUFBRSxNQUEyQjtRQUNuRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksaUJBQWlCLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLGFBQTRCLEVBQUUsS0FBYTtRQUNuRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksMEJBQTBCLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkYsQ0FBQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsYUFBNEIsRUFBRSxLQUFhO1FBQzVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxtQ0FBbUMsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDOzs7Ozs7SUFFRCxjQUFjLENBQUMsYUFBNEIsRUFBRSxPQUFnQjtRQUM1RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksZ0NBQWdDLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDL0YsQ0FBQzs7Ozs7O0lBRUQsVUFBVSxDQUFDLGFBQTRCLEVBQUUsTUFBK0I7UUFDdkUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLGtDQUFrQyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7Ozs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxhQUE0QixFQUFFLFFBQWtCLEVBQUUsT0FBZ0I7UUFDbEYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLGtDQUFrQyxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMzRyxDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsYUFBNEIsRUFBRSxRQUFrQjtRQUN4RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksZ0NBQWdDLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDaEcsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLGFBQTRCLEVBQUUsUUFBa0I7UUFDekQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLGlDQUFpQyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7OztZQXhDRCxVQUFVOzs7O1lBakJGLGlCQUFpQjs7Ozs7OztJQW9CYixrREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uL2NvbXBvc2l0aW9uLWlkJztcbmltcG9ydCB7IEluaXRDb21wb3NpdGlvbkNvbW1hbmQgfSBmcm9tICcuL2luaXQvaW5pdC1jb21wb3NpdGlvbi5jb21tYW5kJztcbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4vY29sdW1uL3NldC1jb2x1bW5zL2NvbHVtbi5wYXJhbXMnO1xuaW1wb3J0IHsgU2V0Q29sdW1uc0NvbW1hbmQgfSBmcm9tICcuL2NvbHVtbi9zZXQtY29sdW1ucy9zZXQtY29sdW1ucy5jb21tYW5kJztcbmltcG9ydCB7IFNldENvbXBvc2l0aW9uV2lkdGhDb21tYW5kIH0gZnJvbSAnLi93aWR0aC9zZXQtd2lkdGgvc2V0LWNvbXBvc2l0aW9uLXdpZHRoLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2V0Q29tcG9zaXRpb25Db250YWluZXJXaWR0aENvbW1hbmQgfSBmcm9tICcuL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvc2V0LWNvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC5jb21tYW5kJztcbmltcG9ydCB7IFNldENvbXBvc2l0aW9uUmVzaXplV2lkdGhDb21tYW5kIH0gZnJvbSAnLi93aWR0aC9yZXNpemUtd2lkdGgvc2V0LWNvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC5jb21tYW5kJztcbmltcG9ydCB7IENoYW5nZVNvcnRQYXJhbXMgfSBmcm9tICcuL2NvbHVtbi9zb3J0L2NoYW5nZS1zb3J0LnBhcmFtcyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNDb21tYW5kIH0gZnJvbSAnLi9jb2x1bW4vc29ydC9jb21wb3NpdGlvbi1jaGFuZ2Utc29ydC1zdGF0dXMuY29tbWFuZCc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4vY29sdW1uL2NvbHVtbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblNldENvbHVtbkVuYWJsZWRDb21tYW5kIH0gZnJvbSAnLi9jb2x1bW4vc2V0LWVuYWJsZWQvY29tcG9zaXRpb24uc2V0LWNvbHVtbi1lbmFibGVkLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Nb3ZlTGVmdENvbHVtbkNvbW1hbmQgfSBmcm9tICcuL2NvbHVtbi9tb3ZlL2xlZnQvY29tcG9zaXRpb24ubW92ZS1sZWZ0LWNvbHVtbi5jb21tYW5kJztcbmltcG9ydCB7IENvbXBvc2l0aW9uTW92ZVJpZ2h0Q29sdW1uQ29tbWFuZCB9IGZyb20gJy4vY29sdW1uL21vdmUvcmlnaHQvY29tcG9zaXRpb24ubW92ZS1yaWdodC1jb2x1bW4uY29tbWFuZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIpIHtcblx0fVxuXG5cdGluaXQoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IEluaXRDb21wb3NpdGlvbkNvbW1hbmQoY29tcG9zaXRpb25JZCkpO1xuXHR9XG5cblx0c2V0Q29sdW1ucyhjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLCBwYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz4pOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRDb2x1bW5zQ29tbWFuZChjb21wb3NpdGlvbklkLCBwYXJhbXMpKTtcblx0fVxuXG5cdHNldFdpZHRoKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRDb21wb3NpdGlvbldpZHRoQ29tbWFuZChjb21wb3NpdGlvbklkLCB3aWR0aCkpO1xuXHR9XG5cblx0c2V0Q29udGFpbmVyV2lkdGgoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCwgd2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDb21tYW5kKGNvbXBvc2l0aW9uSWQsIHdpZHRoKSk7XG5cdH1cblxuXHRzZXRSZXNpemVXaWR0aChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLCBlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0Q29tcG9zaXRpb25SZXNpemVXaWR0aENvbW1hbmQoY29tcG9zaXRpb25JZCwgZW5hYmxlZCkpO1xuXHR9XG5cblx0Y2hhbmdlU29ydChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLCBwYXJhbXM6IEFycmF5PENoYW5nZVNvcnRQYXJhbXM+KTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQ29tbWFuZChjb21wb3NpdGlvbklkLCBwYXJhbXMpKTtcblx0fVxuXG5cdHNldENvbHVtbkVuYWJsZWQoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCwgY29sdW1uSWQ6IENvbHVtbklkLCBlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgQ29tcG9zaXRpb25TZXRDb2x1bW5FbmFibGVkQ29tbWFuZChjb21wb3NpdGlvbklkLCBjb2x1bW5JZCwgZW5hYmxlZCkpO1xuXHR9XG5cblx0bW92ZUxlZnQoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCwgY29sdW1uSWQ6IENvbHVtbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgQ29tcG9zaXRpb25Nb3ZlTGVmdENvbHVtbkNvbW1hbmQoY29tcG9zaXRpb25JZCwgY29sdW1uSWQpKTtcblx0fVxuXG5cdG1vdmVSaWdodChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLCBjb2x1bW5JZDogQ29sdW1uSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBDb21wb3NpdGlvbk1vdmVSaWdodENvbHVtbkNvbW1hbmQoY29tcG9zaXRpb25JZCwgY29sdW1uSWQpKTtcblx0fVxuXG59XG4iXX0=