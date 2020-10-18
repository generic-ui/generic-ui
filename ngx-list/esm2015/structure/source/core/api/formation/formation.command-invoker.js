/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { FormationDispatcher } from '../../domain/formation/formation.dispatcher';
import { structureGlobalId } from '../../../../core/api/structure.global-id';
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
     * @param {?=} structureId
     * @return {?}
     */
    setDefaultFormation(structureId = structureGlobalId) {
        // this.commandDispatcher.dispatch(new )
    }
    /**
     * @param {?} selectedRow
     * @param {?} type
     * @param {?=} structureId
     * @return {?}
     */
    toggleSelectedRow(selectedRow, type, structureId = structureGlobalId) {
        this.formationDispatcher.toggleSelectedRow(structureId, selectedRow, type);
    }
    /**
     * @param {?} mode
     * @param {?=} structureId
     * @return {?}
     */
    changeMode(mode, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new SetSelectionModeCommand(structureId, mode));
    }
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    setSelection(enabled, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new SetEnabledSelectionCommand(structureId, enabled));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    selectAll(structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new SelectAllRowsCommand(structureId));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    unselectAll(structureId = structureGlobalId) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQWtCLE1BQU0sb0JBQW9CLENBQUM7QUFFdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFbEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFHN0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDOUcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDakcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDakcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFJdkcsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUFFbkMsWUFBNkIsaUJBQW9DLEVBQzdDLG1CQUF3QztRQUQvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDNUQsQ0FBQzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxjQUEyQixpQkFBaUI7UUFDL0Qsd0NBQXdDO0lBQ3pDLENBQUM7Ozs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxXQUFtQixFQUFFLElBQXlCLEVBQUUsY0FBMkIsaUJBQWlCO1FBQzdHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7Ozs7OztJQUVELFVBQVUsQ0FBQyxJQUFzQixFQUFFLGNBQTJCLGlCQUFpQjtRQUM5RSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksdUJBQXVCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQzs7Ozs7O0lBRUQsWUFBWSxDQUFDLE9BQWdCLEVBQUUsY0FBMkIsaUJBQWlCO1FBQzFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSwwQkFBMEIsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxjQUEyQixpQkFBaUI7UUFDckQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsY0FBMkIsaUJBQWlCO1FBQ3ZELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7OztZQTdCRCxVQUFVOzs7O1lBYkYsaUJBQWlCO1lBRWpCLG1CQUFtQjs7Ozs7OztJQWNmLG9EQUFxRDs7Ozs7SUFDOUQsc0RBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciwgQ29tbWFuZEludm9rZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGb3JtYXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9mb3JtYXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uTW9kZSB9IGZyb20gJy4uL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgUm93U2VsZWN0VG9nZ2xlVHlwZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vY29yZS9yb3ctc2VsZWN0LXRvZ2dsZS10eXBlJztcbmltcG9ydCB7IFNldEVuYWJsZWRTZWxlY3Rpb25Db21tYW5kIH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9zZXQtZW5hYmxlZC9zZXQtZW5hYmxlZC1zZWxlY3Rpb24uY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRTZWxlY3Rpb25Nb2RlQ29tbWFuZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vbW9kZS9zZXQtc2VsZWN0aW9uLW1vZGUuY29tbWFuZCc7XG5pbXBvcnQgeyBTZWxlY3RBbGxSb3dzQ29tbWFuZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vc2VsZWN0LWFsbC9zZWxlY3QtYWxsLXJvd3MuY29tbWFuZCc7XG5pbXBvcnQgeyBVbnNlbGVjdEFsbFJvd3NDb21tYW5kIH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi91bnNlbGVjdC1hbGwvdW5zZWxlY3QtYWxsLXJvd3MuY29tbWFuZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIGltcGxlbWVudHMgQ29tbWFuZEludm9rZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbkRpc3BhdGNoZXI6IEZvcm1hdGlvbkRpc3BhdGNoZXIpIHtcblx0fVxuXG5cdHNldERlZmF1bHRGb3JtYXRpb24oc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHQvLyB0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyApXG5cdH1cblxuXHR0b2dnbGVTZWxlY3RlZFJvdyhzZWxlY3RlZFJvdzogc3RyaW5nLCB0eXBlOiBSb3dTZWxlY3RUb2dnbGVUeXBlLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuZm9ybWF0aW9uRGlzcGF0Y2hlci50b2dnbGVTZWxlY3RlZFJvdyhzdHJ1Y3R1cmVJZCwgc2VsZWN0ZWRSb3csIHR5cGUpO1xuXHR9XG5cblx0Y2hhbmdlTW9kZShtb2RlOiBSb3dTZWxlY3Rpb25Nb2RlLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFNlbGVjdGlvbk1vZGVDb21tYW5kKHN0cnVjdHVyZUlkLCBtb2RlKSk7XG5cdH1cblxuXHRzZXRTZWxlY3Rpb24oZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRFbmFibGVkU2VsZWN0aW9uQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZW5hYmxlZCkpO1xuXHR9XG5cblx0c2VsZWN0QWxsKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2VsZWN0QWxsUm93c0NvbW1hbmQoc3RydWN0dXJlSWQpKTtcblx0fVxuXG5cdHVuc2VsZWN0QWxsKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgVW5zZWxlY3RBbGxSb3dzQ29tbWFuZChzdHJ1Y3R1cmVJZCkpO1xuXHR9XG5cbn1cbiJdfQ==