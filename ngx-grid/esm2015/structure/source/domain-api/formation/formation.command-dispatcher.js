/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormationDispatcher } from '../../domain/formation/formation.dispatcher';
import { structureGlobalId } from '../../../../lib/structure/domain-api/structure.global-id';
import { CommandDispatcher } from '@generic-ui/hermes';
import { SetEnabledSelectionCommand } from '../../domain/formation/set-enabled/set-enabled-selection.command';
import { SetSelectionModeCommand } from '../../domain/formation/mode/set-selection-mode.command';
import { SelectAllRowsCommand } from '../../domain/formation/select-all/select-all-rows.command';
import { UnselectAllRowsCommand } from '../../domain/formation/unselect-all/unselect-all-rows.command';
export class FormationCommandDispatcher {
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
FormationCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FormationCommandDispatcher.ctorParameters = () => [
    { type: CommandDispatcher },
    { type: FormationDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationCommandDispatcher.prototype.commandDispatcher;
    /**
     * @type {?}
     * @private
     */
    FormationCommandDispatcher.prototype.formationDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tbWFuZC1kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRWxGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBRzdGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBSXZHLE1BQU0sT0FBTywwQkFBMEI7Ozs7O0lBRXRDLFlBQTZCLGlCQUFvQyxFQUM3QyxtQkFBd0M7UUFEL0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQzVELENBQUM7Ozs7O0lBRUQsbUJBQW1CLENBQUMsY0FBMkIsaUJBQWlCO1FBQy9ELHdDQUF3QztJQUN6QyxDQUFDOzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsV0FBbUIsRUFBRSxJQUF5QixFQUFFLGNBQTJCLGlCQUFpQjtRQUM3RyxJQUFJLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBc0IsRUFBRSxjQUEyQixpQkFBaUI7UUFDOUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Ozs7OztJQUVELFlBQVksQ0FBQyxPQUFnQixFQUFFLGNBQTJCLGlCQUFpQjtRQUMxRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksMEJBQTBCLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdkYsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsY0FBMkIsaUJBQWlCO1FBQ3JELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLGNBQTJCLGlCQUFpQjtRQUN2RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksc0JBQXNCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs7WUE3QkQsVUFBVTs7OztZQVBGLGlCQUFpQjtZQUxqQixtQkFBbUI7Ozs7Ozs7SUFlZix1REFBcUQ7Ozs7O0lBQzlELHlEQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRm9ybWF0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vZm9ybWF0aW9uLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgc3RydWN0dXJlR2xvYmFsSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi1hcGkvc3RydWN0dXJlLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25Nb2RlIH0gZnJvbSAnLi4vcm93LXNlbGVjdGlvbic7XG5pbXBvcnQgeyBSb3dTZWxlY3RUb2dnbGVUeXBlIH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9jb3JlL3Jvdy1zZWxlY3QtdG9nZ2xlLXR5cGUnO1xuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU2V0RW5hYmxlZFNlbGVjdGlvbkNvbW1hbmQgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL3NldC1lbmFibGVkL3NldC1lbmFibGVkLXNlbGVjdGlvbi5jb21tYW5kJztcbmltcG9ydCB7IFNldFNlbGVjdGlvbk1vZGVDb21tYW5kIH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9tb2RlL3NldC1zZWxlY3Rpb24tbW9kZS5jb21tYW5kJztcbmltcG9ydCB7IFNlbGVjdEFsbFJvd3NDb21tYW5kIH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9zZWxlY3QtYWxsL3NlbGVjdC1hbGwtcm93cy5jb21tYW5kJztcbmltcG9ydCB7IFVuc2VsZWN0QWxsUm93c0NvbW1hbmQgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL3Vuc2VsZWN0LWFsbC91bnNlbGVjdC1hbGwtcm93cy5jb21tYW5kJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbkRpc3BhdGNoZXI6IEZvcm1hdGlvbkRpc3BhdGNoZXIpIHtcblx0fVxuXG5cdHNldERlZmF1bHRGb3JtYXRpb24oc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHQvLyB0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyApXG5cdH1cblxuXHR0b2dnbGVTZWxlY3RlZFJvdyhzZWxlY3RlZFJvdzogc3RyaW5nLCB0eXBlOiBSb3dTZWxlY3RUb2dnbGVUeXBlLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuZm9ybWF0aW9uRGlzcGF0Y2hlci50b2dnbGVTZWxlY3RlZFJvdyhzdHJ1Y3R1cmVJZCwgc2VsZWN0ZWRSb3csIHR5cGUpO1xuXHR9XG5cblx0Y2hhbmdlTW9kZShtb2RlOiBSb3dTZWxlY3Rpb25Nb2RlLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFNlbGVjdGlvbk1vZGVDb21tYW5kKHN0cnVjdHVyZUlkLCBtb2RlKSk7XG5cdH1cblxuXHRzZXRTZWxlY3Rpb24oZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRFbmFibGVkU2VsZWN0aW9uQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZW5hYmxlZCkpO1xuXHR9XG5cblx0c2VsZWN0QWxsKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2VsZWN0QWxsUm93c0NvbW1hbmQoc3RydWN0dXJlSWQpKTtcblx0fVxuXG5cdHVuc2VsZWN0QWxsKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgVW5zZWxlY3RBbGxSb3dzQ29tbWFuZChzdHJ1Y3R1cmVJZCkpO1xuXHR9XG5cbn1cbiJdfQ==