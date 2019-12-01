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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2Zvcm1hdGlvbi9jb21tYW5kL2Zvcm1hdGlvbi5kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhGO0lBR0MsNkJBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3hELENBQUM7Ozs7O0lBRUQsd0NBQVU7Ozs7SUFBVixVQUFXLFdBQXdCO1FBQ2xDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7OztJQUVELCtDQUFpQjs7Ozs7SUFBakIsVUFBa0IsV0FBd0IsRUFBRSxXQUFtQjtRQUM5RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksd0JBQXdCLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQzs7Z0JBWkQsVUFBVTs7OztnQkFMRixpQkFBaUI7O0lBbUIxQiwwQkFBQztDQUFBLEFBZEQsSUFjQztTQWJZLG1CQUFtQjs7Ozs7O0lBRW5CLGdEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBTZXRGb3JtYXRpb25Db21tYW5kIH0gZnJvbSAnLi9zZXQvc2V0LWZvcm1hdGlvbi5jb21tYW5kJztcbmltcG9ydCB7IFRvZ2dsZVNlbGVjdGVkUm93Q29tbWFuZCB9IGZyb20gJy4vdG9nZ2xlL3RvZ2dsZS1zZWxlY3RlZC1yb3cuY29tbWFuZCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGb3JtYXRpb25EaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0c2V0RGVmYXVsdChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRGb3JtYXRpb25Db21tYW5kKHN0cnVjdHVyZUlkKSk7XG5cdH1cblxuXHR0b2dnbGVTZWxlY3RlZFJvdyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsIHNlbGVjdGVkUm93OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBUb2dnbGVTZWxlY3RlZFJvd0NvbW1hbmQoc3RydWN0dXJlSWQsIHNlbGVjdGVkUm93KSk7XG5cdH1cblxufVxuIl19