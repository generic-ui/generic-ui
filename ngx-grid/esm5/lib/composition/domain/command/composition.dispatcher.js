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
    /**
     * @param {?} compositionId
     * @param {?} columnId
     * @param {?} enabled
     * @return {?}
     */
    CompositionDispatcher.prototype.setColumnEnabled = /**
     * @param {?} compositionId
     * @param {?} columnId
     * @param {?} enabled
     * @return {?}
     */
    function (compositionId, columnId, enabled) {
        this.commandDispatcher.dispatch(new CompositionSetColumnEnabledCommand(compositionId, columnId, enabled));
    };
    /**
     * @param {?} compositionId
     * @param {?} columnId
     * @return {?}
     */
    CompositionDispatcher.prototype.moveLeft = /**
     * @param {?} compositionId
     * @param {?} columnId
     * @return {?}
     */
    function (compositionId, columnId) {
        this.commandDispatcher.dispatch(new CompositionMoveLeftColumnCommand(compositionId, columnId));
    };
    /**
     * @param {?} compositionId
     * @param {?} columnId
     * @return {?}
     */
    CompositionDispatcher.prototype.moveRight = /**
     * @param {?} compositionId
     * @param {?} columnId
     * @return {?}
     */
    function (compositionId, columnId) {
        this.commandDispatcher.dispatch(new CompositionMoveRightColumnCommand(compositionId, columnId));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21tYW5kL2NvbXBvc2l0aW9uLmRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDN0YsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDMUgsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFFN0csT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFMUcsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDakgsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDM0csT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFHOUc7SUFHQywrQkFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDeEQsQ0FBQzs7Ozs7SUFFRCxvQ0FBSTs7OztJQUFKLFVBQUssYUFBNEI7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Ozs7O0lBRUQsMENBQVU7Ozs7O0lBQVYsVUFBVyxhQUE0QixFQUFFLE1BQTJCO1FBQ25FLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDOzs7Ozs7SUFFRCx3Q0FBUTs7Ozs7SUFBUixVQUFTLGFBQTRCLEVBQUUsS0FBYTtRQUNuRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksMEJBQTBCLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkYsQ0FBQzs7Ozs7O0lBRUQsaURBQWlCOzs7OztJQUFqQixVQUFrQixhQUE0QixFQUFFLEtBQWE7UUFDNUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLG1DQUFtQyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7Ozs7OztJQUVELDhDQUFjOzs7OztJQUFkLFVBQWUsYUFBNEIsRUFBRSxPQUFnQjtRQUM1RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksZ0NBQWdDLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDL0YsQ0FBQzs7Ozs7O0lBRUQsMENBQVU7Ozs7O0lBQVYsVUFBVyxhQUE0QixFQUFFLE1BQStCO1FBQ3ZFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxrQ0FBa0MsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDOzs7Ozs7O0lBRUQsZ0RBQWdCOzs7Ozs7SUFBaEIsVUFBaUIsYUFBNEIsRUFBRSxRQUFrQixFQUFFLE9BQWdCO1FBQ2xGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxrQ0FBa0MsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDM0csQ0FBQzs7Ozs7O0lBRUQsd0NBQVE7Ozs7O0lBQVIsVUFBUyxhQUE0QixFQUFFLFFBQWtCO1FBQ3hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxnQ0FBZ0MsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDOzs7Ozs7SUFFRCx5Q0FBUzs7Ozs7SUFBVCxVQUFVLGFBQTRCLEVBQUUsUUFBa0I7UUFDekQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLGlDQUFpQyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7O2dCQXhDRCxVQUFVOzs7O2dCQWpCRixpQkFBaUI7O0lBMkQxQiw0QkFBQztDQUFBLEFBMUNELElBMENDO1NBekNZLHFCQUFxQjs7Ozs7O0lBRXJCLGtEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vY29tcG9zaXRpb24taWQnO1xuaW1wb3J0IHsgSW5pdENvbXBvc2l0aW9uQ29tbWFuZCB9IGZyb20gJy4vaW5pdC9pbml0LWNvbXBvc2l0aW9uLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29sdW1uUGFyYW1zIH0gZnJvbSAnLi9jb2x1bW4vc2V0LWNvbHVtbnMvY29sdW1uLnBhcmFtcyc7XG5pbXBvcnQgeyBTZXRDb2x1bW5zQ29tbWFuZCB9IGZyb20gJy4vY29sdW1uL3NldC1jb2x1bW5zL3NldC1jb2x1bW5zLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2V0Q29tcG9zaXRpb25XaWR0aENvbW1hbmQgfSBmcm9tICcuL3dpZHRoL3NldC13aWR0aC9zZXQtY29tcG9zaXRpb24td2lkdGguY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ29tbWFuZCB9IGZyb20gJy4vd2lkdGgvc2V0LWNvbnRhaW5lci13aWR0aC9zZXQtY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2V0Q29tcG9zaXRpb25SZXNpemVXaWR0aENvbW1hbmQgfSBmcm9tICcuL3dpZHRoL3Jlc2l6ZS13aWR0aC9zZXQtY29tcG9zaXRpb24tcmVzaXplLXdpZHRoLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ2hhbmdlU29ydFBhcmFtcyB9IGZyb20gJy4vY29sdW1uL3NvcnQvY2hhbmdlLXNvcnQucGFyYW1zJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0NvbW1hbmQgfSBmcm9tICcuL2NvbHVtbi9zb3J0L2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5jb21tYW5kJztcbmltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi9jb2x1bW4vY29sdW1uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uU2V0Q29sdW1uRW5hYmxlZENvbW1hbmQgfSBmcm9tICcuL2NvbHVtbi9zZXQtZW5hYmxlZC9jb21wb3NpdGlvbi5zZXQtY29sdW1uLWVuYWJsZWQuY29tbWFuZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbk1vdmVMZWZ0Q29sdW1uQ29tbWFuZCB9IGZyb20gJy4vY29sdW1uL21vdmUvbGVmdC9jb21wb3NpdGlvbi5tb3ZlLWxlZnQtY29sdW1uLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Nb3ZlUmlnaHRDb2x1bW5Db21tYW5kIH0gZnJvbSAnLi9jb2x1bW4vbW92ZS9yaWdodC9jb21wb3NpdGlvbi5tb3ZlLXJpZ2h0LWNvbHVtbi5jb21tYW5kJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25EaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0aW5pdChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgSW5pdENvbXBvc2l0aW9uQ29tbWFuZChjb21wb3NpdGlvbklkKSk7XG5cdH1cblxuXHRzZXRDb2x1bW5zKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIHBhcmFtczogQXJyYXk8Q29sdW1uUGFyYW1zPik6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldENvbHVtbnNDb21tYW5kKGNvbXBvc2l0aW9uSWQsIHBhcmFtcykpO1xuXHR9XG5cblx0c2V0V2lkdGgoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCwgd2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldENvbXBvc2l0aW9uV2lkdGhDb21tYW5kKGNvbXBvc2l0aW9uSWQsIHdpZHRoKSk7XG5cdH1cblxuXHRzZXRDb250YWluZXJXaWR0aChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLCB3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0Q29tcG9zaXRpb25Db250YWluZXJXaWR0aENvbW1hbmQoY29tcG9zaXRpb25JZCwgd2lkdGgpKTtcblx0fVxuXG5cdHNldFJlc2l6ZVdpZHRoKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRDb21wb3NpdGlvblJlc2l6ZVdpZHRoQ29tbWFuZChjb21wb3NpdGlvbklkLCBlbmFibGVkKSk7XG5cdH1cblxuXHRjaGFuZ2VTb3J0KGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIHBhcmFtczogQXJyYXk8Q2hhbmdlU29ydFBhcmFtcz4pOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNDb21tYW5kKGNvbXBvc2l0aW9uSWQsIHBhcmFtcykpO1xuXHR9XG5cblx0c2V0Q29sdW1uRW5hYmxlZChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLCBjb2x1bW5JZDogQ29sdW1uSWQsIGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBDb21wb3NpdGlvblNldENvbHVtbkVuYWJsZWRDb21tYW5kKGNvbXBvc2l0aW9uSWQsIGNvbHVtbklkLCBlbmFibGVkKSk7XG5cdH1cblxuXHRtb3ZlTGVmdChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLCBjb2x1bW5JZDogQ29sdW1uSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBDb21wb3NpdGlvbk1vdmVMZWZ0Q29sdW1uQ29tbWFuZChjb21wb3NpdGlvbklkLCBjb2x1bW5JZCkpO1xuXHR9XG5cblx0bW92ZVJpZ2h0KGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIGNvbHVtbklkOiBDb2x1bW5JZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IENvbXBvc2l0aW9uTW92ZVJpZ2h0Q29sdW1uQ29tbWFuZChjb21wb3NpdGlvbklkLCBjb2x1bW5JZCkpO1xuXHR9XG5cbn1cbiJdfQ==