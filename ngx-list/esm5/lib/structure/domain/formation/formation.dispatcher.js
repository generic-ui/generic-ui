/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { SetFormationCommand } from './set/set-formation.command';
import { ToggleSelectedRowCommand } from './toggle/toggle-selected-row.command';
var FormationDispatcher = /** @class */ (function () {
    function FormationDispatcher(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    FormationDispatcher.prototype.setDefault = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        this.commandDispatcher.dispatch(new SetFormationCommand(structureId));
    };
    /**
     * @param {?} structureId
     * @param {?} selectedRow
     * @return {?}
     */
    FormationDispatcher.prototype.toggleSelectedRow = /**
     * @param {?} structureId
     * @param {?} selectedRow
     * @return {?}
     */
    function (structureId, selectedRow) {
        this.commandDispatcher.dispatch(new ToggleSelectedRowCommand(structureId, selectedRow));
    };
    FormationDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FormationDispatcher.ctorParameters = function () { return [
        { type: CommandDispatcher }
    ]; };
    return FormationDispatcher;
}());
export { FormationDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationDispatcher.prototype.commandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2Zvcm1hdGlvbi9mb3JtYXRpb24uZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVoRjtJQUdDLDZCQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUN4RCxDQUFDOzs7OztJQUVELHdDQUFVOzs7O0lBQVYsVUFBVyxXQUF3QjtRQUNsQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7Ozs7SUFFRCwrQ0FBaUI7Ozs7O0lBQWpCLFVBQWtCLFdBQXdCLEVBQUUsV0FBbUI7UUFDOUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7O2dCQVpELFVBQVU7Ozs7Z0JBTEYsaUJBQWlCOztJQW1CMUIsMEJBQUM7Q0FBQSxBQWRELElBY0M7U0FiWSxtQkFBbUI7Ozs7OztJQUVuQixnREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2V0Rm9ybWF0aW9uQ29tbWFuZCB9IGZyb20gJy4vc2V0L3NldC1mb3JtYXRpb24uY29tbWFuZCc7XG5pbXBvcnQgeyBUb2dnbGVTZWxlY3RlZFJvd0NvbW1hbmQgfSBmcm9tICcuL3RvZ2dsZS90b2dnbGUtc2VsZWN0ZWQtcm93LmNvbW1hbmQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIpIHtcblx0fVxuXG5cdHNldERlZmF1bHQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0Rm9ybWF0aW9uQ29tbWFuZChzdHJ1Y3R1cmVJZCkpO1xuXHR9XG5cblx0dG9nZ2xlU2VsZWN0ZWRSb3coc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLCBzZWxlY3RlZFJvdzogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgVG9nZ2xlU2VsZWN0ZWRSb3dDb21tYW5kKHN0cnVjdHVyZUlkLCBzZWxlY3RlZFJvdykpO1xuXHR9XG5cbn1cbiJdfQ==