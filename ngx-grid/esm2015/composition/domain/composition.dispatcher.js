/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { CreateCompositionCommand } from './create/create-composition.command';
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
    createComposition(compositionId) {
        this.commandDispatcher.dispatch(new CreateCompositionCommand(compositionId));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vZG9tYWluL2NvbXBvc2l0aW9uLmRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHdkQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFL0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDN0YsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDMUgsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFFN0csT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFMUcsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDakgsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDM0csT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFJOUcsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUVqQyxZQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUN4RCxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLGFBQTRCO1FBQzdDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSx3QkFBd0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7Ozs7OztJQUVELFVBQVUsQ0FBQyxhQUE0QixFQUFFLE1BQTJCO1FBQ25FLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsYUFBNEIsRUFBRSxLQUFhO1FBQ25ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSwwQkFBMEIsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDOzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxhQUE0QixFQUFFLEtBQWE7UUFDNUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLG1DQUFtQyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7Ozs7OztJQUVELGNBQWMsQ0FBQyxhQUE0QixFQUFFLE9BQWdCO1FBQzVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxnQ0FBZ0MsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMvRixDQUFDOzs7Ozs7SUFFRCxVQUFVLENBQUMsYUFBNEIsRUFBRSxNQUErQjtRQUN2RSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksa0NBQWtDLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDaEcsQ0FBQzs7Ozs7OztJQUVELGdCQUFnQixDQUFDLGFBQTRCLEVBQUUsUUFBa0IsRUFBRSxPQUFnQjtRQUNsRixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksa0NBQWtDLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzNHLENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxhQUE0QixFQUFFLFFBQWtCO1FBQ3hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxnQ0FBZ0MsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsYUFBNEIsRUFBRSxRQUFrQjtRQUN6RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksaUNBQWlDLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDakcsQ0FBQzs7O1lBeENELFVBQVU7Ozs7WUFqQkYsaUJBQWlCOzs7Ozs7O0lBb0JiLGtEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDcmVhdGVDb21wb3NpdGlvbkNvbW1hbmQgfSBmcm9tICcuL2NyZWF0ZS9jcmVhdGUtY29tcG9zaXRpb24uY29tbWFuZCc7XG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuL2NvbHVtbi9zZXQtY29sdW1ucy9jb2x1bW4ucGFyYW1zJztcbmltcG9ydCB7IFNldENvbHVtbnNDb21tYW5kIH0gZnJvbSAnLi9jb2x1bW4vc2V0LWNvbHVtbnMvc2V0LWNvbHVtbnMuY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRDb21wb3NpdGlvbldpZHRoQ29tbWFuZCB9IGZyb20gJy4vd2lkdGgvc2V0LXdpZHRoL3NldC1jb21wb3NpdGlvbi13aWR0aC5jb21tYW5kJztcbmltcG9ydCB7IFNldENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDb21tYW5kIH0gZnJvbSAnLi93aWR0aC9zZXQtY29udGFpbmVyLXdpZHRoL3NldC1jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGguY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRDb21wb3NpdGlvblJlc2l6ZVdpZHRoQ29tbWFuZCB9IGZyb20gJy4vd2lkdGgvcmVzaXplLXdpZHRoL3NldC1jb21wb3NpdGlvbi1yZXNpemUtd2lkdGguY29tbWFuZCc7XG5pbXBvcnQgeyBDaGFuZ2VTb3J0UGFyYW1zIH0gZnJvbSAnLi9jb2x1bW4vc29ydC9jaGFuZ2Utc29ydC5wYXJhbXMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQ29tbWFuZCB9IGZyb20gJy4vY29sdW1uL3NvcnQvY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuL2NvbHVtbi9jb2x1bW4uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25TZXRDb2x1bW5FbmFibGVkQ29tbWFuZCB9IGZyb20gJy4vY29sdW1uL3NldC1lbmFibGVkL2NvbXBvc2l0aW9uLnNldC1jb2x1bW4tZW5hYmxlZC5jb21tYW5kJztcbmltcG9ydCB7IENvbXBvc2l0aW9uTW92ZUxlZnRDb2x1bW5Db21tYW5kIH0gZnJvbSAnLi9jb2x1bW4vbW92ZS9sZWZ0L2NvbXBvc2l0aW9uLm1vdmUtbGVmdC1jb2x1bW4uY29tbWFuZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbk1vdmVSaWdodENvbHVtbkNvbW1hbmQgfSBmcm9tICcuL2NvbHVtbi9tb3ZlL3JpZ2h0L2NvbXBvc2l0aW9uLm1vdmUtcmlnaHQtY29sdW1uLmNvbW1hbmQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkRpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRjcmVhdGVDb21wb3NpdGlvbihjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgQ3JlYXRlQ29tcG9zaXRpb25Db21tYW5kKGNvbXBvc2l0aW9uSWQpKTtcblx0fVxuXG5cdHNldENvbHVtbnMoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCwgcGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+KTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0Q29sdW1uc0NvbW1hbmQoY29tcG9zaXRpb25JZCwgcGFyYW1zKSk7XG5cdH1cblxuXHRzZXRXaWR0aChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLCB3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0Q29tcG9zaXRpb25XaWR0aENvbW1hbmQoY29tcG9zaXRpb25JZCwgd2lkdGgpKTtcblx0fVxuXG5cdHNldENvbnRhaW5lcldpZHRoKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ29tbWFuZChjb21wb3NpdGlvbklkLCB3aWR0aCkpO1xuXHR9XG5cblx0c2V0UmVzaXplV2lkdGgoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCwgZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldENvbXBvc2l0aW9uUmVzaXplV2lkdGhDb21tYW5kKGNvbXBvc2l0aW9uSWQsIGVuYWJsZWQpKTtcblx0fVxuXG5cdGNoYW5nZVNvcnQoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCwgcGFyYW1zOiBBcnJheTxDaGFuZ2VTb3J0UGFyYW1zPik6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0NvbW1hbmQoY29tcG9zaXRpb25JZCwgcGFyYW1zKSk7XG5cdH1cblxuXHRzZXRDb2x1bW5FbmFibGVkKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIGNvbHVtbklkOiBDb2x1bW5JZCwgZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IENvbXBvc2l0aW9uU2V0Q29sdW1uRW5hYmxlZENvbW1hbmQoY29tcG9zaXRpb25JZCwgY29sdW1uSWQsIGVuYWJsZWQpKTtcblx0fVxuXG5cdG1vdmVMZWZ0KGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIGNvbHVtbklkOiBDb2x1bW5JZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IENvbXBvc2l0aW9uTW92ZUxlZnRDb2x1bW5Db21tYW5kKGNvbXBvc2l0aW9uSWQsIGNvbHVtbklkKSk7XG5cdH1cblxuXHRtb3ZlUmlnaHQoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCwgY29sdW1uSWQ6IENvbHVtbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgQ29tcG9zaXRpb25Nb3ZlUmlnaHRDb2x1bW5Db21tYW5kKGNvbXBvc2l0aW9uSWQsIGNvbHVtbklkKSk7XG5cdH1cblxufVxuIl19