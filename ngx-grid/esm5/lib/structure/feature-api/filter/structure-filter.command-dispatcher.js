/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureSetConfigFilterCommand } from '../../domain/structure/filter/config/structure.set-config-filter.command';
import { StructureToggleFilterCommand } from '../../domain/structure/filter/toggle/structure.toggle-filter.command';
var StructureFilterCommandDispatcher = /** @class */ (function () {
    function StructureFilterCommandDispatcher(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} config
     * @param {?} structureId
     * @return {?}
     */
    StructureFilterCommandDispatcher.prototype.setFilteringEnabled = /**
     * @param {?} config
     * @param {?} structureId
     * @return {?}
     */
    function (config, structureId) {
        this.commandDispatcher.dispatch(new StructureSetConfigFilterCommand(structureId, config));
    };
    /**
     * @param {?} fieldId
     * @param {?} externalFieldId
     * @param {?} filterValue
     * @param {?} structureId
     * @return {?}
     */
    StructureFilterCommandDispatcher.prototype.addFilter = /**
     * @param {?} fieldId
     * @param {?} externalFieldId
     * @param {?} filterValue
     * @param {?} structureId
     * @return {?}
     */
    function (fieldId, externalFieldId, filterValue, structureId) {
        this.commandDispatcher.dispatch(new StructureToggleFilterCommand(structureId, fieldId, externalFieldId, filterValue));
    };
    StructureFilterCommandDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureFilterCommandDispatcher.ctorParameters = function () { return [
        { type: CommandDispatcher }
    ]; };
    return StructureFilterCommandDispatcher;
}());
export { StructureFilterCommandDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFilterCommandDispatcher.prototype.commandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWZpbHRlci5jb21tYW5kLWRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS1hcGkvZmlsdGVyL3N0cnVjdHVyZS1maWx0ZXIuY29tbWFuZC1kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSXZELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDBFQUEwRSxDQUFDO0FBRTNILE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBR3BIO0lBR0MsMENBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3hELENBQUM7Ozs7OztJQUVELDhEQUFtQjs7Ozs7SUFBbkIsVUFBb0IsTUFBb0IsRUFBRSxXQUF3QjtRQUNqRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksK0JBQStCLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDM0YsQ0FBQzs7Ozs7Ozs7SUFFRCxvREFBUzs7Ozs7OztJQUFULFVBQVUsT0FBZ0IsRUFBRSxlQUF1QixFQUFFLFdBQW1CLEVBQUUsV0FBd0I7UUFDakcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLDRCQUE0QixDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDdkgsQ0FBQzs7Z0JBWkQsVUFBVTs7OztnQkFURixpQkFBaUI7O0lBdUIxQix1Q0FBQztDQUFBLEFBZEQsSUFjQztTQWJZLGdDQUFnQzs7Ozs7O0lBRWhDLDZEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWx0ZXJDb25maWcgfSBmcm9tICcuL2ZpbHRlci1jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVNldENvbmZpZ0ZpbHRlckNvbW1hbmQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2ZpbHRlci9jb25maWcvc3RydWN0dXJlLnNldC1jb25maWctZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvZmllbGQvZGF0YS10eXBlL2ZpZWxkLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVRvZ2dsZUZpbHRlckNvbW1hbmQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2ZpbHRlci90b2dnbGUvc3RydWN0dXJlLnRvZ2dsZS1maWx0ZXIuY29tbWFuZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUZpbHRlckNvbW1hbmREaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0c2V0RmlsdGVyaW5nRW5hYmxlZChjb25maWc6IEZpbHRlckNvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU3RydWN0dXJlU2V0Q29uZmlnRmlsdGVyQ29tbWFuZChzdHJ1Y3R1cmVJZCwgY29uZmlnKSk7XG5cdH1cblxuXHRhZGRGaWx0ZXIoZmllbGRJZDogRmllbGRJZCwgZXh0ZXJuYWxGaWVsZElkOiBzdHJpbmcsIGZpbHRlclZhbHVlOiBzdHJpbmcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFN0cnVjdHVyZVRvZ2dsZUZpbHRlckNvbW1hbmQoc3RydWN0dXJlSWQsIGZpZWxkSWQsIGV4dGVybmFsRmllbGRJZCwgZmlsdGVyVmFsdWUpKTtcblx0fVxuXG59XG4iXX0=