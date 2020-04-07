/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { SourceSetLoadingCommand } from './loading/source-set-loading.command';
import { SetOriginCommand } from './origin/set-origin/set-origin.command';
import { StructureEditSourceItemCommand } from './origin/edit/structure.edit-source-item.command';
var SourceDispatcher = /** @class */ (function () {
    function SourceDispatcher(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    SourceDispatcher.prototype.setLoading = /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    function (structureId, enabled) {
        this.commandDispatcher.dispatch(new SourceSetLoadingCommand(structureId, enabled));
    };
    /**
     * @param {?} structureId
     * @param {?} items
     * @return {?}
     */
    SourceDispatcher.prototype.setOrigin = /**
     * @param {?} structureId
     * @param {?} items
     * @return {?}
     */
    function (structureId, items) {
        this.commandDispatcher.dispatch(new SetOriginCommand(structureId, items));
    };
    /**
     * @param {?} structureId
     * @param {?} params
     * @return {?}
     */
    SourceDispatcher.prototype.editItem = /**
     * @param {?} structureId
     * @param {?} params
     * @return {?}
     */
    function (structureId, params) {
        this.commandDispatcher.dispatch(new StructureEditSourceItemCommand(structureId, params));
    };
    SourceDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SourceDispatcher.ctorParameters = function () { return [
        { type: CommandDispatcher }
    ]; };
    return SourceDispatcher;
}());
export { SourceDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceDispatcher.prototype.commandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9zb3VyY2UuZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUd2RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUUxRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUdsRztJQUdDLDBCQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUN4RCxDQUFDOzs7Ozs7SUFFRCxxQ0FBVTs7Ozs7SUFBVixVQUFXLFdBQXdCLEVBQUUsT0FBZ0I7UUFDcEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7Ozs7OztJQUVELG9DQUFTOzs7OztJQUFULFVBQVUsV0FBd0IsRUFBRSxLQUFpQjtRQUNwRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksZ0JBQWdCLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7Ozs7O0lBRUQsbUNBQVE7Ozs7O0lBQVIsVUFBUyxXQUF3QixFQUFFLE1BQXFDO1FBQ3ZFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSw4QkFBOEIsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDOztnQkFoQkQsVUFBVTs7OztnQkFURixpQkFBaUI7O0lBMkIxQix1QkFBQztDQUFBLEFBbEJELElBa0JDO1NBakJZLGdCQUFnQjs7Ozs7O0lBRWhCLDZDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTb3VyY2VTZXRMb2FkaW5nQ29tbWFuZCB9IGZyb20gJy4vbG9hZGluZy9zb3VyY2Utc2V0LWxvYWRpbmcuY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRPcmlnaW5Db21tYW5kIH0gZnJvbSAnLi9vcmlnaW4vc2V0LW9yaWdpbi9zZXQtb3JpZ2luLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMgfSBmcm9tICcuL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5lZGl0LXNvdXJjZS1pdGVtLnBhcmFtcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbUNvbW1hbmQgfSBmcm9tICcuL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5lZGl0LXNvdXJjZS1pdGVtLmNvbW1hbmQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb3VyY2VEaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0c2V0TG9hZGluZyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsIGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTb3VyY2VTZXRMb2FkaW5nQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZW5hYmxlZCkpO1xuXHR9XG5cblx0c2V0T3JpZ2luKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCwgaXRlbXM6IEFycmF5PGFueT4pOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRPcmlnaW5Db21tYW5kKHN0cnVjdHVyZUlkLCBpdGVtcykpO1xuXHR9XG5cblx0ZWRpdEl0ZW0oc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLCBwYXJhbXM6IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1Db21tYW5kKHN0cnVjdHVyZUlkLCBwYXJhbXMpKTtcblx0fVxuXG59XG4iXX0=