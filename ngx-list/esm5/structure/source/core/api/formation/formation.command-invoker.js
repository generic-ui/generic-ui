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
var FormationCommandInvoker = /** @class */ (function () {
    function FormationCommandInvoker(commandDispatcher, formationDispatcher) {
        this.commandDispatcher = commandDispatcher;
        this.formationDispatcher = formationDispatcher;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    FormationCommandInvoker.prototype.setDefaultFormation = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        // this.commandDispatcher.dispatch(new )
    };
    /**
     * @param {?} selectedRow
     * @param {?} type
     * @param {?} structureId
     * @return {?}
     */
    FormationCommandInvoker.prototype.toggleSelectedRow = /**
     * @param {?} selectedRow
     * @param {?} type
     * @param {?} structureId
     * @return {?}
     */
    function (selectedRow, type, structureId) {
        this.formationDispatcher.toggleSelectedRow(structureId, selectedRow, type);
    };
    /**
     * @param {?} mode
     * @param {?} structureId
     * @return {?}
     */
    FormationCommandInvoker.prototype.changeMode = /**
     * @param {?} mode
     * @param {?} structureId
     * @return {?}
     */
    function (mode, structureId) {
        this.commandDispatcher.dispatch(new SetSelectionModeCommand(structureId, mode));
    };
    /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    FormationCommandInvoker.prototype.setSelection = /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        this.commandDispatcher.dispatch(new SetEnabledSelectionCommand(structureId, enabled));
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    FormationCommandInvoker.prototype.selectAll = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        this.commandDispatcher.dispatch(new SelectAllRowsCommand(structureId));
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    FormationCommandInvoker.prototype.unselectAll = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQWtCLE1BQU0sb0JBQW9CLENBQUM7QUFFdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFJbEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDOUcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDakcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDakcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFHdkc7SUFHQyxpQ0FBNkIsaUJBQW9DLEVBQzdDLG1CQUF3QztRQUQvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDNUQsQ0FBQzs7Ozs7SUFFRCxxREFBbUI7Ozs7SUFBbkIsVUFBb0IsV0FBd0I7UUFDM0Msd0NBQXdDO0lBQ3pDLENBQUM7Ozs7Ozs7SUFFRCxtREFBaUI7Ozs7OztJQUFqQixVQUFrQixXQUFtQixFQUFFLElBQXlCLEVBQUUsV0FBd0I7UUFDekYsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Ozs7O0lBRUQsNENBQVU7Ozs7O0lBQVYsVUFBVyxJQUFzQixFQUFFLFdBQXdCO1FBQzFELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDOzs7Ozs7SUFFRCw4Q0FBWTs7Ozs7SUFBWixVQUFhLE9BQWdCLEVBQUUsV0FBd0I7UUFDdEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLDBCQUEwQixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7Ozs7O0lBRUQsMkNBQVM7Ozs7SUFBVCxVQUFVLFdBQXdCO1FBQ2pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7O0lBRUQsNkNBQVc7Ozs7SUFBWCxVQUFZLFdBQXdCO1FBQ25DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7O2dCQTdCRCxVQUFVOzs7O2dCQVpGLGlCQUFpQjtnQkFFakIsbUJBQW1COztJQXlDNUIsOEJBQUM7Q0FBQSxBQS9CRCxJQStCQztTQTlCWSx1QkFBdUI7Ozs7OztJQUV2QixvREFBcUQ7Ozs7O0lBQzlELHNEQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIsIENvbW1hbmRJbnZva2VyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRm9ybWF0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vZm9ybWF0aW9uLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uTW9kZSB9IGZyb20gJy4uL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgUm93U2VsZWN0VG9nZ2xlVHlwZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vY29yZS9yb3ctc2VsZWN0LXRvZ2dsZS10eXBlJztcbmltcG9ydCB7IFNldEVuYWJsZWRTZWxlY3Rpb25Db21tYW5kIH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9zZXQtZW5hYmxlZC9zZXQtZW5hYmxlZC1zZWxlY3Rpb24uY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRTZWxlY3Rpb25Nb2RlQ29tbWFuZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vbW9kZS9zZXQtc2VsZWN0aW9uLW1vZGUuY29tbWFuZCc7XG5pbXBvcnQgeyBTZWxlY3RBbGxSb3dzQ29tbWFuZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vc2VsZWN0LWFsbC9zZWxlY3QtYWxsLXJvd3MuY29tbWFuZCc7XG5pbXBvcnQgeyBVbnNlbGVjdEFsbFJvd3NDb21tYW5kIH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi91bnNlbGVjdC1hbGwvdW5zZWxlY3QtYWxsLXJvd3MuY29tbWFuZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIGltcGxlbWVudHMgQ29tbWFuZEludm9rZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbkRpc3BhdGNoZXI6IEZvcm1hdGlvbkRpc3BhdGNoZXIpIHtcblx0fVxuXG5cdHNldERlZmF1bHRGb3JtYXRpb24oc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0Ly8gdGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgKVxuXHR9XG5cblx0dG9nZ2xlU2VsZWN0ZWRSb3coc2VsZWN0ZWRSb3c6IHN0cmluZywgdHlwZTogUm93U2VsZWN0VG9nZ2xlVHlwZSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5mb3JtYXRpb25EaXNwYXRjaGVyLnRvZ2dsZVNlbGVjdGVkUm93KHN0cnVjdHVyZUlkLCBzZWxlY3RlZFJvdywgdHlwZSk7XG5cdH1cblxuXHRjaGFuZ2VNb2RlKG1vZGU6IFJvd1NlbGVjdGlvbk1vZGUsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFNlbGVjdGlvbk1vZGVDb21tYW5kKHN0cnVjdHVyZUlkLCBtb2RlKSk7XG5cdH1cblxuXHRzZXRTZWxlY3Rpb24oZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0RW5hYmxlZFNlbGVjdGlvbkNvbW1hbmQoc3RydWN0dXJlSWQsIGVuYWJsZWQpKTtcblx0fVxuXG5cdHNlbGVjdEFsbChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZWxlY3RBbGxSb3dzQ29tbWFuZChzdHJ1Y3R1cmVJZCkpO1xuXHR9XG5cblx0dW5zZWxlY3RBbGwoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgVW5zZWxlY3RBbGxSb3dzQ29tbWFuZChzdHJ1Y3R1cmVJZCkpO1xuXHR9XG5cbn1cbiJdfQ==