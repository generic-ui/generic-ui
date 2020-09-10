/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { FormationDispatcher } from '../../domain/formation/formation.dispatcher';
import { structureGlobalId } from '../../../core/domain-api/structure.global-id';
import { SetEnabledSelectionCommand } from '../../domain/formation/set-enabled/set-enabled-selection.command';
import { SetSelectionModeCommand } from '../../domain/formation/mode/set-selection-mode.command';
import { SelectAllRowsCommand } from '../../domain/formation/select-all/select-all-rows.command';
import { UnselectAllRowsCommand } from '../../domain/formation/unselect-all/unselect-all-rows.command';
var FormationCommandInvoker = /** @class */ (function () {
    function FormationCommandInvoker(commandDispatcher, formationDispatcher) {
        this.commandDispatcher = commandDispatcher;
        this.formationDispatcher = formationDispatcher;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    FormationCommandInvoker.prototype.setDefaultFormation = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        // this.commandDispatcher.dispatch(new )
    };
    /**
     * @param {?} selectedRow
     * @param {?} type
     * @param {?=} structureId
     * @return {?}
     */
    FormationCommandInvoker.prototype.toggleSelectedRow = /**
     * @param {?} selectedRow
     * @param {?} type
     * @param {?=} structureId
     * @return {?}
     */
    function (selectedRow, type, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.formationDispatcher.toggleSelectedRow(structureId, selectedRow, type);
    };
    /**
     * @param {?} mode
     * @param {?=} structureId
     * @return {?}
     */
    FormationCommandInvoker.prototype.changeMode = /**
     * @param {?} mode
     * @param {?=} structureId
     * @return {?}
     */
    function (mode, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.commandDispatcher.dispatch(new SetSelectionModeCommand(structureId, mode));
    };
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    FormationCommandInvoker.prototype.setSelection = /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.commandDispatcher.dispatch(new SetEnabledSelectionCommand(structureId, enabled));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    FormationCommandInvoker.prototype.selectAll = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.commandDispatcher.dispatch(new SelectAllRowsCommand(structureId));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    FormationCommandInvoker.prototype.unselectAll = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.commandDispatcher.dispatch(new UnselectAllRowsCommand(structureId));
    };
    FormationCommandInvoker.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FormationCommandInvoker.ctorParameters = function () { return [
        { type: CommandDispatcher },
        { type: FormationDispatcher }
    ]; };
    return FormationCommandInvoker;
}());
export { FormationCommandInvoker };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationCommandInvoker.prototype.commandDispatcher;
    /**
     * @type {?}
     * @private
     */
    FormationCommandInvoker.prototype.formationDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tbWFuZC1pbnZva2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBa0IsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUVsRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUdqRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUM5RyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUd2RztJQUdDLGlDQUE2QixpQkFBb0MsRUFDN0MsbUJBQXdDO1FBRC9CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0Msd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUM1RCxDQUFDOzs7OztJQUVELHFEQUFtQjs7OztJQUFuQixVQUFvQixXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUMvRCx3Q0FBd0M7SUFDekMsQ0FBQzs7Ozs7OztJQUVELG1EQUFpQjs7Ozs7O0lBQWpCLFVBQWtCLFdBQW1CLEVBQUUsSUFBeUIsRUFBRSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUM3RyxJQUFJLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7Ozs7SUFFRCw0Q0FBVTs7Ozs7SUFBVixVQUFXLElBQXNCLEVBQUUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDOUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Ozs7OztJQUVELDhDQUFZOzs7OztJQUFaLFVBQWEsT0FBZ0IsRUFBRSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUMxRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksMEJBQTBCLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdkYsQ0FBQzs7Ozs7SUFFRCwyQ0FBUzs7OztJQUFULFVBQVUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDckQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7SUFFRCw2Q0FBVzs7OztJQUFYLFVBQVksV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDdkQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQzs7Z0JBN0JELFVBQVU7Ozs7Z0JBYkYsaUJBQWlCO2dCQUVqQixtQkFBbUI7O0lBMEM1Qiw4QkFBQztDQUFBLEFBL0JELElBK0JDO1NBOUJZLHVCQUF1Qjs7Ozs7O0lBRXZCLG9EQUFxRDs7Ozs7SUFDOUQsc0RBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciwgQ29tbWFuZEludm9rZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGb3JtYXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9mb3JtYXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluLWFwaS9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvbk1vZGUgfSBmcm9tICcuLi9yb3ctc2VsZWN0aW9uJztcbmltcG9ydCB7IFJvd1NlbGVjdFRvZ2dsZVR5cGUgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL2NvcmUvcm93LXNlbGVjdC10b2dnbGUtdHlwZSc7XG5pbXBvcnQgeyBTZXRFbmFibGVkU2VsZWN0aW9uQ29tbWFuZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vc2V0LWVuYWJsZWQvc2V0LWVuYWJsZWQtc2VsZWN0aW9uLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2V0U2VsZWN0aW9uTW9kZUNvbW1hbmQgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL21vZGUvc2V0LXNlbGVjdGlvbi1tb2RlLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2VsZWN0QWxsUm93c0NvbW1hbmQgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL3NlbGVjdC1hbGwvc2VsZWN0LWFsbC1yb3dzLmNvbW1hbmQnO1xuaW1wb3J0IHsgVW5zZWxlY3RBbGxSb3dzQ29tbWFuZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vdW5zZWxlY3QtYWxsL3Vuc2VsZWN0LWFsbC1yb3dzLmNvbW1hbmQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGb3JtYXRpb25Db21tYW5kSW52b2tlciBpbXBsZW1lbnRzIENvbW1hbmRJbnZva2VyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25EaXNwYXRjaGVyOiBGb3JtYXRpb25EaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRzZXREZWZhdWx0Rm9ybWF0aW9uKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0Ly8gdGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgKVxuXHR9XG5cblx0dG9nZ2xlU2VsZWN0ZWRSb3coc2VsZWN0ZWRSb3c6IHN0cmluZywgdHlwZTogUm93U2VsZWN0VG9nZ2xlVHlwZSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmZvcm1hdGlvbkRpc3BhdGNoZXIudG9nZ2xlU2VsZWN0ZWRSb3coc3RydWN0dXJlSWQsIHNlbGVjdGVkUm93LCB0eXBlKTtcblx0fVxuXG5cdGNoYW5nZU1vZGUobW9kZTogUm93U2VsZWN0aW9uTW9kZSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRTZWxlY3Rpb25Nb2RlQ29tbWFuZChzdHJ1Y3R1cmVJZCwgbW9kZSkpO1xuXHR9XG5cblx0c2V0U2VsZWN0aW9uKGVuYWJsZWQ6IGJvb2xlYW4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0RW5hYmxlZFNlbGVjdGlvbkNvbW1hbmQoc3RydWN0dXJlSWQsIGVuYWJsZWQpKTtcblx0fVxuXG5cdHNlbGVjdEFsbChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNlbGVjdEFsbFJvd3NDb21tYW5kKHN0cnVjdHVyZUlkKSk7XG5cdH1cblxuXHR1bnNlbGVjdEFsbChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFVuc2VsZWN0QWxsUm93c0NvbW1hbmQoc3RydWN0dXJlSWQpKTtcblx0fVxuXG59XG4iXX0=