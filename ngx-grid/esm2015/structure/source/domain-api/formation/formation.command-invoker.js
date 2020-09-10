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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tbWFuZC1pbnZva2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBa0IsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUVsRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUdqRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUM5RyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUl2RyxNQUFNLE9BQU8sdUJBQXVCOzs7OztJQUVuQyxZQUE2QixpQkFBb0MsRUFDN0MsbUJBQXdDO1FBRC9CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0Msd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUM1RCxDQUFDOzs7OztJQUVELG1CQUFtQixDQUFDLGNBQTJCLGlCQUFpQjtRQUMvRCx3Q0FBd0M7SUFDekMsQ0FBQzs7Ozs7OztJQUVELGlCQUFpQixDQUFDLFdBQW1CLEVBQUUsSUFBeUIsRUFBRSxjQUEyQixpQkFBaUI7UUFDN0csSUFBSSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQXNCLEVBQUUsY0FBMkIsaUJBQWlCO1FBQzlFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDOzs7Ozs7SUFFRCxZQUFZLENBQUMsT0FBZ0IsRUFBRSxjQUEyQixpQkFBaUI7UUFDMUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLDBCQUEwQixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLGNBQTJCLGlCQUFpQjtRQUNyRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksb0JBQW9CLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxjQUEyQixpQkFBaUI7UUFDdkQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQzs7O1lBN0JELFVBQVU7Ozs7WUFiRixpQkFBaUI7WUFFakIsbUJBQW1COzs7Ozs7O0lBY2Ysb0RBQXFEOzs7OztJQUM5RCxzREFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyLCBDb21tYW5kSW52b2tlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZvcm1hdGlvbkRpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL2Zvcm1hdGlvbi5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4tYXBpL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uTW9kZSB9IGZyb20gJy4uL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgUm93U2VsZWN0VG9nZ2xlVHlwZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vY29yZS9yb3ctc2VsZWN0LXRvZ2dsZS10eXBlJztcbmltcG9ydCB7IFNldEVuYWJsZWRTZWxlY3Rpb25Db21tYW5kIH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9zZXQtZW5hYmxlZC9zZXQtZW5hYmxlZC1zZWxlY3Rpb24uY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRTZWxlY3Rpb25Nb2RlQ29tbWFuZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vbW9kZS9zZXQtc2VsZWN0aW9uLW1vZGUuY29tbWFuZCc7XG5pbXBvcnQgeyBTZWxlY3RBbGxSb3dzQ29tbWFuZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vc2VsZWN0LWFsbC9zZWxlY3QtYWxsLXJvd3MuY29tbWFuZCc7XG5pbXBvcnQgeyBVbnNlbGVjdEFsbFJvd3NDb21tYW5kIH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi91bnNlbGVjdC1hbGwvdW5zZWxlY3QtYWxsLXJvd3MuY29tbWFuZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIGltcGxlbWVudHMgQ29tbWFuZEludm9rZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbkRpc3BhdGNoZXI6IEZvcm1hdGlvbkRpc3BhdGNoZXIpIHtcblx0fVxuXG5cdHNldERlZmF1bHRGb3JtYXRpb24oc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHQvLyB0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyApXG5cdH1cblxuXHR0b2dnbGVTZWxlY3RlZFJvdyhzZWxlY3RlZFJvdzogc3RyaW5nLCB0eXBlOiBSb3dTZWxlY3RUb2dnbGVUeXBlLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuZm9ybWF0aW9uRGlzcGF0Y2hlci50b2dnbGVTZWxlY3RlZFJvdyhzdHJ1Y3R1cmVJZCwgc2VsZWN0ZWRSb3csIHR5cGUpO1xuXHR9XG5cblx0Y2hhbmdlTW9kZShtb2RlOiBSb3dTZWxlY3Rpb25Nb2RlLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFNlbGVjdGlvbk1vZGVDb21tYW5kKHN0cnVjdHVyZUlkLCBtb2RlKSk7XG5cdH1cblxuXHRzZXRTZWxlY3Rpb24oZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRFbmFibGVkU2VsZWN0aW9uQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZW5hYmxlZCkpO1xuXHR9XG5cblx0c2VsZWN0QWxsKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2VsZWN0QWxsUm93c0NvbW1hbmQoc3RydWN0dXJlSWQpKTtcblx0fVxuXG5cdHVuc2VsZWN0QWxsKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgVW5zZWxlY3RBbGxSb3dzQ29tbWFuZChzdHJ1Y3R1cmVJZCkpO1xuXHR9XG5cbn1cbiJdfQ==