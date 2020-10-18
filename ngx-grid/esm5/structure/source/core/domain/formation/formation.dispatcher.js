/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { ToggleSelectedRowCommand } from './toggle/toggle-selected-row.command';
var FormationDispatcher = /** @class */ (function () {
    function FormationDispatcher(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} structureId
     * @param {?} selectedRow
     * @param {?} type
     * @return {?}
     */
    FormationDispatcher.prototype.toggleSelectedRow = /**
     * @param {?} structureId
     * @param {?} selectedRow
     * @param {?} type
     * @return {?}
     */
    function (structureId, selectedRow, type) {
        this.commandDispatcher.dispatch(new ToggleSelectedRowCommand(structureId, selectedRow, type));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vZm9ybWF0aW9uL2Zvcm1hdGlvbi5kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3ZELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBR2hGO0lBR0MsNkJBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3hELENBQUM7Ozs7Ozs7SUFFRCwrQ0FBaUI7Ozs7OztJQUFqQixVQUFrQixXQUF3QixFQUFFLFdBQW1CLEVBQUUsSUFBeUI7UUFDekYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMvRixDQUFDOztnQkFSRCxVQUFVOzs7O2dCQU5GLGlCQUFpQjs7SUFnQjFCLDBCQUFDO0NBQUEsQUFWRCxJQVVDO1NBVFksbUJBQW1COzs7Ozs7SUFFbkIsZ0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgVG9nZ2xlU2VsZWN0ZWRSb3dDb21tYW5kIH0gZnJvbSAnLi90b2dnbGUvdG9nZ2xlLXNlbGVjdGVkLXJvdy5jb21tYW5kJztcbmltcG9ydCB7IFJvd1NlbGVjdFRvZ2dsZVR5cGUgfSBmcm9tICcuL2NvcmUvcm93LXNlbGVjdC10b2dnbGUtdHlwZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGb3JtYXRpb25EaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0dG9nZ2xlU2VsZWN0ZWRSb3coc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLCBzZWxlY3RlZFJvdzogc3RyaW5nLCB0eXBlOiBSb3dTZWxlY3RUb2dnbGVUeXBlKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgVG9nZ2xlU2VsZWN0ZWRSb3dDb21tYW5kKHN0cnVjdHVyZUlkLCBzZWxlY3RlZFJvdywgdHlwZSkpO1xuXHR9XG5cbn1cbiJdfQ==