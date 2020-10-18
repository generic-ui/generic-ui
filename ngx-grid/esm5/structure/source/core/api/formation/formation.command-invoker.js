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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQWtCLE1BQU0sb0JBQW9CLENBQUM7QUFFdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFbEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFHN0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDOUcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDakcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDakcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFHdkc7SUFHQyxpQ0FBNkIsaUJBQW9DLEVBQzdDLG1CQUF3QztRQUQvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDNUQsQ0FBQzs7Ozs7SUFFRCxxREFBbUI7Ozs7SUFBbkIsVUFBb0IsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDL0Qsd0NBQXdDO0lBQ3pDLENBQUM7Ozs7Ozs7SUFFRCxtREFBaUI7Ozs7OztJQUFqQixVQUFrQixXQUFtQixFQUFFLElBQXlCLEVBQUUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDN0csSUFBSSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Ozs7O0lBRUQsNENBQVU7Ozs7O0lBQVYsVUFBVyxJQUFzQixFQUFFLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQzlFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDOzs7Ozs7SUFFRCw4Q0FBWTs7Ozs7SUFBWixVQUFhLE9BQWdCLEVBQUUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDMUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLDBCQUEwQixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7Ozs7O0lBRUQsMkNBQVM7Ozs7SUFBVCxVQUFVLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ3JELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7O0lBRUQsNkNBQVc7Ozs7SUFBWCxVQUFZLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ3ZELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7O2dCQTdCRCxVQUFVOzs7O2dCQWJGLGlCQUFpQjtnQkFFakIsbUJBQW1COztJQTBDNUIsOEJBQUM7Q0FBQSxBQS9CRCxJQStCQztTQTlCWSx1QkFBdUI7Ozs7OztJQUV2QixvREFBcUQ7Ozs7O0lBQzlELHNEQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIsIENvbW1hbmRJbnZva2VyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRm9ybWF0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vZm9ybWF0aW9uLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgc3RydWN0dXJlR2xvYmFsSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvbk1vZGUgfSBmcm9tICcuLi9yb3ctc2VsZWN0aW9uJztcbmltcG9ydCB7IFJvd1NlbGVjdFRvZ2dsZVR5cGUgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL2NvcmUvcm93LXNlbGVjdC10b2dnbGUtdHlwZSc7XG5pbXBvcnQgeyBTZXRFbmFibGVkU2VsZWN0aW9uQ29tbWFuZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vc2V0LWVuYWJsZWQvc2V0LWVuYWJsZWQtc2VsZWN0aW9uLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2V0U2VsZWN0aW9uTW9kZUNvbW1hbmQgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL21vZGUvc2V0LXNlbGVjdGlvbi1tb2RlLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2VsZWN0QWxsUm93c0NvbW1hbmQgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL3NlbGVjdC1hbGwvc2VsZWN0LWFsbC1yb3dzLmNvbW1hbmQnO1xuaW1wb3J0IHsgVW5zZWxlY3RBbGxSb3dzQ29tbWFuZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vdW5zZWxlY3QtYWxsL3Vuc2VsZWN0LWFsbC1yb3dzLmNvbW1hbmQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGb3JtYXRpb25Db21tYW5kSW52b2tlciBpbXBsZW1lbnRzIENvbW1hbmRJbnZva2VyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25EaXNwYXRjaGVyOiBGb3JtYXRpb25EaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRzZXREZWZhdWx0Rm9ybWF0aW9uKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0Ly8gdGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgKVxuXHR9XG5cblx0dG9nZ2xlU2VsZWN0ZWRSb3coc2VsZWN0ZWRSb3c6IHN0cmluZywgdHlwZTogUm93U2VsZWN0VG9nZ2xlVHlwZSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmZvcm1hdGlvbkRpc3BhdGNoZXIudG9nZ2xlU2VsZWN0ZWRSb3coc3RydWN0dXJlSWQsIHNlbGVjdGVkUm93LCB0eXBlKTtcblx0fVxuXG5cdGNoYW5nZU1vZGUobW9kZTogUm93U2VsZWN0aW9uTW9kZSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRTZWxlY3Rpb25Nb2RlQ29tbWFuZChzdHJ1Y3R1cmVJZCwgbW9kZSkpO1xuXHR9XG5cblx0c2V0U2VsZWN0aW9uKGVuYWJsZWQ6IGJvb2xlYW4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0RW5hYmxlZFNlbGVjdGlvbkNvbW1hbmQoc3RydWN0dXJlSWQsIGVuYWJsZWQpKTtcblx0fVxuXG5cdHNlbGVjdEFsbChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNlbGVjdEFsbFJvd3NDb21tYW5kKHN0cnVjdHVyZUlkKSk7XG5cdH1cblxuXHR1bnNlbGVjdEFsbChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFVuc2VsZWN0QWxsUm93c0NvbW1hbmQoc3RydWN0dXJlSWQpKTtcblx0fVxuXG59XG4iXX0=