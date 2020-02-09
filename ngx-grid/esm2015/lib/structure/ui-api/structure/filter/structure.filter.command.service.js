/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureSetConfigFilterCommand } from '../../../domain/structure/command/filter/config/structure.set-config-filter.command';
import { StructureToggleFilterCommand } from '../../../domain/structure/command/filter/toggle/structure.toggle-filter.command';
export class StructureFilterCommandService {
    /**
     * @param {?} commandDispatcher
     */
    constructor(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} config
     * @param {?} structureId
     * @return {?}
     */
    setFilteringEnabled(config, structureId) {
        this.commandDispatcher.dispatch(new StructureSetConfigFilterCommand(structureId, config));
    }
    /**
     * @param {?} fieldId
     * @param {?} externalFieldId
     * @param {?} filterValue
     * @param {?} structureId
     * @return {?}
     */
    addFilter(fieldId, externalFieldId, filterValue, structureId) {
        this.commandDispatcher.dispatch(new StructureToggleFilterCommand(structureId, fieldId, externalFieldId, filterValue));
    }
}
StructureFilterCommandService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureFilterCommandService.ctorParameters = () => [
    { type: CommandDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFilterCommandService.prototype.commandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpbHRlci5jb21tYW5kLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWktYXBpL3N0cnVjdHVyZS9maWx0ZXIvc3RydWN0dXJlLmZpbHRlci5jb21tYW5kLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJdkQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0scUZBQXFGLENBQUM7QUFFdEksT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFJL0gsTUFBTSxPQUFPLDZCQUE2Qjs7OztJQUV6QyxZQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUN4RCxDQUFDOzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxNQUFvQixFQUFFLFdBQXdCO1FBQ2pFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSwrQkFBK0IsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMzRixDQUFDOzs7Ozs7OztJQUVELFNBQVMsQ0FBQyxPQUFnQixFQUFFLGVBQXVCLEVBQUUsV0FBbUIsRUFBRSxXQUF3QjtRQUNqRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksNEJBQTRCLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUN2SCxDQUFDOzs7WUFaRCxVQUFVOzs7O1lBVEYsaUJBQWlCOzs7Ozs7O0lBWWIsMERBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZpbHRlckNvbmZpZyB9IGZyb20gJy4vZmlsdGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0Q29uZmlnRmlsdGVyQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWx0ZXIvY29uZmlnL3N0cnVjdHVyZS5zZXQtY29uZmlnLWZpbHRlci5jb21tYW5kJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2ZpZWxkLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVRvZ2dsZUZpbHRlckNvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmlsdGVyL3RvZ2dsZS9zdHJ1Y3R1cmUudG9nZ2xlLWZpbHRlci5jb21tYW5kJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRzZXRGaWx0ZXJpbmdFbmFibGVkKGNvbmZpZzogRmlsdGVyQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTdHJ1Y3R1cmVTZXRDb25maWdGaWx0ZXJDb21tYW5kKHN0cnVjdHVyZUlkLCBjb25maWcpKTtcblx0fVxuXG5cdGFkZEZpbHRlcihmaWVsZElkOiBGaWVsZElkLCBleHRlcm5hbEZpZWxkSWQ6IHN0cmluZywgZmlsdGVyVmFsdWU6IHN0cmluZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU3RydWN0dXJlVG9nZ2xlRmlsdGVyQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZmllbGRJZCwgZXh0ZXJuYWxGaWVsZElkLCBmaWx0ZXJWYWx1ZSkpO1xuXHR9XG5cbn1cbiJdfQ==