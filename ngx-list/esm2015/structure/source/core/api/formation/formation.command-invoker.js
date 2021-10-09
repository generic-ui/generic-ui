/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { FormationDispatcher } from '../../domain/formation/formation.dispatcher';
import { SetEnabledSelectionCommand } from '../../domain/formation/set-enabled/set-enabled-selection.command';
import { SetSelectionModeCommand } from '../../domain/formation/mode/set-selection-mode.command';
import { SelectAllRowsCommand } from '../../domain/formation/select-all/select-all-rows.command';
import { UnselectAllRowsCommand } from '../../domain/formation/unselect-all/unselect-all-rows.command';
export class FormationCommandInvoker {
    /**
     * @param {?} commandDispatcher
     * @param {?} formationDispatcher
     */
    constructor(commandDispatcher, formationDispatcher) {
        this.commandDispatcher = commandDispatcher;
        this.formationDispatcher = formationDispatcher;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    setDefaultFormation(structureId) {
        // this.commandDispatcher.dispatch(new )
    }
    /**
     * @param {?} selectedRow
     * @param {?} type
     * @param {?} structureId
     * @return {?}
     */
    toggleSelectedRow(selectedRow, type, structureId) {
        this.formationDispatcher.toggleSelectedRow(structureId, selectedRow, type);
    }
    /**
     * @param {?} mode
     * @param {?} structureId
     * @return {?}
     */
    changeMode(mode, structureId) {
        this.commandDispatcher.dispatch(new SetSelectionModeCommand(structureId, mode));
    }
    /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    setSelection(enabled, structureId) {
        this.commandDispatcher.dispatch(new SetEnabledSelectionCommand(structureId, enabled));
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    selectAll(structureId) {
        this.commandDispatcher.dispatch(new SelectAllRowsCommand(structureId));
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    unselectAll(structureId) {
        this.commandDispatcher.dispatch(new UnselectAllRowsCommand(structureId));
    }
}
FormationCommandInvoker.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FormationCommandInvoker.ctorParameters = () => [
    { type: CommandDispatcher },
    { type: FormationDispatcher }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQWtCLE1BQU0sb0JBQW9CLENBQUM7QUFFdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFJbEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDOUcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDakcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDakcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFJdkcsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUFFbkMsWUFBNkIsaUJBQW9DLEVBQzdDLG1CQUF3QztRQUQvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDNUQsQ0FBQzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxXQUF3QjtRQUMzQyx3Q0FBd0M7SUFDekMsQ0FBQzs7Ozs7OztJQUVELGlCQUFpQixDQUFDLFdBQW1CLEVBQUUsSUFBeUIsRUFBRSxXQUF3QjtRQUN6RixJQUFJLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBc0IsRUFBRSxXQUF3QjtRQUMxRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksdUJBQXVCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQzs7Ozs7O0lBRUQsWUFBWSxDQUFDLE9BQWdCLEVBQUUsV0FBd0I7UUFDdEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLDBCQUEwQixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLFdBQXdCO1FBQ2pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFdBQXdCO1FBQ25DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7OztZQTdCRCxVQUFVOzs7O1lBWkYsaUJBQWlCO1lBRWpCLG1CQUFtQjs7Ozs7OztJQWFmLG9EQUFxRDs7Ozs7SUFDOUQsc0RBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciwgQ29tbWFuZEludm9rZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGb3JtYXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9mb3JtYXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25Nb2RlIH0gZnJvbSAnLi4vcm93LXNlbGVjdGlvbic7XG5pbXBvcnQgeyBSb3dTZWxlY3RUb2dnbGVUeXBlIH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9jb3JlL3Jvdy1zZWxlY3QtdG9nZ2xlLXR5cGUnO1xuaW1wb3J0IHsgU2V0RW5hYmxlZFNlbGVjdGlvbkNvbW1hbmQgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL3NldC1lbmFibGVkL3NldC1lbmFibGVkLXNlbGVjdGlvbi5jb21tYW5kJztcbmltcG9ydCB7IFNldFNlbGVjdGlvbk1vZGVDb21tYW5kIH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9tb2RlL3NldC1zZWxlY3Rpb24tbW9kZS5jb21tYW5kJztcbmltcG9ydCB7IFNlbGVjdEFsbFJvd3NDb21tYW5kIH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9zZWxlY3QtYWxsL3NlbGVjdC1hbGwtcm93cy5jb21tYW5kJztcbmltcG9ydCB7IFVuc2VsZWN0QWxsUm93c0NvbW1hbmQgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL3Vuc2VsZWN0LWFsbC91bnNlbGVjdC1hbGwtcm93cy5jb21tYW5kJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uQ29tbWFuZEludm9rZXIgaW1wbGVtZW50cyBDb21tYW5kSW52b2tlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uRGlzcGF0Y2hlcjogRm9ybWF0aW9uRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0c2V0RGVmYXVsdEZvcm1hdGlvbihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHQvLyB0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyApXG5cdH1cblxuXHR0b2dnbGVTZWxlY3RlZFJvdyhzZWxlY3RlZFJvdzogc3RyaW5nLCB0eXBlOiBSb3dTZWxlY3RUb2dnbGVUeXBlLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmZvcm1hdGlvbkRpc3BhdGNoZXIudG9nZ2xlU2VsZWN0ZWRSb3coc3RydWN0dXJlSWQsIHNlbGVjdGVkUm93LCB0eXBlKTtcblx0fVxuXG5cdGNoYW5nZU1vZGUobW9kZTogUm93U2VsZWN0aW9uTW9kZSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0U2VsZWN0aW9uTW9kZUNvbW1hbmQoc3RydWN0dXJlSWQsIG1vZGUpKTtcblx0fVxuXG5cdHNldFNlbGVjdGlvbihlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRFbmFibGVkU2VsZWN0aW9uQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZW5hYmxlZCkpO1xuXHR9XG5cblx0c2VsZWN0QWxsKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNlbGVjdEFsbFJvd3NDb21tYW5kKHN0cnVjdHVyZUlkKSk7XG5cdH1cblxuXHR1bnNlbGVjdEFsbChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBVbnNlbGVjdEFsbFJvd3NDb21tYW5kKHN0cnVjdHVyZUlkKSk7XG5cdH1cblxufVxuIl19